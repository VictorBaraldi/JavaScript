import React from 'react';
import { connect } from 'react-redux';

const incrementar = () => ({ type: 'INCREMENTAR' });

function App(props) {
  return (
    <div>
      <h1>Total: {props.contador}</h1>
      <button onClick={() => props.incrementar}>Incrementar</button>
    </div>
  );
}

//Antes dos hooks, era necessario conectarmos o Redux ao componente para utilizar o estado/dispatch.
const mapStateToProps = (state) => {
  return { contador: state };
};

// É apenas um objeto com uma lista de action creators
const mapDispatchToProps = {
  incrementar,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
