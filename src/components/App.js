import React, {PropTypes} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as mobileMenuActions from '../actions/mobileMenuActions'

import Header from './navigation/Header.js'

class App extends React.Component {
  componentDidMount () {

  }
  render () {
    return (
      <div>
        <Header props={this.props} />
        {this.props.children}
      </div>
    )
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
}

function mapStateToProps (state, ownProps) {
  return {
    mobileMenuOpen: state.mobileMenuOpen
  }
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(mobileMenuActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
