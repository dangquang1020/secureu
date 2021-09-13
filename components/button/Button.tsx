import React from 'react'

interface IButtonProps {
  className?: string;
};

const Button: React.FC<IButtonProps> = ({
  className = '',
  ...props
}) => {
  return (
    <div className={`button ${className}`}>
      {props.children}
    </div>
  );
};

export { Button };
