# LexiNAV – Project Structure (v2)

Dette dokumentet beskriver mappestrukturen for LexiNAV, hvilke artefakter som bor hvor, og peker til relevante
spesifikasjoner og eksport-filer. Målet er at nye bidragsytere skal kunne navigere repoet på minutter.

---

## apps/

### apps/web/ — Next.js 14 (citizen-facing)
- **components/blocks/** — React-blokker (Hero, FeatureGrid, FAQ, CTA, Alert, DocList, Timeline).
- **components/PageRenderer.tsx** — JSON → TSX renderer (blokker).
- **components/PropsPanel.tsx** — enkel props-editor for blokker (MVP).
- **lib/** — `directus.ts` (REST fetch/save), `resolver.ts` (v1), `resolver.v2.ts` (adapters for Meili/Qdrant).
- **pages/** — Next pages inkl. `/editor/[slug]`, `/editor/index`, `/about`, `/privacy`, `/contact`, `/demo`.
- **stories/** — Storybook stories for blokker.
- **public/thumbnails/** — SVG-thumbs for editor-galleri.

### apps/docs/ — MDX + TinaCMS (Wiki)
- **pages/** — MDX-sider (`index.mdx`, `personvern.mdx`, `teknisk.mdx`, …).
- `_app.tsx` — TinaCMS wrapper (inline editing).

---

## services/

### services/pii-api/ — Fastify + Prisma (PII-separasjon)
- **src/** — `server.js` (endepunkter, typed errors via neverthrow), `crypto.js` (libsodium), `result.js`, `idempotency.js`.
- **prisma/** — `schema.prisma` (Subscriptions, ContactMessage), `schema.patch.prisma` (Consent/Audit/Idempotency).

---

## infra/
- **docker-compose.yml** — Postgres, Directus, MinIO, n8n, Mailpit, PII-API.
- **.env.example** — variabler for compose.
- **directus-schema/snapshot.json** — eksportert skjema (pages, fragments).

---

## n8n/ — Automations (the brain)
- `subscribe.json` — subscribe → e-post.
- `delete.json` — delete request → PII-API.
- `subject-access.json` — GDPR eksport (webhook).
- `retention.json` — cron for sletting/arkivering.
- `intake_ocr_llm_index.json` — Upload → OCR/Tika → LLM (Ollama) → Meili index → notify.

---

## packages/
- **blocks/** — delt blokk-kode (konsumert av web).
- **schema/** — Zod-skjema for blokk-props (validering ved grenseflater).

---

## scripts/
- `export-directus.mjs` — eksporterer Directus-schema.
- `export-n8n.mjs` — eksporterer alle n8n-workflows.
- `export-pages.mjs` — dumper Page JSON fra Directus.

---

## tools/
- **mcp-server/** — minimal MCP-shim over HTTP (les Directus, eksporter sider, trigger n8n).

---

## content/
- **pages/** — eksportert Page JSON (sannhet i Git).
- **wiki/** — tekstdokumenter (Ecosystem, Journey, Database, Features, Info2, Security, mm.).
- **pitch/** — Pitch-deck, screenshots, logoer.

---

## branding/
- `lexinav-logo-dark.svg`, `lexinav-logo-light.svg`
- `palette.md` — farge/typo regler.

---

## Rotfiler
- `README.md` — repo-oversikt & hva som finnes hvor.
- `DEPLOY.md` — full deployguide (VPS + Vercel).
- `DEPLOY_LIGHT.md` — kortversjon/quickstart.
- `CHANGELOG.md` — versjoner og patch-notater.
- `ROADMAP.md` — 0.1 → 0.2 (MVP) → 0.3 (Pilot) → 1.0 (Prod).
- `PROJECT_STRUCTURE.md` — denne filen.
