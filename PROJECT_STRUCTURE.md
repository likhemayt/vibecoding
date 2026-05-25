# Digital Agency Project Structure

## Root Directory Organization

```
digital-agency/
├── projects/                    # Active and archived projects
├── templates/                   # Reusable templates and boilerplates
├── docs/                        # Agency documentation
├── tools/                       # Automation scripts and tools
├── infrastructure/              # DevOps and deployment configs
├── systems/                     # Shared systems and libraries
├── client-portals/              # Client-facing documentation
└── README.md                    # Agency overview
```

---

## Projects Directory Structure

```
projects/
├── [active-projects]/
│   ├── client-name-website/
│   │   ├── docs/
│   │   │   ├── BRIEF.md                # Project brief and requirements
│   │   │   ├── TIMELINE.md             # Project timeline and milestones
│   │   │   ├── DECISIONS.md            # Design and tech decisions
│   │   │   └── HANDOFF.md              # Client handoff documentation
│   │   │
│   │   ├── design/
│   │   │   ├── figma-link.txt          # Link to Figma project
│   │   │   ├── brand-guidelines/       # Brand assets and guidelines
│   │   │   ├── mockups/                # Design mockups (exports)
│   │   │   └── design-system/          # Design tokens and components
│   │   │
│   │   ├── development/
│   │   │   ├── github-link.txt         # Link to GitHub repo
│   │   │   ├── architecture.md         # Technical architecture
│   │   │   ├── setup-guide.md          # Local dev setup
│   │   │   ├── env-example             # Environment variables template
│   │   │   └── deployment.md           # Deployment guide
│   │   │
│   │   ├── content/
│   │   │   ├── copy/                   # Website copy and content
│   │   │   ├── seo/                    # SEO metadata, keywords
│   │   │   └── media/                  # Images, videos, assets
│   │   │
│   │   ├── qa/
│   │   │   ├── test-cases.md           # QA test cases
│   │   │   ├── bugs.md                 # Bug log and tracking
│   │   │   └── reports/                # QA reports
│   │   │
│   │   ├── client-files/
│   │   │   ├── contract.pdf            # Signed contract
│   │   │   ├── intake-form.json        # Intake form responses
│   │   │   ├── assets/                 # Client-provided assets
│   │   │   └── feedback/               # Client feedback and notes
│   │   │
│   │   └── PROJECT.md                  # Project metadata and status
│   │
│   └── [other-projects]/
│
├── archived/                    # Completed projects
│   ├── [completed-projects]/
│   ├── case-studies/            # Case study documents
│   └── portfolio-exports/       # Project exports for portfolio
│
└── templates/                   # Project templates
    ├── website-standard/        # Standard website template
    ├── landing-page/            # Landing page template
    ├── saas-product/            # SaaS application template
    └── portfolio-site/          # Portfolio website template
```

---

## Templates Directory Structure

```
templates/
├── project-templates/
│   │
│   ├── website-standard/
│   │   ├── design/
│   │   │   ├── figma-starter.json     # Starter Figma file
│   │   │   ├── component-library.md   # Design system docs
│   │   │   └── color-tokens.json      # Design tokens
│   │   │
│   │   ├── frontend/
│   │   │   ├── next-js-starter/       # Next.js boilerplate
│   │   │   ├── tailwind.config.js     # Tailwind configuration
│   │   │   └── env.example            # Environment template
│   │   │
│   │   ├── cms/
│   │   │   ├── sanity-schema/         # Sanity CMS schema
│   │   │   └── content-models.md      # Content structure
│   │   │
│   │   └── docs/
│   │       ├── project-brief-template.md
│   │       ├── design-decision-log.md
│   │       └── deployment-checklist.md
│   │
│   ├── landing-page/
│   ├── saas-product/
│   └── portfolio-site/
│
├── client-templates/
│   ├── proposal-template.md            # Proposal document
│   ├── contract-template.md            # Service agreement
│   ├── intake-form-template.json       # Client intake form
│   ├── onboarding-email-template.md    # Welcome email
│   ├── weekly-report-template.md       # Status report
│   └── handoff-guide-template.md       # Client handoff package
│
├── automation-templates/
│   ├── github-workflows/               # GitHub Actions templates
│   ├── notion-templates/               # Notion database templates
│   ├── zapier-templates/               # Zapier automation templates
│   └── scripts/                        # Automation scripts
│
└── documentation-templates/
    ├── api-documentation.md
    ├── architecture-guide.md
    ├── deployment-guide.md
    └── testing-guide.md
```

