// Eventos - Passamos o evento como uma string e uma função de callback no método addEventListener. A função de callback possui um parâmetro que faz referência ao evento executado.
const button = document.querySelector('button');

function handleClick(e: PointerEvent) {
  //console.log(e);
}

button?.addEventListener('pointerdown', handleClick);

function handleScroll(event: Event) {
  //console.log(event);
}

window.addEventListener('scroll', handleScroll);

// Event e instanceof - Uma função, quando criada para ser executada em diferentes tipos de eventos, deve receber como parâmetro o tipo comum entre elas Event.

function ativarMenu(e: Event) {
  if (e instanceof MouseEvent) {
    //console.log(e + ' é um mouseevent');
  }
  if (e instanceof TouchEvent) {
    //console.log(e + ' é um touchevent');
  }
}

document.documentElement.addEventListener('mousedown', ativarMenu);
document.documentElement.addEventListener('touchstart', ativarMenu);

// This - Dentro de uma função, o this faz referência ao objeto que executou a mesma. No JavaScript o this pode ser passado como o primeiro parâmetro da função, mesmo não sendo necessário informar ele durante a execução
function handleClickThis(this: HTMLButtonElement) {
  console.log(this);
}
//button?.addEventListener('click', handleClickThis);

// O TypeScript não executa o JavaScript, assim ele não consegue assumir qual será o target ou currentTarget do evento executado. Os elementos são definidos como o tipo EventTarget, pois esse é o tipo mais comum entre os elementos que podem receber um evento.

function handleClickTarget(e: Event) {
  if (e.currentTarget instanceof HTMLElement) {
    e.currentTarget.style.background = 'red';
  }
}
//button?.addEventListener('click', handleClickTarget);

// Exer
const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(e: PointerEvent) {
  const nav = document.getElementById('nav');
  const button = e.currentTarget;
  nav?.classList.toggle('active');
  console.dir(button);

  if (button instanceof HTMLElement && nav) {
    if (nav?.classList.contains('active')) {
      button.setAttribute('aria-label', 'Fechar menu');
      button.setAttribute('aria-expanded', 'true');
    } else {
      button.setAttribute('aria-label', 'Abrir menu');
      button.setAttribute('aria-expanded', 'false');
    }
  }
}

btnMobile?.addEventListener('pointerdown', toggleMenu);
