# Troubleshooting Guide

This document contains solutions to common issues encountered in this repository.

## Table of Contents
- [Package Manager & Lockfile Issues](#package-manager--lockfile-issues)
  - [Vercel Deployment: Frozen Lockfile Error](#vercel-deployment-frozen-lockfile-error)

---

## Package Manager & Lockfile Issues

### Vercel Deployment: Frozen Lockfile Error

**Error Message:**
```
ERR_PNPM_OUTDATED_LOCKFILE  Cannot install with "frozen-lockfile" because pnpm-lock.yaml is not up to date with package.json

Note that in CI environments this setting is true by default. If you still need to run install in such cases, use "pnpm install --no-frozen-lockfile"

Failure reason:
specifiers in the lockfile (...) don't match specs in package.json (...)
```

#### Root Cause

This error occurs when:
1. You have both `package-lock.json` (npm) and `pnpm-lock.yaml` (pnpm) in your repository
2. You update dependencies using `npm install` locally
3. Vercel detects `pnpm-lock.yaml` and tries to use pnpm for deployment
4. The pnpm lockfile is now out of sync with `package.json`

#### Why This Happens

- **Vercel auto-detects package managers** by looking for lockfiles in this priority order:
  1. `pnpm-lock.yaml` → uses pnpm
  2. `yarn.lock` → uses yarn
  3. `package-lock.json` → uses npm
  4. `bun.lockb` → uses bun

- **Having multiple lockfiles causes conflicts** because different package managers generate different lockfile formats

- **CI environments use `--frozen-lockfile`** by default, which means they will fail if the lockfile doesn't exactly match package.json

#### Solution

You must use **one package manager consistently**. This repository uses **pnpm**.

**Step 1: Install pnpm globally (if not already installed)**
```bash
npm install -g pnpm
```

**Step 2: Verify pnpm installation**
```bash
pnpm --version
```

**Step 3: Update the pnpm lockfile**
```bash
pnpm install
```

**Step 4: Remove the npm lockfile**
```bash
rm package-lock.json
```

**Step 5: Commit and push**
```bash
git add pnpm-lock.yaml package-lock.json
git commit -m "fix: update pnpm-lock.yaml and remove package-lock.json"
git push
```

**Step 6: Verify deployment**
- Push triggers automatic deployment on Vercel
- Check the build logs to confirm successful deployment

#### Prevention

**Always use pnpm for this repository:**

```bash
# Instead of: npm install
pnpm install

# Instead of: npm install <package>
pnpm add <package>

# Instead of: npm install -D <package>
pnpm add -D <package>

# Instead of: npm uninstall <package>
pnpm remove <package>

# Run scripts the same way
pnpm dev
pnpm build
pnpm start
```

#### Alternative Solution: Switch to npm Only

If you prefer to use npm instead of pnpm:

```bash
# Remove pnpm lockfile
rm pnpm-lock.yaml

# Ensure npm lockfile is up to date
npm install

# Commit and push
git add pnpm-lock.yaml package-lock.json
git commit -m "fix: remove pnpm-lock.yaml, use npm only"
git push

# Add packageManager field to package.json to force npm
# Add this to package.json:
{
  "packageManager": "npm@10.0.0"
}
```

**Note:** The original portfolio template uses pnpm, so staying with pnpm is recommended for consistency.

#### Quick Reference: Package Manager Commands

| Task | npm | pnpm |
|------|-----|------|
| Install all dependencies | `npm install` | `pnpm install` |
| Add a dependency | `npm install <pkg>` | `pnpm add <pkg>` |
| Add a dev dependency | `npm install -D <pkg>` | `pnpm add -D <pkg>` |
| Remove a dependency | `npm uninstall <pkg>` | `pnpm remove <pkg>` |
| Update dependencies | `npm update` | `pnpm update` |
| Run a script | `npm run <script>` | `pnpm <script>` |
| Check outdated packages | `npm outdated` | `pnpm outdated` |

---

## Additional Notes

### Lockfile Version Compatibility

- **pnpm-lock.yaml lockfileVersion 6.0** = pnpm v8.x
- **pnpm-lock.yaml lockfileVersion 9.0** = pnpm v10.x

If you upgrade pnpm major versions, the lockfile format will automatically migrate when you run `pnpm install`.

### Vercel Build Configuration

This repository is optimized for Vercel deployment:
- Portfolio Site: Standard Next.js deployment
- AI Dashboard: Uses standalone output mode for containerization
- Both projects use Vercel Analytics and Speed Insights

### Getting Help

If you encounter other deployment issues:
1. Check Vercel build logs for specific error messages
2. Verify your Node.js version matches the project requirements (Node.js 20.x+)
3. Ensure all environment variables are properly configured in Vercel dashboard
4. Check the [Vercel Documentation](https://vercel.com/docs) for platform-specific issues
