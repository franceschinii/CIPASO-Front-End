# Memorial Digital CIPASO

> Centro de Investigação Parapsicológica de Sorocaba — Acervo Histórico e Museu Virtual

[![React](https://img.shields.io/badge/React-18.3-61DAFB?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.0-646CFF?logo=vite)](https://vite.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4_beta-06B6D4?logo=tailwindcss)](https://tailwindcss.com/)

---

## Sobre o Projeto

O **Memorial Digital CIPASO** é uma Single Page Application (SPA) desenvolvida para preservar a memória histórica do Centro de Investigação Parapsicológica de Sorocaba, fundado em 1989.

### Funcionalidades Principais

- **Acervo Digital:** Arquivo completo de documentos, imagens, áudios, vídeos, publicações e hemeroteca
- **Portal de Notícias:** Blog institucional com história do CIPASO e artigos sobre parapsicologia
- **Conteúdo Dinâmico:** Citação do dia e arquivo em destaque (serendipidade)
- **Área Administrativa:** Dashboard protegido para gerenciar conteúdo
- **PWA:** Site instalável e funcional offline

### Tecnologias

**Frontend:**
- React 18.3 + TypeScript 5.7
- Vite 6.0 (build tool)
- Tailwind CSS v4 (beta)
- Shadcn/ui (componentes UI)
- React Router DOM (navegação)
- Framer Motion (animações)
- React Hook Form + Zod (formulários e validação)
- Axios (requisições HTTP)

**Backend:**
- PHP 7.4+ (Hostinger)
- MySQL 5.7+ (banco de dados)
- PDO (conexão segura)
- JWT (autenticação)

---

## Instalação e Setup

### Pré-requisitos

- Node.js 18+ e npm
- PHP 7.4+ (para servidor local ou Hostinger)
- MySQL 5.7+
- Conta Hostinger com acesso ao cPanel

### 1. Clonar e Instalar Dependências

```bash
# Clonar repositório
git clone <url-do-repo>
cd Front-End

# Instalar dependências
npm install
```

### 2. Configurar Banco de Dados MySQL (Hostinger)

#### 2.1 Acessar painel Hostinger

1. Faça login no [painel da Hostinger](https://www.hostinger.com.br/)
2. Vá em **Databases → MySQL Databases**
3. Clique em **Create New Database**

#### 2.2 Criar banco de dados

- **Nome:** `cipaso_memorial` (ou nome de sua preferência)
- **Usuário:** Criar novo usuário `cipaso_user` (ou outro nome)
- **Senha:** Gerar senha forte (min. 16 caracteres) - **ANOTE AS CREDENCIAIS**
- **Permissões:** Marcar **ALL PRIVILEGES**

#### 2.3 Importar schema SQL

1. Acesse **phpMyAdmin** pelo painel da Hostinger
2. Selecione o banco `cipaso_memorial`
3. Vá na aba **Import**
4. Escolha o arquivo `database.sql` (raiz do projeto)
5. Clique em **Go** (Executar)
6. Verifique se as tabelas foram criadas: `SHOW TABLES;`

Tabelas esperadas:
- `admin_users`
- `posts`
- `archive_files`
- `daily_quotes`
- `sessions`
- `audit_log`

#### 2.4 Testar dados iniciais

Execute no phpMyAdmin:

```sql
SELECT * FROM daily_quotes;
SELECT * FROM posts;
SELECT * FROM archive_files;
```

Você deve ver:
- 8 citações do Prof. Valter Franceschini
- 3 posts institucionais
- 6 arquivos de exemplo (um de cada categoria)

### 3. Configurar API PHP

#### 3.1 Editar credenciais do banco

Abra o arquivo `public/api/config.php` e altere:

```php
define('DB_HOST', 'localhost'); // ou IP fornecido pela Hostinger
define('DB_NAME', 'cipaso_memorial'); // nome do banco criado
define('DB_USER', 'cipaso_user'); // usuário criado
define('DB_PASS', 'SUA_SENHA_AQUI'); // senha gerada
```

#### 3.2 Gerar chave JWT

Execute no terminal (requer OpenSSL):

```bash
openssl rand -hex 32
```

Copie o resultado e cole em `config.php`:

```php
define('JWT_SECRET', 'COLE_A_CHAVE_GERADA_AQUI');
```

#### 3.3 Testar API localmente (opcional)

Se quiser testar localmente antes de fazer deploy:

```bash
# Instalar PHP (se não tiver)
# Windows: https://windows.php.net/download/
# macOS: brew install php
# Linux: sudo apt install php php-pdo php-mysql

# Iniciar servidor PHP na porta 8000
cd public/api
php -S localhost:8000
```

Testar endpoints:

```bash
# Conteúdo diário
curl http://localhost:8000/get_daily_content.php

# Acervo (categoria documentos)
curl http://localhost:8000/get_archive.php?category=documentos
```

### 4. Fazer Deploy na Hostinger

#### 4.1 Upload via FTP

1. Acesse **File Manager** no painel Hostinger ou use cliente FTP (FileZilla)
2. Conecte com credenciais FTP fornecidas pela Hostinger
3. Navegue até `public_html/` (ou pasta do domínio)
4. Faça upload de **TODA a pasta `public/`** do projeto

#### 4.2 Estrutura final no servidor

```
public_html/
├── api/
│   ├── config.php (com credenciais corretas)
│   ├── cors.php
│   ├── get_archive.php
│   ├── get_daily_content.php
│   ├── login.php
│   ├── update_content.php
│   └── .htaccess
├── assets/ (gerados pelo build do Vite)
├── index.html
└── (outros arquivos do build)
```

#### 4.3 Build do frontend

```bash
# Gerar build de produção
npm run build

# Arquivos gerados em /dist
```

Faça upload do conteúdo da pasta `dist/` para `public_html/` na Hostinger.

#### 4.4 Configurar .htaccess (raiz)

Crie/edite `public_html/.htaccess` para SPA routing:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /

  # Redirecionar para HTTPS
  RewriteCond %{HTTPS} off
  RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

  # SPA routing (React Router)
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

### 5. Configurar Variáveis de Ambiente (Produção)

Crie arquivo `.env` na raiz (NÃO commitar):

```env
VITE_API_URL=https://memorial.cipaso.org.br/api
```

Atualize `src/lib/api.ts` para usar:

```typescript
const API_BASE_URL = import.meta.env.VITE_API_URL || '/api';
```

---

## Desenvolvimento Local

### Iniciar servidor de desenvolvimento

```bash
npm run dev
```

Acesse: `http://localhost:5173`

### Comandos disponíveis

```bash
npm run dev       # Servidor de desenvolvimento (Vite)
npm run build     # Build de produção
npm run preview   # Testar build localmente
npm run lint      # Verificar código (ESLint)
```

### Estrutura de pastas

```
src/
├── components/
│   ├── layout/       # Header, Footer, Sidebar
│   ├── home/         # DailyQuote, FeaturedFile, NewsFeed
│   ├── archive/      # ArchiveExplorer, filtros, grid
│   ├── admin/        # Login, Dashboard, editores
│   └── ui/           # Shadcn components
├── pages/
│   ├── Home.tsx
│   ├── Archive.tsx
│   └── Admin.tsx
├── hooks/
│   ├── useApi.ts     # Wrapper Axios
│   ├── useAuth.ts    # Autenticação
│   └── useTheme.ts   # Dark mode
├── lib/
│   ├── api.ts        # Funções de fetch
│   └── utils.ts      # Helpers
├── types/
│   └── index.ts      # TypeScript types
├── App.tsx
├── main.tsx
└── index.css
```

---

## Configuração do Shadcn/ui

Para adicionar novos componentes:

```bash
npx shadcn@latest add <component>
```

Componentes já instalados:
- `button`
- `card`
- `input`
- `dialog`
- `sidebar`

Adicionar mais conforme necessário (ex: `tabs`, `select`, `textarea`).

---

## Credenciais Iniciais

### Admin Padrão

**⚠️ ALTERAR IMEDIATAMENTE APÓS PRIMEIRO LOGIN**

- **Usuário:** `admin`
- **Senha:** `CIPASO@2025`

Para alterar a senha:

```sql
-- Gerar hash bcrypt da nova senha (usar ferramenta online ou PHP)
-- Exemplo: password_hash('NovaSenhaForte123!', PASSWORD_BCRYPT, ['cost' => 12])

UPDATE admin_users
SET password_hash = '$2y$12$NOVO_HASH_AQUI'
WHERE username = 'admin';
```

---

## Segurança

### Checklist de Segurança (Produção)

- [ ] Alterar senha do usuário `admin`
- [ ] Gerar chave JWT única (`JWT_SECRET` em `config.php`)
- [ ] Configurar HTTPS no domínio (Hostinger fornece SSL gratuito)
- [ ] Revisar permissões de pastas (uploads/ deve ter escrita)
- [ ] Habilitar rate limiting no `login.php` (já implementado)
- [ ] Configurar CORS para aceitar apenas domínio de produção
- [ ] Ativar logs de erro PHP (não exibir no browser)
- [ ] Configurar backups automáticos (painel Hostinger)

### Boas Práticas Implementadas

- Prepared statements (anti SQL injection)
- Bcrypt para senhas (cost factor 12)
- Rate limiting (5 tentativas/15 minutos)
- CORS configurável
- Headers de segurança (XSS, nosniff, frame deny)
- JWT com expiração (24 horas)
- Audit log de ações administrativas

---

## Publicação de Arquivos no Acervo

### Fluxo de trabalho

1. **Upload do arquivo** via FTP para `public_html/uploads/<categoria>/`

Categorias:
- `documentos/`
- `imagens/`
- `audios/`
- `videos/`
- `hemeroteca/`
- `publicacoes/`

2. **Catalogar no sistema** via área administrativa (`/admin`)

- Acessar "Catalogador de Arquivos"
- Preencher formulário:
  - Título
  - Descrição
  - Caminho do arquivo (ex: `/uploads/documentos/estatuto.pdf`)
  - Categoria
  - Data de publicação
  - Tags (separadas por vírgula)
  - Destacar na home? (checkbox)
- Salvar

3. **Verificar** se aparece no acervo (`/acervo`)

---

## Cores do Design System (CIPASO)

### Palette Institucional

```css
--color-primary: #E9A356      /* Ouro institucional */
--color-secondary: #F4B068    /* Laranja terroso */

/* Light mode */
--color-background: #FBE4CB   /* Papel/Pergaminho */
--color-foreground: #2D241E   /* Texto escuro */

/* Dark mode */
--color-background-dark: #1A1512  /* Café profundo */
--color-foreground-dark: #FBE4CB  /* Texto claro */
```

### Tipografia

- **Títulos:** Playfair Display (serif) → Autoridade histórica
- **Corpo:** Inter (sans) → Legibilidade moderna

---

## Configuração PWA

### Icons necessários

Gerar icons a partir do logo CIPASO:

1. Criar `public/pwa-192x192.png` (192x192px)
2. Criar `public/pwa-512x512.png` (512x512px)
3. Criar `public/favicon.svg`

Ferramentas recomendadas:
- [Favicon.io](https://favicon.io/)
- [PWA Asset Generator](https://github.com/elegantapp/pwa-asset-generator)

### Testar instalação

1. Buildar o projeto: `npm run build`
2. Servir localmente: `npm run preview`
3. Abrir Chrome DevTools → Application → Manifest
4. Verificar se mostra ícone de "instalável" na barra de endereço

---

## Troubleshooting

### Erro: "Database connection failed"

**Causa:** Credenciais incorretas em `config.php`

**Solução:**
1. Verificar `DB_HOST`, `DB_NAME`, `DB_USER`, `DB_PASS`
2. Testar conexão diretamente no phpMyAdmin
3. Verificar permissões do usuário MySQL

### Erro: CORS bloqueado

**Causa:** Frontend e API em domínios diferentes

**Solução:**
Editar `public/api/cors.php`:

```php
$allowedOrigins = [
    'https://memorial.cipaso.org.br' // adicionar domínio correto
];
```

### Erro: 404 ao recarregar página (SPA)

**Causa:** `.htaccess` não configurado para React Router

**Solução:**
Adicionar rewrite rules (ver seção 4.4)

### Erro: "Token inválido"

**Causa:** JWT_SECRET diferente entre login e validação

**Solução:**
Verificar se `JWT_SECRET` em `config.php` é consistente

---

## Contribuindo

### Padrões de Código

- **Commits:** Conventional Commits em pt-BR
  - `feat(api): adiciona endpoint de busca`
  - `fix(auth): corrige validação de token`
  - `docs(readme): atualiza instruções de deploy`

- **Branches:** Trunk-based development
  - `feat/nome-curto`
  - `fix/nome-curto`
  - Vida máxima: 1-2 dias

### Code Style

- ESLint + Prettier configurados
- TypeScript strict mode
- Componentes funcionais + hooks
- CSS: Tailwind utility classes (evitar `@apply` excessivo)

---

## Roadmap

- [x] Setup inicial do projeto
- [x] Banco de dados e API PHP
- [x] Design system (Tailwind v4)
- [ ] Componentes de layout
- [ ] Home page (citação + destaque + feed)
- [ ] Acervo (filtros + busca + modal)
- [ ] Área administrativa (login + dashboard)
- [ ] PWA completo
- [ ] Testes (Vitest)
- [ ] Deploy na Hostinger

---

## Licença

Este projeto é de uso institucional do CIPASO. Todos os direitos reservados.

**Informações Institucionais:**
- **CIPASO:** CNPJ 58.984.089/0001-58 (Fundação: 1989)
- **Parâmetros Holísticos:** CNPJ 67.361.410/0001-39
- **Localização:** Rua Oswaldo Segamarchi, 15, Jd. Santa Rosália, Sorocaba/SP

---

## Contato e Suporte

Para dúvidas sobre o sistema, entre em contato com o administrador técnico.

**Memorial Digital desenvolvido com respeito à memória do Prof. Valter Franceschini e à história do CIPASO.**
