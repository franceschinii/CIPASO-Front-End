---
titulo: Seu Artigo Aqui
slug: seu-artigo-aqui
resumo: Um resumo breve do seu artigo que aparece na listagem
autor: Prof. Valter Franceschini
data: 2024-01-22
categoria: pesquisa
tags: parapsicologia, consciência, ciência
---

Aqui vai o conteúdo completo do seu artigo em Markdown.

## Seção 1
Escreva seu conteúdo aqui.

## Seção 2
Mais conteúdo...

---

**INSTRUÇÕES:**
1. Crie um arquivo .md na pasta "posts" com seu conteúdo
2. Preencha o frontmatter (tudo entre ---) com:
   - titulo: Título do artigo
   - slug: URL-friendly (ex: meu-artigo)
   - resumo: Resumo curto (aparece na listagem)
   - autor: Nome do autor (padrão: Prof. Valter Franceschini)
   - data: Data (YYYY-MM-DD)
   - categoria: pesquisa | desenvolvimento | institucional
   - tags: Vírgula separada por vírgulas
3. Execute: npm run update-blog
4. Seu artigo aparecerá automaticamente no site

**Alternativa (JSON):**
Você também pode criar um arquivo .json na pasta "posts" com este formato:

```json
{
  "titulo": "Seu Artigo",
  "slug": "seu-artigo",
  "resumo": "Resumo breve",
  "conteudo": "Conteúdo completo em HTML ou Markdown",
  "autor": "Prof. Valter Franceschini",
  "data": "2024-01-22",
  "categoria": "pesquisa",
  "tags": ["parapsicologia", "consciência"]
}
```

Execute: npm run update-blog
