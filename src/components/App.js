import React, {PropTypes} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as mobileMenuActions from '../actions/mobileMenuActions'

import Header from './navigation/Header'
import MobileMenu from './navigation/MobileMenu'
import MobileMenuSecoundLayer from './navigation/MobileMenuSecoundLayer'
import MobileMenuThirdLayer from './navigation/MobileMenuThirdLayer'
import MobileMenuSportsLayer from './navigation/MobileMenuSportsLayer'

class App extends React.Component {
  render () {
    return (
      <div>
        <Header props={this.props} />
        <MobileMenu props={this.props} />
        <MobileMenuSecoundLayer props={this.props} />
        <MobileMenuThirdLayer props={this.props} />
        <MobileMenuSportsLayer />
        {this.props.children}
      </div>
    )
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  mobileMenuOpen: PropTypes.bool.isRequired,
  secoundryMobileMenuLayer: PropTypes.string.isRequired,
  thirdMobileMenuLayer: PropTypes.string.isRequired
}

function mapStateToProps (state, ownProps) {
  return {
    mobileMenuOpen: state.mobileMenuOpen,
    secoundryMobileMenuLayer: state.secoundryMobileMenuLayer,
    thirdMobileMenuLayer: state.thirdMobileMenuLayer
  }
}

function mapDispatchToProps (dispatch) {
  return {
    mobileMenuActions: bindActionCreators(mobileMenuActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
