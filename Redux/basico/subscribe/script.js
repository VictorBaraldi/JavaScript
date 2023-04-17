// quando o método é modificado através de uma ação é necessário renderizarmos o mesmo novamente na tela
const total = document.getElementById('total');
function reducer(state = 0, action) {
  if (action.type === 'incrementar') {
    return state + 1;
  }
  if (action.type === 'reduzir') {
    return state - 1;
  }
  return state;
}
const store = Redux.createStore(reducer);
total.innerText = store.getState();

store.dispatch({ type: 'incrementar' });
// Se não renderizarmos novamente o resultado, ele irá se manter 0 na tela
total.innerText = store.getState(); // 1

// A store possui o método subscribe que irá ativar a função que for passada como argumento do mesmo, todas as vezes que uma ação for despachada via dispatch.
function render() {
  total.innerText = store.getState();
}

store.subscribe(render);

const btn = document.getElementById('button');
btn.addEventListener('click', () => store.dispatch({ type: 'incrementar' }));

// É válido o uso de múltiplos subscribes.

store.subscribe(render);
store.subscribe(() => {
  console.log('Atualizado');
});

// Unsubscribe - e por algum motivo desejar que a função pare de ser ativada quando ocorrer um dispatch, é possível utilizar o unsubscribe que é o retorno da ativação do método.
const unsubscribe = store.subscribe(render);
store.dispatch({ type: 'incrementar' });

unsubscribe();
// não vai mais ativar o render
store.dispatch({ type: 'incrementar' });
