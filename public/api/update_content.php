<?php
/**
 * Endpoint: POST /api/update_content.php
 * CRUD protegido para posts, quotes e archive_files
 *
 * Requer autenticação: Header Authorization: Bearer <token>
 *
 * Body JSON:
 * {
 *   "action": "create|update|delete",
 *   "table": "posts|daily_quotes|archive_files",
 *   "data": {...}
 * }
 */

require_once 'cors.php';
require_once 'config.php';

try {
    // Validar autenticação
    $userId = requireAuth();

    // Validar método
    if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
        jsonResponse(['success' => false, 'error' => 'Método não permitido'], 405);
    }

    // Ler corpo JSON
    $input = json_decode(file_get_contents('php://input'), true);

    if (!$input || !isset($input['action']) || !isset($input['table'])) {
        jsonResponse(['success' => false, 'error' => 'Parâmetros inválidos'], 400);
    }

    $action = sanitizeInput($input['action']);
    $table = sanitizeInput($input['table']);
    $data = $input['data'] ?? [];

    // Validar tabela
    $allowedTables = ['posts', 'daily_quotes', 'archive_files'];
    if (!in_array($table, $allowedTables)) {
        jsonResponse(['success' => false, 'error' => 'Tabela inválida'], 400);
    }

    // Processar ação
    switch ($action) {
        case 'create':
            $result = createRecord($pdo, $table, $data, $userId);
            break;

        case 'update':
            $result = updateRecord($pdo, $table, $data, $userId);
            break;

        case 'delete':
            $result = deleteRecord($pdo, $table, $data, $userId);
            break;

        default:
            jsonResponse(['success' => false, 'error' => 'Ação inválida'], 400);
    }

    // Log de auditoria
    logAudit($pdo, $userId, strtoupper($action), $table, $result['id'] ?? null);

    jsonResponse([
        'success' => true,
        'data' => $result
    ]);

} catch (Exception $e) {
    error_log('update_content.php error: ' . $e->getMessage());
    jsonResponse([
        'success' => false,
        'error' => 'Erro ao processar operação'
    ], 500);
}

/**
 * CREATE
 */
function createRecord($pdo, $table, $data, $userId) {
    $data = array_map('sanitizeInput', $data);

    switch ($table) {
        case 'posts':
            $stmt = $pdo->prepare("
                INSERT INTO posts (title, slug, content_html, excerpt, type, status, author_id)
                VALUES (:title, :slug, :content_html, :excerpt, :type, :status, :author_id)
            ");
            $stmt->execute([
                ':title' => $data['title'],
                ':slug' => $data['slug'],
                ':content_html' => $data['content_html'],
                ':excerpt' => $data['excerpt'] ?? null,
                ':type' => $data['type'] ?? 'blog',
                ':status' => $data['status'] ?? 'published',
                ':author_id' => $userId
            ]);
            break;

        case 'daily_quotes':
            $stmt = $pdo->prepare("
                INSERT INTO daily_quotes (content, author, active)
                VALUES (:content, :author, :active)
            ");
            $stmt->execute([
                ':content' => $data['content'],
                ':author' => $data['author'],
                ':active' => $data['active'] ?? 1
            ]);
            break;

        case 'archive_files':
            $stmt = $pdo->prepare("
                INSERT INTO archive_files (title, description, file_path, file_size, category, file_type, publication_date, featured, tags, uploaded_by)
                VALUES (:title, :description, :file_path, :file_size, :category, :file_type, :publication_date, :featured, :tags, :uploaded_by)
            ");
            $stmt->execute([
                ':title' => $data['title'],
                ':description' => $data['description'] ?? null,
                ':file_path' => $data['file_path'],
                ':file_size' => $data['file_size'] ?? null,
                ':category' => $data['category'],
                ':file_type' => $data['file_type'],
                ':publication_date' => $data['publication_date'] ?? null,
                ':featured' => $data['featured'] ?? 0,
                ':tags' => $data['tags'] ?? null,
                ':uploaded_by' => $userId
            ]);
            break;
    }

    return ['id' => $pdo->lastInsertId()];
}

/**
 * UPDATE
 */
function updateRecord($pdo, $table, $data, $userId) {
    if (!isset($data['id'])) {
        throw new Exception('ID é obrigatório para atualização');
    }

    $id = (int)$data['id'];
    unset($data['id']);
    $data = array_map('sanitizeInput', $data);

    switch ($table) {
        case 'posts':
            $fields = ['title', 'slug', 'content_html', 'excerpt', 'type', 'status'];
            break;
        case 'daily_quotes':
            $fields = ['content', 'author', 'active'];
            break;
        case 'archive_files':
            $fields = ['title', 'description', 'file_path', 'category', 'file_type', 'publication_date', 'featured', 'tags'];
            break;
    }

    $setParts = [];
    $params = [':id' => $id];

    foreach ($fields as $field) {
        if (isset($data[$field])) {
            $setParts[] = "$field = :$field";
            $params[":$field"] = $data[$field];
        }
    }

    if (empty($setParts)) {
        throw new Exception('Nenhum campo para atualizar');
    }

    $sql = "UPDATE $table SET " . implode(', ', $setParts) . " WHERE id = :id";
    $stmt = $pdo->prepare($sql);
    $stmt->execute($params);

    return ['id' => $id, 'updated' => $stmt->rowCount()];
}

/**
 * DELETE
 */
function deleteRecord($pdo, $table, $data, $userId) {
    if (!isset($data['id'])) {
        throw new Exception('ID é obrigatório para exclusão');
    }

    $id = (int)$data['id'];

    $stmt = $pdo->prepare("DELETE FROM $table WHERE id = :id");
    $stmt->execute([':id' => $id]);

    return ['id' => $id, 'deleted' => $stmt->rowCount()];
}

/**
 * LOG DE AUDITORIA
 */
function logAudit($pdo, $userId, $action, $table, $recordId) {
    try {
        $stmt = $pdo->prepare("
            INSERT INTO audit_log (user_id, action, table_name, record_id, ip_address)
            VALUES (:user_id, :action, :table_name, :record_id, :ip_address)
        ");
        $stmt->execute([
            ':user_id' => $userId,
            ':action' => $action,
            ':table_name' => $table,
            ':record_id' => $recordId,
            ':ip_address' => $_SERVER['REMOTE_ADDR'] ?? 'unknown'
        ]);
    } catch (Exception $e) {
        // Log falhou, mas não bloqueia operação principal
        error_log('Audit log failed: ' . $e->getMessage());
    }
}
