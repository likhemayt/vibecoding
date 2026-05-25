# Technical Standards & Development Guidelines

## Code Quality Standards

### JavaScript/TypeScript Standards

**Language Version:**
- ES2022+ for Node.js
- ES2020+ for browsers
- TypeScript 5.0+

**Code Style:**
- Use ESLint configuration (extends recommended)
- Use Prettier for formatting
- Use Husky for pre-commit hooks

**ESLint Rules:**
```json
{
  "extends": ["eslint:recommended", "next/core-web-vitals"],
  "rules": {
    "no-unused-vars": "error",
    "no-console": "warn",
    "prefer-const": "error",
    "eqeqeq": "error"
  }
}
```

**Prettier Configuration:**
```json
{
  "semi": true,
  "singleQuote": true,
  "trailingComma": "es5",
  "printWidth": 80,
  "tabWidth": 2
}
```

### React Standards

**Component Structure:**
```jsx
// Use functional components
const MyComponent = ({ prop1, prop2 }) => {
  // Hooks at top
  const [state, setState] = useState(null);
  const { data } = useContext(AppContext);
  
  // Logic
  const handleClick = () => {
    // ...
  };
  
  // Render
  return <div>{/* content */}</div>;
};

export default MyComponent;
```

**File Naming:**
- Components: PascalCase (Button.jsx, CardComponent.jsx)
- Hooks: camelCase with 'use' prefix (useAuth.js, useForm.js)
- Utils: camelCase (helpers.js, constants.js)
- Styles: Same as component (Button.module.css)

**Component Organization:**
```
components/
├── common/              # Reusable UI components
│   ├── Button/
│   ├── Card/
│   └── ...
├── layout/              # Layout components
│   ├── Header/
│   ├── Footer/
│   └── ...
├── sections/            # Page sections
│   ├── HeroSection/
│   ├── FeaturesSection/
│   └── ...
└── page-specific/       # Page-specific components
    ├── HomePage/
    └── ...
```

**Props Validation:**
```jsx
// Use TypeScript for type safety
interface MyComponentProps {
  title: string;
  count: number;
  onSubmit: (data: FormData) => void;
}

const MyComponent: React.FC<MyComponentProps> = ({ title, count, onSubmit }) => {
  // Component logic
};
```

### Next.js Standards

**Project Structure:**
```
app/                    # App router (Next.js 13+)
├── (groups)/          # Route groups
├── api/               # API routes
├── layout.tsx         # Root layout
└── page.tsx           # Home page

components/           # React components
lib/                  # Utilities and helpers
public/               # Static assets
styles/               # Global styles
types/                # TypeScript types
.env.local            # Local environment variables
next.config.js        # Next.js configuration
tsconfig.json         # TypeScript configuration
```

**Pages & Routes:**
- Use app router for new projects
- Keep pages lightweight
- Use server components where possible
- Use client components only when needed (`'use client'`)

**API Routes:**
```ts
// app/api/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    // Logic
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
```

### CSS & Styling Standards

**Tailwind CSS:**
- Use Tailwind for all styling
- Avoid inline styles
- Create custom components for repeated patterns
- Use CSS variables for custom values

**Tailwind Configuration:**
```js
// tailwind.config.js
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#your-color',
      },
    },
  },
  plugins: [],
};
```

**CSS Modules (if needed):**
```css
/* Component.module.css */
.container {
  display: flex;
  align-items: center;
}
```

---

## Performance Standards

### Target Metrics (Lighthouse)

| Metric | Target | Acceptable |
|--------|--------|-----------|
| Performance | 90+ | 80+ |
| Accessibility | 95+ | 90+ |
| Best Practices | 95+ | 90+ |
| SEO | 95+ | 90+ |

### Core Web Vitals

