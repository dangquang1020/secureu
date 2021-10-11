import React, { AllHTMLAttributes } from "react";

type InputVariant = "input" | "textarea";

interface IInputProps
  extends AllHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  variant?: InputVariant;
  className?: string;
  required?: boolean
}

const Input: React.FC<IInputProps> = ({
   variant, 
   className, 
   required = false,
   ...props 
  }) => {
  const commonClass =
    "w-full py-3 px-5 border font-roboto-medium tracking-widest outline-none bg-transparent text-white text-13/16 placeholder-white placeholder-opacity-35";

  if (variant === "textarea") {
    return (
      <textarea className={`${commonClass} ${className} ${required ? 'border-red-400' : 'border-dark-light-blue'}`} {...props}></textarea>
    );
  }

  return <input className={`${commonClass} ${className} ${required ? 'border-red-400' : 'border-dark-light-blue'}`} {...props} />;
};

export { Input };
