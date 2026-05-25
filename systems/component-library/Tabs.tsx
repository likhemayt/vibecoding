import React, { useState } from 'react';

interface Tab {
  label: string;
  id: string;
  content: React.ReactNode;
}

interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
  tabs: Tab[];
  defaultTab?: string;
  onChange?: (tabId: string) => void;
}

const Tabs = React.forwardRef<HTMLDivElement, TabsProps>(
  (
    {
      tabs,
      defaultTab,
      onChange,
      className = '',
      ...props
    },
    ref
  ) => {
    const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id);

    const handleTabClick = (tabId: string) => {
      setActiveTab(tabId);
      onChange?.(tabId);
    };

    return (
      <div ref={ref} className={className} {...props}>
        {/* Tab buttons */}
        <div className="flex border-b border-secondary-200" role="tablist">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabClick(tab.id)}
              role="tab"
              aria-selected={activeTab === tab.id}
              aria-controls={`panel-${tab.id}`}
              className={`px-4 py-3 font-medium border-b-2 transition-colors ${
                activeTab === tab.id
                  ? 'border-primary-600 text-primary-600'
                  : 'border-transparent text-secondary-600 hover:text-secondary-900'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab content */}
        {tabs.map((tab) => (
          <div
            key={tab.id}
            id={`panel-${tab.id}`}
            role="tabpanel"
            aria-labelledby={`tab-${tab.id}`}
            className={activeTab === tab.id ? 'block' : 'hidden'}
          >
            <div className="py-4">{tab.content}</div>
          </div>
        ))}
      </div>
    );
  }
);

Tabs.displayName = 'Tabs';

export default Tabs;
