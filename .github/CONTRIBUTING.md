```markdown
# Contributing to LexiNAV

Takk for at du vurderer å bidra 🚀

LexiNAV er et åpent prosjekt under **Project-FareWell**. Målet er å bygge en åpen, auditerbar plattform for å gjøre NAV-systemet forståelig for alle.

---

## Hvordan bidra
- **Issues** → Bruk [GitHub Issues] for å rapportere feil, foreslå funksjoner eller starte en diskusjon.
- **Pull Requests** → Vi setter pris på forslag til forbedringer. Følg retningslinjene under.

---

## Pull Request Guidelines
1. Lag en **branch** fra `main`:
   ```bash
   git checkout -b feature/my-feature
   
2. Skriv klar og presis commit-melding (engelsk eller norsk går fint).
  
3. Sørg for at koden kjører lokalt og at tester/docs oppdateres.
  
4. Åpne en PR → beskriv *hva* du har gjort og *hvorfor*.
```
---

## Coding Style

- **TypeScript / React**: bruk `eslint` og `prettier` (standardoppsett).
  
- **API (Fastify/Prisma)**: typed errors via `neverthrow`, validering via `Zod`.
  
- **n8n**: alle flows skal eksporteres til JSON og legges under `/n8n/`.
  
- **Filer er sannhet**: eksporter alltid schema, flows og pages til Git.
  

---

## Community Guidelines

- Vær respektfull og inkluderende.
  
- Forklar beslutninger og vær åpen for diskusjon.
  
- Husk at målet er å gjøre NAV mer menneskelig – for alle.
  

---

Velkommen til å bidra 💙