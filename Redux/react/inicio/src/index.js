import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

//importa as partes de redux
import { Provider, provider } from 'react-redux';
import { createStore } from 'redux';

//cria o reducer da mesma forma
function reducer(state = 0, action) {
  switch (action.type) {
    case 'INCREMENTAR':
      return state + 1;
    default:
      return state;
  }
}

//usamos o createStore do redux
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

// Encapsular o <App /> dentro de <Provider /> e passar a store
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
