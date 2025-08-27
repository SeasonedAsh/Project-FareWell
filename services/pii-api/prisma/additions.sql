-- Apply via migration: consent_events, audit_events, retention_policies, dlq, idempotency
-- Example SQL (if not using Prisma models yet):

CREATE TABLE IF NOT EXISTS consent_events (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  subject_hash text NOT NULL,
  purpose text NOT NULL,
  granted boolean NOT NULL,
  at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS audit_events (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  subject_hash text,
  actor text,
  action text NOT NULL,
  detail jsonb,
  at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS retention_policies (
  id serial PRIMARY KEY,
  collection text NOT NULL,
  months int NOT NULL DEFAULT 12
);

CREATE TABLE IF NOT EXISTS dlq (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  workflow text NOT NULL,
  payload jsonb,
  reason text,
  retries int DEFAULT 0,
  at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS idempotency_keys (
  key text PRIMARY KEY,
  created_at timestamptz DEFAULT now()
);
