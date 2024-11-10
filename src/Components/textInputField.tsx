import React from 'react';

interface InputProps {
  type: string;
  name: string;
  id: string;
  placeholder?: string;
  required?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  className?: string;
  error?: string;
  accept?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextInputField: React.FC<InputProps> = ({
  type,
  name,
  id,
  placeholder,
  required,
  startIcon,
  endIcon,
  className,
  error,
  accept,
  value,
  onChange
}) => {
  return (
    <div className="relative">
      {startIcon && (
        <div className="absolute mx-2 left-2 top-[13px]">{startIcon}</div>
      )}
      <input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        required={required}
        accept={accept}
        value={value}
        onChange={onChange}
        className={`
          bg-gray-50 border ${error ? 'border-red-500' : 'border-gray-300'} 
          text-gray-900 sm:text-base ${startIcon ? 'pl-12' : ''} ${endIcon ? 'pr-12' : ''} 
          rounded-3xl focus:ring-primary-600 leading-8 focus:border-primary-600 block w-full p-2.5 
          ${className} ${error ? 'focus:border-red-500 focus:ring-red-500' : ''}
        `}
      />
      {endIcon && (
        <div className="absolute mx-2 right-1 top-[11px]">{endIcon}</div>
      )}
      {error && (
        <p className="text-red-500 mt-2 text-sm text-center">{error}</p>
      )}
    </div>
  );
};

export default TextInputField;
