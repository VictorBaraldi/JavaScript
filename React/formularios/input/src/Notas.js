import React from 'react';
// Reatividade - para criar formulários reativos, devemos definir o estado para value e a função atualizadora para onChange
const Reatividade = () => {
  const [nome, setNome] = React.useState('');

  return (
    <form>
      <label htmlFor="nome">Nome</label>
      <input
        type="text"
        id="nome"
        value={nome}
        onChange={(event) => setNome(event.target.value)}
      />
    </form>
  );
};

// No form controla o que acontece ao enviar o mesmo, por isso definimos uma função para lidar com o onSubmit. o preventDefault() irá prevenir o comportamento padrão, que seria de atualizar a pagina, enviando uma requisição para o que estiver em action
const Form = () => {
  const [nome, setNome] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();
    console.log(nome);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="nome">Nome</label>
      <input
        type="text"
        id="nome"
        value={nome}
        onChange={(event) => setNome(event.target.value)}
      />
      <button>Enviar</button>
    </form>
  );
};

// Multiplos campos - é possivel definir um estado para cada campo
const Multiplos = () => {
  const [nome, setNome] = React.useState('');
  const [email, setEmail] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();
    console.log(nome, email);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="nome">Nome</label>
      <input
        type="text"
        id="nome"
        value={nome}
        onChange={(event) => setNome(event.target.value)}
      />
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <button>Enviar</button>
    </form>
  );
};

// Objeto - Podemos definir um objeto que irá conter todos os valores dos campos do formulário.
const App = () => {
  const [form, setForm] = React.useState({
    nome: '',
    email: '',
  });

  function handleSubmit(event) {
    event.preventDefault();
    console.log(form);
  }

  function handleChange({ target }) {
    const { id, value } = target;
    setForm({ ...form, [id]: value });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="nome">Nome</label>
      <input type="text" id="nome" value={form.nome} onChange={handleChange} />
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        value={form.email}
        onChange={handleChange}
      />
      <button>Enviar</button>
    </form>
  );
};
