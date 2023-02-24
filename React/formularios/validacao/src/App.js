import React from 'react';
import Input from './Input';

const App = () => {
  const [cep, setCep] = React.useState('');
  const [erro, setErro] = React.useState(null);

  function validateCep(value) {
    if (value.length === 0) {
      setErro('Preencha um valor');
      return false;
    } else if (!/^\d{5}-?\d{3}$/.test(value)) {
      setErro('Preencha um valor válido');
      return false;
    } else {
      setErro(null);
      return true;
    }
  }

  function handleBlur(e) {
    validateCep(e.target.value);
  }

  function handleChange(e) {
    if (erro) validateCep(e.target.value);
    setCep(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (validateCep(cep)) console.log('enviou');
    else console.log('não enviou');
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input
        label="CEP"
        id="cep"
        value={cep}
        onChange={handleChange}
        placeholder="00000-000"
        type="text"
        onBlur={handleBlur}
      />
      {erro && <p>{erro}</p>}
      <button>Enviar</button>
    </form>
  );
};

export default App;
