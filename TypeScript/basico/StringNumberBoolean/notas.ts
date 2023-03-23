// string, number e boolean são tipo básicos do TS(primitivo)
const frase = 'front End';
const preco = 500;
const condi = preco > 100;

//typeof é um operador de JavaScript que retorna uma string indicando o tipo do dado. Os possíveis valores retornados por typeof são: string, number, boolean, function, object, undefined, bigint e symbol. O typeof funciona como um type guard.
if (typeof frase === 'string') {
  console.log('frase é string');
}
if (typeof preco === 'number') {
  console.log('preco é number');
}
if (typeof condi === 'boolean') {
  console.log('condi é boolean');
}
// no caso valores como array, null, obj é tudo obj

// Não confundir string, number e boolean com String, Number e Boolean, esses últimos são funções construtoras desses tipos de dados, responsáveis pela herança das propriedades e métodos.
const frase1 = new String('Front End');
const frase2 = String('Front End');
const frase3 = 'Front End';

console.log(typeof frase1);
console.log(typeof frase2);
console.log(typeof frase3);
