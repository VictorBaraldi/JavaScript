// Operações assíncronas - o reducer deve ser uma função pura, sem efeitos colaterais, por isso não faz requisições http diretamente no mesmo.
// Errado
/*
function reducer(state = null, action) {
  switch (action.type) {
    case 'FETCH_DATA':
      // fetch é um efeito colateral
      const data = fetch(
        'https://dogsapi.origamid.dev/json/api/photo',
      ).then((r) => r.json());
      // data é uma Promise
      return data;
    default:
      return state;
  }
}
store.dispatch({ type: 'FETCH_DATA' });
*/

// Fetch - a função reducer deve apenas modificar o estado, assim podemos realizar a operação assíncrona por fora do reducer e apenas atualizar o estado de acordo com o momento da operação
const initialState = {
  loading: false,
  date: null,
  error: null,
};

//A função abaixo funciona perfeitamente. Mas não vamos utilizar assim, por dois motivos: o primeiro é pelo fato de termos uma função que dispara ações que irão modificar o estado. Por padrão, apenas ações via dispatch devem modificar o estado. O segundo motivo é a necessidade de sempre passar o dispatch como argumento da mesma.
/*
function reducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_STARTED':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { loading: false, data: action.payload, error: null };
    case 'FETCH_ERROR':
      return { loading: false, error: action.payload, data: null };
    default:
      return state;
  }
}

const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || Redux.compose;
const enhancer = composeEnhancers(Redux.applyMiddleware());
const store = Redux.createStore(reducer, enhancer);

async function fetchUrl(dispatch, url) {
  try {
    dispatch({ type: 'FETCH_STARTED' });
    const data = await fetch(url).then((r) => r.json());
    dispatch({ type: 'FETCH_SUCCESS', payload: data });
    console.log(data);
  } catch (error) {
    dispatch({ type: 'FETCH_ERROR', payload: error.message });
  }
}

fetchUrl(store.dispatch, 'https://dogsapi.origamid.dev/json/api/photo');
*/

//Redux Thunk - Podemos utilizar um middleware para contornar a obrigação de sempre enviarmos objetos via dispatch. No middleware podemos identificar a action, e verificar se a mesma é uma função. Caso ela seja uma função podemos ativá-la.
const thunk = (store) => (next) => (action) => {
  if (typeof action === 'function') {
    return action(store.dispatch);
  }
  return next(action);
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_STARTED':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { loading: false, data: action.payload, error: null };
    case 'FETCH_ERROR':
      return { loading: false, error: action.payload, data: null };
    default:
      return state;
  }
}

function fetchUrl(url) {
  return async (dispatch) => {
    try {
      dispatch({ type: 'FETCH_STARTED' });
      const data = await fetch(url).then((r) => r.json());
      dispatch({ type: 'FETCH_SUCCESS', payload: data });
      console.log(data);
    } catch (error) {
      dispatch({ type: 'FETCH_ERROR', payload: error.message });
    }
  };
}

const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || Redux.compose;
const enhancer = composeEnhancers(Redux.applyMiddleware(thunk));
const store = Redux.createStore(reducer, enhancer);

store.dispatch(fetchUrl('https://dogsapi.origamid.dev/json/api/photo'));
