# mind-landing

Landing page única do [mind](https://github.com/CafeLabsDev/mind-template), vault de
conhecimento pessoal versionado (Markdown + git) integrado ao Claude Code. Site
estático (Next.js), sem backend, sem dado de usuário — só divulga o projeto e aponta
pro repositório no GitHub.

Implementada 1:1 a partir de um mockup HTML já aprovado (paleta, tipografia, grafo
interativo, animações e acessibilidade especificados ali são a fonte de verdade
visual e de conteúdo).

## Stack

Next.js (App Router) + Framer Motion para animações, mesmo padrão do site
institucional (`cafelabs-portifolio`) e da landing irmã (`dindin-landing`).

## Rodando localmente

```bash
npm install
npm run dev
```

## Analytics

`@vercel/analytics` está instalado e instrumentado com dois eventos customizados:

- `copy_clone_command` — clique no botão "Copiar comandos de setup" (CTA
  primário; nome do evento mantido do texto antigo, o conteúdo copiado agora
  é o bloco de setup completo — fork manual, dois remotes).
- `click_github` — clique em qualquer link pro GitHub, com prop `location`
  (`header` | `hero` | `final_cta` | `footer`) pra diferenciar a origem.

## Deploy

Vercel, apontado pro domínio `mind.cafelabs.net` (deploy ainda não configurado —
pendente de decidir em qual conta GitHub o repositório remoto vai viver, pessoal ou
`CafeLabsDev`).
