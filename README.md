````markdown
# LexiNAV — NAV gjort menneskelig

LexiNAV er en åpen plattform som gjør NAV-systemet forståelig og tilgjengelig.  
Borgeren kan laste opp brev, få en forklaring på plikter og rettigheter, og bygge en klage på minutter.  
Prosjektet er bygd for å være **gjennomsiktig, GDPR-kompatibelt og uten vendor lock-in**.

---

## ✨ Hovedfunksjoner
- **Upload → Analyse → Rapport** – OCR + LLM + Directus + visning i web-app.
- **Complaint Builder** – guidet skjema som genererer klageutkast (PDF).
- **Wiki/Docs** – inline-redigering (TinaCMS).
- **Trust & Safety** – PII-API med kryptering, consent, audit.
- **Exportable by design** – schema, flows, sider i Git.

---

## 🏗️ Tech Stack
- **Frontend:** Next.js 14 (React + TS), Storybook, Zod
- **Backend:** Fastify + Prisma (PII-API, kryptert)
- **CMS/Data:** Directus (Postgres)
- **Automation:** n8n
- **Storage:** MinIO
- **AI:** Ollama (lokal LLM)
- **Infra:** Docker Compose

---

## 🚀 Kom i gang (lokalt)
```bash
cd infra && docker compose up -d
cd services/pii-api && npm i && npx prisma migrate dev && npm run dev
cd apps/web && npm i && npm run dev
````

* n8n → [http://localhost:5678](http://localhost:5678)
* Directus → [http://localhost:8055](http://localhost:8055)
* Web → [http://localhost:3000](http://localhost:3000)

---

📂 Strukturen:

* `apps/web` → frontend
* `apps/docs` → wiki
* `services/pii-api` → Fastify/Prisma
* `infra` → Docker stack
* `n8n` → flows (JSON)
* `scripts` → eksportskript
* `tools/mcp-server` → MCP shim
* `content` → sider, wiki
* `branding` → logo, farger

---

## 🤝 Bidra

Se [CONTRIBUTING.md](CONTRIBUTING.md)

## 📜 Lisens

Se [LICENSE](LICENSE)

## 🔐 Sikkerhet

Se [SECURITY.md](SECURITY.md)

## 👥 Samfunn

Se [CODE\_OF\_CONDUCT.md](CODE_OF_CONDUCT.md)

LexiNAV er et Project-FareWell initiativ 🌍

---

[![Sponsor](https://img.shields.io/badge/Sponsor-LexiNAV-black?logo=github-sponsors)](https://github.com/sponsors/lexinav)
[![Open Collective](https://img.shields.io/opencollective/all/lexinav)](https://opencollective.com/lexinav)
[![Ko-fi](https://img.shields.io/badge/Ko%E2%80%91fi-Support-00B9FE)](https://ko-fi.com/lexinav)
