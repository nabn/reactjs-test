import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import store, { history } from './Store'
import Home from './Containers/Home'
import registerServiceWorker from './registerServiceWorker'
import './index.css'

const Main = () =>
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Home />
    </ConnectedRouter>
  </Provider>

render(<Main />, document.getElementById('root'))
registerServiceWorker()
