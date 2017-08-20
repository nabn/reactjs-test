import React from 'react'
import './style.css'

const ProductItem = ({product}) => (
  <div className="item">
    <div className="image-container">
      <img className="item-image" alt='' src={product.product_image} />
    </div>
    <div className="item-details">
      <div className="item-name">{product.product_name}</div>
      <div className="item-description">
        {product.description}
      </div>
      <div className="item-price">
        {product.price}
      </div>
    </div>
  </div>
)

export default ({products}) => (
  <div className="product-list">
    { products.map(x => <ProductItem key={x.id} product={x} />) }
  </div>
)

