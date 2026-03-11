import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'whatsapp';
  fullWidth?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  fullWidth = false, 
  children, 
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "bg-secondary text-white hover:bg-orange-600 shadow-lg hover:shadow-orange-500/30",
    secondary: "bg-white text-primary hover:bg-gray-100 border border-transparent shadow-md",
    outline: "bg-transparent border-2 border-white text-white hover:bg-white/10",
    whatsapp: "bg-[#25D366] text-white hover:bg-[#128C7E] shadow-lg hover:shadow-green-500/30"
  };

  const width = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${width} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};