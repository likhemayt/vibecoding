import React from 'react';
import Link from 'next/link';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps extends React.HTMLAttributes<HTMLNavElement> {
  items: BreadcrumbItem[];
}

const Breadcrumb = React.forwardRef<HTMLNavElement, BreadcrumbProps>(
  (
    {
      items,
      className = '',
      ...props
    },
    ref
  ) => {
    return (
      <nav ref={ref} aria-label="Breadcrumb" className={className} {...props}>
        <ol className="flex items-center gap-2 text-sm">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;

            return (
              <li key={index} className="flex items-center gap-2">
                {item.href && !isLast ? (
                  <Link
                    href={item.href}
                    className="text-primary-600 hover:text-primary-700 transition-colors"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span
                    className={isLast ? 'text-secondary-900 font-medium' : 'text-secondary-600'}
                  >
                    {item.label}
                  </span>
                )}

                {!isLast && (
                  <span className="text-secondary-400" aria-hidden="true">
                    /
                  </span>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    );
  }
);

Breadcrumb.displayName = 'Breadcrumb';

export default Breadcrumb;
