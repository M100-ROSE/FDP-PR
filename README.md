# Brasil Soberano · Paraná
Site de campanha em Next.js 15 + TypeScript (App Router).

```
npm install
cp .env.example .env.local
npm run dev
```

## Estrutura
- `data/` conteúdo editável: `config.ts` (evento, data do 2º turno), `reasons.ts`, `audiences.ts`, `conversation.ts`, `plan.ts`, `sources.ts` (registro único de fontes)
- `types/` tipos compartilhados
- `lib/` utilidades (`time.ts`, `share.ts`)
- `components/ui` (Button, Section, SourceList), `layout`, `sections` (blocos da página), `interactive` (componentes client)
- `app/` rotas: `/` e `/fontes` (lista completa de fontes)

## Regras de conteúdo
- Toda informação factual referencia ids de `data/sources.ts`; o TypeScript acusa id inexistente.
- Cada motivo traz `outroLado`. Ser investigado não é ser condenado.
- Revise os links antes de publicar e prefira fontes primárias (STF, TSE, Senado, Planalto) quando houver.

## Colinhas
Coloque as imagens em `public/colinhas/` e registre cada uma em `data/colinhas.ts`. A página `/colinha` (componentes em `components/colinha/`) permite escolher e baixar.
