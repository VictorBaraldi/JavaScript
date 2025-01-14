import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from './store/configureStore';
import { Provider } from 'react-redux';

// Encapsular o <App /> dentro de <Provider /> e passar a store
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
