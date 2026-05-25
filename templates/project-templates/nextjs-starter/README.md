# VibeCoding Next.js Starter

Production-ready Next.js starter template by VibeCoding.

## Features

- ✅ **Next.js 14** - Latest framework with App Router
- ✅ **React 18** - Latest React features
- ✅ **TypeScript** - Full type safety
- ✅ **Tailwind CSS** - Utility-first CSS framework
- ✅ **ESLint & Prettier** - Code quality and formatting
- ✅ **Component Library** - Pre-built components
- ✅ **Performance** - Lighthouse 90+ ready
- ✅ **SEO** - Built-in metadata support

## Quick Start

### Clone or copy this template
```bash
cp -r templates/project-templates/nextjs-starter my-project
cd my-project
```

### Install dependencies
```bash
npm install
```

### Set up environment variables
```bash
cp .env.example .env.local
```

### Start development server
```bash
npm run dev
```

Visit `http://localhost:3000`

## Available Scripts

```bash
# Development
npm run dev          # Start dev server
npm run build        # Build for production
npm run start        # Start production server

# Code Quality
npm run lint         # Run ESLint and fix issues
npm run format       # Format code with Prettier
npm run type-check   # Check TypeScript types

# Testing
npm run test         # Run tests
npm run test:watch   # Run tests in watch mode
npm run test:coverage # Generate coverage report
```

## Project Structure

```
app/                 # App Router
├── layout.tsx       # Root layout
├── page.tsx         # Home page
└── globals.css      # Global styles

components/         # React components
├── Button.tsx       # Button component
├── Card.tsx         # Card component
└── sections/        # Page sections
    ├── Hero.tsx
    └── Features.tsx

lib/               # Utility functions
types/             # TypeScript types
public/            # Static assets
styles/            # CSS modules (if needed)
```

## Component Usage

### Button
```tsx
import Button from '@/components/Button';

<Button variant="primary" size="md">
  Click me
</Button>
```

### Card
```tsx
import Card from '@/components/Card';

<Card padding="md" hover>
  Card content
</Card>
```

## Customization

### Colors
Edit `tailwind.config.ts` to customize colors:
```ts
colors: {
  primary: { ... },
  secondary: { ... },
}
```

### Fonts
Add custom fonts in `app/layout.tsx`:
```tsx
import { Inter, Playfair_Display } from 'next/font/google';

const sans = Inter({ subsets: ['latin'] });
```

### Components
- Components are in `components/`
- Sections are in `components/sections/`
- Create new components as needed

## Performance

Built for performance:
- ✅ Lighthouse 90+ on all metrics
- ✅ Image optimization with Next.js Image
- ✅ Code splitting and lazy loading
- ✅ CSS and JS minification
- ✅ Fast refresh development experience

## TypeScript

Full TypeScript support:
- Strict mode enabled
- Type-safe components
- Environment variable types
- API route types

## Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Other Platforms
- Netlify
- GitHub Pages
- Docker
- Self-hosted

## Environment Variables

Copy `.env.example` to `.env.local` and fill in your values:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_API_URL=http://localhost:3000/api
```

## Git Setup

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin <your-repo-url>
git push -u origin main
```

## Contributing

1. Follow the code style (ESLint + Prettier)
2. Use TypeScript for type safety
3. Write tests for new features
4. Update documentation

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

## License

Proprietary - VibeCoding

## Support

For questions or issues:
- Check documentation files
- Review example components
- Contact: [contact info]

---

Built with ❤️ by VibeCoding
