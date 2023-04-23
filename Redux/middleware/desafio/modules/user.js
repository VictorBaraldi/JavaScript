const FETCHSTARTED = 'user/FETCH_STARTED';
const FETCHSUCESS = 'user/FETCH_SUCCESS';
const FETCHERROR = 'user/FETCH_ERROR';

const initialState = { loading: false, data: null, error: null };

function userFetchStart() {
  return { type: FETCHSTARTED };
}
function userFetchSucess(data) {
  return { type: FETCHSUCESS, payload: data };
}
function userFetchError(error) {
  return { type: FETCHERROR, payload: error.message };
}

export function reducerUser(state = initialState, action) {
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

export function fetchUser(token) {
  return async (dispatch) => {
    if (token) {
      try {
        dispatch(userFetchStart());
        const response = await fetch(
          'https://dogsapi.origamid.dev/json/api/user',
          {
            method: 'GET',
            headers: {
              Authorization: 'Bearer ' + token,
            },
          },
        );
        const data = await response.json();
        dispatch(userFetchSucess(data));
      } catch (error) {
        dispatch(userFetchError(error));
      }
    }
  };
}
