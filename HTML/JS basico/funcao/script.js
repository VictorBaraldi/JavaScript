function livro(nome, ano, autor) {
  const nomeUpper = nome.toUpperCase();
  const anosLivro = 2022 - ano;
  const autorLivro = nome + " por " + autor;
  const livro = {
    nome: nomeUpper,
    idade: anosLivro,
    autor: autorLivro,
  };
  return livro;
}

const teste = livro("O senhor dos aneis", 1954, "J. R. R. Tolkien");
console.log(teste);
