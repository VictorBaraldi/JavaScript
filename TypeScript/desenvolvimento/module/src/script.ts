// Module - se usar import/export em qualquer momento do arquivo .ts o TS irá tratar o mesmo como module e consequentemente seu escopo não será mais global
import pluginSlide from './pluginSlide.js'; // aqui já é type module

pluginSlide('teste');

console.log(URL_BASE);
