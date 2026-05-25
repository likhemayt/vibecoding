# GitHub Actions Setup Guide

Complete guide to setting up GitHub Actions workflows for your projects.

---

## Overview

We use GitHub Actions for:
- ✅ Running tests and linting
- ✅ Building and checking code
- ✅ Deploying to staging
- ✅ Deploying to production
- ✅ Performance monitoring
- ✅ Notifications

---

## Workflows

### 1. Test & Lint (`test-and-lint.yml`)

Runs on every push and PR to `main` and `develop` branches.

**What it does:**
- Runs ESLint to check code quality
- Type checks with TypeScript
- Runs test suite
- Uploads coverage reports

**When it runs:**
- On push to main/develop
- On pull requests to main/develop

**Requirements:**
- npm scripts: `lint`, `type-check`, `test:coverage`
- Node.js 18+

---

### 2. Deploy to Staging (`deploy-staging.yml`)

Runs when pushing to `develop` branch.

**What it does:**
- Installs dependencies
- Runs tests
- Builds project
- Deploys to Vercel staging environment
- Posts deployment URL in PR comments
- Sends Slack notification on failure

**When it runs:**
- On push to develop branch
- Manual trigger via workflow_dispatch

**Required Secrets:**
- `VERCEL_TOKEN` — Vercel authentication token
- `VERCEL_ORG_ID` — Vercel organization ID
- `VERCEL_STAGING_PROJECT_ID` — Vercel project ID for staging
- `STAGING_SITE_URL` — Staging environment URL
- `STAGING_API_URL` — Staging API URL
- `SLACK_WEBHOOK_URL` — Slack webhook for notifications (optional)

---

### 3. Deploy to Production (`deploy-production.yml`)

Runs when pushing to `main` branch.

**What it does:**
- Installs dependencies
- Runs all tests (must pass)
- Runs linting
- Type checks
- Builds project
- Deploys to Vercel production
- Creates GitHub release
- Sends Slack notification

**When it runs:**
- On push to main branch
- Manual trigger via workflow_dispatch

**Required Secrets:**
- `VERCEL_TOKEN` — Vercel authentication token
- `VERCEL_ORG_ID` — Vercel organization ID
- `VERCEL_PROJECT_ID` — Vercel project ID for production
- `NEXT_PUBLIC_SITE_URL` — Production URL
- `NEXT_PUBLIC_API_URL` — Production API URL
- `SLACK_WEBHOOK_URL` — Slack webhook (optional)

**Safety:** Tests must pass, code must lint, types must check

---

### 4. Performance Check (`performance.yml`)

Runs on pull requests and weekly schedule.

**What it does:**
- Builds project
- Starts development server
- Runs Lighthouse audit
- Comments Lighthouse scores on PR

**When it runs:**
- On PRs to main/develop
- Every Sunday at midnight (UTC)

**Targets:**
- Performance
- Accessibility
- Best Practices
- SEO
- PWA

**Goals:**
- 90+ on all metrics
- Maintains performance standards

---

## Setup Instructions

### 1. Add Workflows to GitHub

Copy all workflow files to `.github/workflows/` in your repository:

```
.github/
└── workflows/
    ├── test-and-lint.yml
    ├── deploy-staging.yml
    ├── deploy-production.yml
    └── performance.yml
```

---

### 2. Set Up Vercel

#### Create Vercel Projects

1. Create **staging** project on Vercel
2. Create **production** project on Vercel

#### Get Vercel Tokens

```bash
# In Vercel account settings → Tokens
# Create personal access token
```

#### Get Vercel IDs

```bash
# Via Vercel CLI
vercel env
# Copy ORG_ID and PROJECT_ID
```

---

### 3. Add GitHub Secrets

Go to **Settings → Secrets and variables → Actions**

#### Required Secrets:

```
VERCEL_TOKEN
VERCEL_ORG_ID
VERCEL_PROJECT_ID (production)
VERCEL_STAGING_PROJECT_ID
NEXT_PUBLIC_SITE_URL (production)
NEXT_PUBLIC_API_URL (production)
STAGING_SITE_URL
STAGING_API_URL
```

#### Optional Secrets:

```
SLACK_WEBHOOK_URL (for notifications)
```

**How to add secrets:**
1. Click "New repository secret"
2. Name: [secret name]
3. Value: [secret value]
4. Click "Add secret"

---

### 4. Configure Environments

Go to **Settings → Environments**

Create two environments:

