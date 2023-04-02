// duck typing - Um objeto quando passado em uma função, pode conter propriedades e métodos além dos declarados na interface."Se parece com um pato, nada como um pato e grasna como um pato, então provavelmente é um pato." - Wikipédia

interface Produto {
  nome: string;
  quantidade: number;
}

const produto1 = {
  nome: 'computador',
  quantidade: 10,
  precp: 1000,
};

const servico = {
  // esse não aceita, pode ter a mais, a menos não
  nome: 'instalação',
};

function mostrarQuantidade(produto: Produto) {
  console.log(produto.quantidade + 20);
}

mostrarQuantidade(produto1);

// Partial - O TypeScript conta com utility types, tipos que podem ser utilizados como funções para a definição de novos tipos.Com o Partial<Tipo>, podemos indicar que todas as propriedades da interface passada em Tipo, são opcionais.

// Exemplo - Partial<Produto> é a mesma coisa que eu criar Produto desse jeito:
// interface Produto {
//   nome?: string;
//   quantidade?: number;
// }

// [key:string]: unknown - podemos definir que um objeto poderá conter propriedades/métodos além dos que foram definidos inicialmente
interface Post {
  titulo: string;
  visualizacoes: number;
  tags: string[];
  [key: string]: unknown; //esse comando fala que no objeto com interface post pode receber qualquer elemento além destes 3 principais
}

const artigo: Post = {
  titulo: 'Aprender',
  visualizacoes: 2000,
  tags: ['HTML', 'CSS'],
  autor: 'Victor',
};

// Record - define a interfce de um objeto que possui <chave, tipo>. pode ser usado para definir a inteface de um objeto literal genérico
