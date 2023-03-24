// Arrays - uma array é definida com o tipo de dado que possui ,seguida por []
const numeros = [10, 20, 30, 40];
const valores = [10, '20', 30, '40'];

function maiorQue10(data: number[]) {
  return data.filter((n) => n > 10);
}

function filtarValores(data: (string | number)[]) {
  return data.filter((item) => typeof item === 'number');
}

// console.log(maiorQue10(numeros));
// console.log(filtarValores(valores));

const dados: (string | number)[][] = [
  ['senhor dos aneis', 80],
  ['a guerra dos tronos', 120],
];

// Sintaxe alternativa - usar Array<type>, sendo o type o tipo do dado dentro da array
const numeros2 = [10, 30, 40, 5, 3, 30];

function maiorQues10(data: Array<number>) {
  return data.filter((n) => n > 10);
}

// Exer -
async function fetchCurso() {
  const response = await fetch('https://api.origamid.dev/json/cursos.json');
  const json = await response.json();
  mostrarCursos(json);
}
fetchCurso();

function mostrarCursos(cursos: Cursos[]) {
  let color;
  cursos.forEach((element) => {
    if (element.nivel === 'iniciante') color = 'blue';
    else color = 'red';
    document.body.innerHTML += `
    <h1 style= 'color: ${color}'>${element.nome}</h1>
    <p>Horas: ${element.horas}</p>
    <p>Aulas: ${element.aulas}</p>
    <p>Gratuito: ${element.gratuito ? 'Sim' : 'Não'}</p>
    <p>Tags: ${element.tags.join(', ')}</p>
    <p>Aulas: ${element.idAulas.join(' | ')}</p>
    `;
  });
}

interface Cursos {
  nome: string;
  horas: number;
  aulas: number;
  gratuito: boolean;
  tags: string[];
  idAulas: number[];
  nivel: 'iniciante' | 'avancado';
}
