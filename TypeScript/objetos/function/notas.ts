// A interface de uma função é definida durante a sua declaração.
function somar(a: number, b: number, c?: number): number {
  return a + b + (c ? c : 0);
}

somar(3, 5);

// Void - em JS uma função sem nenhum return irá retornar undefined. No TS o retorno é definido como void, evitando erro como checagens booleanas de métodos que não possuem retorno.

function pintarTela(cor: string) {
  document.body.style.background = cor;
}
// Erro, void não pode ser verificado
//if (pintarTela('black')) {}
const btn = document.querySelector('button');
// Erro, void não pode ser verificado
//if (btn && btn.click()) {}
// Se a função tiver qualquer tipo de retorno,
// ela não terá mais o void como uma opção e sim o undefined
function isString(value: any) {
  if (typeof value === 'string') {
    return true;
  }
}
if (isString('teste')) {
  console.log('É string');
}

// Never - é utilizado em casos onde a função gera um erro ou termina a aplicação.
function abortar(mensagem: string) {
  //: never {
  // throw new Error(mensagem);
}

abortar('Um erro ocorreu');
//console.log('Tente novamente');  não ocorre, a partir do momento que ocorre um erro, cancela toda a execução, quando colocamos never, o corretor até apaga automatico

// Métodos - Na definição de interfaces podemos definir os métodos indicando o tipo de dado recebido e o seu possível retorno.
interface Quadrado {
  lado: number;
  quadrado(lado: number): number;
}
function calcular(forma: Quadrado) {
  forma.quadrado(3);
}

// Overload - Existem funções que retornam diferentes dados dependendo do argumento.Podemos declarar a interface dessas funções utilizando function overload. Basta declarar a interface antes da definição da mesma, utilizando o mesmo nome.O Overload deve ser compatível com a função original.
function normalizar(valor: string | string[]): string | string[] {
  if (typeof valor === 'string') {
    return valor.trim().toLowerCase();
  } else {
    return valor.map((item) => item.trim().toLowerCase());
  }
}

normalizar('teste'); //Desta forma não reconhece se o retorno é string ou array

function normalizar2(valor: string): string;
function normalizar2(valor: string[]): string[];
function normalizar2(valor: string | string[]): string | string[] {
  if (typeof valor === 'string') {
    return valor.trim().toLowerCase();
  } else {
    return valor.map((item) => item.trim().toLowerCase());
  }
}

normalizar2('teste'); //quando colocamos o overload antes da função, ele passa a reconhecer os metodos
// exemplo 2 de overload
function $(seletor: 'a'): HTMLAnchorElement | null;
function $(seletor: string): Element | null;
function $(seletor: 'video'): HTMLVideoElement | null;
function $(selector: string) {
  return document.querySelector(selector);
}
$('a')?.href;
$('video')?.volume;
$('.teste')?.innerHTML;

//  Exer

function arredondar(valor: string): string;
function arredondar(valor: number): number;
function arredondar(valor: string | number): string | number {
  if (typeof valor === 'string') {
    return Math.ceil(Number(valor)).toString();
  } else {
    return Math.ceil(valor);
  }
}

console.log(arredondar(1.3));
console.log(arredondar('1.3'));
