// Modules garantem que a classe usada sejam sempre únicas, evitando conflito, esse modo já vem configurado, basta definir o nome do arquivo css com a palavra module, ex App.module.css. Define um nome único para importar, a mesma será transformada em objeto.
import styles from './Produto.module.css';

const Produto = () => {
  return (
    <div>
      <h1 className={styles.titulo}>Notebook</h1>
      <p className={styles.preco}>R$ 12000</p>
      <button className={styles.comprar}>Comprar</button>
    </div>
  );
};

//camelCase - Utilize camelCase tituloPrincipal, já que o nome da classe se transformará em uma propriedade de um objeto JavaScript. Não utilize hífens titulo-principal.
