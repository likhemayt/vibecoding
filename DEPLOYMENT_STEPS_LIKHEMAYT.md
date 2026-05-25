# VibeCoding Deployment to Vercel
**GitHub Account:** https://github.com/likhemayt  
**Status:** Ready to deploy  
**Time:** ~30 minutes

---

## Your Setup Commands

Copy-paste these commands into PowerShell in order. Each section is independent.

### Step 1: Create Repository on GitHub

Go to https://github.com/new and create:
- **Repository name:** `vibecoding`
- **Description:** "VibeCoding Digital Agency - Production Framework"
- **Visibility:** Public
- **Initialize:** Leave empty (we'll push ours)

Then click **Create repository**.

---

### Step 2: Push Code to GitHub

Run these commands in PowerShell from the project directory:

```powershell
cd "D:\Downloads\Impact\RnD\VibeCoding\AI Coder"

# Add all files
git add .

# Commit
git commit -m "Initial commit: VibeCoding Phase 1-3 complete - Foundation, Templates, Components, Design System"

# Add your GitHub remote
git remote add origin https://github.com/likhemayt/vibecoding.git

# Create and push to main branch
git branch -M main
git push -u origin main
```

**Expected output:** Files uploading, "everything up-to-date" at the end.

---

### Step 3: Create Vercel Projects

#### Create Staging Project

1. Go to https://vercel.com/new
2. Click **Continue with GitHub**
3. Select `likhemayt/vibecoding` repository
4. **Project settings:**
   - **Project name:** `vibecoding-staging`
   - **Framework:** Next.js (auto-detected)
   - **Root Directory:** `templates/project-templates/nextjs-starter`
   - **Environment Variables:** Add these two:
     - Key: `NEXT_PUBLIC_SITE_URL` → Value: `https://vibecoding-staging.vercel.app`
     - Key: `NEXT_PUBLIC_API_URL` → Value: `https://api-staging.example.com`
   - Click **Deploy**

5. Wait for deployment to complete
6. Note down: **Vercel Project ID** (from Settings → General)

#### Create Production Project

1. Go back to https://vercel.com/new
2. Same steps as staging, but:
   - **Project name:** `vibecoding-prod`
   - **Environment Variables:**
     - `NEXT_PUBLIC_SITE_URL` → `https://vibecoding.vercel.app`
     - `NEXT_PUBLIC_API_URL` → `https://api.example.com`
   - Click **Deploy**

3. Note down: **Vercel Project ID** for production

---

### Step 4: Get Vercel API Token

1. Go to https://vercel.com/account/tokens
2. Click **Create Token**
3. **Name:** `github-actions`
4. **Scope:** Full Account
5. Click **Create**
6. **Copy the token immediately** (you won't see it again!)

**Save this somewhere safe** - you'll need it in the next step.

---

### Step 5: Add GitHub Secrets

Go to https://github.com/likhemayt/vibecoding/settings/secrets/actions

Click **New repository secret** and add these 8 secrets:

| Secret Name | Value | Example |
|------------|-------|---------|
| `VERCEL_TOKEN` | Your token from Step 4 | `abcd1234...` |
| `VERCEL_ORG_ID` | Your Vercel Org ID | Found at vercel.com/account/settings |
| `VERCEL_STAGING_PROJECT_ID` | From staging project | `prj_staging123` |
| `VERCEL_PRODUCTION_PROJECT_ID` | From production project | `prj_prod456` |
| `STAGING_SITE_URL` | Staging domain | `https://vibecoding-staging.vercel.app` |
| `STAGING_API_URL` | Staging API | `https://api-staging.example.com` |
| `NEXT_PUBLIC_SITE_URL` | Production domain | `https://vibecoding.vercel.app` |
| `NEXT_PUBLIC_API_URL` | Production API | `https://api.example.com` |

**Where to find your Vercel Org ID:**
1. Go to https://vercel.com/account/settings
2. Look for "ID" field - that's your Org ID

---

### Step 6: Copy GitHub Workflows

Run this in PowerShell:

```powershell
cd "D:\Downloads\Impact\RnD\VibeCoding\AI Coder"

# Create workflows directory
New-Item -ItemType Directory -Path ".github\workflows" -Force | Out-Null

# Copy workflow files
Copy-Item "infrastructure\github\workflows\*.yml" ".github\workflows\"

# Commit and push
git add .github
git commit -m "Add GitHub Actions CI/CD workflows for automated deployment"
git push origin main
```

**Verify:** Go to GitHub repo → Actions tab, you should see 4 workflows now.

---

## Testing the Pipeline

### Test 1: Run Test & Lint Workflow

1. Go to https://github.com/likhemayt/vibecoding
2. Click **Actions** tab
3. Select **Test and Lint** from the left
4. Click **Run workflow** → **Run workflow**
5. Wait ~2-3 minutes

**Expected:** Green checkmark ✅

### Test 2: Deploy to Staging

1. Create develop branch:
```powershell
git checkout -b develop
git push -u origin develop
```

2. Make a small test change:
```powershell
# Edit any file, e.g., README
git add .
git commit -m "Test deployment to staging"
git push origin develop
```

3. Go to GitHub Actions → Watch "Deploy to Staging" workflow
4. After success, get staging URL from Vercel dashboard

**Expected:** Green checkmark + Staging URL active

### Test 3: Deploy to Production

1. Create a pull request:
   - Go to https://github.com/likhemayt/vibecoding/compare/main...develop
   - Click **Create pull request**
   - Add title: "Deploy to production"
   - Click **Create pull request**

2. Verify checks pass (should take ~2-3 min)

3. Click **Merge pull request** → **Confirm merge**

4. Go to GitHub Actions → Watch "Deploy to Production" workflow

5. After success, check https://vibecoding.vercel.app (or your configured domain)

**Expected:** Green checkmark + Production site live

---

## Verification Checklist

Check these before considering deployment complete:

- [ ] Repository created at https://github.com/likhemayt/vibecoding
- [ ] All code pushed to main branch
- [ ] Two Vercel projects created (staging + prod)
- [ ] 8 GitHub secrets added
- [ ] 4 GitHub workflows visible in Actions tab
- [ ] Test & Lint workflow passes
- [ ] Staging deployment succeeds
- [ ] Staging URL accessible
- [ ] Production deployment succeeds
- [ ] Production URL accessible

---

## What's Live

Once you complete all steps:

✅ **https://vibecoding-staging.vercel.app** → Latest from `develop` branch  
✅ **https://vibecoding.vercel.app** → Production from `main` branch

Both auto-update whenever you push code!

---

## Next Steps

After deployment works:
1. Test making a change and watching it auto-deploy
2. Verify GitHub Actions runs on every push
3. Check Vercel performance dashboard
4. Then: Build Phase 3 remaining templates

---

## Quick Reference

**Your GitHub:** https://github.com/likhemayt/vibecoding  
**Your Vercel staging:** https://vibecoding-staging.vercel.app  
**Your Vercel production:** https://vibecoding.vercel.app  
**Workflow status:** https://github.com/likhemayt/vibecoding/actions
