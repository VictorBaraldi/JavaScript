import { createSlice } from '@reduxjs/toolkit';

//criando reducer com createSlice
const slice = createSlice({
  name: 'contador',
  initialState: {
    total: 0,
  },
  reducers: {
    incrementar(state) {
      state.total++;
    },
    reduzir(state) {
      state.total--;
    },
  },
});

console.log(slice);
export const { incrementar, reduzir } = slice.actions;
export default slice.reducer;
