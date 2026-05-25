import React from 'react';

type AlertVariant = 'success' | 'error' | 'warning' | 'info';

interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: AlertVariant;
  title?: string;
  closeable?: boolean;
  onClose?: () => void;
}

const variantConfig = {
  success: {
    bg: 'bg-success-50',
    border: 'border-success-200',
    text: 'text-success-900',
    icon: '✓',
  },
  error: {
    bg: 'bg-error-50',
    border: 'border-error-200',
    text: 'text-error-900',
    icon: '!',
  },
  warning: {
    bg: 'bg-warning-50',
    border: 'border-warning-200',
    text: 'text-warning-900',
    icon: '⚠',
  },
  info: {
    bg: 'bg-info-50',
    border: 'border-info-200',
    text: 'text-info-900',
    icon: 'ℹ',
  },
};

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  (
    {
      variant = 'info',
      title,
      closeable = false,
      onClose,
      children,
      className = '',
      ...props
    },
    ref
  ) => {
    const [visible, setVisible] = React.useState(true);

    const config = variantConfig[variant];

    const handleClose = () => {
      setVisible(false);
      onClose?.();
    };

    if (!visible) return null;

    return (
      <div
        ref={ref}
        className={`border rounded-lg p-4 ${config.bg} ${config.border} ${config.text} ${className}`}
        {...props}
      >
        <div className="flex gap-3">
          <div className="text-lg">{config.icon}</div>
          <div className="flex-1">
            {title && <h3 className="font-semibold">{title}</h3>}
            <div className="text-sm">{children}</div>
          </div>
          {closeable && (
            <button
              onClick={handleClose}
              className="text-lg hover:opacity-70"
              aria-label="Close"
            >
              ×
            </button>
          )}
        </div>
      </div>
    );
  }
);

Alert.displayName = 'Alert';

export default Alert;
