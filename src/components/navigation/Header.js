import React, {PropTypes} from 'react'

const Header = ({props}) => {
  const mobileMenuActions = props.mobileMenuActions
  const mobileMenuOpen = props.mobileMenuOpen

  return (
    <header className='header' id='salomonHeaderWrapper'>
      <nav>
        <div className='navWrapper'>
          <div id='burger' className='burgerClosed' onClick={() => openMenu(mobileMenuActions, mobileMenuOpen)}>
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

function openMenu (mobileMenuActions, mobileMenuOpen) {
  if (mobileMenuOpen) {
    mobileMenuActions.toggleMenuSuccess(false)
    document.getElementById('burger').classList.remove('burgerOpen')
    document.getElementById('burger').classList.add('burgerClosed')
    document.getElementById('mobileMenuWrapper').classList.remove('mobileMenuShow')
    document.getElementById('mobileMenuWrapper').classList.add('mobileMenuHide')
    document.getElementById('mobileMenuSecoundLayerWrapper').classList.add('mobileMenuHide')
    document.getElementById('mobileMenuSecoundLayerWrapper').classList.remove('mobileMenuShow')
  } else {
    mobileMenuActions.toggleMenuSuccess(true)
    document.getElementById('burger').classList.remove('burgerClosed')
    document.getElementById('burger').classList.add('burgerOpen')
    document.getElementById('mobileMenuWrapper').classList.remove('mobileMenuHide')
    document.getElementById('mobileMenuWrapper').classList.add('mobileMenuShow')
  }
}
