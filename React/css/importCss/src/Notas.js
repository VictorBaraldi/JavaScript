// Com o import direto é o meio mais simples de usar css diretamente no JS.
import './App.css';
const App = () => {
  return (
    <div className="container">
      <p className="text">Meu site</p>
    </div>
  );
};

// Quando importamos componentes, os estilos do mesmo São automaticamente adicionados ao css final no build, independente de utilizar o componente ou não.

// Como todos arquivos são unidos em um css final, os seletores devem ser específicos para que não ocorra conflitos.
