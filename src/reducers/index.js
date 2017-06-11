import {combineReducers} from 'redux'
import mobileMenuOpen from './mobileMenuToggleReducer'
import secoundryMobileMenuLayer from './secoundryLayerMobileMenuReducer'
import thirdMobileMenuLayer from './thirdLayerMobileMenuReducer'
import desktopMenuOpen from './desktopMenuDataReducer'

const rootReducer = combineReducers({
  mobileMenuOpen,
  secoundryMobileMenuLayer,
  thirdMobileMenuLayer,
  desktopMenuOpen
})

export default rootReducer
