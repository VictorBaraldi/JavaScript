import { createSlice } from '@reduxjs/toolkit';

const createAsyncSlice = (config) => {
  const slice = createSlice({
    name: config.name,
    initialState: {
      loading: false,
      data: null,
      error: null,
      ...config.initialState,
    },
    reducers: {
      fetchStarted(state) {
        state.loading = true;
      },
      fetchSucess(state, action) {
        state.loading = false;
        state.data = action.payload;
        state.error = false;
      },
      fetchError(state, action) {
        state.loading = false;
        state.data = null;
        state.error = action.payload;
      },
      ...config.reducers,
    },
  });
  const { fetchError, fetchStarted, fetchSucess } = slice.actions;

  const asyncAction = (payload) => async (dispatch) => {
    try {
      dispatch(fetchStarted());
      const { url, options } = config.fetchConfig(payload);
      const response = await fetch(url, options);
      const data = await response.json();
      return dispatch(fetchSucess(data));
    } catch (e) {
      return dispatch(fetchError(e.message));
    }
  };
  return { ...slice, asyncAction };
};
