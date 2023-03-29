//  Generics - um tipo genérico é uma forma de declararmos um parâmetro para a nossa função, classe ou interface. Esse tipo poderá ser indicado no momento do uso da função através de <Tipo>.
/*
 * function retorna(a: number | string | boolean) { - Quando realizamos desse modo, além de ter que * * especificar todo tipo de dado que vai trabalhar na função, quando chamamos ela, ainda não se sabe o * tipo, logo não tem acesso aos métodos dela.
 *   return a;
 * }
 * retorna('teste');
 * retorna(200);
 */
function retorna<variavel>(a: variavel): variavel {
  return a;
}
retorna('teste'); // reconhece que o dado inserido é string, logo retorno é string
retorna<number>(200); //nesse caso por ser mais simples reconhece auto, mas em casos é necessario informar tipo entre<>
// é a mesma coisa que:
/**
 * function retorna<string>(a: string): string { - sabe que a partir de string retorna uma string
 *  return a;
 *  }
 */

//  Generics - caso real
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const frutas = ['maça', 'pera', 'uva', 'morango', 'kiwi', 'banana', 'melancia'];
function firstFive<T>(lista: T[]): T[] {
  //                 tipo       valor recebido    valor retornado
  return lista.slice(0, 5);
} // aqui cria uma função que recebe uma array e retorna os 5 primeiros elementos
firstFive(numeros);
firstFive(frutas);

function notNull<T>(arg: T) {
  if (arg !== null) return arg;
  else return null;
}
notNull('teste')?.toLowerCase();
notNull(200)?.toFixed;

function tipoDado<T>(a: T): { dado: T; tipo: string } {
  const resultado = {
    dado: a,
    tipo: typeof a,
  };
  console.log(resultado);
  return resultado;
}
tipoDado('teste');
tipoDado(200);

//  Extends - É possível indicar que o tipo genérico deve herdar de uma interface específica com o extends.
function extractText<T extends HTMLAnchorElement>(el: T) {
  //se for generic, não sabe o valor de el, logo especificamos
  return {
    texto: el.innerText,
    el,
  };
}

const link = document.querySelector('a');
if (link) {
  extractText(link).el.href;
}

//  Métodos - Métodos nativos são definidos utilizando generics, assim podemos indicar durante a execução qual será o tipo esperado.
const link2 = document.querySelector<HTMLAnchorElement>('.link');
link2?.href;

async function getData<T>(url: string): Promise<T> {
  const response = await fetch(url);
  return await response.json();
}

interface Notebook {
  nome: string;
}

async function handleData() {
  const notebook = await getData<Notebook>(
    'https://api.origamid.dev/json/notebook.json',
  );
  console.log(notebook.nome);
}
