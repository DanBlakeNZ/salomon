import React, {PropTypes} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as mobileMenuActions from '../actions/mobileMenuActions'

import Header from './navigation/Header'
import MobileMenu from './navigation/MobileMenu'

class App extends React.Component {
  render () {
    return (
      <div>
        <Header props={this.props} />
        <MobileMenu props={this.props} />
        {this.props.children}
      </div>
    )
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  mobileMenuOpen: PropTypes.bool.isRequired
}

function mapStateToProps (state, ownProps) {
  return {
    mobileMenuOpen: state.mobileMenuOpen
  }
}

function mapDispatchToProps (dispatch) {
  return {
    mobileMenuActions: bindActionCreators(mobileMenuActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
