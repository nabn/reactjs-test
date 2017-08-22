import React from 'react'
import Select from 'react-select'
import 'react-select/dist/react-select.css'
import './style.css'

export default ({ options, totalProducts, itemsPerPage, setItemsPerPage }) =>
  <div className="header">
    <h3 className="title">All Products</h3>
    <div className="sub">
      <div className="subtitle">{totalProducts} Products</div>
      <Select
        name="items-per-page-selector"
        value={options.find(x => x.value === itemsPerPage)}
        options={options}
        onChange={setItemsPerPage} />
    </div>
  </div>
