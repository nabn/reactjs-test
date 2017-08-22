import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import R from 'ramda'

import './styles/Home.css'

import ProductList from '../Components/ProductList'
import Header from '../Components/Header'
import Footer from '../Components/Footer'

import { fetchProducts } from '../Store/home'

const ITEMS_PER_PAGE = 8

class Home extends Component {
  state = {
    itemsPerPage: ITEMS_PER_PAGE,
    productsDisplayed: [],
    activePage: 1,
    lastPage: 1,
  }

  componentWillMount() {
    this.props.fetchProducts()
  }

  changePage = n =>
    _ => {
      const { lastPage, itemsPerPage } = this.state
      if(n <= lastPage && n > 0) {
        const min = (n-1) * itemsPerPage
        const max = n * itemsPerPage
        this.setState({
          activePage: n,
          productsDisplayed: R.slice(min, max, this.props.home.products)
        })
      }
    }

  componentWillReceiveProps(next) {
    const { products } = next.home
    const { itemsPerPage } = this.state

    const productsDisplayed = R.take(this.state.itemsPerPage, products)

    const rem = products.length % itemsPerPage
    const pages = products.length / itemsPerPage
    const lastPage = rem === 0 ? pages : pages + 1

    this.setState({ productsDisplayed, lastPage })
  }

  render() {
    const { itemsPerPage, productsDisplayed, lastPage, activePage } = this.state
    const { products } = this.props.home
    return (
      <div className="App">
        <Header
          totalProducts={products.length}
          itemsPerPage={itemsPerPage} />
        <ProductList
          products={productsDisplayed} />
        <Footer
          changePage={this.changePage}
          activePage={activePage}
          nPages={lastPage}/>
      </div>
    )
  }
}

const mapStateToProps = R.pick(['home'])
const mapDispatchToProps = dispatch =>
  bindActionCreators({
    fetchProducts,
  }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Home)
