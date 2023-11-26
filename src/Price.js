import React from 'react'
import Product from  './product';

const Price = () => {
  return (
    <div>
     {/* Heading for the product price with a specified font size */}
     <h6 style={{ fontSize: '19px' }}>Price : {Product.price}</h6> 
    </div>
  )
}

export default Price
