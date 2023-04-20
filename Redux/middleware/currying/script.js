// Currying - uma função curried permite passarmos um argumento por vez, ao invés de todos de uma vez.
function somar(a, b, c) {
  return a + b + c;
}
somar(2, 3, 5);

function somar_(a) {
  return (b) => {
    return (c) => {
      return a + b + c;
    };
  };
}
somar_(2)(3)(5);

// Uso real
const li = Array.from(document.querySelectorAll('li'));

const getElementAttr = (key) => {
  return function (el) {
    return el.getAttribute(key);
  };
};
// Método normal
// const dataSlide = li.map((el) => el.getAttribute('data-slide'));
// const idSlide = li.map((el) => el.getAttribute('id'));

// Com currying
const getAttrSlide = getElementAttr('data-slide');
const getAttrId = getElementAttr('id');

const dataSlide = li.map(getAttrSlide);
const idSlide = li.map(getAttrId);

console.log(dataSlide, idSlide);
