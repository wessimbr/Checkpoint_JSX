import React from 'react';
import Product from './product';


const Description = () => {
  return (
    <div>
      {/* product description */}
      <h6 style={{ fontSize: '16px' }}>Description : {Product.description}</h6>
    </div>
  )
}

export default Description
