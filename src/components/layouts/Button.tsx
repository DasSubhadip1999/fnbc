import React from "react";
import { twMerge } from "tailwind-merge";

interface Button {
  text: string;
  className?: string;
  type?: "button" | "submit" | "reset";
}

const Button: React.FC<Button> = ({ text, className, type = "button" }) => {
  return (
    <button
      type={type}
      className={twMerge(
        `bg-primary text-white py-4 rounded-md w-full ${className}`
      )}>
      {text}
    </button>
  );
};

export default Button;
