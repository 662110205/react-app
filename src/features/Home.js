import React, { Fragment, useState } from 'react';
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
  async function getProducts() {
    const products = await axios.get(
      'https://apimocha.com/dornor/products'
    );
    setProducts(products.data);
    console.log(products);
  }
  
  getProducts();

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