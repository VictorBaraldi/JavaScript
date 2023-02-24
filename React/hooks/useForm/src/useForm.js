import React from 'react';

const types = {
  cep: {
    regex: /^\d{5}-?\d{3}$/,
    message: 'Cep inválido',
  },
  email: {
    regex:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: 'Email inválido',
  },
};

const useForm = (type) => {
  const [value, setValue] = React.useState('');
  const [erro, setErro] = React.useState(null);

  function validar(value) {
    if (type === false) return true;
    if (value.length === 0) {
      setErro('Preencha um valor');
      return false;
    } else if (types[type] && !types[type].regex.test(value)) {
      setErro(types[type].message);
      return false;
    } else {
      setErro(null);
      return true;
    }
  }

  function onChange(e) {
    if (erro) validar(e.target.value);
    setValue(e.target.value);
  }

  return {
    value,
    setValue,
    onChange,
    erro,
    onBlur: () => validar(value),
    validar: () => validar(value),
  };
};

export default useForm;
