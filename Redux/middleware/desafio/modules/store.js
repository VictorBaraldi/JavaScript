import { thunk } from './middlewares/thunk.js';
import { localStorage } from './middlewares/localStorage.js';
import { reducerToken } from './token.js';
import { reducerUser } from './user.js';
const { compose, applyMiddleware, createStore, combineReducers } = Redux;

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(applyMiddleware(thunk, localStorage));
const reducers = combineReducers({ reducerUser, reducerToken });
const store = createStore(reducers, enhancer);

export default store;
