// applyMiddleware - middleware ocorre entre o momento que a ação é disparada e antes de chegar ao reducer, é aplicado por meio do Redux.applyMiddleware
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

// Ocorre em todo dispatch
const logger = (store) => (next) => (action) => {
  console.group(action.type);
  console.log('ACTION', action); // acesso a action passada
  console.log('PREV_STATE', store.getState()); // vai ser ainda o estado final, já que a função ainda não chegou no next
  const result = next(action);
  console.log('NEW_STATE', store.getState());
  console.groupEnd();
  return result;
};

const middleware = Redux.applyMiddleware(logger);

const store = Redux.createStore(reducer, middleware);

store.dispatch({ type: 'INCREMENTAR' });
store.dispatch({ type: 'INCREMENTAR' });
store.dispatch({ type: 'REDUZIR' });
store.dispatch({ type: 'REDUZIR' });

// Compose - o segundo ou terceiro argumento do createStore é considerado o enhancer, o middleware e o devtools são enhancer da store, quando queremos passar mais de um devemos usar o Redux.compose()

// Verifica se __REDUX_DEVTOOLS_EXTENSION__COMPOSE__ existe, se nõa usa o compose puro.
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// Aplica o Middleware com o compose
const enhancer = composeEnhancers(applyMiddleware(logger));
// Utiliza a devTools + middleware como enhancer da store
const store2 = Redux.createStore(reducer, enhancer);
