// Evento - pode atribuir evento diretamente ao elemento JSX como atributo, Os eventos são sintáticos, ou seja, são criados pelo próprio React porém seguindo as especificações da W3C (e funcionam igualmente nos diversos browsers que o React suporta).
const App = () => {
  function handleClick(event) {
    alert('Comprou: ' + event.target.innerText);
  }
  return (
    <div>
      <button onClick={handleClick}>Camisa</button>
      <button onClick={handleClick}>Bermuda</button>
    </div>
  );
};

//Anonima - É possível executar uma função anônima no evento.
const AppAno = () => {
  return (
    <button onClick={({ target }) => target.classList.toggle('ativa')}>
      Ativar
    </button>
  );
};

//window - Eventos no window/document ou qualquer elemento fora do React, devem ser adicionados com JavaScript normalmente, usando o addEventListener.
const AppWindow = () => {
  function handleScroll(event) {
    console.log(event);
  }
  window.addEventListener('scroll', handleScroll);
  return <div style={{ height: '200vw' }}>Div</div>;
};
