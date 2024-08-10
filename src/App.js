
import React, { Fragment } from 'react';
import Navbar from './features/Navbar'
import Container from './features/Container';
import Home from './features/Home';

function App() {
  return (
    <Fragment>
      <Navbar/>
      <Container>
        <Home/>
      </Container>
    </Fragment>
  );
}

export default App;
