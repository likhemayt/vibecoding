# Component Library Documentation

Complete React component library with 20+ production-ready components.

---

## Overview

A comprehensive set of reusable, accessible, and well-documented React components built with TypeScript and Tailwind CSS.

**Total Components:** 20+  
**Framework:** React 18 + Next.js  
**Styling:** Tailwind CSS  
**Type Safety:** TypeScript  
**Accessibility:** WCAG 2.1 AA

---

## Components by Category

### Form Components (5)

#### Input
Text input with error handling, hints, and icons.

```tsx
import { Input } from '@/systems/component-library';

<Input
  label="Email"
  type="email"
  placeholder="you@example.com"
  error="Invalid email"
  hint="Must be a valid email"
/>
```

**Props:**
- `label` — Form label
- `error` — Error message
- `hint` — Help text
- `icon` — Icon element
- `success` — Show success indicator

#### Select
Dropdown select with options.

```tsx
<Select
  label="Country"
  options={[
    { label: 'USA', value: 'us' },
    { label: 'Canada', value: 'ca' },
  ]}
  placeholder="Select..."
/>
```

#### Checkbox
Single or multiple checkboxes.

```tsx
<Checkbox
  label="I agree to terms"
  description="You must accept the terms"
/>
```

#### Radio
Radio button group.

```tsx
<Radio
  label="Choose one"
  options={[
    { label: 'Option A', value: 'a' },
    { label: 'Option B', value: 'b' },
  ]}
/>
```

#### Textarea
Multi-line text input.

```tsx
<Textarea
  label="Message"
  maxLength={500}
  rows={4}
/>
```

---

### UI Components (4)

#### Button
Primary action button with variants.

```tsx
<Button variant="primary" size="md">
  Click me
</Button>
```

**Variants:** primary, secondary, outline  
**Sizes:** sm, md, lg

#### Card
Container for grouped content.

```tsx
<Card padding="md" hover>
  Card content
</Card>
```

#### Badge
Label with color variants.

```tsx
<Badge variant="success">Active</Badge>
```

**Variants:** success, error, warning, info, neutral  
**Sizes:** sm, md, lg

#### Alert
Notification message.

```tsx
<Alert variant="success" title="Success!">
  Operation completed
</Alert>
```

---

### Feedback Components (3)

#### Modal
Dialog overlay.

```tsx
<Modal
  open={isOpen}
  onClose={() => setOpen(false)}
  title="Confirm Action"
  size="md"
>
  Are you sure?
</Modal>
```

#### Spinner
Loading indicator.

```tsx
<Spinner size="md" label="Loading..." />
```

#### Tooltip
Hover tooltip.

```tsx
<Tooltip content="Help text">
  <button>Hover me</button>
</Tooltip>
```

---

### Layout Components (2)

#### Container
Centered, max-width container.

```tsx
<Container size="lg">
  Content
</Container>
```

**Sizes:** sm, md, lg, xl, 2xl

#### Grid
Responsive grid layout.

```tsx
<Grid cols={3} gap="md" responsive>
  {items.map(item => <div key={item.id}>{item}</div>)}
</Grid>
```

---

### Navigation Components (1)

#### Breadcrumb
Navigation breadcrumbs.

```tsx
<Breadcrumb
  items={[
    { label: 'Home', href: '/' },
    { label: 'Products', href: '/products' },
    { label: 'Details' },
  ]}
/>
```

---

### Data Display Components (3)

#### Table
Data table with sortable columns.

```tsx
<Table
  columns={[
    { header: 'Name', key: 'name' },
    { header: 'Email', key: 'email' },
  ]}
  data={items}
/>
```

#### Pagination
Page navigation.

```tsx
<Pagination
  currentPage={page}
  totalPages={10}
  onPageChange={setPage}
/>
```

#### Avatar
User avatar with initials.

```tsx
<Avatar
  name="John Doe"
  src="/avatar.jpg"
  size="md"
  status="online"
/>
```

---

### Content Components (2)

#### Tabs
Tabbed content.

```tsx
<Tabs
  tabs={[
    { id: 'tab1', label: 'Tab 1', content: <div>Content 1</div> },
    { id: 'tab2', label: 'Tab 2', content: <div>Content 2</div> },
  ]}
/>
```

#### Accordion
Collapsible content sections.

```tsx
<Accordion
  items={[
    { id: 'item1', title: 'Section 1', content: <div>Content</div> },
    { id: 'item2', title: 'Section 2', content: <div>Content</div> },
  ]}
  allowMultiple={false}
/>
```

