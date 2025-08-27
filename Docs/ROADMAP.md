# LexiNAV Roadmap (v2)

## ✅ Status — Release 0.1
- Next.js web (blocks + editor-loop), Docs (MDX + TinaCMS).
- Directus schema snapshot (pages, fragments).
- PII-API (Fastify + Prisma) med libsodium feltkryptering.
- n8n-flows: subscribe, delete, retention, SAR (export), intake-ocr-llm (skisse).
- CI skeleton: Semgrep, Gitleaks, Trivy.
- Branding & wiki.

---

## 🎯 Release 0.2 — MVP Demo (pitchable)
**Mål:** lexinav.no live, end-to-end demo: Upload → Analyse → Rapport + Complaint draft.

### Infra & Deploy
- [ ] VPS: docker compose (Directus, n8n, MinIO, PII-API, Postgres).
- [ ] Vercel: deploy `apps/web` (+ `apps/docs` hvis ønskelig).
- [ ] Directus: importer snapshot, opprett API-token.

### Citizen Journey
- [ ] Upload → webhook (n8n) → OCR/Tika → LLM (Ollama) → write-back til Directus.
- [ ] Web: resultatside (“Analysis Report”: deadlines, anbefalinger).
- [ ] Complaint builder: skjema + AI-hjelp → generer PDF (MVP-template).

### Frontend polish
- [ ] Hero + Strapi-lignende nav (EcosystemOverview).
- [ ] Trust & Safety (GDPR, audit, status).
- [ ] About/FAQ (fra wiki).

### Trust & Compliance
- [ ] Consent/Audit wired i PII-API (neverthrow + idempotency).
- [ ] Aktiver GDPR-flows i n8n (subject access/delete/retention).
- [ ] Proof bundle: kjør scripts/export-* og commit til Git.

### Go-live
- [ ] E2E test på domene, screenshots → pitch-deck.
- [ ] Intern demo-video (valgfritt).

---

## 🧪 Release 0.3 — Pilot
- Pro portal (beta) via Directus-roller.
- Meili/Qdrant adapters i resolver v2 (env-toggle).
- Observability: Sentry + OpenTelemetry (web, API, n8n webhooks).
- Audit report export (PDF).
- SSO: Keycloak/BankID pilot.

---

## 🚀 Release 1.0 — Full Prod
- Civic Dev Kit (API/SDK) + partnerintegrasjoner (Digdir/NAV/NGO).
- Policy dashboards (anonymisert innsikt).
- Community-portal.
- Key-rotation (KMS), Kubernetes/Terraform for drift.
