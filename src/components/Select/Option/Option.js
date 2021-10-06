import React from 'react';

export const Option = ({value, txt}) => {
  return (
    <option value={value}>
      {txt}
    </option>
  )
}