import React, { Fragment, useState, useEffect } from 'react';
import Product from './Product/Index';
import Addform from './Product/Addform';
import axios from 'axios';

let currentProductId = 9;

const Home = () => {
  const [products, setProducts] = useState([]);

  function addProduct(product) {
    const newProduct = { id: ++currentProductId, ...product };
    setProducts([...products, newProduct]);
  }

  useEffect(() => {
    async function getProducts() {
      const products = await axios.get(
        'https://apimocha.com/dornor001/products'
      );
      setProducts(products.data);
    }
  
    getProducts();
  }, []); // Put the empty array to make sure that the hook is executed only once

  return (
    <Fragment>
      <h1>New Products</h1>
      {
        products.length > 0 ? (
          <ul className="Home__products">
            {products.map((product) => (
              <Product key={product.id} item={product} />
            ))}
          </ul>
        ) : (
          <div>Loading products....</div>
        )
      }
      <Addform addProduct={addProduct} />
    </Fragment>
  );
};

export default Home;