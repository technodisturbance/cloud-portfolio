# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Architecture

This is a **dual-purpose monorepo** containing:

1. **Portfolio Site** (root level): A Next.js-based portfolio and blog platform
2. **AI Dashboard Project** (`/projects/ai-dashboard`): A separate Next.js 15 application showcased in the portfolio

The architecture follows a **nested monorepo pattern** where:
- The root contains a complete Next.js portfolio application
- The `/projects` directory contains independent project codebases that are featured in the portfolio
- Projects are showcased via MDX content files in `/content/projects/` while maintaining their own separate codebases
- Each project can have its own build/deployment configuration and technology stack

## Technology Stack

### Portfolio Site (Root)
- Next.js (canary version) with App Router
- React 18.2.0
- TypeScript 5.3.3
- Tailwind CSS v4 (alpha)
- MDX support via next-mdx-remote
- Vercel Analytics & Speed Insights

### AI Dashboard Project
- Next.js 15.5.3 with App Router
- React 19.1.0
- TypeScript 5
- Tailwind CSS v4
- npm workspaces architecture
- Husky + lint-staged for git hooks
- ESLint 9 with flat config
- Prettier for code formatting
- Commitlint for conventional commits

## Common Commands

### Portfolio Site (Root)
```bash
# Development
npm run dev          # Start development server on http://localhost:3000

# Build & Deploy
npm run build        # Production build
npm start            # Start production server
```

### AI Dashboard Project
```bash
# Navigate to project first
cd projects/ai-dashboard

# Development
npm run dev          # Start development server (runs from ./web)

# Build & Deploy
npm run build        # Production build (runs from ./web)
npm start            # Start production server (runs from ./web)

# Code Quality
npm run lint         # Run ESLint on all files
npm run format       # Format all files with Prettier

# Git Hooks (automatic)
# Pre-commit: Auto-formats staged files with Prettier
# Commit-msg: Validates conventional commit format
```

**Note:** AI Dashboard uses npm workspaces. The actual Next.js app is in `./web`, but scripts at the root level delegate to it.

## Project Structure

### Root Portfolio
```
/
├── app/                    # Next.js App Router
│   ├── blog/              # Blog functionality
│   ├── projects/          # Projects showcase pages
│   ├── components/        # React components
│   ├── lib/              # Utilities (MDX parsing, blog logic)
│   └── og/               # Dynamic OG image generation
├── content/               # MDX content
│   └── projects/         # Project descriptions (metadata + showcase)
├── projects/             # Actual project codebases
│   └── ai-dashboard/     # Separate Next.js app with own workspace
└── package.json          # Root dependencies
```

### AI Dashboard Structure
```
projects/ai-dashboard/
├── web/                   # Next.js application (workspace package)
│   ├── src/app/          # App Router pages
│   ├── package.json      # App dependencies
│   ├── next.config.ts    # Standalone output enabled
│   └── vercel.json       # Deployment config with security headers
├── .husky/               # Git hooks (pre-commit, commit-msg)
├── docs/                 # Project documentation
├── eslint.config.js      # ESLint v9 flat config
├── commitlint.config.mjs # Conventional commit rules
└── package.json          # Workspace root with dev tooling
```

## Content Architecture

### MDX-Based Content System

The portfolio uses MDX for content management:

- **Blog posts:** `/app/blog/posts/*.mdx`
- **Project showcases:** `/content/projects/*.mdx`

**Project MDX Frontmatter Example:**
```yaml
---
title: "Project Name"
publishedAt: "2024-01-01"
summary: "Brief description"
tags: ["nextjs", "react", "typescript"]
state: "in-progress" | "completed"
repo: "https://github.com/username/repo"
---
```

The portfolio site parses this metadata to generate project cards and detail pages. The actual project codebase lives separately in `/projects/`.

## Key Configuration Files

### Portfolio Site
- `postcss.config.js` - Tailwind CSS v4 PostCSS plugin configuration
- `app/global.css` - Global styles with Tailwind v4 imports
- `tsconfig.json` - TypeScript configuration

### AI Dashboard
- `web/next.config.ts` - Standalone output mode for containerization, experimental workspace root tracing
- `web/vercel.json` - Security headers (CSP, X-Frame-Options, etc.)
- `eslint.config.js` - ESLint v9 flat config at workspace root
- `commitlint.config.mjs` - Enforces conventional commit format
- `.husky/pre-commit` - Runs lint-staged (Prettier auto-formatting)
- `.husky/commit-msg` - Validates commit message format

## Development Workflow

### Working on Portfolio Site
1. Make changes in `/app`, `/content`, or root-level files
2. Test with `npm run dev` from root
3. Commit changes (no special conventions required)

### Working on AI Dashboard
1. Navigate to `cd projects/ai-dashboard`
2. Make changes in `./web/src`
3. Test with `npm run dev`
4. Stage files: Pre-commit hook auto-formats with Prettier
5. Commit with conventional format: `feat: description`, `fix: description`, etc.
6. Commit-msg hook validates format

### Adding New Projects to Portfolio
1. Create project codebase in `/projects/new-project/`
2. Create MDX showcase file in `/content/projects/new-project.mdx` with frontmatter
3. The portfolio site will automatically discover and display it

## Code Quality & Git Hooks

The AI Dashboard project enforces code quality through automated hooks:

**Pre-commit:**
- Runs lint-staged on staged files
- Auto-formats with Prettier (TS, TSX, JS, JSX, JSON, MD, CSS)
- Runs ESLint with `--fix` on JS/JSX files

**Commit-msg:**
- Enforces conventional commit format
- Valid prefixes: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`, etc.
- Example: `feat: add user authentication`

**To bypass hooks (not recommended):**
```bash
git commit --no-verify
```

## Deployment

Both applications are optimized for Vercel:

- **Portfolio Site:** Standard Next.js deployment with Vercel Analytics/Speed Insights
- **AI Dashboard:** Standalone output mode enabled for containerization or independent deployment
- **Security:** AI Dashboard includes CSP, X-Frame-Options, and other security headers in `vercel.json`
- **SEO:** Both sites include sitemap, robots.txt, and JSON-LD schema

## Important Notes

- The portfolio uses **Tailwind CSS v4 alpha** - syntax and configuration differ from v3
- AI Dashboard uses **React 19** and **Next.js 15** - check compatibility when adding dependencies
- MDX parsing happens server-side using `next-mdx-remote`
- Syntax highlighting uses `sugar-high` (lightweight, no external dependencies)
- No test framework is currently configured in either project
