import React, { useState, useEffect } from 'react';
import Product from './Product/Index';
import axios from 'axios';
import styled from 'styled-components';

// let currentProductId = 9;

const Home = ({ className, products }) => { // U81XO
  // const [products, setProducts] = useState([]);

  // function addProduct(product) {
  //   const newProduct = { id: ++currentProductId, ...product };
  //   setProducts([...products, newProduct]);
  // }

  // useEffect(() => {
  //   async function getProducts() {
  //     const products = await axios.get(
  //       'https://apimocha.com/dornor001/products'
  //     );
  //     setProducts(products.data);
  //   }
  
  //   getProducts();
  // }, []); // Put the empty array to make sure that the hook is executed only once

  return (
    <div className={className}>
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
      {/* <Addform addProduct={addProduct} /> */}
    </div>
  );
};

export default styled(Home)` 
  .Home__products {
    display: flex;
    flex-wrap: wrap;

    list-style-type: none;
    padding: 0;
    margin: 0 -12px;
  }
`;