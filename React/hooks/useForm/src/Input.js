import React from 'react';

const Input = ({
  label,
  id,
  onChange,
  type,
  value,
  placeholder,
  onBlur,
  erro,
}) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        name={id}
        id={id}
        onChange={onChange}
        type={type}
        value={value}
        placeholder={placeholder}
        onBlur={onBlur}
      />
      {erro && <p>{erro}</p>}
    </>
  );
};

export default Input;
