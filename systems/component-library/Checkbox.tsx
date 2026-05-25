import React from 'react';

interface CheckboxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  description?: string;
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, description, className = '', ...props }, ref) => {
    return (
      <div className="flex items-start">
        <input
          ref={ref}
          type="checkbox"
          className={`mt-1 h-4 w-4 rounded border-secondary-300 text-primary-600 focus:ring-primary-500 cursor-pointer ${className}`}
          {...props}
        />

        {(label || description) && (
          <div className="ml-3">
            {label && (
              <label className="text-sm font-medium text-secondary-900 cursor-pointer">
                {label}
              </label>
            )}
            {description && (
              <p className="text-sm text-secondary-500">{description}</p>
            )}
          </div>
        )}
      </div>
    );
  }
);

Checkbox.displayName = 'Checkbox';

export default Checkbox;
