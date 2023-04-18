// A função reducer deve sempre retornar um estado novo, quando for modificado. Nunca modificar o estado diretamente.
const initialState = {
  nome: 'André',
  idade: 31,
};

/* Errado, muda o estado em si

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'MUDAR_NOME':
      state.nome = action.payload;
      return state;
    default:
      return state;
  }
}
*/

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'MUDAR_NOME':
      state.nome = action.payload;
      return { ...state, nome: action.payload };
    default:
      return state;
  }
}

const store = Redux.createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
console.log(store.getState());
store.dispatch({ type: 'MUDAR_NOME', payload: 'Thaila' });
console.log(store.getState());

// Array - Utlize o spread [...array] para criar uma "cópia".
const array1 = [0, 1, 2, 3];
const array2 = array1; // cria uma referência
const array3 = [...array1]; // cria uma "cópia" da array original
// Métodos que mutam uma array
// const array = [0, 1, 2, 4, 5];
// array.copyWithin();
// array.fill();
// array.pop();
// array.push();
// array.reverse();
// array.shift();
// array.sort();
// array.splice();
// array.unshift();
// // Alguns métodos que geram uma array nova:
// array.concat();
// array.filter();
// array.map();
// array.reduce();
// array.flat();
// array.join();

// Objeto - O spread pode ser usado tambem em objetos para criarmos uma "cópia" de um objeto
const obj1 = { nome: 'André', idade: 31 };
const obj2 = obj1; // cria uma referência
const obj3 = { ...obj1 }; // cria uma "cópia" da original
const obj4 = Object.assign({}, obj1); // cria um novo objeto a partir dos objetos informados

console.log(obj1 === obj2); // true
console.log(obj1 === obj3); // false
console.log(obj1 === obj4); // false
// Adicionar/modificar propriedades, muta o objeto
obj1.profissao = 'Designer'; // mutou o objeto
obj1.nome = 'Rafael'; // mutou o objeto
// Cria um objeto novo e modifica o valor de idade.
const obj5 = { ...obj1, idade: 35 };
const obj6 = Object.assign({}, obj1, { idade: 35 });

// Immer - é um pacote que nos fornece uma função, que podemos utilizar todos os métodos que mutam arrays ou objetos, sem se preocupar com a questão de imutabilidade. Pois a função do immer será sempre produzir um objeto/array novos.
const objImmer = immer.produce(obj1, (draft) => {
  draft.nome = 'victor';
});

console.log(objImmer);

// Usando Immer com reducer - Podemos envolver a função completa do reducer dentro do produce do Immer
const reducerImmer = immer.produce((state, action) => {
  switch (action.type) {
    case 'MUDAR_NOME':
      state.nome = action.payload; // funciona direto, já que o retorno é um novo objeto
      break; // não precisa retornar o state, isso é feito por padrão, so o break pra nao realizar todas chamadas
  }
}, initialState);
