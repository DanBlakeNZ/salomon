import React, {PropTypes} from 'react'
import DesktopNavBar from './DesktopNavBar'
import {showMobileMenu} from './navigationFunctions/mobileMenuFunctions'

const Header = ({props}) => {
  const mobileMenuActions = props.mobileMenuActions
  const desktopMenuActions = props.desktopMenuActions
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
          <DesktopNavBar props={desktopMenuActions} />
          <div id='burger' className='mobile' onClick={mobileMenuToggle}>
            <div />
            <div />
            <div />
          </div>
          <a href='http://www.salomon.com/nz/' className='logo-container'>
            <div>
              <img className='mobile-logo mobile' alt='salomonLogo' src='https://res.cloudinary.com/dblakenzcloud/image/upload/v1496635759/Salomon/logo-salomon-mobile.svg' />
              <img className='desktop-logo desktop' alt='salomonLogo'src='https://res.cloudinary.com/dblakenzcloud/image/upload/v1497068581/Salomon/logo-salomon-desktop.svg' />

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
  desktopMenuActions: PropTypes.object,
  mobileMenuOpen: PropTypes.bool
}

export default Header
