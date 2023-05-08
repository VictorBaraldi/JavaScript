import { createSlice } from '@reduxjs/toolkit';

const modal = createSlice({
  name: 'modal',
  initialState: {
    abrir: false,
  },
  reducers: {
    abrir(state) {
      state.abrir = true;
    },
    fechar(state) {
      state.abrir = false;
    },
  },
});

export const { abrir, fechar } = modal.actions;
export default modal.reducer;
