<?php
/**
 * Configuração CORS para API - Memorial CIPASO
 *
 * IMPORTANTE: Em produção, substitua '*' pelo domínio específico
 */

// Permitir requisições do frontend local (desenvolvimento)
$allowedOrigins = [
    'http://localhost:5173', // Vite dev server
    'http://localhost:3000',
    'https://memorial.cipaso.org.br' // Domínio de produção (ajustar)
];

$origin = $_SERVER['HTTP_ORIGIN'] ?? '';

if (in_array($origin, $allowedOrigins)) {
    header("Access-Control-Allow-Origin: $origin");
} else {
    // Em desenvolvimento, permitir qualquer origem (REMOVER EM PRODUÇÃO)
    header("Access-Control-Allow-Origin: *");
}

header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With');
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Max-Age: 86400'); // 24 horas

// Responder a requisições OPTIONS (preflight)
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}
