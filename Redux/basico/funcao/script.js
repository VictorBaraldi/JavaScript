// Regra 1 - função pura: Retornar um mesmo valor significa que os cálculos internos da função não podem depender de números aleatórios, tempo, data e outros dados que possam mudar no futuro.Efeitos colaterais são aqueles que impactam objetos/elementos que não pertencem a função. Exemplo: fetch, setTimeout, manipular dom, modificar objetos/arrays externas e outros.

//incorreto
function reducer(state = 0, action) {
  switch (action.type) {
    case 'MODIFICAR_WIDTH':
      // Efeito colateral, está manipulando o DOM.
      const caixa = document.getElementById('caixa');
      caixa.style.width = action.payload + 'px';
      return action.payload;
    default:
      return state;
  }
}
const store = Redux.createStore(reducer);
store.dispatch({ type: 'MODIFICAR_WIDTH', payload: 100 });

// Correta
function reducer2(state = 0, action) {
  switch (action.type) {
    case 'MODIFICAR_WIDTH':
      // O reducer atualiza apenas o estado
      return action.payload;
    default:
      return state;
  }
}
const store2 = Redux.createStore(
  reducer2,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
function render() {
  // O dom é manipulado pela função de renderização.
  // No caso do React seria dentro do componente.
  const caixa = document.getElementById('caixa');
  const state = store2.getState();
  caixa.style.width = state + 'px';
}
store2.subscribe(render);
store2.dispatch({ type: 'MODIFICAR_WIDTH', payload: 100 });
store2.dispatch({ type: 'MODIFICAR_WIDTH', payload: 200 });
store2.dispatch({ type: 'MODIFICAR_WIDTH', payload: 400 });
