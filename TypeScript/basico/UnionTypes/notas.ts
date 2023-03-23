// É comum termos funções que podem retornar ou receber tipos diferentes. Para isso usamos a barra vertical string | number | boolean.
let total: string | number = 200;
total = 300;

// Funções podem receber parâmetros com diferentes tipos e também podem retornar diferentes tipos de dados.
function isNumber(value: string | number) {
  if (typeof value === 'number') {
    return true;
  } else {
    return false;
  }
}

// Quando funções selecionam elementos da DOm geralmente retornam null como uma possibilidade de tipo, pois o TS não tem acesso prévio ao DOM para saber se existe ou não
const button = document.querySelector('button');
button?.click(); // executa click() se button for diferente de null/undefined

//exer
// 1 - Crie uma função chamada toNumber
// 2 - A função pode receber number | string
// 3 - Se a função receber um número, retorne um número
// 4 - Se a função receber uma string, retorne um número
// 5 - Se ela receber algo diferente, retorne um erro. (throw "value deve ser um número ou uma string")

function toNumber(value: string | number) {
  if (typeof value === 'number') {
    return value;
  } else if (typeof value === 'string') {
    return Number(value);
  } else {
    throw 'value deve ser um número ou uma string';
  }
}

console.log(toNumber(null));
