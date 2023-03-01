// Head - No React não temos acesso direto as tags e informações do Head. Porém com o uso de rotas é essêncial realizar a mudança do título e descrição para cada rota. Podemos fazer isso através de um componente ou custom hook.

// Uma extensão que faz isso é o react-helmet, Ela retorna com componente em que você pode definir tags do Head dentro do mesmo.
import { Helmet } from 'react-helmet';

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Página Home</title>
        <meta name="description" content="Conteúdo da descrição" />
      </Helmet>
      <h1>Home</h1>
      <p>Essa é a home</p>
    </div>
  );
};
