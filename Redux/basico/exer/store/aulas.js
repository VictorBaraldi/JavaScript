const COMPLETARAULA = 'aulas/COMPLETAR_AULA';
const COMPLETARCURSO = 'aulas/COMPLETAR_CURSO';
const RESETAR = 'aulas/RESETAR_CURSO';

export const completarAula = (value) => ({
  type: COMPLETARAULA,
  payload: value,
});
export const completarCurso = () => ({ type: COMPLETARCURSO });
export const resetar = () => ({ type: RESETAR });

const initialState = [
  {
    id: 1,
    nome: 'Design',
    completa: true,
  },
  {
    id: 2,
    nome: 'HTML',
    completa: false,
  },
  {
    id: 3,
    nome: 'CSS',
    completa: false,
  },
  {
    id: 4,
    nome: 'JavaScript',
    completa: false,
  },
];

const reducer = immer.produce((state, action) => {
  switch (action.type) {
    case COMPLETARAULA:
      const index = state.findIndex((x) => x.id === action.payload);
      if (!isNaN(index) && state[index]) state[index].completa = true;
      break;
    case COMPLETARCURSO:
      state.forEach((aula) => {
        aula.completa = true;
      });
      break;
    case RESETAR:
      state.forEach((aula) => {
        aula.completa = false;
      });
      break;
  }
}, initialState);

export default reducer;
