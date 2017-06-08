import expect from 'expect'
import * as mobileMenuActions from './mobileMenuActions'

describe('Mobile Menu Actions Tests', () => {
  describe('toggleMenuSuccess', () => {
    it('Should create a TOGGLE_MENU_SUCCESS action', () => {
      // arrange
      const mobileMenuOpen = true
      const expectedAction = {
        type: 'TOGGLE_MENU_SUCCESS',
        mobileMenuOpen
      }
      // assert
      const action = mobileMenuActions.toggleMenuSuccess(mobileMenuOpen)

      // act
      expect(action).toEqual(expectedAction)
    })
  })

  describe('loadSecoundryMobileMenuLayer', () => {
    it('Should create a SECOUNDRY_MOBILE_MENU_LOAD_SUCCESS action', () => {
      // arrange
      const catagory = 'Men'
      const expectedAction = {
        type: 'SECOUNDRY_MOBILE_MENU_LOAD_SUCCESS',
        catagory
      }
      // assert
      const action = mobileMenuActions.loadSecoundryMobileMenuLayer(catagory)

      // act
      expect(action).toEqual(expectedAction)
    })
  })

  describe('loadThirdMobileMenuLayer', () => {
    it('Should create a THIRD_MOBILE_MENU_LOAD_SUCCESS action', () => {
      // arrange
      const catagory = 'Shoes'
      const expectedAction = {
        type: 'THIRD_MOBILE_MENU_LOAD_SUCCESS',
        catagory
      }
      // assert
      const action = mobileMenuActions.loadThirdMobileMenuLayer(catagory)

      // act
      expect(action).toEqual(expectedAction)
    })
  })
})
