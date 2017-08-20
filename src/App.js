import React, { Component } from 'react'
import ProductList from './Components/ProductList'
import './App.css'
import data from './data'

const products = data.slice(0,8)

class App extends Component {
  render() {
    console.log(products)
    return (
      <div className="App">
        <ProductList products={products}/>
      </div>
    )
  }
}

export default App
