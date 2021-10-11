import React from 'react'

interface IButtonProps {
  className?: string;
  onClick?: Function,
  disabled?: boolean
};

const Button: React.FC<IButtonProps> = ({
  className = '',
  onClick,
  disabled = false,
  ...props
}) => {

  const onButtonClick = (e: any) => {
    if (onClick) {
      onClick(e)
    }
  }

  return (
    <button className={`button ${className}`} onClick={onButtonClick} disabled={disabled}>
      {props.children}
    </button>
  );
};

export { Button };
