import aluno from './store/aluno.js';
import aulas from './store/aulas.js';
import { incrementar, reduzir, modificar } from './store/aluno.js';
import { completarAula, completarCurso, resetar } from './store/aulas.js';

const reducer = Redux.combineReducers({ aluno, aulas });

const store = Redux.createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

function render() {
  const { nome, email, diasRestantes } = store.getState().aluno;
  const aulasStore = () => {
    const completa = store
      .getState()
      .aulas.filter((valor) => valor.completa === true);
    return completa.length;
  };
  const nomeDoc = document.getElementById('nome');
  const emailDoc = document.getElementById('email');
  const aulas = document.getElementById('aulas');
  const total = document.getElementById('total');
  nomeDoc.innerText = `Nome: ${nome}`;
  emailDoc.innerText = `Email: ${email}`;
  aulas.innerText = `Aulas completas: ${aulasStore()}`;
  total.innerText = `Tempo restante: ${diasRestantes} horas`;
}

store.dispatch(completarCurso());
console.log(store.getState());

render();
store.subscribe(render);
