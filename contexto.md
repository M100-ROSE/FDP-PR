# Contexto do projeto — Brasil Soberano · Paraná

Site de campanha em Next.js 15 + TypeScript (App Router). 2º turno das eleições: 25/10/2026, das 8h às 17h (horário de Brasília). Toda informação factual precisa referenciar ids de `data/sources.ts`.

## Preferências

- Idioma de trabalho: português do Brasil (código, commits e documentação).
- Commits no padrão `tipo: descrição` (`feat:`, `fix:`, `docs:`, `refactor:`, `chore:`, `style:`, `test:`).
- `next-env.d.ts` é trackado de propósito (padrão Next); o resto de artefatos de build vai no `.gitignore`.
- Sem segredos, `.env`, `node_modules` ou artefatos de build no repositório.
- Fontes de dados: conteúdo editável em `data/`, tipos em `types/`, utilidades em `lib/`.

## Estado atual

- Branch de trabalho: `main`; remote: `origin` (https://github.com/M100-ROSE/FDP-PR.git).
- Build: ✓ ok. `npm audit`: 0 vulnerabilidades (após override do postcss).
- Rotas ativas: `/` (home), `/colinha` (colinha eleitoral), `/fontes` (registro de fontes).
- Pendências listadas na entrada mais recente do histórico abaixo.

## Histórico

### 2026-10-24 — Página /colinha, countdown no dia do 2º turno e dependências seguras

**Solicitação:** reconstruir a página `/colinha` (escolher e baixar a colinha eleitoral), tratar o dia da votação (25/10) no countdown, corrigir dependências (next 15.5.28 + override do postcss por CVE) e colocar o repositório em ordem (`.gitignore` + remoção de `tsconfig.tsbuildinfo` trackado).

**O que foi feito:**

1. Reconstruída a página `/colinha`: novo `ColinhaPicker` (client) para navegar entre as artes e baixar; página server em `app/colinha/page.tsx` com notas de uso.
2. Header com o link para `/colinha` reativado.
3. Countdown agora detecta o dia da votação: estados "É hoje!" (durante o 25/10, até 17h) e "Votação encerrada" (após o fechamento das urnas). Nova função `getVoteDayState` em `lib/time.ts` e `SECOND_ROUND_END` em `data/config.ts` (17h de Brasília).
4. Dependências: `next ^15.0.0 → ^15.5.28`; `overrides.postcss ^8.5.23`; `package-lock.json` regenerado (`npm audit` zerou, build passou).
5. Git: criado `.gitignore` (node_modules, .next, out, build, dist, .vercel, `*.tsbuildinfo`, .env e variantes, coverage, logs, .DS_Store/Thumbs.db, .opencode; `.idea`/`.vscode` deixados comentados para decisão de cada dev; `next-env.d.ts` segue trackado). `tsconfig.tsbuildinfo` removido do índice (`git rm --cached`) — nenhum outro arquivo trackado passou a ser coberto pelo ignore (verificado com `git ls-files -ci --exclude-standard`).
6. Este arquivo `contexto.md` criado com o histórico do ciclo.

**Decisões:**

- **Override do postcss (`^8.5.23`):** o `next` pina internamente `postcss 8.4.31`, versão com CVEs conhecidas de XSS e path traversal. O override força a 8.5.x no lockfile em todo o monorepo de dependências. Manter até o upgrade de Next que já embuta a versão corrigida.
- **`tsconfig.tsbuildinfo` ignorado mas não versionado:** é artefato incremental do `tsc`, não pertence ao repositório.
- **`next-env.d.ts` mantido no repo:** exclusão intencional do `.gitignore` (padrão Next).

**Arquivos:**

- Criados: `components/colinha/ColinhaPicker.tsx`, `app/colinha/page.tsx`, `.gitignore`, `contexto.md`.
- Alterados: `components/layout/Header.tsx`, `components/interactive/Countdown.tsx`, `lib/time.ts`, `data/config.ts`, `README.md`, `package.json`, `package-lock.json`.
- Removidos do índice: `tsconfig.tsbuildinfo`.

**Pendências:**

- [ ] Notas da `/colinha` renderizam `ul` sem estilo específico (classe `.notas` sem CSS dedicado em `globals.css`).
- [ ] Confirmar envio/push para `origin main` após este commit.
- [ ] No upgrade futuro do Next (ex.: 16), remover o `overrides.postcss` se a versão embutida já for a corrigida.

## Modelo para novas entradas

```
### AAAA-MM-DD — Título curto da tarefa

**Solicitação:** (texto original do pedido)

**O que foi feito:**

1. ...

**Decisões:** (motivadas, quando houver)

**Arquivos:**

- Criados: ...
- Alterados: ...

**Pendências:**

- [ ] ...
```
