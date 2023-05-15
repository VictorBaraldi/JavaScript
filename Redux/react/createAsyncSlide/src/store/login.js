import createAsyncSlide from '../store/helper/createAsyncSlice.js';
import { createSlice } from '@reduxjs/toolkit';

const token = createAsyncSlide({
  name: 'token',
  fetchConfig: (payload) => ({
    url: 'https://dogsapi.origamid.dev/json/jwt-auth/v1/token',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    },
  }),
});
console.log(token);

export default token.reducer;

// export const login = (user) => async (dispatch) => {
//   try {
//     const { payload } = await dispatch(fetchToken(user));
//     if (payload.token !== undefined) await dispatch(fetchUser(payload.token));
//   } catch {}
// };

// export default slice.reducer;
