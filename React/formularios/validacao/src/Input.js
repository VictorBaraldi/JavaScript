import React from 'react';

const Input = ({ label, id, onChange, ...props }) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input name={id} id={id} onChange={onChange} {...props} />
    </>
  );
};

export default Input;