| Metric | Good | Needs Improvement |
|--------|------|-------------------|
| LCP (Largest Contentful Paint) | < 2.5s | > 4s |
| FID (First Input Delay) | < 100ms | > 300ms |
| INP (Interaction to Next Paint) | < 200ms | > 500ms |
| CLS (Cumulative Layout Shift) | < 0.1 | > 0.25 |
| FCP (First Contentful Paint) | < 1.8s | > 3s |

### Performance Optimization

**Image Optimization:**
- Use Next.js Image component
- Provide responsive sizes: `sizes="(max-width: 768px) 100vw, ..."`
- Use WebP format (auto via Next.js)
- Lazy load below-the-fold images

**Code Splitting:**
- Use dynamic imports for large components
- Lazy load route-specific code
- Monitor bundle size (target: < 200KB gzipped)

**Caching Strategy:**
- Static generation (SSG) for static content
- Incremental Static Regeneration (ISR) for semi-dynamic content
- Server-side rendering (SSR) only when necessary

---

## Security Standards

### Authentication & Authorization
- Use environment variables for secrets
- Never commit `.env` files
- Use strong passwords and OAuth where possible
- Implement rate limiting on API routes
- Use HTTPS only

### Data Protection
- Sanitize user input
- Use parameterized queries (prevent SQL injection)
- Implement CSRF protection
- Encrypt sensitive data at rest and in transit
- Regular security audits

### API Security
```ts
// Rate limiting example
import rateLimit from 'express-rate-limit';

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});

app.use('/api/', limiter);
```

### Environment Variables
```env
# .env.local (never commit)
NEXT_PUBLIC_API_URL=https://api.example.com
SECRET_KEY=your-secret-key
DATABASE_URL=database-connection-string
```

**Public vs Secret:**
- `NEXT_PUBLIC_*` — Visible to browser (non-sensitive only)
- Others — Server-side only

---

## Testing Standards

### Unit Tests
- Framework: Jest or Vitest
- Coverage target: 80%+
- Test file naming: `ComponentName.test.ts`

**Example:**
```ts
import { render, screen } from '@testing-library/react';
import Button from './Button';

describe('Button', () => {
  it('renders correctly', () => {
    render(<Button label="Click me" />);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });
});
```

### Component Tests
- Framework: React Testing Library
- Test user behavior, not implementation
- Focus on accessibility

### E2E Tests
- Framework: Playwright
- Test critical user flows
- Run against staging environment

**Test Coverage:**
- Happy path: 100%
- Error cases: 80%+
- Edge cases: 60%+

---

## Git & Version Control Standards

### Commit Messages
```
<type>(<scope>): <subject>

<body>

<footer>
```

**Types:**
- `feat:` — New feature
- `fix:` — Bug fix
- `docs:` — Documentation
- `style:` — Code style (formatting, etc.)
- `refactor:` — Code refactoring
- `test:` — Adding tests
- `chore:` — Build, dependencies, etc.

**Examples:**
```
feat(auth): implement login functionality

- Add login form component
- Integrate with auth API
- Add error handling

Fixes #123
```

### Branch Strategy
- `main` — Production code (protected)
- `develop` — Development branch
- `feature/*` — Feature branches
- `fix/*` — Bug fix branches
- `release/*` — Release branches

### PR Requirements
- Code review from another developer
- All tests pass
- No linting errors
- No console errors/warnings
- Meaningful PR description

### Code Review Checklist
- [ ] Code works as intended
- [ ] Follows code standards
- [ ] Has tests (where applicable)
- [ ] Documentation updated
- [ ] No breaking changes
- [ ] Performance acceptable
- [ ] Security reviewed

---

## Database Standards

### Schema Design
- Use normalized schema
- Use snake_case for column names
- Add timestamps (created_at, updated_at)
- Use appropriate data types
- Add indexes for foreign keys

### Query Optimization
- Use parameterized queries
- Avoid SELECT *
- Use pagination for large datasets
- Add proper indexing
- Monitor slow queries

### Backup & Recovery
- Daily automated backups
- Test recovery procedures monthly
- 30-day backup retention
- Document restore procedures

---

## API Standards

