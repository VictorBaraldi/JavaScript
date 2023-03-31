// intersection - funciona em parte como o extends para interfaces, mas pode ser usado em types
type Produto = {
  preco: number;
};

type Carro = {
  rodas: number;
  portas: number;
};

function produtoCarro(dados: Produto & Carro) {
  dados.portas;
  dados.preco;
  dados.rodas;
}

//  É possível adicionar uma propriedade a uma interface/tipo que já definido.
//interface
interface InterfaceCarro {
  rodas: number;
  portas: number;
}
interface InterfaceCarro {
  preco: number;
}
const dado1: InterfaceCarro = {
  preco: 20000,
  rodas: 4,
  portas: 5,
};
//type
type TipoCarro = {
  rodas: number;
  portas: number;
};
type TipoCarroComPreco = TipoCarro & {
  preco: number;
};
const dado2: TipoCarroComPreco = {
  preco: 20000,
  rodas: 4,
  portas: 5,
};

// window - Se definimos uma propriedade global, podemos "extender" a interface de Window, apenas redeclarando a interface.

interface Window {
  userId: number;
}

window.userId = 200;
