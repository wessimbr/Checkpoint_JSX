import React from 'react';
import Product from './product';


const Name = () => {
  return (
    <div>
      {/* Heading for the product name with a specified font size */}
      <h6 style={{ fontSize: '19px' }}>Name : {Product.name}</h6>
    </div>
  )
}

export default Name
