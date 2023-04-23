// O configureStore automaticamente configura middlewares como o redux-thunk e também a devtools.
import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import contador from './contador.js';
import modal from './modal.js';
import logger from './middleware/logger.js';

const middleware = [...getDefaultMiddleware(), logger];

const reducer = combineReducers({ contador, modal });

//usamos o createStore do redux
const store = configureStore({ reducer, middleware });
console.log(store);
export default store;
