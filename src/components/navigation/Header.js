import React, {PropTypes} from 'react'

const Header = ({props}) => {
  const actions = props.actions
  const mobileMenuOpen = props.mobileMenuOpen

  return (
    <header className='header' id='salomonHeaderWrapper'>
      <nav>
        <div className='navWrapper'>
          <div className='burger' onClick={() => openMenu(actions, mobileMenuOpen)}>
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
  actions: PropTypes.object,
  mobileMenuOpen: PropTypes.bool
}

export default Header

function openMenu (actions, mobileMenuOpen) {
  if (mobileMenuOpen) {
    actions.toggleMenuSuccess(false)
  } else {
    actions.toggleMenuSuccess(true)
  }
}
