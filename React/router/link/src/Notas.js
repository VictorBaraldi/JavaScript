//O Link irá modificar a rota e renderizar o novo componente sem recarregar a página.

import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="sobre">Sobre</Link>
      <Link to="contato">Contato</Link>
    </nav>
  );
};

//O NavLink funciona da mesma forma, mas adiciona uma classe ao link que estiver ativo. É necessário colocar o end no NavLink responsável por navegar para a raiz do app.

//o hook useNavigate permite navegarmos programaticamente entre rotas, por exemplo, quando o usuário realizar um login bem sucedido, enviamos direto parapágina de sua conta