---

## Docs Directory Structure

```
docs/
├── ORGANIZATIONAL_STRUCTURE.md        # Team roles and structure
├── PROJECT_WORKFLOWS.md               # Project phases and processes
├── CLIENT_SYSTEMS.md                  # Client management processes
├── TECHNICAL_STANDARDS.md             # Code and technical standards
│
├── guides/
│   ├── developer-onboarding.md        # New developer setup
│   ├── project-kickoff-guide.md       # How to start a project
│   ├── deployment-guide.md            # How to deploy projects
│   ├── client-communication.md        # Communication standards
│   └── emergency-procedures.md        # What to do when things break
│
├── processes/
│   ├── design-process.md              # Design workflow
│   ├── development-process.md         # Development workflow
│   ├── qa-process.md                  # QA and testing process
│   ├── launch-process.md              # Launch checklist
│   └── post-launch-process.md         # Post-launch monitoring
│
├── tools/
│   ├── tool-list.md                   # All tools we use
│   ├── github-setup.md                # GitHub guidelines
│   ├── figma-setup.md                 # Figma guidelines
│   ├── vercel-setup.md                # Vercel deployment setup
│   └── notion-setup.md                # Notion workspace setup
│
├── standards/
│   ├── code-standards.md              # Coding standards
│   ├── design-standards.md            # Design guidelines
│   ├── content-standards.md           # Content guidelines
│   ├── performance-standards.md       # Performance targets
│   └── security-standards.md          # Security requirements
│
└── reference/
    ├── glossary.md                    # Terminology
    ├── faq.md                         # Common questions
    └── troubleshooting.md             # Common problems & solutions
```

---

## Infrastructure Directory Structure

```
infrastructure/
├── github/
│   ├── workflows/                     # GitHub Actions
│   │   ├── test.yml                   # Run tests on PR
│   │   ├── deploy-staging.yml         # Deploy to staging
│   │   ├── deploy-production.yml      # Deploy to production
│   │   └── lint-check.yml             # Code quality checks
│   │
│   ├── templates/
│   │   ├── PULL_REQUEST_TEMPLATE.md
│   │   └── ISSUE_TEMPLATE.md
│   │
│   └── codeowners                     # Code ownership

├── vercel/
│   ├── vercel-config.json             # Vercel settings
│   ├── environment-variables.md       # Environment setup
│   └── deployment-guide.md
│
├── monitoring/
│   ├── sentry-config.js               # Error tracking
│   ├── analytics-setup.md             # Analytics configuration
│   └── alerts-config.md               # Alert thresholds
│
├── security/
│   ├── ssl-certificates/              # SSL management
│   ├── environment-secrets.md         # Secrets management
│   └── security-checklist.md          # Security review items
│
└── backup-recovery/
    ├── backup-procedures.md
    └── disaster-recovery-plan.md
```

---

## Systems Directory Structure

```
systems/
├── design-system/
│   ├── tokens/
│   │   ├── colors.json
│   │   ├── typography.json
│   │   ├── spacing.json
│   │   └── shadows.json
│   │
│   ├── components/
│   │   ├── button/
│   │   ├── card/
│   │   ├── form/
│   │   ├── layout/
│   │   └── ...
│   │
│   ├── documentation/
│   │   ├── design-philosophy.md
│   │   ├── component-library.md
│   │   └── design-patterns.md
│   │
│   └── figma-link.txt
│
├── component-library/
│   ├── react-components/               # React component library
│   ├── storybook-stories/              # Component stories
│   └── component-documentation.md
│
├── frontend-framework/
│   ├── next-js-starter/                # Next.js foundation
│   ├── tailwind-config/                # Tailwind setup
│   ├── eslint-config/                  # Linting rules
│   └── typescript-config/              # TypeScript settings
│
├── cms-schemas/
│   ├── sanity-schema/                  # CMS data models
│   ├── content-templates/              # Content structure
│   └── api-documentation.md
│
└── utilities/
    ├── shared-functions/               # Reusable utility functions
    ├── hooks/                          # React hooks library
    ├── helpers/                        # Helper functions
    └── constants/                      # Shared constants
```

---

## Tools Directory Structure

