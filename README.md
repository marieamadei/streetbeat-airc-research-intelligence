# AIRC Research Intelligence

Concept website and interactive product demo developed by Streetbeat for
Fondazione AIRC per la ricerca sul cancro.

The presentation uses verified public figures from AIRC’s 2025 Social Report
and official 2026 public signals. Opportunities, next best actions, risks and
alerts inside the workspace are explicitly labelled as illustrative scenarios.

## Routes

- `/` — product vision and sales presentation
- `/demo` — interactive AIRC Research Intelligence workspace

## Local development

Requires Node.js 22+ and pnpm.

```bash
pnpm install
pnpm run dev
pnpm test
pnpm run lint
```

## GitHub Pages

```bash
NEXT_PUBLIC_BASE_PATH=/streetbeat-airc-research-intelligence pnpm run build:pages
```

The workflow in `.github/workflows/deploy-pages.yml` deploys the static export
after every push to `main`.

## Sources and boundaries

- AIRC Bilancio Sociale 2025
- AIRC and IFOM official websites and public 2026 communications
- Streetbeat official logo and typography assets

This is a proposal concept, not an operational AIRC system. It does not perform
medical diagnosis or clinical decisioning, and does not require patient data.
Confirm image reuse rights before using official AIRC photography beyond the
sales prototype.
