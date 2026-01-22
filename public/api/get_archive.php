<?php
/**
 * Endpoint: GET /api/get_archive.php
 * Retorna arquivos do acervo com filtros opcionais
 *
 * Query Parameters:
 * - category: string (documentos|imagens|audios|videos|hemeroteca|publicacoes)
 * - search: string (busca em título/descrição/tags)
 * - limit: int (padrão: 20, máx: 100)
 * - offset: int (para paginação, padrão: 0)
 * - featured: bool (apenas arquivos em destaque)
 */

require_once 'cors.php';
require_once 'config.php';

try {
    // Capturar parâmetros de query
    $category = $_GET['category'] ?? null;
    $search = $_GET['search'] ?? null;
    $limit = min((int)($_GET['limit'] ?? 20), 100); // máximo 100
    $offset = max((int)($_GET['offset'] ?? 0), 0);
    $featured = isset($_GET['featured']) ? (bool)$_GET['featured'] : null;

    // Construir query SQL
    $sql = "SELECT
                id,
                title,
                description,
                file_path,
                file_size,
                category,
                file_type,
                publication_date,
                featured,
                tags,
                views
            FROM archive_files
            WHERE 1=1";

    $params = [];

    // Filtro por categoria
    if ($category) {
        $validCategories = ['documentos', 'imagens', 'audios', 'videos', 'hemeroteca', 'publicacoes'];
        if (in_array($category, $validCategories)) {
            $sql .= " AND category = :category";
            $params[':category'] = $category;
        }
    }

    // Filtro de busca (FULLTEXT ou LIKE)
    if ($search) {
        $searchTerm = sanitizeInput($search);
        // Usar FULLTEXT se disponível, senão LIKE
        $sql .= " AND (MATCH(title, description, tags) AGAINST(:search IN NATURAL LANGUAGE MODE)
                  OR title LIKE :searchLike
                  OR description LIKE :searchLike)";
        $params[':search'] = $searchTerm;
        $params[':searchLike'] = '%' . $searchTerm . '%';
    }

    // Filtro de featured
    if ($featured !== null) {
        $sql .= " AND featured = :featured";
        $params[':featured'] = $featured ? 1 : 0;
    }

    // Ordenação e paginação
    $sql .= " ORDER BY publication_date DESC, id DESC LIMIT :limit OFFSET :offset";

    // Executar query
    $stmt = $pdo->prepare($sql);

    // Bind de parâmetros
    foreach ($params as $key => $value) {
        $stmt->bindValue($key, $value);
    }
    $stmt->bindValue(':limit', $limit, PDO::PARAM_INT);
    $stmt->bindValue(':offset', $offset, PDO::PARAM_INT);

    $stmt->execute();
    $files = $stmt->fetchAll();

    // Contar total (para paginação)
    $countSql = "SELECT COUNT(*) as total FROM archive_files WHERE 1=1";
    if ($category) {
        $countSql .= " AND category = :category";
    }
    if ($search) {
        $countSql .= " AND (MATCH(title, description, tags) AGAINST(:search IN NATURAL LANGUAGE MODE)
                       OR title LIKE :searchLike
                       OR description LIKE :searchLike)";
    }
    if ($featured !== null) {
        $countSql .= " AND featured = :featured";
    }

    $countStmt = $pdo->prepare($countSql);
    foreach ($params as $key => $value) {
        if ($key !== ':limit' && $key !== ':offset') {
            $countStmt->bindValue($key, $value);
        }
    }
    $countStmt->execute();
    $total = $countStmt->fetch()['total'];

    // Resposta JSON
    jsonResponse([
        'success' => true,
        'data' => $files,
        'pagination' => [
            'total' => (int)$total,
            'limit' => $limit,
            'offset' => $offset,
            'hasMore' => ($offset + $limit) < $total
        ]
    ]);

} catch (Exception $e) {
    error_log('get_archive.php error: ' . $e->getMessage());
    jsonResponse([
        'success' => false,
        'error' => 'Erro ao buscar arquivos do acervo'
    ], 500);
}
