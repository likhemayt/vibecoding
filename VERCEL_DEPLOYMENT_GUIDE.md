# Vercel Deployment Guide - VibeCoding

**Objective:** Deploy the Next.js starter template to Vercel and test CI/CD pipeline  
**Time Required:** ~30 minutes  
**Status:** Ready to deploy

---

## Prerequisites

Before deploying, you'll need:

- ✅ GitHub account (free tier is fine)
- ✅ Vercel account (connected to GitHub)
- ✅ Next.js starter template (we have this)
- ✅ GitHub repository (needs to be created)

---

## Step 1: Create GitHub Repository

### Option A: Using GitHub Web Interface

1. Go to https://github.com/new
2. **Repository name:** `vibecoding-starter` (or your preferred name)
3. **Description:** "VibeCoding Next.js Starter Template"
4. **Visibility:** Public (for Vercel to access)
5. **Initialize:** Don't add README/gitignore (we'll push ours)
6. Click **Create repository**

### Option B: Using GitHub CLI

```bash
gh repo create vibecoding-starter --public --source=. --remote=origin --push
```

---

## Step 2: Push Code to GitHub

From your local machine:

```bash
cd "D:\Downloads\Impact\RnD\VibeCoding\AI Coder"

# Initialize git repo (if not already done)
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: VibeCoding agency framework with Phase 1-3 complete"

# Add GitHub remote (replace USERNAME with your GitHub username)
git remote add origin https://github.com/USERNAME/vibecoding-starter.git

# Push to GitHub
git branch -M main
git push -u origin main
```

---

## Step 3: Create Vercel Project - Staging

1. Go to https://vercel.com/new
2. **Import from Git:** Select your GitHub repository
3. **Project name:** `vibecoding-staging`
4. **Framework preset:** Next.js (auto-detected)
5. **Root Directory:** `./templates/project-templates/nextjs-starter`
6. **Environment Variables:** (add these)
   - `NEXT_PUBLIC_SITE_URL` = `https://vibecoding-staging.vercel.app`
   - `NEXT_PUBLIC_API_URL` = `https://api-staging.example.com` (adjust as needed)
7. **Deploy!**

**Save these IDs:**
- Vercel Organization ID (from account settings)
- Vercel Project ID for staging (from project settings)

---

## Step 4: Create Vercel Project - Production

1. Go to https://vercel.com/new again
2. **Import from Git:** Same repository
3. **Project name:** `vibecoding-prod`
4. **Root Directory:** `./templates/project-templates/nextjs-starter`
5. **Environment Variables:**
   - `NEXT_PUBLIC_SITE_URL` = `https://vibecoding.example.com`
   - `NEXT_PUBLIC_API_URL` = `https://api.example.com`
6. **Deploy!**

**Save:**
- Vercel Project ID for production

---

## Step 5: Generate Vercel API Token

1. Go to https://vercel.com/account/tokens
2. Click **Create Token**
3. **Name:** `GitHub Actions`
4. **Scope:** Full Account
5. Copy the token (you'll only see it once!)

---

## Step 6: Configure GitHub Secrets

In your GitHub repository:

1. Go to **Settings** → **Secrets and variables** → **Actions**
2. Click **New repository secret** and add these:

| Secret Name | Value |
|------------|-------|
| `VERCEL_TOKEN` | Token from Step 5 |
| `VERCEL_ORG_ID` | Your Vercel Organization ID |
| `VERCEL_STAGING_PROJECT_ID` | Staging project ID from Step 3 |
| `VERCEL_PRODUCTION_PROJECT_ID` | Production project ID from Step 4 |
| `STAGING_SITE_URL` | `https://vibecoding-staging.vercel.app` |
| `STAGING_API_URL` | (match your setup) |
| `NEXT_PUBLIC_SITE_URL` | `https://vibecoding.example.com` |
| `NEXT_PUBLIC_API_URL` | (match your setup) |

---

## Step 7: Copy GitHub Workflows

Copy the workflow files from our template to your repository:

```bash
# From your local repo root
mkdir -p .github/workflows

# Copy workflow files
cp infrastructure/github/workflows/*.yml .github/workflows/
```

Then commit and push:

```bash
git add .github/workflows/
git commit -m "Add GitHub Actions CI/CD workflows"
git push origin main
```

---

## Step 8: Test the Deployment Pipeline

### Test 1: Trigger Test & Lint

1. Go to your GitHub repository
2. Go to **Actions** tab
3. Select **Test and Lint** workflow
4. Click **Run workflow** → **Run workflow**
5. **Expected:** Should pass in ~2-3 minutes

### Test 2: Deploy to Staging

1. Create a new branch: `git checkout -b develop`
2. Make a small change (e.g., update README)
3. Commit and push: `git push origin develop`
4. GitHub should automatically trigger **Deploy to Staging**
5. **Expected:** Staging URL should be available in a few minutes

### Test 3: Deploy to Production

1. Create a pull request: `develop` → `main`
2. **Verify:** Test & Lint passes
3. Merge the PR to `main`
4. **Deploy to Production** should trigger automatically
5. **Expected:** Production deployment in a few minutes

---

## Step 9: Verify Deployments

### Check Vercel Dashboard

1. Go to https://vercel.com/dashboard
2. Click on `vibecoding-staging` project
3. **Verify:** Recent deployment succeeded
4. Click on the deployment URL to test live site

Repeat for production project.

### Check GitHub Actions

1. Go to your repository → **Actions**
2. **Verify:** All workflow runs show green checkmarks
3. Check logs if any failed

---

## Troubleshooting

### Workflow Fails: "Command not found: tsc"

**Solution:** This is the Windows PATH issue we fixed. In the runner environment (Linux), this shouldn't happen.

### Vercel Deployment Fails: Build Error

**Check:**
1. Does `npm install` work locally? (Yes ✓)
2. Does `npm run build` work locally? (Has SWC issue on Windows, but code is valid)
3. On Vercel's Linux environment, this should work fine

### Secrets Not Found

**Check:**
1. Secret names match exactly (case-sensitive)
2. Secrets are in the correct repository (not org-level)
3. Workflows can access secrets (should be automatic)

---

## Success Criteria

✅ All checks should pass:

- [ ] GitHub repository created and code pushed
- [ ] Vercel staging project created and deployed
- [ ] Vercel production project created
- [ ] GitHub secrets configured
- [ ] GitHub workflows copied to `.github/workflows/`
- [ ] Test & Lint workflow runs successfully
- [ ] Staging deployment succeeds
- [ ] Production deployment succeeds
- [ ] Live URL responds with VibeCoding starter site

---

## What's Next After Deployment

Once deployments are working:

1. **Test the CI/CD pipeline** with real changes
2. **Verify branch protection rules** (require PR reviews)
3. **Monitor Vercel dashboard** for performance
4. **Test Slack notifications** (if configured)
5. **Build Phase 3 remaining templates** (Landing, SaaS, Blog)

---

## Commands Reference

```bash
# Initialize local git repo
git init
git add .
git commit -m "Initial commit"

# Add GitHub remote
git remote add origin https://github.com/USERNAME/vibecoding-starter.git
git push -u origin main

# Create develop branch
git checkout -b develop
git push origin develop

# Create feature branch
git checkout -b feature/your-feature
git push origin feature/your-feature

# Create PR (via GitHub web or CLI)
gh pr create --base main --head develop
```

---

**Ready to deploy?** Start with Step 1! 🚀
