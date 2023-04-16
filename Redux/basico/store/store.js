// Primeiro iniciamos a store com Redux.createStore(), isso da acesso ao estado global e permite envio de ações que modificam o mesmo, é essencial passar uma função como primeiro argumento do createStore, essa função é chamada de reducer, que é a função responsável por retornar o estado atual da store

function reducer() {
  return {
    nome: 'victor',
    id: 199,
  };
}

const store = Redux.createStore(reducer);
const state = store.getState(); // retorna o estado atual da store.
console.log(state);

// Reducer - essa função recebe dois argumentos principais, o primeiro o estado atual state e o segundo uma ação action que será utilizado para identificarmos as ações despachadas pela store.

// state pode ter tanto valor inicial ou não
function reducer2(state = 0, action) {
  return state;
}

// O estado inicial também pode ser passado direto no createStore
const store2 = Redux.createStore(reducer2, 10);
console.log(store2.getState());
