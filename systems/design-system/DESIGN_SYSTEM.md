# Design System

Complete design system documentation for VibeCoding digital agency.

---

## Overview

Our design system ensures consistency across all projects through:
- **Design Tokens** — Colors, typography, spacing, shadows
- **Component Library** — Reusable UI components
- **Guidelines** — Design and usage patterns
- **Figma** — Visual design source of truth

---

## Design Tokens

### Colors

Our color palette includes:
- **Primary** — Brand identity (Blue 500: #0ea5e9)
- **Secondary** — UI foundation (Gray scale)
- **Semantic** — Success (Green), Warning (Amber), Error (Red), Info (Blue)
- **Neutral** — White, Black, Transparent

**Usage:**
```css
.button {
  background-color: var(--color-primary-600);
  color: var(--color-neutral-white);
}
```

**Tailwind:**
```jsx
<button className="bg-primary-600 text-white">
  Click me
</button>
```

### Typography

**Font Families:**
- **Sans** — Inter (UI and body text)
- **Serif** — Georgia (editorial, quotes)
- **Mono** — Fira Code (code blocks)

**Font Sizes:**
```
xs: 0.75rem (12px)
sm: 0.875rem (14px)
base: 1rem (16px) — default
lg: 1.125rem (18px)
xl: 1.25rem (20px)
2xl: 1.5rem (24px)
3xl: 1.875rem (30px)
...
```

**Headings:**
- H1: 3.75rem, 800 weight, -0.02em spacing
- H2: 3rem, 700 weight
- H3: 1.875rem, 700 weight
- H4: 1.5rem, 600 weight
- H5: 1.25rem, 600 weight
- H6: 1rem, 600 weight

**Usage:**
```tsx
<h1 className="text-5xl font-bold">Main Title</h1>
<p className="text-base font-normal">Body text</p>
```

### Spacing

**Scale (px → rem):**
```
0: 0
1: 0.25rem (4px)
2: 0.5rem (8px)
3: 0.75rem (12px)
4: 1rem (16px) — base unit
6: 1.5rem (24px)
8: 2rem (32px)
12: 3rem (48px)
...
```

**Usage:**
```jsx
<div className="p-6 m-4 gap-8">
  {/* padding: 1.5rem, margin: 1rem, gap: 2rem */}
</div>
```

### Shadows

**Elevation Levels:**
- **xs** — Subtle, smallest shadows
- **sm** — Default shadows
- **md** — Moderate elevation
- **lg** — High elevation
- **xl** — Very high elevation
- **2xl** — Maximum elevation
- **inner** — Inset shadows

**Usage:**
```jsx
<div className="shadow-lg">Elevated card</div>
```

### Borders

**Border Radius:**
```
xs: 0.125rem (2px)
sm: 0.25rem (4px)
md: 0.375rem (6px) — default
lg: 0.5rem (8px)
xl: 0.75rem (12px)
2xl: 1rem (16px)
3xl: 1.5rem (24px)
full: 9999px — fully rounded
```

**Usage:**
```jsx
<button className="rounded-lg">Button</button>
<div className="rounded-full">Circular</div>
```

---

## Component Library

### Core Components

#### Button
```jsx
<Button variant="primary" size="md" disabled={false}>
  Click me
</Button>
```

**Variants:**
- primary — Main action
- secondary — Alternative action
- outline — Tertiary action

**Sizes:**
- sm — Compact
- md — Default
- lg — Large/prominent

#### Card
```jsx
<Card padding="md" hover={true}>
  Card content
</Card>
```

**Props:**
- padding — sm | md | lg
- hover — Boolean

#### Input
```jsx
<Input 
  type="text" 
  placeholder="Enter text"
  error={false}
  disabled={false}
/>
```

**Types:**
- text
- email
- password
- number
- textarea

#### Badge
```jsx
<Badge variant="success">Active</Badge>
```

**Variants:**
- success — Green
- warning — Amber
- error — Red
- info — Blue
- neutral — Gray

#### Modal/Dialog
```jsx
<Modal open={isOpen} onClose={handleClose}>
  Modal content
</Modal>
```

#### Form Controls
- Text Input
- Select
- Checkbox
- Radio
- Toggle
- Date Picker

---

## Design Patterns

### Layouts

#### Container
Fixed-width, centered content:
```jsx
<div className="max-w-6xl mx-auto px-4">
  Content
</div>
```

#### Grid
Responsive multi-column layout:
```jsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {items.map(item => (...))}
</div>
```

#### Flexbox
Row or column layout:
```jsx
<div className="flex gap-4 items-center">
  {items}
</div>
```

### States

#### Hover
```jsx
<button className="hover:bg-primary-700">Button</button>
```

#### Focus
```jsx
button:focus-visible {
  outline: 2px solid primary-500;
  outline-offset: 2px;
}
```

#### Disabled
```jsx
<button disabled className="disabled:opacity-50">
  Disabled
</button>
```

#### Loading
```jsx
{loading && <Spinner />}
```

#### Error
```jsx
{error && <Alert variant="error">{error}</Alert>}
```

### Spacing Patterns

**Consistent spacing hierarchy:**
```
Text + Spacing = 1.5rem (24px)
Text + Heading = 2rem (32px)
Section + Section = 3rem-4rem (48-64px)
```

---

## Accessibility

### WCAG 2.1 AA Compliance

**Color Contrast:**
- Text on background: 4.5:1 minimum
- Large text: 3:1 minimum

**Focus Management:**
- Visible focus indicators (2px outline)
- Logical tab order
- Keyboard accessible

**Semantic HTML:**
- Use correct heading hierarchy
- Use semantic elements (button, nav, article, etc.)
- Provide alt text for images

**ARIA Labels:**
- Use aria-label for icon-only buttons
- Use aria-describedby for complex components
- Use role attribute when needed

---

## Usage Guidelines

### Do's ✅

- Use design tokens consistently
- Follow component specifications
- Maintain spacing relationships
- Use semantic colors (success for positive, error for negative)
- Test keyboard accessibility
- Use proper heading hierarchy
- Provide meaningful alt text

### Don'ts ❌

- Don't create custom colors outside palette
- Don't override component styles arbitrarily
- Don't mix spacing scales inconsistently
- Don't use color alone to convey information
- Don't forget keyboard support
- Don't use heading tags for styling
- Don't forget accessibility

---

## Implementation

### CSS Variables

```css
:root {
  --color-primary-600: #0284c7;
  --color-secondary-50: #f8fafc;
  --font-size-lg: 1.125rem;
  --spacing-md: 1.5rem;
  --radius-lg: 0.5rem;
  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1);
}
```

### Tailwind Config

All tokens are configured in `tailwind.config.ts`:
- Colors
- Font sizes
- Font families
- Spacing
- Border radius
- Shadows
- Transitions

### Figma

Design system is also maintained in Figma:
- Component library with variants
- Design token documentation
- Style guide
- Usage examples

---

## Extending the System

### Adding New Colors

1. Add to `colors.json`
2. Update `tailwind.config.ts`
3. Document usage in this guide
4. Update Figma library

### Adding New Components

1. Create component in `components/`
2. Define TypeScript props
3. Add to component library
4. Document props and usage
5. Create Figma component

### Updating Typography

1. Update `typography.json`
2. Modify `tailwind.config.ts`
3. Test with real content
4. Update Figma library

---

## Resources

- [Tailwind Documentation](https://tailwindcss.com)
- [Design Tokens Documentation](https://www.designtokens.org)
- [Web Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- Figma Design System (link)

---

## Maintenance

### Regular Updates

**Monthly:**
- Review component usage
- Check for improvements
- Fix bugs

**Quarterly:**
- Update color palette if needed
- Refine typography
- Add new components

**Annually:**
- Full design system audit
- Update standards
- Plan major changes

---
