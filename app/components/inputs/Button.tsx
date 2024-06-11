import React, {MouseEventHandler} from 'react';

interface IProps {
  type?: 'button' | 'submit' | 'reset';
  children: React.ReactNode;
  disabled?: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
  className?: string;
}

const Button = ({
  type = 'button',
  children,
  disabled,
  onClick,
  className
}: IProps) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${className} rounded-lg border-none bg-blue-800 px-8 py-2.5 text-white`}
    >
      {children}
    </button>
  );
};

export default Button;
