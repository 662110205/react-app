import React from 'react'
import PropTypes from 'prop-types'
 
const Product = ({ item }) => {
    const productImage = require(`../../assets/${item.imageURL}`);
 
    return (
      <li className="Products">
        <a href={`/update-product/${item.id}`}>
          <img className="Products__image" src={productImage} alt={item.name} />
          <div className="Products__name">{item.name}</div>
          <small className="Products__type">{item.type}</small>
        </a>
      </li>
    );
  };
 
  Product.propTypes = {
    item: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      imageURL: PropTypes.string.isRequired,
    }).isRequired,
  };
 
  export default Product;