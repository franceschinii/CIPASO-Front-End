# Adicionar Artigos (Posts)

Adicione seus artigos a este diretório em formato **Markdown** ou **JSON**.

## Formato Markdown (.md)

Crie um arquivo `.md` com frontmatter YAML:

```md
---
titulo: Título do Seu Artigo
slug: titulo-do-seu-artigo
resumo: Um resumo breve que aparece na listagem de posts
autor: Prof. Valter Franceschini
data: 2024-01-22
categoria: pesquisa
tags: parapsicologia, consciência, ciência
---

Aqui vai o conteúdo completo do seu artigo.

## Seção 1
Escreva livremente em Markdown.

## Seção 2
Suporta imagens, listas, código, etc.
```

## Formato JSON (.json)

Ou crie um arquivo `.json` com este formato:

```json
{
  "titulo": "Título do Seu Artigo",
  "slug": "titulo-do-seu-artigo",
  "resumo": "Um resumo breve",
  "conteudo": "Conteúdo completo em HTML ou Markdown",
  "autor": "Prof. Valter Franceschini",
  "data": "2024-01-22",
  "categoria": "pesquisa",
  "tags": ["parapsicologia", "consciência", "ciência"]
}
```

## Regenerar

Após adicionar ou modificar posts, execute:

```bash
npm run update-blog
```

Ou simplesmente:

```bash
npm run dev     # Regenera automaticamente ao iniciar dev
npm run build   # Regenera automaticamente ao compilar
```

## Categorias Válidas

- `pesquisa` - Artigos sobre parapsicologia e pesquisa
- `desenvolvimento` - Artigos sobre desenvolvimento humano
- `institucional` - Notícias e informações sobre CIPASO

## Dicas

- Use datas no formato `YYYY-MM-DD`
- Slugs são gerados automaticamente, mas você pode customizar
- Artigos aparecem em ordem decrescente de data
- Tags ajudam na organização (use de 2 a 5 tags)
