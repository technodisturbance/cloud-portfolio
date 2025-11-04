# Troubleshoot Log

## <short title>

Symptom:
Context:
Hypotheses:
Tests:
Root cause:
Fix:
Prevention:
Links:

## ESLint 9 pre-commit failure

Symptom: husky pre-commit failed: "ESLint couldn't find an eslint.config.\*"
Cause: ESLint v9 requires flat config; none existed. Lint-staged tried to run eslint on many file types.
Fix: Add eslint.config.mjs (JS-only), restrict lint-staged eslint to JS.
Prevention: Always add ESLint flat config before enabling pre-commit linting.

## Multiple lockfiles warning

Symptom: Next.js dev server logs: "Detected multiple lockfiles..."
Context: One lockfile at root, one inside `web/`.
Root cause: Next.js confused about workspace root.
Fix: Removed web/node_modules and lockfile; adopted npm workspace with single root lockfile.
Prevention: Use npm workspaces consistently; only one lockfile at root.
