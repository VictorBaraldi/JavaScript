// O configureStore automaticamente configura middlewares como o redux-thunk e também a devtools.
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import contador from './contador.js';
import modal from './modal.js';
import logger from './middleware/logger.js';
import login from './login.js';

const reducers = combineReducers({ contador, modal, login });

//usamos o createStore do redux
const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), logger],
});
console.log(store);
export default store;
