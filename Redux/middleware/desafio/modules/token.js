import getLocalStorage from './helper/getLocalStorage.js';

const initialState = {
  loading: false,
  data: getLocalStorage('token', null),
  error: null,
};

const FETCHSTARTED = 'token/FETCH_STARTED';
const FETCHSUCESS = 'token/FETCH_SUCCESS';
const FETCHERROR = 'token/FETCH_ERROR';

function tokenFetchStart() {
  return { type: FETCHSTARTED };
}
function tokenFetchSucess(data) {
  return { type: FETCHSUCESS, payload: data, localStorage: 'token' };
}
function tokenFetchError(error) {
  return { type: FETCHERROR, payload: error.message };
}

export function reducerToken(state = initialState, action) {
  switch (action.type) {
    case FETCHSTARTED:
      return { ...state, loading: true };
    case FETCHSUCESS:
      return { loading: false, data: action.payload, error: null };
    case FETCHERROR:
      return { loading: false, error: action.payload, data: null };
    default:
      return state;
  }
}

export function fetchToken() {
  return async (dispatch) => {
    try {
      dispatch(tokenFetchStart());
      const response = await fetch(
        'https://dogsapi.origamid.dev/json/jwt-auth/v1/token',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username: 'dog', password: 'dog' }),
        },
      );
      const json = await response.json();
      dispatch(tokenFetchSucess(json.token));
    } catch (error) {
      dispatch(tokenFetchError(error));
    }
  };
}
