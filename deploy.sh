#!/bin/bash
set -e

# Change to project directory
cd /home/asc/workspace/weathernext

# Check git status
echo "=== Git Status ==="
git status

# Add all files
echo "=== Adding files ==="
git add .

# Check what will be committed
echo "=== Files to commit ==="
git diff --cached --name-only

# Commit if there are changes
if ! git diff --cached --quiet; then
  echo "=== Creating commit ==="
  git commit -m "fix: resolve all eslint errors definitively"
else
  echo "No changes to commit"
fi

# Push to origin
echo "=== Pushing to origin ==="
git push origin main

echo "=== Done! ==="
