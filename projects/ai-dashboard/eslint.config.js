// Minimal ESLint flat config to enable ESLint v9
// Lints JS/JSX files; extend later if TS is added.

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    ignores: ['node_modules', 'dist', 'build', '.husky'],
  },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    rules: {},
  },
]
