import React from 'react';
// useRef - retorna um obj com a propriedade current. Este obj pode ser utilizado para guardar valores que irão persistir durante todo ciclo de vida do elemento, geralmente usamos o mesmo para referir a elemento do DOM sem precisar do querySelector
const App = () => {
  const video = React.useRef();

  React.useEffect(() => {
    console.log(video.current); //esse video.current referencia ao <video ref={video}></video>
  }, []);

  return <video ref={video}></video>;
};

//Referência O seu uso não é restrito a elementos do dom. Podemos utilizar também para guardarmos a referência de qualquer valor, como de um setTimeout por exemplo.
const App2 = () => {
  const [contar, setContar] = React.useState(0);
  const [notificacao, setNotificacao] = React.useState(null);
  const timeoutRef = React.useRef();

  function handleClick() {
    setNotificacao('Obrigado por comprar');
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setNotificacao(null);
    }, 1000);
    setContar(contar + 1);
  }

  return (
    <div>
      <p>{notificacao}</p>
      <button onClick={handleClick}>{contar}</button>
    </div>
  );
};
