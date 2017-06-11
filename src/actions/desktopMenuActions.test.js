import expect from 'expect'
import * as desktopMenuActions from './desktopMenuActions'

describe('Desktop Menu Actions Tests', () => {
  describe('loadSecoundryMobileMenuLayer', () => {
    it('Should create a DESKTOP_MENU_LOAD_SUCCESS action', () => {
      // arrange
      const catagory = 'Men'
      const expectedAction = {
        type: 'DESKTOP_MENU_LOAD_SUCCESS',
        catagory
      }
      // assert
      const action = desktopMenuActions.loadDesktopMenuData(catagory)

      // act
      expect(action).toEqual(expectedAction)
    })
  })
})
