Haha 😄 elsker navnet *Project-FareWell* – “farvel” til byråkratisk NAV-helvete → velkommen til et system folk faktisk kan forstå 👏

La oss lage en **Release Timeline** som du kan bruke internt (og til å holde fokus):

---

# 🚀 LexiNAV Release Timeline

### **Release 0.1 – Foundation (DONE, bundle lastet ned)**

* ✅ Next.js web (blocks, editor-loop)
* ✅ Directus schema snapshot (pages, fragments)
* ✅ PII-API (Prisma + libsodium feltkryptering)
* ✅ n8n workflows (subscribe, delete, retention, intake skeleton)
* ✅ Docs med TinaCMS (MDX inline editing)
* ✅ CI-skeleton (Semgrep/Gitleaks/Trivy)
* ✅ Branding (logo, wiki, sitemap)

→ Status: *ligger på din maskin, klar til å settes opp*

---

### **Release 0.2 – MVP Demo (Pitchable)**

**Mål:** få lexinav.no live og brukbar til demo/investorer/Digdir

* 🌐 **Deploy:**

  * VPS med Directus + n8n + MinIO + PII-API + Postgres
  * Vercel med web/docs
* 👤 **Citizen journey:**

  * Upload → Analyse → Rapport (OCR → LLM → Directus write-back → vis i UI)
  * Complaint builder → AI draft → PDF-export
* 🎨 **Frontend polish:** Hero, Nav (EcosystemOverview style), Trust & Safety, About/FAQ
* 🔒 **Compliance:** Consent + Audit events i PII-API, GDPR flows i n8n
* 📂 **Exports:** Directus schema + n8n flows + Page JSON til Git (proof bundle)
* 🎥 **Pitch readiness:** MVP-screenshots + demo-video (frivillig)

→ Status: *når dette er live → klar til å vise offentlig og søke støtte*

---

### **Release 0.3 – Pilot**

**Mål:** småskala bruk med faktiske borgere/proffe testere

* 🧑‍⚖️ **Pro portal (beta):** gi advokat/sosialarbeider enkel tilgang (via Directus roles)
* 📊 **Search/Insights:** aktiver Meilisearch/Qdrant for rask dokumentoppslag
* 🛡️ **Observability:** Sentry, OpenTelemetry traces, logg-policy
* 🧾 **Audit trails:** eksport som rapport (f.eks. PDF “audit proof”)
* 🔑 **Auth:** enkel SSO (Keycloak eller BankID pilot)

→ Status: *viser at plattformen kan brukes i feltet (f.eks. med NGO eller kommune)*

---

### **Release 1.0 – Full Prod**

**Mål:** full lansering, skalerbar arkitektur, partnerskap

* 🏛️ **Civic Dev Kit (CDK):** API + SDK for kommuner/NGOer
* 📈 **Policy dashboards:** anonymisert innsikt til forskere/politikere
* 🫂 **Community:** innsynsportal for borgere, feedbackloop
* 🔒 **Key management:** rotasjon via KMS, slette-policyer
* 🌍 **Scale-out:** Kubernetes/Terraform for redundans, multi-node Postgres
* 🧑‍🤝‍🧑 **Partnere:** Digdir, NAV selv, advokatforeninger, NGOer

---

👉 Jeg foreslår at vi holder all kommunikasjon mot utsiden på **0.2-MVP** (når lexinav.no er live). Internt jobber vi parallelt med 0.3-planen, men den trenger ikke “selges” før vi har traction.

---

Vil du at jeg nå lager en **kort PDF-style “Release 0.2 Scope”** (1–2 sider) du kan bruke som roadmap med hvem som helst (internt, familie, evt. samarbeidspartnere)?
