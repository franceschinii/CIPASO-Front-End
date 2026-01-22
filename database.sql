-- =================================================================
-- MEMORIAL CIPASO - SCHEMA DE BANCO DE DADOS MYSQL
-- =================================================================
-- Centro de Investigação Parapsicológica de Sorocaba
-- Banco de dados para arquivo histórico e museu virtual
-- =================================================================

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

-- =================================================================
-- TABELA: admin_users
-- Armazena credenciais dos administradores do sistema
-- =================================================================

CREATE TABLE IF NOT EXISTS `admin_users` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(50) NOT NULL UNIQUE,
  `password_hash` VARCHAR(255) NOT NULL COMMENT 'Hash bcrypt da senha',
  `email` VARCHAR(100) NOT NULL,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `last_login` TIMESTAMP NULL DEFAULT NULL,
  `active` BOOLEAN DEFAULT TRUE,
  PRIMARY KEY (`id`),
  INDEX `idx_username` (`username`),
  INDEX `idx_active` (`active`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='Usuários administradores do sistema';

-- Inserir usuário admin padrão
-- Usuário: admin | Senha: CIPASO@2025 (trocar imediatamente após primeiro login)
-- Hash gerado com bcrypt cost factor 12
INSERT INTO `admin_users` (`username`, `password_hash`, `email`) VALUES
('admin', '$2y$12$vK4j.JZGMxLqX3fYqT2V2.MKXhW5rZqm9pYj8Kp2TqU8gNxVwJqQy', 'admin@cipaso.org.br');

-- =================================================================
-- TABELA: posts
-- Armazena posts do blog e notícias institucionais
-- =================================================================

CREATE TABLE IF NOT EXISTS `posts` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(255) NOT NULL,
  `slug` VARCHAR(255) NOT NULL UNIQUE COMMENT 'URL amigável (ex: historia-cipaso)',
  `content_html` LONGTEXT NOT NULL COMMENT 'Conteúdo em HTML',
  `excerpt` TEXT NULL COMMENT 'Resumo curto para cards',
  `type` ENUM('blog', 'noticia') NOT NULL DEFAULT 'blog',
  `status` ENUM('draft', 'published', 'archived') NOT NULL DEFAULT 'published',
  `author_id` INT UNSIGNED NOT NULL,
  `date_created` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `date_updated` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `views` INT UNSIGNED DEFAULT 0,
  PRIMARY KEY (`id`),
  INDEX `idx_slug` (`slug`),
  INDEX `idx_type` (`type`),
  INDEX `idx_status` (`status`),
  INDEX `idx_date_created` (`date_created` DESC),
  FOREIGN KEY (`author_id`) REFERENCES `admin_users`(`id`) ON DELETE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='Posts do blog e notícias';

-- Posts institucionais iniciais
INSERT INTO `posts` (`title`, `slug`, `content_html`, `excerpt`, `type`, `author_id`) VALUES
(
  'História do CIPASO - Fundação e Legado',
  'historia-cipaso-fundacao-legado',
  '<h2>Uma Jornada de Investigação Científica</h2>
  <p>O <strong>CIPASO (Centro de Investigação Parapsicológica de Sorocaba)</strong> foi fundado em <strong>1989</strong> (CNPJ 58.984.089/0001-58) com a missão de investigar fenômenos PSI e parapsicologia sob uma abordagem científica e humanística.</p>

  <p>Localizado na histórica <strong>Rua Oswaldo Segamarchi, 15, Jardim Santa Rosália, Sorocaba/SP</strong>, o centro se tornou referência regional em estudos de reprogramação mental positiva e desenvolvimento humano.</p>

  <h3>Parceria Estratégica</h3>
  <p>Em estreita colaboração com a <strong>Parâmetros Holísticos de Formação Humana</strong> (CNPJ 67.361.410/0001-39), o CIPASO expandiu suas atividades para formação de profissionais e pesquisa aplicada.</p>

  <h3>Missão e Valores</h3>
  <ul>
    <li>Investigação científica de fenômenos parapsicológicos</li>
    <li>Reprogramação mental positiva para segurança emocional</li>
    <li>Fortalecimento de vínculos familiares e comunitários</li>
    <li>Educação e divulgação científica acessível</li>
  </ul>',
  'A história de fundação do CIPASO e sua missão de investigar fenômenos PSI com rigor científico e humanismo.',
  'noticia',
  1
),
(
  'Prof. Valter Franceschini - Mentor e Visionário',
  'prof-valter-franceschini-mentor',
  '<h2>In Memoriam</h2>
  <p>O <strong>Prof. Valter Franceschini</strong> foi o idealizador e mentor espiritual do CIPASO. Sua visão pioneira de unir ciência e humanismo moldou toda a filosofia institucional.</p>

  <blockquote>
    <p>"Viver melhor não é ter mais, é ser mais consciente de si mesmo e do mundo ao redor."</p>
    <cite>— Prof. Valter Franceschini</cite>
  </blockquote>

  <h3>Legado Acadêmico</h3>
  <p>Professor dedicou sua carreira à pesquisa em parapsicologia aplicada, com foco especial em:</p>
  <ul>
    <li>Técnicas de relaxamento e reprogramação mental</li>
    <li>Fortalecimento da autoestima e segurança emocional</li>
    <li>Métodos de investigação de fenômenos PSI</li>
    <li>Formação de terapeutas e pesquisadores</li>
  </ul>

  <p>Seu trabalho continua vivo através deste memorial digital e das centenas de alunos que formou ao longo de décadas de magistério.</p>',
  'Biografia e legado do Prof. Valter Franceschini, mentor e fundador do CIPASO.',
  'blog',
  1
),
(
  'Acervo Digital - Preservação da Memória Institucional',
  'acervo-digital-preservacao-memoria',
  '<h2>Um Museu Vivo</h2>
  <p>Este memorial digital reúne o acervo histórico completo do CIPASO, preservado para as futuras gerações.</p>

  <h3>O que você encontra aqui:</h3>

  <h4>📄 Textos e Documentos</h4>
  <p>Artigos científicos, relatórios de pesquisa e documentação institucional.</p>

  <h4>📷 Imagens Históricas</h4>
  <p>Fotografias da sede Santa Rosália, eventos, workshops e atividades.</p>

  <h4>🎧 Fitas de Relaxamento</h4>
  <p>Gravações originais das sessões de reprogramação mental conduzidas pelo Prof. Valter Franceschini.</p>

  <h4>🎬 Filmagens</h4>
  <p>Vídeos de palestras, entrevistas e eventos históricos.</p>

  <h4>📰 Diário de Sorocaba</h4>
  <p>Recortes de jornal (hemeroteca) com menções ao CIPASO na mídia local.</p>

  <h4>📚 Publicações Parâmetros</h4>
  <p>Livros, apostilas e materiais didáticos produzidos pela parceira Parâmetros Holísticos.</p>

  <hr>

  <p><em>Navegue pelo <a href="/acervo">Acervo Digital</a> e redescubra a história do CIPASO.</em></p>',
  'Conheça o acervo digital completo do CIPASO: documentos, imagens, áudios, vídeos e publicações históricas.',
  'noticia',
  1
);

-- =================================================================
-- TABELA: archive_files
-- Armazena metadados dos arquivos do acervo histórico
-- =================================================================

CREATE TABLE IF NOT EXISTS `archive_files` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(255) NOT NULL,
  `description` TEXT NULL,
  `file_path` VARCHAR(500) NOT NULL COMMENT 'Caminho relativo (ex: /uploads/documentos/arquivo.pdf)',
  `file_size` INT UNSIGNED NULL COMMENT 'Tamanho em bytes',
  `category` ENUM('documentos', 'imagens', 'audios', 'videos', 'hemeroteca', 'publicacoes') NOT NULL,
  `file_type` VARCHAR(50) NOT NULL COMMENT 'Extensão (pdf, jpg, mp3, mp4, etc)',
  `publication_date` DATE NULL COMMENT 'Data original do documento',
  `featured` BOOLEAN DEFAULT FALSE COMMENT 'Destacar na home?',
  `tags` VARCHAR(500) NULL COMMENT 'Tags separadas por vírgula',
  `uploaded_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `uploaded_by` INT UNSIGNED NOT NULL,
  `views` INT UNSIGNED DEFAULT 0,
  PRIMARY KEY (`id`),
  INDEX `idx_category` (`category`),
  INDEX `idx_featured` (`featured`),
  INDEX `idx_publication_date` (`publication_date` DESC),
  FULLTEXT INDEX `idx_fulltext_search` (`title`, `description`, `tags`),
  FOREIGN KEY (`uploaded_by`) REFERENCES `admin_users`(`id`) ON DELETE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='Metadados dos arquivos do acervo';

-- Arquivos de exemplo para demonstração
INSERT INTO `archive_files` (`title`, `description`, `file_path`, `category`, `file_type`, `publication_date`, `featured`, `tags`, `uploaded_by`) VALUES
(
  'Estatuto Social do CIPASO - 1989',
  'Documento original de fundação do Centro de Investigação Parapsicológica de Sorocaba, registrado em cartório em 1989.',
  '/uploads/documentos/estatuto-cipaso-1989.pdf',
  'documentos',
  'pdf',
  '1989-03-15',
  TRUE,
  'estatuto, fundação, documentação oficial, 1989',
  1
),
(
  'Sede Santa Rosália - Fachada Externa (1995)',
  'Fotografia histórica da fachada da sede do CIPASO na Rua Oswaldo Segamarchi, 15, Jardim Santa Rosália.',
  '/uploads/imagens/sede-santa-rosalia-1995.jpg',
  'imagens',
  'jpg',
  '1995-08-20',
  TRUE,
  'sede, santa rosália, sorocaba, fotografia histórica',
  1
),
(
  'Fita de Relaxamento - Reprogramação Positiva Vol. 1',
  'Sessão guiada pelo Prof. Valter Franceschini focada em reprogramação mental para segurança emocional e autoestima. Gravação original de 1992.',
  '/uploads/audios/relaxamento-reprogramacao-vol1.mp3',
  'audios',
  'mp3',
  '1992-05-10',
  TRUE,
  'relaxamento, reprogramação mental, valter franceschini, áudio',
  1
),
(
  'Palestra: Fenômenos PSI e Consciência (2005)',
  'Palestra completa ministrada pelo Prof. Valter Franceschini sobre investigação de fenômenos parapsicológicos. Evento realizado na sede do CIPASO.',
  '/uploads/videos/palestra-fenomenos-psi-2005.mp4',
  'videos',
  'mp4',
  '2005-11-12',
  FALSE,
  'palestra, fenômenos psi, parapsicologia, vídeo',
  1
),
(
  'Diário de Sorocaba - Matéria sobre Workshop de Parapsicologia',
  'Recorte do jornal Diário de Sorocaba cobrindo workshop sobre parapsicologia científica realizado pelo CIPASO em parceria com a Parâmetros Holísticos.',
  '/uploads/hemeroteca/diario-sorocaba-workshop-1998.jpg',
  'hemeroteca',
  'jpg',
  '1998-09-25',
  FALSE,
  'jornal, diário de sorocaba, imprensa, workshop, 1998',
  1
),
(
  'Apostila: Introdução à Parapsicologia - Parâmetros Holísticos',
  'Material didático oficial produzido pela Parâmetros Holísticos para cursos de formação em parapsicologia aplicada.',
  '/uploads/publicacoes/apostila-introducao-parapsicologia.pdf',
  'publicacoes',
  'pdf',
  '2000-03-01',
  FALSE,
  'apostila, parâmetros holísticos, curso, educação',
  1
);

-- =================================================================
-- TABELA: daily_quotes
-- Armazena citações para o widget "Citação do Dia"
-- =================================================================

CREATE TABLE IF NOT EXISTS `daily_quotes` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `content` TEXT NOT NULL COMMENT 'Texto da citação',
  `author` VARCHAR(100) NOT NULL,
  `active` BOOLEAN DEFAULT TRUE COMMENT 'Incluir no sorteio?',
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  INDEX `idx_active` (`active`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='Citações diárias para a home';

-- Citações do Prof. Valter Franceschini
INSERT INTO `daily_quotes` (`content`, `author`, `active`) VALUES
(
  'A verdadeira transformação começa quando paramos de buscar validação externa e encontramos segurança dentro de nós mesmos.',
  'Prof. Valter Franceschini',
  TRUE
),
(
  'Viver melhor não é acumular bens materiais, mas cultivar consciência, autoconhecimento e conexões humanas genuínas.',
  'Prof. Valter Franceschini',
  TRUE
),
(
  'A investigação parapsicológica séria não nega a ciência, mas expande suas fronteiras com rigor e ética.',
  'Prof. Valter Franceschini',
  TRUE
),
(
  'O relaxamento profundo não é escapismo, é o portal para a reprogramação consciente de padrões mentais limitantes.',
  'Prof. Valter Franceschini',
  TRUE
),
(
  'Família fortalecida não é aquela sem conflitos, mas aquela que aprende a dialogar com respeito e empatia autênticos.',
  'Prof. Valter Franceschini',
  TRUE
),
(
  'A mente humana é um universo inexplorado. Cada pesquisa em parapsicologia é uma jornada de descoberta interior.',
  'Prof. Valter Franceschini',
  TRUE
),
(
  'Segurança emocional não vem de controlar tudo ao redor, mas de confiar na própria capacidade de adaptação e crescimento.',
  'Prof. Valter Franceschini',
  TRUE
),
(
  'O propósito do CIPASO sempre foi democratizar o acesso ao autoconhecimento e à investigação séria dos fenômenos da consciência.',
  'Prof. Valter Franceschini',
  TRUE
);

-- =================================================================
-- TABELA: sessions (Opcional - para controle de sessões PHP)
-- =================================================================

CREATE TABLE IF NOT EXISTS `sessions` (
  `session_id` VARCHAR(128) NOT NULL,
  `user_id` INT UNSIGNED NOT NULL,
  `ip_address` VARCHAR(45) NOT NULL,
  `user_agent` VARCHAR(255) NULL,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `expires_at` TIMESTAMP NOT NULL,
  PRIMARY KEY (`session_id`),
  INDEX `idx_user_id` (`user_id`),
  INDEX `idx_expires_at` (`expires_at`),
  FOREIGN KEY (`user_id`) REFERENCES `admin_users`(`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='Controle de sessões de autenticação';

-- =================================================================
-- TABELA: audit_log (Opcional - para auditoria de ações admin)
-- =================================================================

CREATE TABLE IF NOT EXISTS `audit_log` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `user_id` INT UNSIGNED NOT NULL,
  `action` VARCHAR(100) NOT NULL COMMENT 'Tipo de ação (CREATE, UPDATE, DELETE)',
  `table_name` VARCHAR(50) NOT NULL COMMENT 'Tabela afetada',
  `record_id` INT UNSIGNED NULL COMMENT 'ID do registro afetado',
  `details` TEXT NULL COMMENT 'JSON com detalhes da operação',
  `ip_address` VARCHAR(45) NOT NULL,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  INDEX `idx_user_id` (`user_id`),
  INDEX `idx_action` (`action`),
  INDEX `idx_created_at` (`created_at` DESC),
  FOREIGN KEY (`user_id`) REFERENCES `admin_users`(`id`) ON DELETE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='Log de auditoria de ações administrativas';

COMMIT;

-- =================================================================
-- FIM DO SCHEMA
-- =================================================================

-- NOTAS IMPORTANTES:
-- 1. A senha do usuário admin ('CIPASO@2025') DEVE ser alterada imediatamente após o primeiro login
-- 2. Os arquivos referenciados em 'file_path' devem ser enviados via FTP para o servidor Hostinger
-- 3. Configure corretamente as permissões de pastas (uploads/ deve ter permissão de escrita)
-- 4. Adicione índices adicionais conforme necessário após análise de performance
-- 5. Configure backups automáticos diários no painel da Hostinger
-- 6. Para produção, considere criar usuário MySQL com permissões restritas (não use root)
