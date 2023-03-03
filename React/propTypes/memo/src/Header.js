import React from 'react';

const Header = () => {
  console.log('redenrizou');
  return <div>Header</div>;
};

export default React.memo(Header); // Quando possuimos um elemento estatico muito pesado podemos usar
