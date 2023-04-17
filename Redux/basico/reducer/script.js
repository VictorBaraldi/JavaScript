// switch - é comum o uso de switch dentro do reducer ao invés de if/else, ajuda a facilitar leitura e evita repetição do action.type
function reducer(state = 0, action) {
  switch (action.type) {
    case 'INCREMENTAR':
      return state + 1;
    case 'REDUZIR':
      return state - 1;
    default:
      return state;
  }
}

const store = Redux.createStore(reducer);

store.dispatch({ type: 'INCREMENTAR' });
console.log(store.getState());

// combineReducers - podemos dividir o código do reducer em diferentes funções e depois combinar, Vale lembrar que ao final o reducer sempre será único e toda ação despachada irá passar por todos os reducers.
function contador(state = 0, action) {
  switch (action.type) {
    case 'INCREMENTAR':
      return state + 1;
    case 'REDUZIR':
      return state - 1;
    default:
      return state;
  }
}
function modal(state = false, action) {
  switch (action.type) {
    case 'ABRIR':
      return true;
    case 'FECHAR':
      return false;
    default:
      return state;
  }
}
const reducerCombine = Redux.combineReducers({ contador, modal });
const combineStore = Redux.createStore(reducerCombine);

const state = combineStore.getState();
console.log(state); // { contador: 0, modal: false }
//agora quando for mudar, tem que ser state.contador
