// Gravar algo no localStorage é um side-effect, como manipular dom, assim criamos um middleware que lida com isso.
const initialState = {
  loading: false,
  date: getLocalStorage('data', null),
  error: null,
};

function getLocalStorage(key, initial) {
  try {
    return JSON.parse(window.localStorage.getItem(key));
  } catch (error) {
    return initial;
  }
}

const localStorages = (store) => (next) => (action) => {
  const result = next(action);
  if (action.localStorage !== undefined) {
    window.localStorage.setItem(
      action.localStorage,
      JSON.stringify(action.payload),
    );
  }
  return result;
};

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
      return {
        loading: false,
        data: action.payload,
        error: null,
      };
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
      dispatch({ type: 'FETCH_SUCCESS', payload: data, localStorage: 'data' });
      console.log(data);
    } catch (error) {
      dispatch({ type: 'FETCH_ERROR', payload: error.message });
    }
  };
}

const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || Redux.compose;
const enhancer = composeEnhancers(Redux.applyMiddleware(thunk, localStorages));
const store = Redux.createStore(reducer, enhancer);

const state = store.getState();
if (state.date === null) {
  store.dispatch(fetchUrl('https://dogsapi.origamid.dev/json/api/photo'));
}
