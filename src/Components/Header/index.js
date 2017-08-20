import React from 'react'
import './style.css'

const Dropdown = ({itemsPerPage}) =>
  <div className="dropdown">
    {itemsPerPage} per page ▼
  </div>

export default ({totalProducts, itemsPerPage}) =>
  <div className="header">
    <h3 className="title">All Products</h3>
    <div className="sub">
      <div className="subtitle">{totalProducts} Products</div>
      <Dropdown itemsPerPage={itemsPerPage}/>
    </div>
  </div>
