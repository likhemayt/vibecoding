import React from 'react';

interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  hint?: string;
  icon?: React.ReactNode;
  success?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error,
      hint,
      icon,
      success,
      className = '',
      disabled,
      ...props
    },
    ref
  ) => {
    const errorClass = error ? 'border-error-500 focus:ring-error-500' : '';
    const successClass = success ? 'border-success-500 focus:ring-success-500' : '';
    const baseClass = !error && !success ? 'border-secondary-300 focus:ring-primary-500' : '';

    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium text-secondary-900 mb-2">
            {label}
          </label>
        )}

        <div className="relative">
          {icon && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary-500">
              {icon}
            </div>
          )}

          <input
            ref={ref}
            disabled={disabled}
            className={`w-full px-4 py-2 border rounded-lg transition-all duration-200 disabled:bg-secondary-100 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 ${
              icon ? 'pl-10' : ''
            } ${baseClass} ${errorClass} ${successClass} ${className}`}
            {...props}
          />

          {success && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-success-500">
              ✓
            </div>
          )}

          {error && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-error-500">
              !
            </div>
          )}
        </div>

        {error && (
          <p className="mt-1 text-sm text-error-600">{error}</p>
        )}

        {hint && !error && (
          <p className="mt-1 text-sm text-secondary-500">{hint}</p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
