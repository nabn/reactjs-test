import types from './actiontypes.js'
import { API } from '../constants'

const initialState = {
  products: [],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SAVE_PRODUCTS:
      return { ...state, products: action.data }

    default:
      return state
  }
}

export const fetchProducts = _ =>
  dispatch => {
    const url = `${API}products.json`
    return fetch(url)
      .then(r => {
        if(r.status >=200 && r.status < 400) {
          return r.json()
        } else {
          throw new Error('Could not fetch')
        }
      })
      .then(data => dispatch(saveProducts(data)))
      .catch(console.err)
  }

const saveProducts = data =>
  ({type: types.SAVE_PRODUCTS, data})
