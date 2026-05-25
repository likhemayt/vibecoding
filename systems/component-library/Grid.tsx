import React from 'react';

interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  cols?: 1 | 2 | 3 | 4 | 6;
  gap?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  responsive?: boolean;
}

const colsConfig = {
  1: 'grid-cols-1',
  2: 'grid-cols-2',
  3: 'grid-cols-3',
  4: 'grid-cols-4',
  6: 'grid-cols-6',
};

const gapConfig = {
  xs: 'gap-2',
  sm: 'gap-4',
  md: 'gap-6',
  lg: 'gap-8',
  xl: 'gap-12',
};

const Grid = React.forwardRef<HTMLDivElement, GridProps>(
  (
    {
      cols = 3,
      gap = 'md',
      responsive = true,
      className = '',
      children,
      ...props
    },
    ref
  ) => {
    const responsiveClass = responsive
      ? 'grid-cols-1 md:grid-cols-2 lg:' + colsConfig[cols]
      : colsConfig[cols];

    return (
      <div
        ref={ref}
        className={`grid ${responsiveClass} ${gapConfig[gap]} ${className}`}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Grid.displayName = 'Grid';

export default Grid;
