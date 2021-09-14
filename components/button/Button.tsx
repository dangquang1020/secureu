import React from 'react'

interface IButtonProps {
  className?: string;
  onClick?: Function
};

const Button: React.FC<IButtonProps> = ({
  className = '',
  onClick,
  ...props
}) => {
  return (
    <button className={`button ${className}`} onClick={(e) => onClick ? onClick(e) : {}}>
      {props.children}
    </button>
  );
};

export { Button };
