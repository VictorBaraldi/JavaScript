// JSX Arrays - o JSX lista cada item da array, mas não separa ou coloca vírgula,então se deve modificar para o resultado desejado
const App = () => {
  const produtos = ['Notebook', 'Smarthphone', 'Tablet'];
  return <p>{produtos}</p>; //NotebookSmarthphoneTablet
};

// Keys - O JSX necessita de uma key única para cada elemento da Array.
const AppKeys = () => {
  const empresas = [<li key="e1">Apple</li>, <li key="e2">Google</li>];
  return <ul>{empresas}</ul>; //-Apple  -Google ficam separados
};

// Map - é comum usar map direto na array como expressão, retornando um elemento para cada item novo da array.
const AppMap = () => {
  const filmes = ['Before Sunrise', 'Before Sunset', 'Before Midnight'];
  return (
    <ul>
      {filmes.map((filme) => {
        return <li key={filme}>{filme}</li>;
      })}
    </ul>
  );
};

// Array de objetos - muito comum
const AppObj = () => {
  const livros = [
    { nome: 'A Game of Thrones', ano: 1996 },
    { nome: 'A Clash of Kings', ano: 1998 },
    { nome: 'A Storm of Swords', ano: 2000 },
  ];

  return (
    <ul>
      {livros
        .filter((livro) => livro.ano >= 1998)
        .map(
          (
            { nome }, // é possível desestruturar direto também
          ) => (
            <li key={nome}>{nome}</li>
          ),
        )}
    </ul>
  );
};
