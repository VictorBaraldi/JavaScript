import React from 'react';
import Input from './Input';
import useForm from './useForm';

const App = () => {
  const cep = useForm('cep');
  const email = useForm('email');
  const nome = useForm();

  function handleSubmit(e) {
    e.preventDefault();
    if (cep.validar() && email.validar() && nome.validar())
      console.log('enviou');
    else {
      console.log('não enviar');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input label="nome" id="nome" {...nome} type="text" />
      <Input
        label="CEP"
        id="cep"
        {...cep}
        placeholder="00000-000"
        type="text"
      />
      <Input label="email" id="email" {...email} type="email" />
      <p>
        <button>Enviar</button>
      </p>
    </form>
  );
};

export default App;
