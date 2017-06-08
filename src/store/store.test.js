import expect from 'expect'
import { createStore } from 'redux'
import rootReducer from '../reducers/index'
import * as mobileMenuActions from '../actions/mobileMenuActions'

describe('Store Tests', () => {
  describe('mobileMenuOpen', () => {
    it('Should track the Mobile Menu toggle state', () => {
      // arrange
      const store = createStore(rootReducer)
      const menuState = true

      // act
      const action = mobileMenuActions.toggleMenuSuccess(menuState)
      store.dispatch(action)

      // assert
      const actual = store.getState().mobileMenuOpen
      const expected = true
      expect(actual).toEqual(expected)
    })
  })

  describe('secoundryMobileMenuLayer', () => {
    it('Should track menu information to be displayed in the Secound Mobile Menu Layer', () => {
      // arrange
      const store = createStore(rootReducer)
      const catagory = 'Brand'

      // act
      const action = mobileMenuActions.loadSecoundryMobileMenuLayer(catagory)
      store.dispatch(action)

      // assert
      const actual = store.getState().secoundryMobileMenuLayer
      const expected = 'Brand'
      expect(actual).toEqual(expected)
    })
  })

  describe('thirdMobileMenuLayer', () => {
    it('Should track menu information to be displayed in the Secound Mobile Menu Layer', () => {
      // arrange
      const store = createStore(rootReducer)
      const catagory = 'Collections'

      // act
      const action = mobileMenuActions.loadThirdMobileMenuLayer(catagory)
      store.dispatch(action)

      // assert
      const actual = store.getState().thirdMobileMenuLayer
      const expected = 'Collections'
      expect(actual).toEqual(expected)
    })
  })
})
