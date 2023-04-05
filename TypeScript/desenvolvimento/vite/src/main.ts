import _ from 'lodash';
import clipboard from 'clipboard';

const button = new clipboard('button');

button.on('success', handleCopy);

function handleCopy(e: clipboard.Event) {
  console.log('copiou');
  console.log(e.action);
}

interface Produto {
  nome: string;
}

const livro: Produto = {
  nome: 'victor',
};
