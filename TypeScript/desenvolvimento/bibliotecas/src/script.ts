//Ao usarmos uma biblioteca externa criada em JavaScript, o TS não consegue automaticamente identificar a interface da mesma. Para isso, milhares de projetos fornecem para instalação os seus arquivos .d.ts, com isso o TS passa a reconhecer a interface da mesma.

const body = $('body');

console.log(body);

console.log(_.difference([1, 2, 5, 7, 9], [2, 5, 12, 7]));
