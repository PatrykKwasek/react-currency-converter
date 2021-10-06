import React from 'react';

export const Select = ({children, value, name, onChange}) => {
  return (
    <select value={value} name={name} onChange={onChange}>
      {children}
    </select>
  )
}