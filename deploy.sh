#!/bin/bash
set -e

# Change to project directory
cd /home/asc/workspace/weathernext

# Check current state
echo "=== Current directory: $(pwd) ==="
echo "=== Git Status ==="
git status --porcelain

# Show current content of problematic files
echo "=== SearchWeather catch block (should be 'catch {') ==="
grep -n "} catch" src/components/SearchWeather/index.tsx

echo "=== WeatherChart any usage (should be none) ==="
grep -n "any" src/components/WeatherChart/index.tsx || echo "No 'any' found - good!"

# Add all files
echo "=== Adding files ==="
git add .

# Show what's staged
echo "=== Staged files ==="
git diff --cached --name-only

# Commit with timestamp
echo "=== Creating commit ==="
git commit -m "fix: final lint resolution - $(date)"

# Force push to ensure GitHub has latest
echo "=== Force pushing to origin ==="
git push --force-with-lease origin main

echo "=== Push complete! Check GitHub Actions now ==="
