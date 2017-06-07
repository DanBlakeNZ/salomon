import {combineReducers} from 'redux'
import mobileMenuOpen from './mobileMenuToggleReducer'
import secoundryMobileMenuLayer from './secoundryLayerMobileMenuReducer'
import thirdMobileMenuLayer from './thirdLayerMobileMenuReducer'

const rootReducer = combineReducers({
  mobileMenuOpen,
  secoundryMobileMenuLayer,
  thirdMobileMenuLayer
})

export default rootReducer
