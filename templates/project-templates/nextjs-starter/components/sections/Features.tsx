import Card from '@/components/Card';

const features = [
  {
    title: 'Next.js 14',
    description: 'Latest Next.js with App Router and React 18 features',
  },
  {
    title: 'TypeScript',
    description: 'Full TypeScript support with strict mode enabled',
  },
  {
    title: 'Tailwind CSS',
    description: 'Utility-first CSS framework with custom theme',
  },
  {
    title: 'ESLint & Prettier',
    description: 'Code quality and formatting configured out of the box',
  },
  {
    title: 'Component Library',
    description: 'Pre-built, reusable components ready to extend',
  },
  {
    title: 'SEO Ready',
    description: 'Built-in metadata and Open Graph support',
  },
];

export default function Features() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Features</h2>
          <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
            Everything you need to build modern web applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index}>
              <h3 className="text-xl font-semibold mb-2">
                {feature.title}
              </h3>
              <p className="text-secondary-600">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
