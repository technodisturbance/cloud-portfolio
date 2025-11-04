# Learning Log

## YYYY-MM-DD

Goal:
Changes:
Problems:
Diagnosis:
Fix:
Prevention:
Next step:

## 2025-09-13

Goal: Scaffold AI dashboard repo with Next.js app and base tooling.
Changes: Initialized git repo, added editorconfig, prettier, husky, lint-staged, commitlint, ESLint flat config, and VS Code settings. Scaffolded Next.js app in `web/`.
Problems: Husky pre-commit failed due to ESLint 9 flat config requirement; multiple lockfile warning.
Diagnosis: ESLint 9 requires flat config; Next.js warned because root and web both had lockfiles.
Fix: Added `eslint.config.mjs` (minimal JS-only), switched to npm workspace layout with root lockfile.
Prevention: Start with ESLint config before enabling lint hooks; standardize on single workspace lockfile.
Next step: Wire Supabase local and display seeded rows.
