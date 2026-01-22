<?php
/**
 * Endpoint: POST /api/login.php
 * Autenticação de administradores
 *
 * Body JSON:
 * {
 *   "username": "admin",
 *   "password": "senha"
 * }
 *
 * Retorna JWT token se credenciais válidas
 */

require_once 'cors.php';
require_once 'config.php';

// Rate limiting simples (prevenir brute force)
session_start();
$maxAttempts = 5;
$lockoutTime = 900; // 15 minutos

if (!isset($_SESSION['login_attempts'])) {
    $_SESSION['login_attempts'] = 0;
    $_SESSION['last_attempt'] = time();
}

// Resetar contador após lockout time
if (time() - $_SESSION['last_attempt'] > $lockoutTime) {
    $_SESSION['login_attempts'] = 0;
}

// Verificar se está bloqueado
if ($_SESSION['login_attempts'] >= $maxAttempts) {
    $remainingTime = $lockoutTime - (time() - $_SESSION['last_attempt']);
    jsonResponse([
        'success' => false,
        'error' => "Muitas tentativas falhas. Tente novamente em " . ceil($remainingTime / 60) . " minutos."
    ], 429);
}

try {
    // Validar método
    if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
        jsonResponse(['success' => false, 'error' => 'Método não permitido'], 405);
    }

    // Ler corpo JSON
    $input = json_decode(file_get_contents('php://input'), true);

    if (!$input || !isset($input['username']) || !isset($input['password'])) {
        jsonResponse(['success' => false, 'error' => 'Usuário e senha são obrigatórios'], 400);
    }

    $username = sanitizeInput($input['username']);
    $password = $input['password']; // Não sanitizar senha (pode ter caracteres especiais)

    // Buscar usuário no banco
    $stmt = $pdo->prepare("
        SELECT id, username, password_hash, email, active
        FROM admin_users
        WHERE username = :username
        LIMIT 1
    ");
    $stmt->execute([':username' => $username]);
    $user = $stmt->fetch();

    // Verificar se usuário existe e senha está correta
    if (!$user || !password_verify($password, $user['password_hash'])) {
        $_SESSION['login_attempts']++;
        $_SESSION['last_attempt'] = time();

        error_log("Login failed for username: $username from IP: " . $_SERVER['REMOTE_ADDR']);

        jsonResponse([
            'success' => false,
            'error' => 'Credenciais inválidas'
        ], 401);
    }

    // Verificar se usuário está ativo
    if (!$user['active']) {
        jsonResponse([
            'success' => false,
            'error' => 'Usuário inativo'
        ], 403);
    }

    // Resetar tentativas de login
    $_SESSION['login_attempts'] = 0;

    // Atualizar last_login
    $updateStmt = $pdo->prepare("UPDATE admin_users SET last_login = NOW() WHERE id = :id");
    $updateStmt->execute([':id' => $user['id']]);

    // Gerar JWT token (simplificado)
    $header = json_encode(['typ' => 'JWT', 'alg' => 'HS256']);
    $payload = json_encode([
        'user_id' => $user['id'],
        'username' => $user['username'],
        'exp' => time() + SESSION_LIFETIME // 24 horas
    ]);

    $base64UrlHeader = str_replace(['+', '/', '='], ['-', '_', ''], base64_encode($header));
    $base64UrlPayload = str_replace(['+', '/', '='], ['-', '_', ''], base64_encode($payload));

    $signature = hash_hmac('sha256', $base64UrlHeader . "." . $base64UrlPayload, JWT_SECRET, true);
    $base64UrlSignature = str_replace(['+', '/', '='], ['-', '_', ''], base64_encode($signature));

    $jwt = $base64UrlHeader . "." . $base64UrlPayload . "." . $base64UrlSignature;

    // Log de sucesso
    error_log("Login successful for user: {$user['username']} from IP: " . $_SERVER['REMOTE_ADDR']);

    // Resposta
    jsonResponse([
        'success' => true,
        'data' => [
            'token' => $jwt,
            'user' => [
                'id' => $user['id'],
                'username' => $user['username'],
                'email' => $user['email']
            ],
            'expires_in' => SESSION_LIFETIME
        ]
    ]);

} catch (Exception $e) {
    error_log('login.php error: ' . $e->getMessage());
    jsonResponse([
        'success' => false,
        'error' => 'Erro interno no servidor'
    ], 500);
}
