import React, { AllHTMLAttributes } from "react";

type InputVariant = "input" | "textarea";

interface IInputProps
  extends AllHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  variant?: InputVariant;
  className?: string;
}

const Input: React.FC<IInputProps> = ({ variant, className, ...props }) => {
  const commonClass =
    "w-full py-3 px-5 border border-dark-light-blue font-roboto-medium tracking-widest outline-none bg-transparent text-white text-13/16 placeholder-white placeholder-opacity-35";

  if (variant === "textarea") {
    return (
      <textarea className={`${commonClass} ${className}`} {...props}></textarea>
    );
  }

  return <input className={`${commonClass} ${className}`} {...props} />;
};

export { Input };
