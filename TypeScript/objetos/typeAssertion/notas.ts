// as - com type assertion é possível indicar ao TS qual o tipo de dado esperado com a palavra as, Só é possível indicar tipos que possuam relação com o tipo original. Evitar ao máximo o uso de Type Assertion, pois a segurança (Type Safety) é perdida quando indicamos algo que nem sempre será verdade.
const video = document.querySelector('.player') as HTMLVideoElement;
video?.volume; // no caso é undefined, já que não existe, confia na pessoa e não verifica se existe e se é video mesmo

// any - podemos usar o type assertion para definir que um tipo de any é qualquer tipo de dado possível
interface Produto {
  nome: string;
  preco: number;
}

async function fetchProduto() {
  const response = await fetch('https://api.origamid.dev/json/notebook.json');
  return response.json() as Promise<Produto>;
}

async function handleProduto() {
  const produto = await fetchProduto();
  console.log(produto.preco);
}
handleProduto();

// ! non-null operator - indica que não existe a possibilidade do dado ser null, deve tomar cuidado pois pode levar a erros, operador de TS
const videoNon = document.querySelector('video')!;
// basicamente com a inserção do ! ele considera que existe
videoNon.volume;
// erro runtime
document.querySelector('a')!.href = 'https://www.origamid.com';

// Outras sintaxes
const video1 = document.querySelector('.player') as HTMLVideoElement;
const video2 = <HTMLVideoElement>document.querySelector('.player');
const video3 = document.querySelector<HTMLVideoElement>('.player');
const video4 = document.querySelector('.player');

video1.volume;
video2.volume;
video3?.volume;
(video4 as HTMLVideoElement).volume;
