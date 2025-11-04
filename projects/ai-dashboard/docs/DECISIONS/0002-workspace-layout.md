# 0002: Adopt npm workspace layout

Status: Accepted
Context: Had conflicting lockfiles at root and web/.
Decision: Use npm workspaces with root lockfile and `workspaces: ["web"]`.
Consequences: One lockfile, clearer toolchain integration, easier multi-package growth.
