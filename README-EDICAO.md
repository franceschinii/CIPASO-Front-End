# Guia de Edição - Memorial CIPASO

Este site é **totalmente estático** e **não usa banco de dados**. Você edita o conteúdo diretamente nos arquivos TypeScript.

---

## 📝 Como Editar Conteúdo

### 1. Citações do Dia

**Arquivo:** [src/data/quotes.ts](src/data/quotes.ts)

```typescript
export const quotes: Quote[] = [
  {
    id: 1,
    content: 'Texto da citação aqui...',
    author: 'Prof. Valter Franceschini'
  },
  // Adicione mais citações aqui
]
```

**Para adicionar uma nova citação:**
1. Abra `src/data/quotes.ts`
2. Copie um objeto existente
3. Mude o `id` para o próximo número
4. Edite `content` e `author`
5. Salve o arquivo

---

### 2. Posts e Notícias

**Arquivo:** [src/data/posts.ts](src/data/posts.ts)

```typescript
export const posts: Post[] = [
  {
    id: 1,
    title: 'Título do Post',
    slug: 'titulo-do-post', // URL amigável
    excerpt: 'Resumo curto...',
    type: 'noticia', // ou 'blog'
    date: '2024-01-22',
    author: 'CIPASO',
    content: `
      <h2>Título da Seção</h2>
      <p>Parágrafo de texto...</p>
      <ul>
        <li>Item de lista</li>
      </ul>
    `
  },
  // Adicione mais posts aqui
]
```

**Você pode usar HTML no campo `content`:**
- `<h2>`, `<h3>` → Títulos
- `<p>` → Parágrafos
- `<ul><li>` → Listas
- `<strong>` → Negrito
- `<em>` → Itálico
- `<blockquote>` → Citações

---

### 3. Arquivos do Acervo

**Arquivo:** [src/data/archive.ts](src/data/archive.ts)

```typescript
export const archiveFiles: ArchiveFile[] = [
  {
    id: 1,
    title: 'Nome do Arquivo',
    description: 'Descrição detalhada...',
    filePath: '/uploads/documentos/arquivo.pdf', // Caminho do arquivo
    category: 'documentos', // Ver categorias abaixo
    fileType: 'pdf', // Extensão
    publicationDate: '1989-03-15',
    featured: true, // Aparece na home?
    tags: ['tag1', 'tag2', 'tag3']
  },
  // Adicione mais arquivos aqui
]
```

**Categorias disponíveis:**
- `documentos` → Textos & Documentos
- `imagens` → Imagens Históricas
- `audios` → Fitas de Relaxamento
- `videos` → Filmagens
- `hemeroteca` → Diário de Sorocaba
- `publicacoes` → Publicações Parâmetros

---

## 📁 Como Adicionar Arquivos (PDFs, Imagens, Áudios, Vídeos)

### Passo 1: Coloque o arquivo na pasta correta

```
public/uploads/
├── documentos/     → Coloque PDFs, DOCs aqui
├── imagens/        → Coloque JPG, PNG aqui
├── audios/         → Coloque MP3, WAV aqui
├── videos/         → Coloque MP4, AVI aqui
├── hemeroteca/     → Recortes de jornal (imagens)
└── publicacoes/    → Apostilas, livros (PDFs)
```

**Exemplo:**
```
public/uploads/imagens/sede-1995.jpg
```

### Passo 2: Registre o arquivo em `src/data/archive.ts`

```typescript
{
  id: 7, // Próximo ID disponível
  title: 'Foto da Sede - 1995',
  description: 'Fotografia histórica da sede do CIPASO.',
  filePath: '/uploads/imagens/sede-1995.jpg', // Caminho relativo
  category: 'imagens',
  fileType: 'jpg',
  publicationDate: '1995-08-20',
  featured: false,
  tags: ['sede', 'fotografia', '1995']
}
```

### Passo 3: Salve e recarregue o site

O arquivo aparecerá automaticamente no acervo.

---

## 🎨 Personalizar Cores

**Arquivo:** [src/index.css](src/index.css)

```css
@theme {
  --color-primary: #E9A356;      /* Ouro */
  --color-secondary: #F4B068;    /* Laranja */
  --color-background: #FBE4CB;   /* Papel (Light) */
  --color-foreground: #2D241E;   /* Texto (Light) */
  /* ... */
}
```

Mude os valores hexadecimais para personalizar as cores.

---

## 🖼️ Trocar Foto do Prof. Valter

**Arquivo:** [src/components/home/AboutValter.tsx](src/components/home/AboutValter.tsx)

Linha 2:
```typescript
import valterPhoto from '@/assets/png/vaf/VAF-1.jpg'
```

**Para trocar:**
1. Coloque nova foto em `src/assets/png/vaf/`
2. Mude o caminho no import
3. Salve

---

## 🚀 Comandos Úteis

```bash
# Desenvolvimento (servidor local)
npm run dev
# Acesse: http://localhost:5174

# Build de produção (gera arquivos otimizados)
npm run build
# Arquivos gerados em: dist/

# Testar build localmente
npm run preview
```

---

## 📤 Deploy (Publicar o Site)

### Opção 1: Hostinger (FTP)

1. Execute `npm run build`
2. Faça upload da pasta `dist/` para `public_html/` na Hostinger
3. Pronto!

### Opção 2: Netlify / Vercel (Grátis)

1. Conecte seu repositório Git
2. Configure build command: `npm run build`
3. Configure publish directory: `dist`
4. Deploy automático a cada commit

---

## ❓ Dúvidas Comuns

**P: Como adiciono um novo autor nas citações?**
R: Basta mudar o campo `author` em `src/data/quotes.ts`

**P: Posso usar vídeos do YouTube?**
R: Sim! Use um player embed ou registre o link em `archive.ts` com `fileType: 'youtube'`

**P: O que acontece se eu excluir um arquivo de `uploads/`?**
R: O link ficará quebrado. Remova também o registro em `src/data/archive.ts`

**P: Como faço backup do conteúdo?**
R: Copie as pastas `src/data/` e `public/uploads/` para um local seguro

---

## 🔒 Segurança

✅ **Vantagens desta abordagem:**
- Sem banco de dados = Sem risco de SQL injection
- Sem backend = Sem risco de invasão de servidor
- Arquivos estáticos = Deploy simples e rápido
- Versionamento fácil com Git

⚠️ **Lembre-se:**
- Não coloque informações sensíveis nos arquivos TS
- Faça backup regular de `src/data/` e `public/uploads/`
- Use Git para versionar as mudanças

---

## 📚 Estrutura de Arquivos

```
src/
├── data/
│   ├── quotes.ts      ← EDITE: Citações
│   ├── posts.ts       ← EDITE: Posts/Notícias
│   └── archive.ts     ← EDITE: Arquivos do acervo
├── assets/
│   └── png/vaf/       ← COLOQUE: Fotos do Prof. Valter
└── ...

public/
└── uploads/
    ├── documentos/    ← COLOQUE: PDFs
    ├── imagens/       ← COLOQUE: Fotos
    ├── audios/        ← COLOQUE: MP3s
    ├── videos/        ← COLOQUE: MP4s
    ├── hemeroteca/    ← COLOQUE: Recortes de jornal
    └── publicacoes/   ← COLOQUE: Apostilas
```

---

**Desenvolvido com simplicidade e segurança para o Memorial CIPASO.**
