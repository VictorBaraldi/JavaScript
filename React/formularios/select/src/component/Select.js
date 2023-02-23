import React from 'react';

const Select = ({ options, value, setValue, ...props }) => {
  return (
    <select
      onChange={(event) => setValue(event.target.value)}
      {...props}
      value={value}
      style={{ textTransform: 'capitalize' }}
    >
      <option value="" disabled>
        Selecione
      </option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default Select;
