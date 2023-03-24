// Any - indica que pode conter qualquer tipo de dado, deve evitar ao máximo o uso, pois o mesmo remove todas as seguranças e conveniências que o TS fornece.
function normalizar(texto: any) {
  return texto.trim().toLowerCase();
}

normalizar(' DeSIGN');
normalizar(200);

// Any Implicito - Fora do modo estrito, o TypeScript permitirá o uso de parâmetros sem especificarmos o tipo. Esses parâmetros terão o tipo implícito de any.

// Em alguns casos o any faz sentido, como no caso da função json() onde qualquer tipo de dado pode ser retornado, dependendo da API que acessarmos.
async function fetchJSON(url: string) {
  const response = await fetch(url);
  const data = await response.json();
}

fetchJSON('https://api.origamid.dev/json/cursos.json');
