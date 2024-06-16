'use client';

import {ChangeEventHandler, useEffect, useRef, useState} from 'react';

interface IProps {
  type?: string;
  placeholder: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  label?: string;
  className?: string;
  required?: boolean;
}
const Input = ({
  type = 'text',
  placeholder,
  value,
  onChange,
  label,
  className,
  required
}: IProps) => {
  const [error, setError] = useState(false);

  const checkError = () => {
    if (required && value.length === 0) {
      setError(true);
    }
  };
  return (
    <label>
      <div className='flex items-center justify-between'>
        <span className='mb-1.5 block text-sm font-[300]'>{label}</span>
        {error && (
          <span className='block text-sm font-bold text-red-600'>
            This field is required
          </span>
        )}
      </div>
      <input
        type={type}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        className={`w-full rounded-lg border border-gray-400 px-4 py-3 focus:border-blue-500 ${className} ${
          error ? 'border-red-600' : ''
        }`}
        onBlur={checkError}
      />
    </label>
  );
};

export default Input;
