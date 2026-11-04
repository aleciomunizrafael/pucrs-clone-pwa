# PUCRS — clone PWA (para testes e melhorias)

Clone fiel do app acadêmico da PUCRS, feito como **PWA** para ser adicionado à tela
inicial do iOS e rodar em tela cheia (standalone), com visual idêntico ao do app
original. Objetivo: testar funcionalidades e propor melhorias.

> Protótipo independente, sem vínculo oficial com a PUCRS. Logo recriado como
> wordmark de texto e ícones próprios (não usa assets da marca). Dados são de
> demonstração.

## Stack

HTML + CSS + JavaScript puro (sem build). Service Worker para funcionar offline.

## Rodar localmente

```bash
python -m http.server 4178
```

Depois abra `http://localhost:4178` no navegador.

## Instalar no iPhone (tela inicial)

1. Hospede os arquivos em **HTTPS** (ex.: GitHub Pages, Netlify, Vercel) — o iOS
   exige HTTPS para PWA e Service Worker.
2. Abra a URL no **Safari**.
3. Toque em **Compartilhar → Adicionar à Tela de Início**.
4. Abra pelo ícone: roda em tela cheia, sem barra do navegador.

## Estrutura

```
index.html              # shell do app (metatags iOS/PWA)
manifest.webmanifest    # manifesto PWA (standalone, ícones)
sw.js                   # service worker (cache do app-shell)
css/styles.css          # design system (tema escuro + acento ciano)
js/icons.js             # ícones SVG (outline)
js/data.js              # dados das telas (fácil de editar/estender)
js/app.js               # navegação + render das telas + modal
icons/                  # ícones do app (gerados)
```

## Telas

Replicadas a partir do vídeo de referência:

- **Home** — saudação, curso/matrícula, card "Próxima aula", carrossel de acesso
  rápido (Chamada/QR, Mensalidade, Gerar Token, Biblioteca).
- **Acadêmico** — alterna entre **Notas e avaliações** e **Frequências e faltas**,
  com seletor de ano + abas S1/S2; tocar num card abre o detalhamento de notas.
- **Biblioteca** — Empréstimos e Reservas.

Placeholders (aguardando vídeo/prints): **Estacionamento**, **Menu**, e as telas
internas de **Chamada**, **Mensalidade** e **Gerar Token**.

## Próximos passos

- Completar as telas que faltam conforme novos vídeos/prints.
- Trocar dados de demonstração por integração real (quando/ se houver API).
- Propor melhorias de UX sobre a base fiel.
