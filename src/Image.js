import React from 'react'
import Product from './Product';

const Image = () => {
  return (
    <div>
       <img src={Product.image} alt="" style={{ width: '300px', height: '300px' }}/>
    </div>
  )
}

export default Image
