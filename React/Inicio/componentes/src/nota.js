// Componentes - O ideal é dividir o aplicativo em pequenos componentes para facilitar a manutenção do mesmo.

// Não existe limite para a composição de componentes, eles podem ser desde componentes gerais como Header e Footer, até micro componentes como Input e Button.

//return - um componente deve sempre retornar algo, o retorno pode ser qualquer tipo de dado aceito por JSX (string, array, JSX, null, etc)
// const App = () => {
//   return (
//     <React.Fragment>
//       <Header />
//       <Form />
//       <Footer />
//     </React.Fragment>
//   );
// };

//React.fragment - Um componente deve sempre retornar um elemento único no return. Caso você deseje retornar mais de um elemento, envolva os mesmos em uma div ou dentro do <React.Fragment></React.Fragment> ou <></>
// const App = () => {
//   return (
//     <React.Fragment>
//       <Header />
//       <Form />
//       <Footer />
//     </React.Fragment>
//   );
// };
// É a mesma coisa que:
// const App = () => {
//   return (
//     <>
//       <Header />
//       <Form />
//       <Footer />
//     </>
//   );
// };
