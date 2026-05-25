import Button from '@/components/Button';

export default function Hero() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary-50 to-white">
      <div className="container text-center">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
          Welcome to{' '}
          <span className="text-primary-600">VibeCoding</span>
        </h1>

        <p className="text-xl text-secondary-600 max-w-2xl mx-auto mb-8">
          Production-ready Next.js starter template for building modern,
          performant web applications.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <Button variant="primary" size="lg">
            Get Started
          </Button>
          <Button variant="outline" size="lg">
            Learn More
          </Button>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="text-3xl font-bold text-primary-600 mb-2">
              ⚡
            </div>
            <h3 className="text-lg font-semibold mb-2">Fast</h3>
            <p className="text-secondary-600">
              Optimized for performance with Lighthouse 90+ scores
            </p>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary-600 mb-2">
              🎨
            </div>
            <h3 className="text-lg font-semibold mb-2">Beautiful</h3>
            <p className="text-secondary-600">
              Built with Tailwind CSS and modern design principles
            </p>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary-600 mb-2">
              ✨
            </div>
            <h3 className="text-lg font-semibold mb-2">Scalable</h3>
            <p className="text-secondary-600">
              Production-ready structure for growing projects
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
