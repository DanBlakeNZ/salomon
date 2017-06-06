import {combineReducers} from 'redux'
import mobileMenuOpen from './mobileMenuToggleReducer'
import secoundryMobileMenuLayer from './secoundryLayerMobileMenuReducer.js'

const rootReducer = combineReducers({
  mobileMenuOpen,
  secoundryMobileMenuLayer
})

export default rootReducer
