import React from 'react';
import Head from './Head';
import { Helmet } from 'react-helmet';

const Home = () => {
  return (
    <div>
      {/*<Head title="Home" description="Essa é a descrição da página Home" /> */}
      <Helmet>
        <title>Home</title>
        <meta name="description" content="Essa é a descrição da página Home" />
      </Helmet>
      <h2>Home</h2>
      <p>Essa é a home</p>
    </div>
  );
};

export default Home;
