import React, { useState } from 'react';

interface TooltipProps extends React.HTMLAttributes<HTMLDivElement> {
  content: React.ReactNode;
  position?: 'top' | 'right' | 'bottom' | 'left';
}

const positionConfig = {
  top: 'bottom-full mb-2 left-1/2 -translate-x-1/2',
  right: 'left-full ml-2 top-1/2 -translate-y-1/2',
  bottom: 'top-full mt-2 left-1/2 -translate-x-1/2',
  left: 'right-full mr-2 top-1/2 -translate-y-1/2',
};

const Tooltip = React.forwardRef<HTMLDivElement, TooltipProps>(
  (
    {
      content,
      position = 'top',
      children,
      className = '',
      ...props
    },
    ref
  ) => {
    const [isVisible, setIsVisible] = useState(false);

    return (
      <div ref={ref} className={`relative inline-block ${className}`} {...props}>
        <div
          onMouseEnter={() => setIsVisible(true)}
          onMouseLeave={() => setIsVisible(false)}
          className="inline-block"
        >
          {children}
        </div>

        {isVisible && (
          <div
            className={`absolute ${positionConfig[position]} whitespace-nowrap bg-secondary-900 text-white px-3 py-2 rounded text-sm z-10 pointer-events-none animate-fadeIn`}
          >
            {content}
          </div>
        )}
      </div>
    );
  }
);

Tooltip.displayName = 'Tooltip';

export default Tooltip;
