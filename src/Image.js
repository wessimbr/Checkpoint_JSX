import React from 'react'
import Product from './product';

const Image = () => {
  return (
    <div>
       {/* product image */}
       <img src={Product.image} alt="" style={{ width: '300px', height: '300px' }}/>
    </div>
  )
}

export default Image
