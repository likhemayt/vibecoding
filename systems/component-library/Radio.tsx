import React from 'react';

interface RadioOption {
  label: string;
  value: string;
  description?: string;
}

interface RadioProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  options: RadioOption[];
  label?: string;
}

const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  ({ options, label, className = '', ...props }, ref) => {
    return (
      <fieldset className="space-y-3">
        {label && (
          <legend className="text-sm font-medium text-secondary-900">
            {label}
          </legend>
        )}

        {options.map((option) => (
          <div key={option.value} className="flex items-start">
            <input
              ref={ref}
              type="radio"
              value={option.value}
              className={`mt-1 h-4 w-4 border-secondary-300 text-primary-600 focus:ring-primary-500 cursor-pointer ${className}`}
              {...props}
            />

            <div className="ml-3">
              <label className="text-sm font-medium text-secondary-900 cursor-pointer">
                {option.label}
              </label>
              {option.description && (
                <p className="text-sm text-secondary-500">
                  {option.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </fieldset>
    );
  }
);

Radio.displayName = 'Radio';

export default Radio;
