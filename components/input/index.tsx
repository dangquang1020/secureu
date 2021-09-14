import React, { AllHTMLAttributes } from "react";

type InputVariant = "input" | "textarea";

interface IInputProps
  extends AllHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  variant?: InputVariant;
  className?: string;
}

const Input: React.FC<IInputProps> = ({ variant, className, ...props }) => {
  const commonClass =
    "w-full py-3 px-5 border border-light-blue outline-none bg-transparent text-white font-black text-13/16";

  if (variant === "textarea") {
    return (
      <textarea className={`${commonClass} ${className}`} {...props}></textarea>
    );
  }

  return <input className={`${commonClass} ${className}`} {...props} />;
};

export { Input };
