import React from 'react';

export const Input = ({ type, name, value, placeholder, onChange, className, maxLength }) => {
  return (
    <input
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      className={className}
      maxLength={maxLength}
    />
  )
}