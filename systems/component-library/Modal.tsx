import React, { useEffect } from 'react';

interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  open: boolean;
  onClose: () => void;
  title?: string;
  size?: 'sm' | 'md' | 'lg';
  closeButton?: boolean;
}

const sizeConfig = {
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-lg',
};

const Modal = React.forwardRef<HTMLDivElement, ModalProps>(
  (
    {
      open,
      onClose,
      title,
      size = 'md',
      closeButton = true,
      children,
      className = '',
      ...props
    },
    ref
  ) => {
    useEffect(() => {
      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === 'Escape') onClose();
      };

      if (open) {
        document.addEventListener('keydown', handleEscape);
        document.body.style.overflow = 'hidden';
      }

      return () => {
        document.removeEventListener('keydown', handleEscape);
        document.body.style.overflow = 'auto';
      };
    }, [open, onClose]);

    if (!open) return null;

    return (
      <>
        {/* Backdrop */}
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={onClose}
          aria-hidden="true"
        />

        {/* Modal */}
        <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
          <div
            ref={ref}
            className={`bg-white rounded-lg shadow-xl ${sizeConfig[size]} w-full ${className}`}
            role="dialog"
            aria-modal="true"
            {...props}
          >
            {/* Header */}
            {title && (
              <div className="flex items-center justify-between px-6 py-4 border-b border-secondary-200">
                <h2 className="text-lg font-semibold">{title}</h2>
                {closeButton && (
                  <button
                    onClick={onClose}
                    className="text-secondary-500 hover:text-secondary-700 text-2xl leading-none"
                    aria-label="Close modal"
                  >
                    ×
                  </button>
                )}
              </div>
            )}

            {/* Content */}
            <div className="p-6">{children}</div>
          </div>
        </div>
      </>
    );
  }
);

Modal.displayName = 'Modal';

export default Modal;
