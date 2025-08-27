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

  return (
    <button
      type={type}
      onClick={handleClick}
      disabled={disabled}
      className={`rounded-full bg-orange-600 px-18 py-3 text-white  hover:cursor-pointer ${className}`}
    >
      {children}
    </button>
  );
}
