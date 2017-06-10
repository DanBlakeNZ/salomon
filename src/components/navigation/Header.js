import React, {PropTypes} from 'react'
import {showMobileMenu} from './navigationFunctions/mobileMenuFunctions'

const Header = ({props}) => {
  const mobileMenuActions = props.mobileMenuActions
  const mobileMenuOpen = props.mobileMenuOpen

  function mobileMenuToggle () {
    showMobileMenu(mobileMenuActions, mobileMenuOpen)
  }

  return (
    <header className='header' id='salomonHeaderWrapper'>
      <div className='subheader desktop'>
        <a className='locateStoreWrapper'>
          <i className="fa fa-map-marker" aria-hidden="true"/>
          <span>Store</span>
        </a>
      </div>
      <nav>
        <div className='navWrapper'>
          <div id='burger' className='mobile' onClick={mobileMenuToggle}>
            <div />
            <div />
            <div />
          </div>
          <a href='http://www.salomon.com/nz/' className='logo-mobile'>
            <div>
              <img className='mobile_logo mobile' alt='salomonLogo' src='https://res.cloudinary.com/dblakenzcloud/image/upload/v1496635759/Salomon/logo-salomon-mobile.svg' />
              <img className='desktop_logo desktop' alt='salomonLogo'src='https://res.cloudinary.com/dblakenzcloud/image/upload/v1497068581/Salomon/logo-salomon-desktop.svg' />

            </div>
          </a>
          <div className='cart_wrapper'>
            <i className='fa fa-shopping-bag mobile' aria-hidden='true' />
          </div>
        </div>
      </nav>
    </header>
  )
}

Header.propTypes = {
  props: PropTypes.object.isRequired,
  mobileMenuActions: PropTypes.object,
  mobileMenuOpen: PropTypes.bool
}

export default Header
