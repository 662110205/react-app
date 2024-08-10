import React from 'react';
import PropTypes from 'prop-types';
 
const Container = ({ children }) => {
  return <main>{children}</main>;
};
 
Container.propTypes = {
  children: PropTypes.node.isRequired,
};
 
export default Container;