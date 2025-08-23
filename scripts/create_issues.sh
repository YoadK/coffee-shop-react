#!/usr/bin/env bash
# Usage: ./create_issues.sh owner repo
set -euo pipefail
OWNER="${1:-YoadK}"
REPO="${2:-coffee-shop-react}"

# Requires GitHub CLI: https://cli.github.com/
# Ensure you are authenticated: gh auth login

gh issue create --repo "$OWNER/$REPO" --title "Initialize repo & main branch" --body "Ensure default branch is 'main'; remove 'master' if present.

**Status:** To Do
**Priority:** P1
**Size:** S" --label "setup,git"
gh issue create --repo "$OWNER/$REPO" --title "Add README and badges" --body "README is finalized. Add build/status badges once CI is set.

**Status:** To Do
**Priority:** P3
**Size:** XS" --label "docs"
gh issue create --repo "$OWNER/$REPO" --title "Add .env.example & .gitignore" --body "Keep secrets out of git; commit .env.example.

**Status:** Done
**Priority:** P1
**Size:** XS" --label "security,setup"
gh issue create --repo "$OWNER/$REPO" --title "Add CI workflow" --body "GitHub Actions: Node 20, `npm ci`, `npm run build` on push/PR.

**Status:** To Do
**Priority:** P2
**Size:** S" --label "ci"
gh issue create --repo "$OWNER/$REPO" --title "Products: browse tab" --body "Grid cards with name, price, optional category. Search + reset.

**Status:** In Progress
**Priority:** P1
**Size:** M" --label "frontend,products"
gh issue create --repo "$OWNER/$REPO" --title "Products: add tab" --body "Form: name, price, category(optional). Validate and POST.

**Status:** In Progress
**Priority:** P1
**Size:** M" --label "frontend,products"
gh issue create --repo "$OWNER/$REPO" --title "Products: empty & error states" --body "Show friendly empty state; clear error messages.

**Status:** To Do
**Priority:** P2
**Size:** S" --label "frontend,ux"
gh issue create --repo "$OWNER/$REPO" --title "Products: loading skeletons" --body "Add skeleton placeholders for cards.

**Status:** To Do
**Priority:** P3
**Size:** S" --label "frontend,ux"
gh issue create --repo "$OWNER/$REPO" --title "Cart: local state" --body "Implement cart add/remove/quantity in React state.

**Status:** To Do
**Priority:** P1
**Size:** M" --label "frontend,cart"
gh issue create --repo "$OWNER/$REPO" --title "Cart: badge & mini cart" --body "Navbar badge with quantity; slide-over mini cart.

**Status:** To Do
**Priority:** P2
**Size:** M" --label "frontend,cart,ux"
gh issue create --repo "$OWNER/$REPO" --title "Auth: login/logout UI" --body "Public user login form; store token securely.

**Status:** To Do
**Priority:** P1
**Size:** M" --label "frontend,auth"
gh issue create --repo "$OWNER/$REPO" --title "Auth: persistent session" --body "Keep user logged in across refresh via secure storage.

**Status:** To Do
**Priority:** P1
**Size:** S" --label "frontend,auth"
gh issue create --repo "$OWNER/$REPO" --title "Admin: products CRUD" --body "List, create, edit, delete with optimistic updates.

**Status:** To Do
**Priority:** P1
**Size:** L" --label "frontend,admin,products"
gh issue create --repo "$OWNER/$REPO" --title "API: env-driven base URL" --body "Use VITE_API_URL; error handling and timeouts.

**Status:** Done
**Priority:** P1
**Size:** XS" --label "api"
gh issue create --repo "$OWNER/$REPO" --title "API: search endpoint" --body "Support `q` param; sanitize input client-side.

**Status:** In Progress
**Priority:** P2
**Size:** S" --label "api,backend"
gh issue create --repo "$OWNER/$REPO" --title "API: create product endpoint" --body "Validate name and price; return created item.

**Status:** In Progress
**Priority:** P1
**Size:** S" --label "api,backend"
gh issue create --repo "$OWNER/$REPO" --title "TypeScript cleanup" --body "Tighten types; avoid `any`; reusable Product type.

**Status:** To Do
**Priority:** P3
**Size:** S" --label "quality,typescript"
gh issue create --repo "$OWNER/$REPO" --title "Prettier & ESLint" --body "Add lint & format scripts; pre-commit hook (optional).

**Status:** To Do
**Priority:** P3
**Size:** S" --label "quality,lint"
gh issue create --repo "$OWNER/$REPO" --title "Basic tests" --body "Add a couple of vitest/react-testing-library tests.

**Status:** To Do
**Priority:** P3
**Size:** M" --label "quality,tests"
gh issue create --repo "$OWNER/$REPO" --title "Add screenshots/GIF" --body "Add UI screenshots to README for recruiters.

**Status:** To Do
**Priority:** P3
**Size:** XS" --label "docs,ux"
gh issue create --repo "$OWNER/$REPO" --title "Contributing guide" --body "Add simple CONTRIBUTING.md and commit message conventions.

**Status:** To Do
**Priority:** P4
**Size:** S" --label "docs"