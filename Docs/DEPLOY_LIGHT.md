````markdown
# DEPLOY.md (Light)

Quickstart for lokal oppstart + Vercel deploy.

## 1) Infra
```bash
cd infra
cp .env.example .env
docker compose up -d
````

## 2) Directus

- Admin login.
  
- Importer `infra/directus-schema/snapshot.json`.
  
- Opprett API-bruker og hent static token.
  

## 3) PII-API

```bash
cd services/pii-api
cp .env.example .env
npm i
npx prisma migrate dev
npm run dev
```

## 4) n8n

- Gå til [http://localhost:5678](http://localhost:5678/)
  
- Importer alle flows i `/n8n`.
  

## 5) Web (Next.js)

```bash
cd apps/web
cp .env.local.example .env.local
npm i
npm run dev
```

- Test `/`, `/editor/home`.

Deploy til Vercel → sett `NEXT_PUBLIC_DIRECTUS_URL`, `DIRECTUS_TOKEN`, `EDITOR_TOKEN`.

## 6) Docs

```bash
cd apps/docs
npm i
npm run dev
```

---

Generert: 2025

````
---

# 📄 `CHECKLIST_MVP.md`
```markdown
# CHECKLIST_MVP.md — Release 0.2

## Infra
- [ ] Compose up i `infra/`
- [ ] Directus: import snapshot + token
- [ ] PII-API: migrer + start
- [ ] n8n: importer flows

## Web
- [ ] Sett env i `.env.local` (URL/token)
- [ ] Hero + Nav (EcosystemOverview)
- [ ] Trust & Safety / About / FAQ
- [ ] Resultatside for analyse

## Journey
- [ ] Upload endpoint (til n8n webhook)
- [ ] OCR/Tika node
- [ ] LLM/Ollama node
- [ ] Write-back til Directus
- [ ] UI: vis rapport
- [ ] Complaint builder → PDF

## Compliance
- [ ] Consent/Audit i PII-API
- [ ] GDPR-flows i n8n
- [ ] Eksport scripts → Git

## Go-live
- [ ] E2E test på domene
- [ ] Screenshots
- [ ] Demo-video
````

---