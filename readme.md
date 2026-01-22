# Memorial Digital CIPASO

> Centro de Investigação Parapsicológica de Sorocaba — Acervo Histórico e Museu Virtual

[![React](https://img.shields.io/badge/React-18.3-61DAFB?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.0-646CFF?logo=vite)](https://vite.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4_beta-06B6D4?logo=tailwindcss)](https://tailwindcss.com/)

---

## 🎯 Sobre o Projeto

O **Memorial Digital CIPASO** é um site **totalmente estático** (JAMstack) desenvolvido para preservar a memória histórica do Centro de Investigação Parapsicológica de Sorocaba, fundado em 1989.

### ✨ Funcionalidades

- **Acervo Digital Completo:** Documentos, imagens, áudios, vídeos, publicações e hemeroteca
- **Citações Inspiradoras:** Widget com frases do Prof. Valter Franceschini
- **Design Responsivo:** Mobile-first, funciona perfeitamente em todos os dispositivos
- **Dark Mode:** Tema claro/escuro com persistência
- **PWA:** Site instalável e funcional offline
- **Zero Banco de Dados:** Conteúdo editável em arquivos TypeScript

### 🛠️ Tecnologias

- React 18.3 + TypeScript 5.7
- Vite 6.0 (build tool ultrarrápido)
- Tailwind CSS v4 (beta) - Design system customizado
- Framer Motion (animações fluidas)
- React Router DOM (navegação SPA)

---

## 🚀 Instalação

### 1. Clonar e Instalar

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev
```

Acesse: **http://localhost:5173**

### 2. Comandos Disponíveis

```bash
npm run dev       # Servidor de desenvolvimento
npm run build     # Build de produção (gera pasta dist/)
npm run preview   # Testar build localmente
npm run lint      # Verificar código
```

---

## 📝 Como Editar Conteúdo

**⚠️ IMPORTANTE:** Este site NÃO usa banco de dados. Todo conteúdo é editado diretamente em arquivos TypeScript.

### 📌 Editar Citações

**Arquivo:** [src/data/quotes.ts](src/data/quotes.ts)

```typescript
export const quotes: Quote[] = [
  {
    id: 1,
    content: 'Texto da citação...',
    author: 'Prof. Valter Franceschini'
  },
  // Adicione mais aqui
]
```

### 📰 Editar Posts/Notícias

**Arquivo:** [src/data/posts.ts](src/data/posts.ts)

```typescript
export const posts: Post[] = [
  {
    id: 1,
    title: 'Título do Post',
    slug: 'titulo-do-post',
    excerpt: 'Resumo...',
    content: `<h2>HTML permitido aqui</h2><p>...</p>`
  }
]
```

### 📁 Adicionar Arquivos do Acervo

**Passo 1:** Coloque o arquivo em `public/uploads/<categoria>/`

```
public/uploads/
├── documentos/     → PDFs, DOCs
├── imagens/        → JPG, PNG
├── audios/         → MP3, WAV
├── videos/         → MP4
├── hemeroteca/     → Recortes de jornal
└── publicacoes/    → Apostilas, livros
```

**Passo 2:** Registre em [src/data/archive.ts](src/data/archive.ts)

```typescript
{
  id: 7,
  title: 'Nome do Arquivo',
  description: 'Descrição...',
  filePath: '/uploads/imagens/foto.jpg',
  category: 'imagens',
  fileType: 'jpg',
  publicationDate: '1995-08-20',
  featured: false, // true = aparece na home
  tags: ['tag1', 'tag2']
}
```

**Veja o guia completo:** [README-EDICAO.md](README-EDICAO.md)

---

## 🎨 Personalizar Design

### Cores Institucionais (CIPASO)

**Arquivo:** [src/index.css](src/index.css)

```css
@theme {
  --color-primary: #E9A356;      /* Ouro institucional */
  --color-secondary: #F4B068;    /* Laranja terroso */
  --color-background: #FBE4CB;   /* Papel/Pergaminho (light) */
  --color-foreground: #2D241E;   /* Texto escuro (light) */
}
```

### Trocar Foto do Prof. Valter Franceschini

**Arquivo:** [src/components/home/AboutValter.tsx](src/components/home/AboutValter.tsx:2)

```typescript
import valterPhoto from '@/assets/png/vaf/VAF-1.jpg' // ← Mude aqui
```

---

## 📤 Deploy (Publicar o Site)

### Opção 1: Netlify (Recomendado - Grátis)

1. Conecte seu repositório Git no [Netlify](https://netlify.com)
2. Configure:
   - Build command: `npm run build`
   - Publish directory: `dist`
3. Deploy automático!

### Opção 2: Vercel (Grátis)

1. Conecte repo no [Vercel](https://vercel.com)
2. Deploy automático (detecta Vite automaticamente)

### Opção 3: Hostinger (Manual via FTP)

```bash
# Gerar build
npm run build

# Fazer upload da pasta dist/ para public_html/ via FTP
```

**Configurar `.htaccess` para SPA:**

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

---

## 📂 Estrutura do Projeto

```
Front-End/
├── public/
│   └── uploads/              ← COLOQUE ARQUIVOS AQUI
│       ├── documentos/
│       ├── imagens/
│       ├── audios/
│       ├── videos/
│       ├── hemeroteca/
│       └── publicacoes/
├── src/
│   ├── data/                 ← EDITE CONTEÚDO AQUI
│   │   ├── quotes.ts         (Citações)
│   │   ├── posts.ts          (Posts/Notícias)
│   │   └── archive.ts        (Arquivos do acervo)
│   ├── components/
│   │   ├── layout/           (Header, Footer)
│   │   └── home/             (DailyQuote, AboutValter)
│   ├── pages/
│   │   └── Home.tsx
│   ├── hooks/
│   │   └── useTheme.ts       (Dark mode)
│   ├── lib/
│   │   └── utils.ts          (Helpers)
│   ├── types/
│   │   └── index.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css             (Design system)
├── README-EDICAO.md          ← GUIA COMPLETO DE EDIÇÃO
└── package.json
```

---

## 🔒 Segurança

### Vantagens da Arquitetura Estática

✅ **Sem banco de dados** → Impossível sofrer SQL injection
✅ **Sem backend** → Superfície de ataque zero
✅ **Arquivos estáticos** → Performance máxima
✅ **Hospedagem gratuita** → Netlify, Vercel, GitHub Pages
✅ **Versionamento fácil** → Git rastreia todas as mudanças

### Backups

Faça backup regular de:
- `src/data/` (conteúdo editável)
- `public/uploads/` (arquivos do acervo)

Use Git para versionar as mudanças.

---

## 🎯 Roadmap

- [x] Setup inicial do projeto
- [x] Design system (cores CIPASO)
- [x] Sistema de dados estáticos
- [x] Home page completa
- [x] Seção Prof. Valter Franceschini
- [x] Dark mode toggle
- [ ] Página do Acervo (filtros + busca)
- [ ] Player de áudio para fitas de relaxamento
- [ ] Modal de visualização de arquivos
- [ ] PWA completo (service worker)
- [ ] Blog com posts completos

---

## 🏛️ Informações Institucionais

**CIPASO - Centro de Investigação Parapsicológica de Sorocaba**
- CNPJ: 58.984.089/0001-58
- Fundação: 1989
- Localização: Rua Oswaldo Segamarchi, 15, Jd. Santa Rosália, Sorocaba/SP

**Parâmetros Holísticos de Formação Humana LTDA.**
- CNPJ: 67.361.410/0001-39
- Parceira institucional desde 1989

---

## 📞 Contato

Para dúvidas técnicas sobre este memorial digital, abra uma issue no repositório.

---

**Memorial Digital desenvolvido com respeito à memória do Prof. Valter Franceschini e à história do CIPASO.**

© 2024 CIPASO. Todos os direitos reservados.