### RESTful API Design
```
GET     /api/resources        — List all resources
POST    /api/resources        — Create new resource
GET     /api/resources/:id    — Get specific resource
PUT     /api/resources/:id    — Update resource
DELETE  /api/resources/:id    — Delete resource
```

### Response Format
```json
{
  "success": true,
  "data": { /* response data */ },
  "message": "Operation completed"
}
```

### Error Handling
```json
{
  "success": false,
  "error": "error-code",
  "message": "Human-readable error message",
  "details": { /* additional context */ }
}
```

### Status Codes
- 200 — OK
- 201 — Created
- 400 — Bad Request
- 401 — Unauthorized
- 403 — Forbidden
- 404 — Not Found
- 500 — Server Error

### API Documentation
- Use OpenAPI/Swagger
- Document all endpoints
- Include example requests/responses
- Keep documentation in sync with code

---

## Deployment Standards

### Environment Management
- **Local:** Development environment
- **Staging:** Pre-production testing
- **Production:** Live environment

### Deployment Process
1. Merge to `main` branch
2. GitHub Actions runs tests
3. Automatic deployment to staging
4. Manual approval for production
5. Automatic deployment to production

### Pre-Deployment Checklist
- [ ] All tests passing
- [ ] Code reviewed and approved
- [ ] Environment variables configured
- [ ] Database migrations applied
- [ ] Secrets properly managed
- [ ] Monitoring alerts configured

### Post-Deployment
- [ ] Verify deployment successful
- [ ] Monitor error logs (1 hour)
- [ ] Check performance metrics
- [ ] Notify stakeholders

---

## Documentation Standards

### Code Documentation
- Use JSDoc for functions
- Document complex logic
- Include TypeScript types
- Keep comments in sync with code

```typescript
/**
 * Calculate user eligibility for discount
 * @param {number} age - User age
 * @param {number} purchases - Total purchases
 * @returns {boolean} True if eligible for discount
 */
function isEligibleForDiscount(age: number, purchases: number): boolean {
  return age >= 65 || purchases >= 1000;
}
```

### Project Documentation
- README.md — Project overview
- CONTRIBUTING.md — How to contribute
- ARCHITECTURE.md — Technical architecture
- API.md — API documentation
- DEPLOYMENT.md — Deployment guide

### Inline Comments
- Explain WHY, not WHAT
- Keep comments current
- Remove dead code (don't comment out)

---

## Monitoring & Logging

### Error Tracking
- Use Sentry for error monitoring
- Set up error alerts
- Monitor error trends
- Quick response to critical errors

### Performance Monitoring
- Use Web Vitals library
- Track Lighthouse scores
- Monitor API response times
- Track page load times

### Logging Standards
```ts
// Use appropriate log levels
logger.error('Critical error', { error, context });
logger.warn('Warning message', { data });
logger.info('Information', { action, userId });
logger.debug('Debug info', { details });
```

### Monitoring Dashboard
- Real-time metrics
- Error alerts
- Performance trends
- Deployment status
- Uptime tracking

---

## Tools & Technologies

### Required Tools
- **Editor:** VS Code
- **Version Control:** GitHub
- **Package Manager:** npm or yarn
- **Task Runner:** npm scripts
- **Linter:** ESLint
- **Formatter:** Prettier
- **Testing:** Jest + React Testing Library
- **Type Checking:** TypeScript

### Recommended Extensions (VS Code)
- ES7+ React/Redux/React-Native snippets
- Prettier - Code formatter
- ESLint
- Thunder Client (API testing)
- GitLens
- Tailwind CSS IntelliSense

---

## Continuous Improvement

### Code Quality Metrics
- Monitor annually
- Identify trends
- Plan improvements
- Share learnings

### Technology Updates
- Stay current with framework versions
- Plan major version upgrades
- Test breaking changes
- Update dependencies regularly

### Team Learning
- Code reviews as learning opportunity
- Share best practices
- Pair programming sessions
- Tech talks and discussions

---
