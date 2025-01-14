// Em JavaScript, Classes class são funções construtoras que geram objetos. Quando definimos uma classe, o TypeScript gera a interface do objeto produzido pela mesma.
class Produto {
  nome: string;
  preco: number;
  constructor(nome: string, preco: number) {
    this.nome = nome;
    this.preco = preco;
  }
  precoReal() {
    return `R$ ${this.preco}`;
  }
}

const livro = new Produto('harry potter', 50);
//console.log(livro.nome);
//console.log(livro.precoReal());

// Com a palavra-chave instanceof podemos verificar se um objeto é uma instância (foi construído ou herda) de uma função construtora (class).
//console.log(livro instanceof Produto); // verdadeiro, livro foi construido em Produto
//console.log(livro instanceof Array); // Falso, livro foi construido em Produto

class Livro extends Produto {
  autor: string;
  constructor(autor: string, nome: string, preco: number) {
    super(nome, preco);
    this.autor = autor;
  }
}

class Jogo extends Produto {
  jogadores: number;
  constructor(jogadores: number, nome: string, preco: number) {
    super(nome, preco);
    this.jogadores = jogadores;
  }
}

function buscarProduto(busca: string) {
  if (busca === 'O Hobbit')
    return new Livro('J. R. R. Tolkien', 'O Hobbit', 10);
  if (busca === 'Dark Souls') return new Jogo(1, 'Dark Souls', 100);
  if (busca === 'Outro') return new Produto('outro', 50);
  return null;
}

const produto = buscarProduto('O Hobbit');

//produto?.autor - da erro pois não sabe se a resposta é livro ou jogo e autor so existe em livro

if (produto instanceof Livro) {
  // so ocorre o que está dentro se o produto for criado a partir de livro
  //console.log(produto.autor);
}
if (produto instanceof Jogo) {
  // so ocorre o que está dentro se o produto for criado a partir jogo
  //console.log(produto.jogadores);  tem acesso a todas propriedades de Jogo e Produto
}
if (produto instanceof Produto) {
  //console.log(produto.nome);  so tem acesso as propriedades de Produto
}

// extends - instanceof verifica se a função construtora herda de outra
class Musica extends Produto {
  musica: string;
  constructor(nome: string, preco: number, musica: string) {
    super(nome, preco);
    this.musica = musica;
  }
}

const music = new Musica('Iron Maiden', 20, 'The trooper');
//console.log(music);

//O instanceof é um operador que existe no JavaScript. Se você definir a interface de um objeto apenas com o interface e não possuir uma classe construtora do mesmo, não será possível utilizar o instanceof na interface.
interface Produto2 {
  nome: string;
}

const jogo2: Produto2 = {
  nome: 'Dark Souls',
};

// Erro
if (jogo2 instanceof Produto) {
}

//Exer
const link = document.getElementById('origamid');

if (link instanceof HTMLAnchorElement) {
  link.href = link.href.replace('http://', 'https://');
}
