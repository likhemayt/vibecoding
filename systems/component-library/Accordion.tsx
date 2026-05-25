import React, { useState } from 'react';

interface AccordionItem {
  title: string;
  id: string;
  content: React.ReactNode;
}

interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  items: AccordionItem[];
  allowMultiple?: boolean;
}

const Accordion = React.forwardRef<HTMLDivElement, AccordionProps>(
  (
    {
      items,
      allowMultiple = false,
      className = '',
      ...props
    },
    ref
  ) => {
    const [openItems, setOpenItems] = useState<string[]>([]);

    const toggleItem = (id: string) => {
      setOpenItems((prev) => {
        if (prev.includes(id)) {
          return prev.filter((item) => item !== id);
        } else {
          return allowMultiple ? [...prev, id] : [id];
        }
      });
    };

    return (
      <div ref={ref} className={className} {...props}>
        {items.map((item) => {
          const isOpen = openItems.includes(item.id);

          return (
            <div
              key={item.id}
              className="border border-secondary-200 rounded-lg mb-2"
            >
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-secondary-50 transition-colors"
                aria-expanded={isOpen}
                aria-controls={`content-${item.id}`}
              >
                <span className="font-medium text-left">{item.title}</span>
                <span className={`transition-transform ${isOpen ? 'rotate-180' : ''}`}>
                  ↓
                </span>
              </button>

              {isOpen && (
                <div
                  id={`content-${item.id}`}
                  className="px-6 py-4 border-t border-secondary-200 bg-secondary-50"
                >
                  {item.content}
                </div>
              )}
            </div>
          );
        })}
      </div>
    );
  }
);

Accordion.displayName = 'Accordion';

export default Accordion;
