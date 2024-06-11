import {ChangeEventHandler} from 'react';

interface IProps {
  type?: string;
  placeholder: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  label?: string;
  className?: string;
}
const Input = ({
  type = 'text',
  placeholder,
  value,
  onChange,
  label,
  className
}: IProps) => {
  return (
    <label>
      {label && (
        <span className='mb-1.5 block text-sm font-[300]'>{label}</span>
      )}
      <input
        type={type}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        className={`w-full rounded-lg border border-gray-400 px-4 py-3 focus:border-blue-500 ${className}`}
      />
    </label>
  );
};

export default Input;
