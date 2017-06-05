import {createStore, compose, applyMiddleware} from 'redux'
import rootReducer from '../reducers/index'
import thunk from 'redux-thunk'

export default function configureStore (initialState) {
  const middlewares = [
    thunk
  ]

  return createStore(rootReducer, initialState, compose(
    applyMiddleware(...middlewares)
    )
  )
}
