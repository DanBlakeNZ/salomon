import React, {PropTypes} from 'react'
import {showMobileMenu} from './navigationFunctions/mobileMenuFunctions'

const Header = ({props}) => {
  const mobileMenuActions = props.mobileMenuActions
  const mobileMenuOpen = props.mobileMenuOpen

  function openMobileMenu () {
    showMobileMenu(mobileMenuActions, mobileMenuOpen)
  }

  return (
    <header className='header' id='salomonHeaderWrapper'>
      <nav>
        <div className='navWrapper'>
          <div id='burger' className='burgerClosed' onClick={openMobileMenu}>
            <div />
            <div />
            <div />
          </div>
          <a href='http://www.salomon.com/nz/' className='logo'>
            <div>
              <img className='mobile mobile_logo' alt='salomon' src='https://res.cloudinary.com/dblakenzcloud/image/upload/v1496635759/Salomon/logo-salomon-mobile.svg' />
            </div>
          </a>
          <div className='cart_wrapper'>
            <i className='fa fa-shopping-bag' aria-hidden='true' />
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
