import React, { useState } from 'react';
import data from '../app/data';
import Product from './Product/Index';
import Addform from './Product/Addform';
 
const Home = () => {
  const [products, setProducts] = useState(data);
  let currentProductId = useState(9);

  function addProduct(product) {
    const newProduct = { id: ++currentProductId, ...product };
    setProducts([...products, newProduct]);
  }
 
  return (
    <div>
      <h1>New Products</h1>
      <ul className="Home__products">
        {products.map((product) => (
          <Product key={product.id} item={product} />
        ))}
      </ul>
      <Addform addProduct ={addProduct}/>
    </div>
  );
};
 
export default Home;