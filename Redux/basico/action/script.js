// Action - No reducer verificamos o tipo de ação enviada e retornamos um novo estado a partir disso.
function reducer(state = 10, action) {
  if (action.type === 'somar') {
    return state + action.payload;
  } else return state;
}

const store = Redux.createStore(reducer);

let state = store.getState(); //10
//console.log(state);

//para atualizar o estado, enviamos uma ação action através da store utilizando o método dispatch,
store.dispatch({ type: 'somar', payload: 25 });
//ação é sempre um objeto que contem o tipo type e um valor caso necessário um payload.

state = store.getState(); // tem que atualizar o estado, se não continua 10
//console.log(state); //35

//payload - nem sempre é necessário passar um payload, existem ações que só precisam do tipo para ocorrerem
function reducerPayload(state = 0, action) {
  if (action.type === 'incrementar') return state + 1;
  if (action.type === 'reduzir') return state - 1;
  else return state;
}

const storePayload = Redux.createStore(reducerPayload);

storePayload.dispatch({ type: 'incrementar' });
storePayload.dispatch({ type: 'incrementar' });
storePayload.dispatch({ type: 'incrementar' });
storePayload.dispatch({ type: 'reduzir' });

let statePayload = storePayload.getState();

// Constantes - o type da ação sempre é uma string que identifica a mesma, por conta disto, erros de digitação podem ocorrer, logo a criação de constantes para armazenar estes valores é bem comum.
const INCREMENTAR = 'INCREMENTAR';
const REDUZIR = 'REDUZIR';
const SOMAR = 'SOMAR';

function reducerConst(state = 0, action) {
  if (action.type === INCREMENTAR) return state + 1;
  if (action.type === REDUZIR) return state - 1;
  if (action.type === SOMAR) return state + action.payload;
  else return state;
}

const storeConst = Redux.createStore(reducerConst);

storeConst.dispatch({ type: INCREMENTAR });
storeConst.dispatch({ type: REDUZIR });
storeConst.dispatch({ type: SOMAR, payload: 20 });

// Action Creator - mais uma prática comum para facilitar o uso de ações é a criação de funções que retornam o objeto da ação, chamados action creators
function incrementar() {
  return { type: INCREMENTAR };
}

function reduzir() {
  return { type: REDUZIR };
}

function somar(payload) {
  return { type: SOMAR, payload };
}

storeConst.dispatch(incrementar());
storeConst.dispatch(reduzir());
storeConst.dispatch(somar(20));

// Eventos - as ações geralmente serão disparadas através de eventos, seja com addeventlisterer no JS ou onclick React
const button = document.querySelector('.button');
button.addEventListener('click', () => store.dispatch(incrementar()));
