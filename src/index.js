/* eslint-disable import/default */
import 'babel-polyfill'
import React from 'react'
import {render} from 'react-dom'
import configureStore from './store/configureStore'
import {Provider} from 'react-redux'
import {loadSecoundryMobileMenuLayer} from './actions/mobileMenuActions'
import {Router, browserHistory} from 'react-router'
import routes from './routes'
import './styles/main.min.css'
import './styles/normalize/norrmalize.css'

const store = configureStore()

store.dispatch(loadSecoundryMobileMenuLayer('Men'))

render(
  <Provider store={store} >
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
)
