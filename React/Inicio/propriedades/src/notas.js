// Propriedades - Assim como uma função pode receber argumentos, pode passar argumentos também aos componentes, são conhecidos como propriedades ou props
const Titulo = (props) => {
  return <h1>{props.texto}</h1>;
};
const App = () => {
  return (
    <section>
      <Titulo texto="Meu Primeiro Título" />
      <Titulo texto="Meu Segundo Título" />
    </section>
  );
};

// É possível passar múltiplas propriedades
const Titulo2 = (props) => {
  return <h1 style={{ color: props.cor }}>{props.texto}</h1>;
};
const App2 = () => {
  return (
    <section>
      <Titulo texto="Meu Primeiro Título" cor="blue" />
      <Titulo texto="Meu Segundo Título" cor="red" />
    </section>
  );
};

// É possivel desestruturar direto no componente
const Titulo3 = ({ cor, texto }) => {
  return <h1 style={{ color: cor }}>{texto}</h1>;
};

//Children - se utilizarmos o componente abrindo e fechando em tags separadas, o conteúdo interno deste será acessado com a propriedade children.
const Titulo4 = (props) => {
  return <h1>{props.children}</h1>;
};
const App4 = () => {
  return (
    <section>
      <Titulo>Meu Primeiro Título</Titulo>
      <Titulo>
        <p>Título 2</p>
        <p>Título 3</p>
      </Titulo>
    </section>
  );
};

// Rest e Spread - Usamos quando não sabemos todas as propriedades que um componente pode receber.
const Input = ({ label, id, ...props }) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input id={id} type="text" {...props} />
    </div>
  );
};
export default Input;

//dados - Podemos passar diferentes tipos de dados e até outros componentes nas propriedades.
const Header = ({ logado, nome }) => {
  if (logado) {
    return <header>Bem vindo, {nome}</header>;
  } else {
    return <header>Header</header>;
  }
};
const Appdado = () => {
  const logado = true;
  const nome = 'André';

  return (
    <section>
      <Header logado={logado} nome={nome} />
    </section>
  );
};
