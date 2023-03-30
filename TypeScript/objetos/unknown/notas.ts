// Unknown - indica que não sabemos o tipo de dados que pode ser passado, diferente do any, o unknown so permite uso de métodos quando a type safety estiver garantida

function typeGuard(value: unknown) {
  if (typeof value === 'string') {
    return value.toLowerCase(); // so consigo escrever depois do type safety
  }
  if (typeof value === 'number') {
    return value.toFixed();
  }
  if (value instanceof HTMLElement) {
    return value.innerText;
  }
}

typeGuard('Origamid');
typeGuard(200);
typeGuard(document.body);