#### Staging
- Environment name: `staging`
- Add deployment branches rule if desired
- Add secrets (optional, can use repo secrets)

#### Production
- Environment name: `production`
- Add branch protection rule: `main`
- Require reviewers: Yes (recommended)
- Add approval requirement

---

### 5. Set Up Branch Protection

Go to **Settings → Branches → Add branch protection rule**

For `main` branch:
- ✅ Require a pull request before merging
- ✅ Require status checks to pass
  - test-and-lint (Build Check)
  - test-and-lint (Lint Code)
  - test-and-lint (Run Tests)
- ✅ Require branches to be up to date
- ✅ Require code reviews (recommended)
- ✅ Require approval from code owners

---

### 6. Slack Integration (Optional)

#### Create Slack Webhook

1. Go to Slack workspace settings
2. Create incoming webhook
3. Copy webhook URL
4. Add to GitHub secrets as `SLACK_WEBHOOK_URL`

#### Test Notifications

Push to develop branch to test staging deployment notification.

---

## Environment Variables

### Production Secrets

```env
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_API_URL=https://api.yourdomain.com
```

### Staging Secrets

```env
STAGING_SITE_URL=https://staging.yourdomain.com
STAGING_API_URL=https://api-staging.yourdomain.com
```

---

## Workflow Status

### Check Status

In your repository:
- **Actions tab** — See all workflow runs
- **PR checks** — See checks for specific PR
- **Commits** — See status next to commit

### View Logs

Click on failing workflow to see detailed logs.

---

## Common Issues

### Issue: Deployment Fails with "Project Not Found"

**Solution:** Verify `VERCEL_PROJECT_ID` and `VERCEL_ORG_ID` are correct

### Issue: Tests Fail on CI but Pass Locally

**Solution:**
- Check environment variables in workflow
- Ensure test setup is same on CI
- Review test logs in GitHub Actions

### Issue: Slack Notifications Not Sending

**Solution:**
- Verify webhook URL is correct
- Check webhook is active in Slack
- Ensure secret is configured in GitHub

### Issue: Build Hangs or Times Out

**Solution:**
- Increase timeout in workflow
- Check for infinite loops in code
- Optimize build process

---

## Manual Workflow Triggers

Some workflows support manual triggers:

1. Go to **Actions** tab
2. Select workflow
3. Click "Run workflow"
4. Select branch (usually `main` or `develop`)
5. Click "Run workflow"

---

## Monitoring & Metrics

### View Metrics

**GitHub Actions:**
- Go to **Settings → Billing → Actions**
- See minutes used and limits

**Vercel:**
- View deployment history
- Check performance metrics
- Review error logs

**Lighthouse:**
- View scores in PR comments
- Track performance over time

---

## Best Practices

1. **Always test locally first**
   - Run `npm run lint`
   - Run `npm run test`
   - Run `npm run build`

2. **Keep secrets secure**
   - Never commit secrets
   - Use environment-specific secrets
   - Rotate tokens regularly

3. **Monitor failures**
   - Check GitHub Actions tab regularly
   - Enable Slack notifications
   - Fix failures quickly

4. **Optimize workflows**
   - Cache dependencies
   - Parallelize jobs
   - Avoid unnecessary builds

5. **Documentation**
   - Document setup process
   - Keep secrets list updated
   - Note any custom configuration

---

## Workflow Customization

### Add More Tests

Edit `test-and-lint.yml`:

```yaml
- name: Run E2E tests
  run: npm run test:e2e
```

### Change Deployment Targets

Edit `deploy-production.yml`:

```yaml
# Deploy to different platform
- name: Deploy to Netlify
  run: netlify deploy --prod
```

### Add Code Coverage Requirements

Edit workflow:

```yaml
- name: Check coverage
  run: npm run test:coverage -- --coverage-threshold=80
```

---

## Troubleshooting

### Check Logs

1. Go to Actions tab
2. Click failing workflow
3. Click job name
4. View logs

### Common Log Messages

```
❌ Lint failed
→ Run: npm run lint locally and fix issues

❌ Tests failed
→ Run: npm run test locally and fix tests

❌ Build failed
→ Check error message, fix code

✅ All checks passed
→ Ready to merge or deploy
```

---

## Next Steps

1. Set up all secrets
2. Configure branch protection
3. Set up Slack webhooks (optional)
4. Test with a PR
5. Monitor first deployments

---

## Resources

- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Vercel Deployment Documentation](https://vercel.com/docs)
- [Vercel GitHub Integration](https://vercel.com/docs/concepts/git)

---
