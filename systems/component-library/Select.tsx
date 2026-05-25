import React, { useState } from 'react';

interface SelectOption {
  label: string;
  value: string;
}

interface SelectProps
  extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'children'> {
  label?: string;
  error?: string;
  hint?: string;
  options: SelectOption[];
  placeholder?: string;
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      label,
      error,
      hint,
      options,
      placeholder,
      className = '',
      disabled,
      ...props
    },
    ref
  ) => {
    const errorClass = error ? 'border-error-500 focus:ring-error-500' : '';
    const baseClass = !error ? 'border-secondary-300 focus:ring-primary-500' : '';

    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium text-secondary-900 mb-2">
            {label}
          </label>
        )}

        <select
          ref={ref}
          disabled={disabled}
          className={`w-full px-4 py-2 border rounded-lg transition-all duration-200 disabled:bg-secondary-100 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 ${baseClass} ${errorClass} ${className}`}
          {...props}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

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

Select.displayName = 'Select';

export default Select;
