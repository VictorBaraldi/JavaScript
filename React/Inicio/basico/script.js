// React element - todo elemento React é criado com a função createElement, o babel que é responsável por transformar o elemento JSX em React
function App() {
  return <div id="container">Meu App</div>;
}
// É transformado em: (nunca faz desse jeito, isso o babel faz automaticamente)
function AppReact() {
  return React.createElement('div', { id: 'container' }, 'Meu App');
}

// Componentes - permite dividir a interface em pequenos elementos, são criados através de funções que retornam elementos React ou classes que estendem React. Componentes possuem o método render retornando um elemento React.
// function Component
const Button = () => {
  return <button>Comprar</button>;
};
// Class Component
class ButtonClass extends React.Component {
  render() {
    // responsável por renderizar o conteúdo
    return <button>Comprar</button>;
  }
}

// Composição de componentes - com os componentes podemos compor uma interface com diversos componentes que podem ser reutilizados
const MainNav = () => {
  return (
    <nav>
      <App />
      <a href="#">Link 1</a>
      <Button />
    </nav>
  );
};

// Eventos - pode atribuir os eventos diretamente aos elementos
const Produtos = () => {
  function handleClick(event) {
    alert('comprou', event.target.innerText);
  }

  return (
    <div>
      <button onClick={handleClick}>Camisa</button>
      <button onClick={handleClick}>Bermuda</button>
    </div>
  );
};

// Hooks - utilizamos react pela facilidade de sincronização do estado. Antes dos hooks, isso só era possível com componentes criados por meio de classes
const compras = () => {
  //useState é um hook que define uma variável reativa
  const [count, setCount] = React.useState(0);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Comprar: {count}</button>
      <p>Total: {count}</p>
      <p>Preço: R$ {count * 250}</p>
    </div>
  );
};
