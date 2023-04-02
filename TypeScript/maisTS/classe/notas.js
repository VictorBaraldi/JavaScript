"use strict";
// são responsáveis pela construção de objetos que já vimos, como MouseEvent, HTMLElement e os demais.
class Produto {
    constructor(nome, tipo, preco) {
        this.nome = nome;
        this.tipo = tipo;
        this.preco = preco;
    }
}
const livro = new Produto('Senhor dos aneis', 'produto');
livro.tipo;
// Modificadores - São palavras0chaves que podem ser usadas em propriedades de classes para modificar o comportamento/uso das mesmas
class Modificadores {
    constructor(nome, preco) {
        // public: é o padrão de qualquer uma
        // private: só pode ser acessada dentro da classe
        this.tipo = 'produto';
        this.nome = nome;
        this.tipo;
        this.preco = preco;
    }
    getPreco() {
        return this.preco;
    }
    // [javascript] static: não fará parte do Objeto criado
    // e sim da função construtora (classe)
    static transformarPreco(preco) {
        return `R$ ${preco}`;
    }
}