---

## Usage Examples

### Contact Form
```tsx
import {
  Input,
  Textarea,
  Button,
  Card,
  Checkbox,
} from '@/systems/component-library';

export default function ContactForm() {
  const [formData, setFormData] = useState({});

  return (
    <Card padding="lg" className="max-w-md">
      <Input
        label="Name"
        placeholder="Your name"
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />
      <Input
        label="Email"
        type="email"
        placeholder="you@example.com"
      />
      <Textarea
        label="Message"
        placeholder="Your message"
      />
      <Checkbox label="I agree to terms" />
      <Button variant="primary" fullWidth>
        Send
      </Button>
    </Card>
  );
}
```

### Data Display
```tsx
import {
  Table,
  Badge,
  Pagination,
  Container,
} from '@/systems/component-library';

export default function UserList() {
  const [page, setPage] = useState(1);
  const users = [...]; // Your data

  return (
    <Container>
      <Table
        columns={[
          { header: 'Name', key: 'name' },
          { 
            header: 'Status', 
            key: 'status',
            render: (status) => <Badge variant={status === 'active' ? 'success' : 'error'}>
              {status}
            </Badge>
          },
        ]}
        data={users}
      />
      <Pagination
        currentPage={page}
        totalPages={10}
        onPageChange={setPage}
      />
    </Container>
  );
}
```

---

## Accessibility

All components follow WCAG 2.1 AA standards:

- ✅ Semantic HTML
- ✅ ARIA labels
- ✅ Keyboard navigation
- ✅ Focus management
- ✅ Color contrast
- ✅ Screen reader support

---

## TypeScript Support

Full TypeScript support with proper typing:

```tsx
import type { InputProps } from '@/systems/component-library';

const handleChange: InputProps['onChange'] = (e) => {
  // Typed event
};
```

---

## Theming

Components use Tailwind CSS and design tokens:

```jsx
// Use design tokens
<button className="bg-primary-600 hover:bg-primary-700">
  Button
</button>

// Customize with Tailwind
<Card className="shadow-xl border-2" />
```

---

## Customization

### Component Styling
```tsx
<Button className="rounded-full uppercase">
  Custom Button
</Button>
```

### Extending Components
```tsx
import { Button } from '@/systems/component-library';

export const CustomButton = (props) => (
  <Button {...props} className="custom-class" />
);
```

---

## Best Practices

### Do's ✅
- Use TypeScript for type safety
- Follow component prop conventions
- Use semantic HTML
- Test accessibility
- Maintain consistent spacing
- Use design tokens

### Don'ts ❌
- Don't override component styles excessively
- Don't remove accessibility features
- Don't use components outside of intended use
- Don't ignore TypeScript errors

---

## Performance

- Small bundle size
- Tree-shakeable
- No external dependencies beyond React
- Optimized re-renders
- CSS-in-JS free (Tailwind only)

---

## Component Status

| Component | Status | Documented | Tested |
|-----------|--------|-----------|--------|
| Input | ✅ | ✅ | ✅ |
| Select | ✅ | ✅ | ✅ |
| Checkbox | ✅ | ✅ | ✅ |
| Radio | ✅ | ✅ | ✅ |
| Textarea | ✅ | ✅ | ✅ |
| Button | ✅ | ✅ | ✅ |
| Card | ✅ | ✅ | ✅ |
| Badge | ✅ | ✅ | ✅ |
| Alert | ✅ | ✅ | ✅ |
| Modal | ✅ | ✅ | ✅ |
| Spinner | ✅ | ✅ | ✅ |
| Tooltip | ✅ | ✅ | ✅ |
| Container | ✅ | ✅ | ✅ |
| Grid | ✅ | ✅ | ✅ |
| Breadcrumb | ✅ | ✅ | ✅ |
| Table | ✅ | ✅ | ✅ |
| Pagination | ✅ | ✅ | ✅ |
| Avatar | ✅ | ✅ | ✅ |
| Tabs | ✅ | ✅ | ✅ |
| Accordion | ✅ | ✅ | ✅ |

---

## Importing Components

```tsx
// Individual import
import { Button } from '@/systems/component-library';

// Multiple imports
import { Button, Card, Input } from '@/systems/component-library';

// Import all
import * as Components from '@/systems/component-library';
```

---

## Contributing

To add new components:

1. Create component file in `systems/component-library/`
2. Add TypeScript types
3. Include accessibility features
4. Export in `index.ts`
5. Document in this file

---

## Resources

- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [WCAG Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

---
