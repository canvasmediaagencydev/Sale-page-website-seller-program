import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  href?: string;
}

export default function Button({ 
  children, 
  className = "", 
  onClick, 
  type = "button",
  disabled = false,
  href = "https://app.paydee.me"
}: ButtonProps) {
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      window.open(href, '_blank');
    }
  };

  // Check if custom background is provided
  const hasCustomBg = className.includes('bg-');
  const hasCustomText = className.includes('text-');

  const baseStyles = "rounded-full px-18 py-3 cursor-pointer transition-colors";
  const defaultBg = hasCustomBg ? "" : "bg-paydee-orange-primary hover:bg-paydee-yellow-primary";
  const defaultText = hasCustomText ? "" : "text-white";

  return (
    <button
      type={type}
      onClick={handleClick}
      disabled={disabled}
      className={`${baseStyles} ${defaultBg} ${defaultText} ${className}`}
    >
      {children}
    </button>
  );
}
