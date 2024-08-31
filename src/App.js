
import React, { Fragment, useState, useEffect } from 'react';
import Navbar from './features/Navbar'
import Container from './features/Container';
import Home from './features/Home';
import GlobalStyle from './features/GlobalStyle';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import AddForm from './features/Product/Addform';
import UpdateForm from './features/Product/UpdateForm';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from './features/Product/action';


function App() {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    
    async function getProducts() {
      const products = await axios.get(
        'https://apimocha.com/dornor001/products'
      );
      dispatch(fetchProducts(products.data));
    }
  
    getProducts();
  }, []);

  return (
    <Fragment>
      <GlobalStyle />
      <Navbar />
      <Container>
        {products.length > 0 ? (
          <Routes>
            <Route path="/create-product" element={<AddForm />} />
            <Route path="/update-product/:id" element={<UpdateForm />} />
            <Route path="/" element={<Home products={products} />} />
          </Routes>
        ) : (
          <div>Loading products....</div>
        )}
      </Container>
    </Fragment>

  );
}

export default App;
