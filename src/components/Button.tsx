import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export default function Button({ 
  children, 
  className = "", 
  onClick, 
  type = "button",
  disabled = false 
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`rounded-full bg-orange-600 px-18 py-3 text-white  hover:cursor-pointer ${className}`}
    >
      {children}
    </button>
  );
}
