import React from 'react';
import { Instagram, Youtube, Mail } from 'lucide-react';

// Custom TikTok icon since it's not available in lucide-react
export const TikTok: React.FC<{ size?: number, className?: string }> = ({ size = 24, className = "" }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
    </svg>
  );
};

export { Instagram, Youtube, Mail };