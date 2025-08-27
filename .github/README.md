Supert 🙌 Her er et forslag til en **GitHub-vennlig `README.md`** du kan legge i rotmappa. Den er orientert mot utviklere/opensource-miljøet (ikke investorer), og forklarer hva LexiNAV er, hvordan man kjører det, og hvor man finner docs.

---

# 📄 `README.md` (for GitHub)

```markdown
# LexiNAV — NAV gjort menneskelig

LexiNAV er en åpen plattform som gjør NAV-systemet forståelig og tilgjengelig.  
Borgeren kan laste opp brev, få en forklaring på plikter og rettigheter, og bygge en klage på minutter.  
Prosjektet er bygd for å være **gjennomsiktig, GDPR-kompatibelt og uten vendor lock-in**.

---

## ✨ Hovedfunksjoner
- **Upload → Analyse → Rapport**  
  n8n workflow → OCR/Tika → LLM (Ollama) → lagres i Directus → vises i web-app.
- **Complaint Builder**  
  Guidet skjema som genererer et klageutkast (PDF).
- **Docs**  
  Wiki/FAQ med TinaCMS for inline-redigering.
- **Trust & Safety**  
  PII lagres kryptert i egen stripe (PII-API), med audit- og consent-events.
- **Exportable by design**  
  Directus schema, n8n-flows og Page JSON kan eksporteres og versjoneres i Git.

---

## 🏗️ Tech Stack
- **Frontend:** Next.js 14 (React + TypeScript), Storybook, Zod  
- **CMS/Data:** Directus (Postgres)  
- **Backend:** Fastify + Prisma (PII-API med libsodium kryptering)  
- **Automation:** n8n (alle flows eksplisitte og filbaserte)  
- **Storage:** MinIO (S3-kompatibelt)  
- **AI:** Ollama (lokal LLM, swappable)  
- **Infra:** Docker Compose (Postgres, Directus, n8n, MinIO, PII-API)  

---

## 🚀 Kom i gang (lokalt)
```bash
# 1. Start infra (Postgres, Directus, n8n, MinIO, PII-API)
cd infra
cp .env.example .env
docker compose up -d

# 2. Importer Directus schema (Admin → Settings → Data Model → Apply snapshot)

# 3. Kjør PII-API
cd services/pii-api
cp .env.example .env
npm i
npx prisma migrate dev
npm run dev

# 4. Kjør frontend
cd apps/web
cp .env.local.example .env.local
npm i
npm run dev
```

n8n kjører på [http://localhost:5678](http://localhost:5678/)  
Directus kjører på [http://localhost:8055](http://localhost:8055/)  
Web kjører på [http://localhost:3000](http://localhost:3000/)

---

## 📂 Strukturen

- `apps/web` → Next.js frontend (citizen portal)

- `apps/docs` → Wiki (MDX + TinaCMS)

- `services/pii-api` → Fastify + Prisma API for sensitive data

- `infra` → Docker Compose stack (Postgres, Directus, n8n, MinIO)

- `n8n` → JSON-flows (eksporterbare)

- `scripts` → Eksportskript (Directus schema, n8n, pages)

- `tools/mcp-server` → Minimal MCP shim (Directus read-only, n8n trigger)

- `content` → Eksporterte sider, wiki, pitch

- `branding` → Logoer, farger, typografi

Se også:

- [`PROJECT_STRUCTURE.md`](https://chatgpt.com/g/g-p-68af13dc28f88191bd022cfa4759b81a-project-farewell/c/PROJECT_STRUCTURE.md)

- [`ROADMAP.md`](https://chatgpt.com/g/g-p-68af13dc28f88191bd022cfa4759b81a-project-farewell/c/ROADMAP.md)

- [`DEPLOY_LIGHT.md`](https://chatgpt.com/g/g-p-68af13dc28f88191bd022cfa4759b81a-project-farewell/c/DEPLOY_LIGHT.md)

---

## 🧭 Roadmap

- **0.1 Foundation** ✅ – base stack, schema, flows, PII-API

- **0.2 MVP Demo** 🎯 – upload→analyse→rapport, complaint builder, trust pages

- **0.3 Pilot** 🧪 – NGO-partnerskap, pro-portal, observability, audit export

- **1.0 Prod** 🚀 – Civic Dev Kit, dashboards, community portal, partner-integrasjoner

Detaljer: se [`ROADMAP.md`](https://chatgpt.com/g/g-p-68af13dc28f88191bd022cfa4759b81a-project-farewell/c/ROADMAP.md)

---

## 🤝 Bidra

Vi tar gjerne imot bidrag!

- Issues: feil, ideer, forslag

- Pull requests: nye blokker, flows, dokumentasjon

---

## 📜 Lisens

MIT License – se [`LICENSE`](https://chatgpt.com/g/g-p-68af13dc28f88191bd022cfa4759b81a-project-farewell/c/LICENSE) (kommer).

---

LexiNAV er et **Project-FareWell** initiativ 🌍
