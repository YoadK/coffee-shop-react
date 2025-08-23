#!/usr/bin/env bash
# Usage: ./create_labels.sh owner repo
# Example: ./create_labels.sh YoadK coffee-shop-react

set -euo pipefail

OWNER="${1:-YoadK}"
REPO="${2:-coffee-shop-react}"

# Array of "label|color|description"
LABELS=(
  "setup|0366d6|Repo setup and configuration"
  "docs|a2eeef|Documentation updates"
  "security|d73a4a|Security related work"
  "ci|7057ff|Continuous integration & workflows"
  "frontend|fbca04|Frontend UI work"
  "products|0e8a16|Product features"
  "ux|cfd3d7|User experience improvements"
  "cart|5319e7|Shopping cart features"
  "auth|d876e3|Authentication & user accounts"
  "admin|1d76db|Admin tools and dashboards"
  "api|0052cc|API-related tasks"
  "backend|5319e7|Backend/server work"
  "quality|e99695|Quality & cleanup"
  "typescript|2b7489|TypeScript typings"
  "lint|bfdadc|Linting & formatting"
  "tests|bfe5bf|Automated testing"
)

for entry in "${LABELS[@]}"; do
  IFS="|" read -r name color desc <<< "$entry"
  echo "Creating label: $name"
  gh label create "$name" \
    --repo "$OWNER/$REPO" \
    --color "$color" \
    --description "$desc" || echo "Label $name already exists, skipping"
done
