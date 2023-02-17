import React from 'react';
//As vezes precisamos executar um efeito sempre que um componente for desmontado. Para isso utilizamos um callback no retorno do callback do efeito.
const Produto = () => {
  // Utilizamos o useEffect para adicionarmos eventos direto ao DOM
  React.useEffect(() => {
    function handleScroll(e) {
      console.log(e);
    }
    window.addEventListener('scroll', handleScroll);
    // Limpa o evento quando o elemento é removido do DOM para que não ocorra varias vezes.
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return <div style={{ height: '200vh' }}>Meu produto</div>;
};

export default Produto;
