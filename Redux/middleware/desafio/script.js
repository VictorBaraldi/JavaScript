import store from './modules/store.js';
import { fetchToken } from './modules/token.js';
import { fetchUser } from './modules/user.js';

const login = async () => {
  let state = store.getState();
  console.log();
  if (state.reducerToken.data === null) {
    await store.dispatch(fetchToken());
  }
  state = store.getState();
  await store.dispatch(fetchUser(state.reducerToken.data));
};

login();
