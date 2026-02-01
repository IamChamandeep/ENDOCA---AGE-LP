import React from 'react';
import { CONFIG } from '../constants';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, className = '', ...props }) => {
  const isPrimary = variant === 'primary';

  const baseStyles = "relative inline-flex items-center justify-center transition-all duration-300 ease-out focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed";
  
  // Primary: Pill shape, solid brand color, subtle shadow
  const primaryStyles = `
    rounded-full 
    px-10 py-4 
    text-white 
    font-semibold 
    text-sm tracking-wider 
    shadow-lg shadow-[#5D7A60]/20
    hover:scale-105 hover:shadow-xl hover:shadow-[#5D7A60]/30
    active:scale-95 active:shadow-inner
  `;

  // Secondary: Text only, low opacity, subtle
  const secondaryStyles = `
    mt-6 
    text-xs 
    font-medium 
    tracking-wide 
    underline-offset-4 
    opacity-60 
    hover:opacity-100 hover:underline
  `;

  const customStyle = isPrimary 
    ? { backgroundColor: CONFIG.colors.primary }
    : { color: CONFIG.colors.textSecondary };

  return (
    <button 
      className={`${baseStyles} ${isPrimary ? primaryStyles : secondaryStyles} ${className}`}
      style={customStyle}
      {...props}
    >
      {children}
    </button>
  );
};
