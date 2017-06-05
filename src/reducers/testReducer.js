import * as types from '../actions/actionTypes'
import initalState from './initialState'

export default function courseReducer (state = initalState.test, action) {
  switch (action.type) {
    case types.TEST_SUCCESS:
      return action.test

    default:
      return state
  }
}