```
tools/
├── automation-scripts/
│   ├── project-setup.sh               # Automated project initialization
│   ├── deploy.sh                      # Deployment automation
│   ├── backup.sh                      # Backup automation
│   └── monitoring.sh                  # Health checks
│
├── notion-automation/
│   ├── create-project.js              # Auto-create Notion entries
│   ├── sync-status.js                 # Sync project status
│   └── send-reminders.js              # Notification automation
│
├── slack-bots/
│   ├── deployment-notifier.js         # Deployment alerts
│   ├── daily-standup.js               # Standup reminders
│   └── client-updates.js              # Client notifications
│
├── github-automation/
│   ├── auto-assign-reviews.js         # Auto-assign PR reviews
│   ├── label-automation.js            # Auto-label PRs
│   └── changelog-generator.js         # Auto-generate changelog
│
└── analytics/
    ├── performance-tracker.js         # Track performance metrics
    ├── project-analytics.js           # Project metrics
    └── reporting.js                   # Generate reports
```

---

## Client Portals Directory Structure

```
client-portals/
├── standard-portal-template/
│   ├── index.md                       # Portal home
│   ├── getting-started.md             # Quick start guide
│   ├── cms-guide.md                   # CMS instructions
│   ├── faq.md                         # Common questions
│   ├── support.md                     # Support information
│   └── resources/                     # Documentation, passwords, etc.
│
├── [client-specific-portals]/
│   ├── client-name/
│   │   ├── index.md
│   │   ├── setup-guide.md
│   │   ├── cms-guide.md
│   │   ├── maintenance.md
│   │   ├── support-contacts.md
│   │   ├── credentials.md (private)
│   │   └── resources/
│   │
│   └── [other-clients]/
│
└── documentation-library/
    ├── best-practices.md
    ├── common-issues.md
    ├── video-tutorials/
    └── api-reference.md
```

---

## File Naming Conventions

### Project Names
- Format: `client-name-website` (kebab-case)
- Example: `acme-corp-website`, `techsolutions-landing-page`

### File Names
- Use kebab-case: `my-file-name.md`
- Be descriptive: `client-intake-form.json`
- Include type: `INSTRUCTIONS.md`, `README.md`, `env.example`

### Branch Names (Git)
- Feature: `feature/feature-name`
- Bug fix: `fix/bug-description`
- Release: `release/v1.0.0`
- Hotfix: `hotfix/critical-issue`

### Folder Names
- Use lowercase: `design`, `development`, `content`
- Use plural for collections: `components`, `templates`, `projects`
- Use singular for specific items: `design`, `documentation`

---

## Archive & Cleanup Process

### When to Archive
- Project complete and delivered (30+ days post-launch)
- Client relationship ended
- No ongoing support needed

### Archive Process
1. Move to `projects/archived/[year]/[client-name]/`
2. Create case study (if not done)
3. Archive GitHub repository (make it read-only)
4. Document final metrics
5. Keep access for reference

### Retention Policy
- Active projects: Full access
- Archived projects: Read-only (6 months)
- Old projects (2+ years): Backup to cold storage, then delete

---

## Documentation Standards

### Every Project Should Have
- [ ] `PROJECT.md` — Project metadata and status
- [ ] `docs/BRIEF.md` — Project brief and requirements
- [ ] `docs/TIMELINE.md` — Timeline and milestones
- [ ] `docs/DECISIONS.md` — Design and tech decisions
- [ ] `docs/HANDOFF.md` — Client handoff documentation
- [ ] `README.md` — Project overview
- [ ] `.env.example` — Environment variables template
- [ ] `DEPLOYMENT.md` — How to deploy this project

### Every Repository Should Have
- [ ] `README.md` — Project description and setup
- [ ] `CONTRIBUTING.md` — How to contribute
- [ ] `LICENSE.md` — License information
- [ ] `.gitignore` — Git ignore rules
- [ ] `.env.example` — Environment template
- [ ] GitHub Actions workflows
- [ ] Branch protection rules

---

## Quick Reference

| Item | Location | Description |
|------|----------|-------------|
| Team Structure | `docs/ORGANIZATIONAL_STRUCTURE.md` | Roles and responsibilities |
| Project Process | `docs/PROJECT_WORKFLOWS.md` | 10-phase workflow |
| Client Management | `docs/CLIENT_SYSTEMS.md` | Intake to delivery |
| Technical Standards | `docs/TECHNICAL_STANDARDS.md` | Code and development standards |
| Active Projects | `projects/` | All active work |
| Templates | `templates/` | Reusable boilerplates |
| Design System | `systems/design-system/` | Design tokens and components |
| Component Library | `systems/component-library/` | React components |
| Automation Scripts | `tools/` | Automation and scripts |
| Deployments | `infrastructure/` | Deployment and CI/CD |

---
