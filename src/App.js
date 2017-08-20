import React, { Component } from 'react'
import './App.css'
import data from './data'
import R from 'ramda'

import ProductList from './Components/ProductList'
import Header from './Components/Header'
import Footer from './Components/Footer'

const ITEMS_PER_PAGE = 8

class App extends Component {
  state = {
    itemsPerPage: ITEMS_PER_PAGE,
    products: data,
  }

  render() {
    const { itemsPerPage, products } = this.state
    const productsDisplayed = R.take(itemsPerPage, products)
    return (
      <div className="App">
        <Header
          totalProducts={products.length}
          itemsPerPage={itemsPerPage} />
        <ProductList
          products={productsDisplayed} />
        <Footer />
      </div>
    )
  }
}

export default App
