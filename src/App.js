
import React, { Fragment } from 'react';
import Navbar from './features/Navbar'
import Container from './features/Container';
import Home from './features/Home';
import GlobalStyle from './features/GlobalStyle';


function App() {
  return (
      <Fragment>
        <GlobalStyle />
        <Navbar />
        <Container>
          <Home />
        </Container>
      </Fragment>

  );
}

export default App;
