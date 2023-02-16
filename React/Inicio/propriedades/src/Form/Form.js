import React from 'react';
import Input from './Input';
import Button from './Button';

const Form = () => {
  return (
    <form>
      <Input id="email" label="Email" required />
      <Input id="password" label="Password" type="password" />
      <Button />
    </form>
  );
};

export default Form;
