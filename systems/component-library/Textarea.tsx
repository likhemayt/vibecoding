import React from 'react';

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  hint?: string;
  maxLength?: number;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      label,
      error,
      hint,
      maxLength,
      className = '',
      disabled,
      value,
      onChange,
      ...props
    },
    ref
  ) => {
    const [charCount, setCharCount] = React.useState(
      typeof value === 'string' ? value.length : 0
    );

    const errorClass = error ? 'border-error-500 focus:ring-error-500' : '';
    const baseClass = !error ? 'border-secondary-300 focus:ring-primary-500' : '';

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setCharCount(e.target.value.length);
      onChange?.(e);
    };

    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium text-secondary-900 mb-2">
            {label}
          </label>
        )}

        <textarea
          ref={ref}
          disabled={disabled}
          maxLength={maxLength}
          value={value}
          onChange={handleChange}
          className={`w-full px-4 py-2 border rounded-lg transition-all duration-200 disabled:bg-secondary-100 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 resize-vertical min-h-24 ${baseClass} ${errorClass} ${className}`}
          {...props}
        />

        <div className="flex justify-between items-center mt-1">
          <div>
            {error && <p className="text-sm text-error-600">{error}</p>}
            {hint && !error && (
              <p className="text-sm text-secondary-500">{hint}</p>
            )}
          </div>
          {maxLength && (
            <span className="text-xs text-secondary-500">
              {charCount}/{maxLength}
            </span>
          )}
        </div>
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';

export default Textarea;
