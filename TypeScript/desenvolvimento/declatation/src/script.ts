// .d.ts - são arquivos focados apenas na declaração de tipos e interfaces, estes devem ser terminados em .d.ts O TS não compila, mas os tipos podem ser usados globalmente, Esse tipo de declaração é comum em bibliotecas criadas em JavaScript que desejam dar suporte ao uso da mesma em TypeScript.
export const livro: Produto = {
  nome: 'O Senhor dos Anéis',
  preco: 200,
};

//Crie uma pasta específica para os arquivos .d.ts, pois o TS ignora arquivos que possuem o mesmo nome e diretório, em favor do arquivo que terminar em .ts.

// Não é necessário criar um arquivo global ou .d.ts para ter um tipo global, é possivel declarar dentro de um arquivo module usando declare global {}.

declare global {
  interface Usuario {
    nome: string;
    id: number;
  }
}

// Use globais apenas quando necessário. Assim como variáveis globais são problemáticas, tipos globais possuem os mesmos problemas de redeclarar.
