import React, { Fragment, useState } from 'react';
import data from '../app/data';
import Product from './Product/Index';
import Addform from './Product/Addform';

let currentProductId = 9;

const Home = () => {
  const [products, setProducts] = useState(data);

  function addProduct(product) {
    const newProduct = { id: ++currentProductId, ...product };
    setProducts([...products, newProduct]);
  }

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