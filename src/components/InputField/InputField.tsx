import React, { useState } from 'react';

export interface InputFieldProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  placeholder?: string;
  helperText?: string;
  errorMessage?: string;
  disabled?: boolean;
  invalid?: boolean;
  variant?: 'filled' | 'outlined' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  type?: 'text' | 'password';
  showClear?: boolean;
  showPasswordToggle?: boolean;
}

const sizeClasses = {
  sm: 'py-1 px-2 text-sm',
  md: 'py-2 px-3 text-base',
  lg: 'py-3 px-4 text-lg',
};

const variantClasses = {
  filled: 'bg-gray-100 border border-gray-300 focus:border-blue-500',
  outlined: 'bg-white border-2 border-gray-300 focus:border-blue-500',
  ghost: 'bg-transparent border border-gray-300 focus:border-blue-500',
};

export const InputField: React.FC<InputFieldProps> = ({
  value,
  onChange,
  label,
  placeholder,
  helperText,
  errorMessage,
  disabled = false,
  invalid = false,
  variant = 'filled',
  size = 'md',
  type = 'text',
  showClear = false,
  showPasswordToggle = false,
}) => {
  const [internalValue, setInternalValue] = useState(value || '');
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInternalValue(e.target.value);
    onChange?.(e);
  };

  const handleClear = () => {
    setInternalValue('');
    onChange?.({
      ...({} as React.ChangeEvent<HTMLInputElement>),
      target: { value: '' } as any,
    });
  };

  const inputType = showPasswordToggle ? (showPassword ? 'text' : 'password') : type;

  return (
    <div className="flex flex-col w-full">
      {label && (
        <label className="mb-1 text-sm font-medium text-gray-700" aria-label={label}>
          {label}
        </label>
      )}
      <div className="relative flex items-center">
        <input
          type={inputType}
          value={value !== undefined ? value : internalValue}
          onChange={handleChange}
          placeholder={placeholder}
          disabled={disabled}
          aria-invalid={invalid}
          aria-label={label}
          className={`w-full rounded transition-all outline-none ${sizeClasses[size]} ${variantClasses[variant]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${invalid ? 'border-red-500' : ''}`}
        />
        {showClear && (value !== '' || internalValue !== '') && !disabled && (
          <button
            type="button"
            className="absolute right-2 text-gray-400 hover:text-gray-600"
            aria-label="Clear input"
            onClick={handleClear}
          >
            ×
          </button>
        )}
        {showPasswordToggle && (
          <button
            type="button"
            className="absolute right-8 text-gray-400 hover:text-gray-600"
            aria-label={showPassword ? 'Hide password' : 'Show password'}
            onClick={() => setShowPassword((prev) => !prev)}
            tabIndex={-1}
          >
            {showPassword ? '🙈' : '👁️'}
          </button>
        )}
      </div>
      {helperText && !invalid && (
        <span className="mt-1 text-xs text-gray-500">{helperText}</span>
      )}
      {invalid && errorMessage && (
        <span className="mt-1 text-xs text-red-500">{errorMessage}</span>
      )}
    </div>
  );
};
