import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';
import { Routes, Route, Link } from 'react-router-dom';

const Product = ({ item, className }) => {
  const productImage = require(`../../assets/${item.imageURL}`);

  return (

    <li className={className}>

      <Link to={`/update-product/${item.id}`}>
        <img className="Products__image" src={productImage} alt={item.name} />
        <div className="Products__name">{item.name}</div>
        <small className="Products__type">{item.type}</small>
      </Link>
      {/* <a href={`/update-product/${item.id}`}>
          <img className="Products__image" src={productImage} alt={item.name} />
          <div className="Products__name">{item.name}</div>
          <small className="Products__type">{item.type}</small>
        </a> */}
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

export default styled(Product)`
  padding-right: 12px;
  padding-bottom: 36px;
  padding-left: 12px;
  width: 33%;
  position: relative;

  .Products__name {
    color: #333;

    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    width: 100%;
    display: block;
  }

  .Products__type {
    color: #767676;
  }

  .Products__image {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 8px;
  }
`;