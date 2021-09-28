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

  const onButtonClick = (e: any) => {
    if (onClick) {
      onClick(e)
    }
  }

  return (
    <button className={`button ${className}`} onClick={onButtonClick}>
      {props.children}
    </button>
  );
};

export { Button };
