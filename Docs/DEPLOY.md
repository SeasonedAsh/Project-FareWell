# LexiNAV Release 0.1 — Deploy Guide

**Target shape (prod):**

- Web (Next.js): Vercel
- Data/Flows: self-hosted VPS (EU/EEA): Directus, n8n, MinIO, Postgres, PII-API

## 1) Infra (VPS)

```
cd infra
cp .env.example .env
docker compose up -d
```

- Directus: http://<server>:8055
- n8n:      http://<server>:5678
- MinIO:    http://<server>:9001
- Mailpit:  http://<server>:8025
- PII-API:  http://<server>:4000

## 2) Directus

- Admin login (from .env), change password.
- Import **infra/directus-schema/snapshot.json** (Data Model → Apply snapshot).
- Create API user & static token; grant `pages/fragments` read/write.

## 3) Web (Vercel)

- Set env in project:
     - `NEXT_PUBLIC_DIRECTUS_URL=https://api.lexinav.no/directus` (or your VPS URL)
     - `DIRECTUS_TOKEN=<static token>`
     - `EDITOR_TOKEN=<random long string>`
     - Optional: `N8N_SUBSCRIBE_WEBHOOK_URL=https://flows.lexinav.no/webhook/subscribe-webhook`
- Deploy → test `/editor/home` (requires `EDITOR_TOKEN`) and public `/`.

## 4) PII-API

```
cd services/pii-api
cp .env.example .env
# set DATABASE_URL (schema=pii), SODIUM_KEY_HEX (32-byte hex), KEY_ID
npm i
npx prisma migrate deploy
```

Route public forms (subscribe/contact) to this API. Never store PII in Directus.

## 5) n8n

- Import workflows from `/n8n/*.json`:
     - `Subscribe → Mail`
     - `Delete Request → PII API`
     - `Subject Access Export`
     - `Retention Cleanup (cron)`
     - `Document Intake → OCR → LLM → Index` (wire OCR/LLM/Search envs)

## 6) Docs (MDX + TinaCMS)

```
cd apps/docs
cp .env.local.example .env.local
npm i
npm run build
```

(Deploy to Vercel or Netlify as static Next app if desired.)

## 7) Security hardening

- Put admin/editor behind Tailscale/WireGuard.
- TLS everywhere (Caddy/Traefik).
- Rotate secrets with SOPS/age or vault.
- Enable Sentry + CI scans (Semgrep/Gitleaks/Trivy).

## 8) Exports to Git (files are truth)

```
node scripts/export-directus.mjs
node scripts/export-n8n.mjs
node scripts/export-pages.mjs
```

— Generated 2025-08-27T13:50:39.010309Z
