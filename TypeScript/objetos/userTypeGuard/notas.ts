// Array - não conseguimos verificar com o typeof pois retorna object, logo há dois meios, com o instanceof Array ou Array.isArray()
async function FetchCursos() {
  const response = await fetch('https://api.origamid.dev/json/cursos.json');
  const json = await response.json();
  handleCursos(json);
}
FetchCursos();
function handleCursos(data: unknown) {
  if (data instanceof Array) {
    console.log('é instancia de array');
  }
  if (Array.isArray(data)) {
    console.log('é array');
  }
}

// Type Predicate - TS não executa JS, Com o Type Predicate :arg is type, podemos indicar qual o tipo de argumento uma função booleana (que retorna boolean) recebeu para ser verdadeira.
function isString(value: unknown): value is string {
  // basicamente fala: se for string retorna true (so usa com função boolean)
  // verifica se o valor é string ou não e retorna boolean
  return typeof value === 'string';
}

function handleData(data: unknown) {
  if (isString(data)) {
    data.toLowerCase();
  }
}

// Objetos - Type predicate pode ser especialmente usado para criar type Guard para objetos específicos e garantir segurança do projeto
async function fetchProduto() {
  const response = await fetch('https://api.origamid.dev/json/notebook.json');
  const json = await response.json();
  handleProduto(json);
}
fetchProduto();

interface Produto {
  nome: string;
  preco: number;
}

function isProduto(value: unknown): value is Produto {
  if (
    value &&
    typeof value === 'object' &&
    'nome' in value &&
    'preco' in value
  ) {
    return true;
  } else {
    return false;
  }
}

function handleProduto(data: unknown) {
  if (isProduto(data)) {
    console.log(data);
  }
}

//  Exer
async function Cursos() {
  const response = await fetch('https://api.origamid.dev/json/cursos.json');
  const json = await response.json();
  handleCurso(json);
  console.log(json);
}
Cursos();

interface Curso {
  nome: string;
  horas: number;
  aulas: number;
  gratuito: boolean;
  tags: string[];
  idAulas: number[];
  nivel: 'iniciante' | 'avancado';
}

function isCurso(value: unknown): value is Curso {
  if (
    value &&
    typeof value === 'object' &&
    'nome' in value &&
    'horas' in value &&
    'aulas' in value
  ) {
    return true;
  } else {
    return false;
  }
}

function handleCurso(data: unknown) {
  if (data instanceof Array) {
    data.filter(isCurso).forEach((value) => {
      document.body.innerHTML += `
      <p>Nome: ${value.nome}</p>
      <p>Horas: ${value.horas}</p>
      <p>Aulas ${value.aulas}</p>
    `;
    });
  }
}
