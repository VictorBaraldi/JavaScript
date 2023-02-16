import React from 'react';
import Input from './Input';
import Button from './Button';

const Form = () => {
  return (
    <form>
      <p>
        <label htmlFor="Nome">Nome</label>
        <Input />
      </p>
      <p>
        <label htmlFor="mail">Email</label>
        <Input />
      </p>
      <Button />
    </form>
  );
};

export default Form;
