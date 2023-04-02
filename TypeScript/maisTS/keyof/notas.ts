// keyof - casos avançados, não é muito usado, basicamente indica que o dado é uma chave de uma interface/type
interface Produto {
  nome: string;
  preco: number;
  novo: boolean;
}

let chave: keyof Produto;
//let chave so pode ser nome ou preço ou novo
chave = 'nome';

// typeof - menos usado ainda, no ts é usado para indicar que um dado possui o mesmo tipo que o outro.
function coordenadas(x: number, y: number) {
  return { x, y };
}

let coord: typeof coordenadas;
// agota coord deve ser igual a uma função igual coordenadas
coord = (x: number, y: number) => {
  return { x, y };
};

// é com o keyof que o queroSelector associa uma string com a interface que ela retorna
interface Elementos {
  a: HTMLAnchorElement;
  video: HTMLVideoElement;
  div: HTMLElement;
  body: HTMLBodyElement;
  audio: HTMLAudioElement;
}

function selecionar<Chave extends keyof Elementos>(
  seletor: Chave,
): Elementos[Chave] | null {
  return document.querySelector(seletor);
}

// keyof pode ser utilizado para criar funções genéricas utilitárias.
async function fetchData<T>(url: string): Promise<T> {
  const base = 'https://api.origamid.dev/json';
  const response = await fetch(base + url);
  return await response.json();
}

interface Jogo {
  nome: string;
  ano: number;
  desenvolvedora: string;
  plataformas: string[];
}

interface Livro {
  nome: string;
  ano: number;
  autor: string;
  paginas: number;
}

function checkInterface<Interface>(
  obj: unknown,
  key: keyof Interface,
): obj is Interface {
  if (obj && typeof obj === 'object' && key in obj) {
    return true;
  } else {
    return false;
  }
}

async function handleData() {
  const jogo = await fetchData('/jogo.json');
  if (checkInterface<Jogo>(jogo, 'desenvolvedora')) {
    console.log(jogo.desenvolvedora);
  }
  const livro = await fetchData('/livro.json');
  if (checkInterface<Livro>(livro, 'autor')) {
    console.log(livro.autor);
  }
}
handleData();
