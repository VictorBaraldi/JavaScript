import React from 'react';
import Card from 'react-bootstrap/Card';

//Exemplo com o framework usando component
const App = () => {
  return (
    <Card bg="dark" text="white" className="m-5" style={{ maxWidth: '18rem' }}>
      <Card.Header>Notebook</Card.Header>
      <Card.Body>
        <Card.Title>R$ 2500</Card.Title>
        <Card.Text>Esse é um notebook moderno de ultima geração</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default App;
