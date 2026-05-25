import React from 'react';

type BadgeVariant = 'success' | 'error' | 'warning' | 'info' | 'neutral';
type BadgeSize = 'sm' | 'md' | 'lg';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  size?: BadgeSize;
}

const variantConfig = {
  success: 'bg-success-100 text-success-800',
  error: 'bg-error-100 text-error-800',
  warning: 'bg-warning-100 text-warning-800',
  info: 'bg-info-100 text-info-800',
  neutral: 'bg-secondary-100 text-secondary-800',
};

const sizeConfig = {
  sm: 'px-2 py-1 text-xs',
  md: 'px-3 py-1 text-sm',
  lg: 'px-4 py-2 text-base',
};

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  (
    {
      variant = 'neutral',
      size = 'md',
      className = '',
      ...props
    },
    ref
  ) => {
    return (
      <span
        ref={ref}
        className={`inline-flex items-center rounded-full font-medium ${variantConfig[variant]} ${sizeConfig[size]} ${className}`}
        {...props}
      />
    );
  }
);

Badge.displayName = 'Badge';

export default Badge;
