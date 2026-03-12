import React from 'react';

export default function Input({
  label,
  type,
  placeholder,
  onChange,
  onBlur,
  name,
  value,
  error,
  required = false,
  disabled = false
}) {
  const [isFocused, setIsFocused] = React.useState(false);

  return (
    <div className='w-full'>
      <label 
        htmlFor={name} 
        className={`block text-sm font-semibold mb-2 transition-colors duration-200 ${
          isFocused ? 'text-blue-600' : 'text-gray-700'
        }`}
      >
        {label}
        {required && <span className='text-red-500 ml-1'>*</span>}
      </label>
      
      <div className="relative">
        <input
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={(e) => {
            setIsFocused(false);
            onBlur && onBlur(e);
          }}
          onFocus={() => setIsFocused(true)}
          required={required}
          disabled={disabled}
          placeholder={placeholder}
          className={`w-full px-4 py-3 border-2 rounded-xl outline-none transition-all duration-200 ${
            error 
              ? 'border-red-500 focus:border-red-500 bg-red-50' 
              : isFocused 
                ? 'border-blue-500 bg-blue-50' 
                : 'border-gray-200 hover:border-gray-300'
          } ${disabled ? 'opacity-50 cursor-not-allowed bg-gray-100' : 'bg-white'}`}
        />
        
        {/* Focus ring animation */}
        <div className={`absolute inset-0 rounded-xl transition-all duration-200 pointer-events-none ${
          isFocused && !error ? 'ring-2 ring-blue-500/20' : ''
        }`}></div>
      </div>
      
      {error && (
        <p className='text-red-500 text-sm mt-1 px-1 flex items-center'>
          <span className="mr-1">⚠</span>
          {error}
        </p>
      )}
    </div>
  );
}
