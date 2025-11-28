import React from 'react';

type AdPosition = 'top-banner' | 'right-rail' | 'in-content' | 'footer-banner';

interface AdPlaceholderProps {
  id: string;
  position: AdPosition;
  className?: string;
}

const positionLabels: Record<AdPosition, string> = {
  'top-banner': 'Top Banner',
  'right-rail': 'Right Rail',
  'in-content': 'In-Content',
  'footer-banner': 'Footer Banner',
};

const positionStyles: Record<AdPosition, string> = {
  'top-banner': 'min-h-[80px]',
  'right-rail': 'min-h-[250px]',
  'in-content': 'min-h-[100px]',
  'footer-banner': 'min-h-[80px]',
};

export const AdPlaceholder: React.FC<AdPlaceholderProps> = ({ 
  id, 
  position, 
  className = '' 
}) => {
  const label = positionLabels[position];
  const minHeight = positionStyles[position];

  return (
    <div
      id={id}
      className={`
        border-2 border-dashed border-border rounded-lg 
        bg-muted/50 flex items-center justify-center
        text-xs text-muted-foreground
        ${minHeight}
        ${className}
      `}
    >
      <div className="text-center p-2">
        <p className="font-semibold mb-1">Google Ad Placeholder</p>
        <p className="text-xs opacity-70">{label}</p>
      </div>
    </div>
  );
};

