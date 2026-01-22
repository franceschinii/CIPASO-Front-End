<?php
/**
 * Endpoint: GET /api/get_daily_content.php
 * Retorna conteúdo dinâmico para a home:
 * - Citação do dia (aleatória)
 * - Arquivo em destaque (aleatório)
 *
 * Cache: 24 horas (renovado à meia-noite)
 */

require_once 'cors.php';
require_once 'config.php';

try {
    // Buscar citação aleatória ativa
    $quoteStmt = $pdo->prepare("
        SELECT id, content, author
        FROM daily_quotes
        WHERE active = 1
        ORDER BY RAND()
        LIMIT 1
    ");
    $quoteStmt->execute();
    $quote = $quoteStmt->fetch();

    if (!$quote) {
        $quote = [
            'id' => null,
            'content' => 'O verdadeiro conhecimento vem da investigação honesta e do questionamento constante.',
            'author' => 'Memorial CIPASO'
        ];
    }

    // Buscar arquivo em destaque aleatório (ou forçar featured = 1)
    $fileStmt = $pdo->prepare("
        SELECT
            id,
            title,
            description,
            file_path,
            category,
            file_type,
            publication_date,
            tags
        FROM archive_files
        WHERE featured = 1
        ORDER BY RAND()
        LIMIT 1
    ");
    $fileStmt->execute();
    $featuredFile = $fileStmt->fetch();

    // Se não houver arquivo featured, pegar qualquer um
    if (!$featuredFile) {
        $fileStmt = $pdo->prepare("
            SELECT
                id,
                title,
                description,
                file_path,
                category,
                file_type,
                publication_date,
                tags
            FROM archive_files
            ORDER BY RAND()
            LIMIT 1
        ");
        $fileStmt->execute();
        $featuredFile = $fileStmt->fetch();
    }

    // Incrementar views do arquivo selecionado (opcional)
    if ($featuredFile) {
        $updateViewsStmt = $pdo->prepare("UPDATE archive_files SET views = views + 1 WHERE id = :id");
        $updateViewsStmt->execute([':id' => $featuredFile['id']]);
    }

    // Resposta JSON
    jsonResponse([
        'success' => true,
        'data' => [
            'quote' => $quote,
            'featured_file' => $featuredFile,
            'generated_at' => date('Y-m-d H:i:s')
        ]
    ]);

} catch (Exception $e) {
    error_log('get_daily_content.php error: ' . $e->getMessage());
    jsonResponse([
        'success' => false,
        'error' => 'Erro ao carregar conteúdo diário'
    ], 500);
}
