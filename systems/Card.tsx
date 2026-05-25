import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
  padding?: 'sm' | 'md' | 'lg';
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (
    {
      hover = true,
      padding = 'md',
      children,
      className = '',
      ...props
    },
    ref
  ) => {
    const paddingClass = {
      sm: 'p-3',
      md: 'p-6',
      lg: 'p-8',
    }[padding];

    const hoverClass = hover ? 'hover:shadow-lg hover:scale-105' : '';

    return (
      <div
        ref={ref}
        className={`bg-white rounded-lg border border-secondary-200 shadow-sm ${hoverClass} transition-all duration-200 ${paddingClass} ${className}`}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';

export default Card;
