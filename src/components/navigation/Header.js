import React from 'react'

const Header = () => {
  return (
    <header className='header' id='salomonHeaderWrapper'>
      <nav>
        <div className='navWrapper'>
          <div className='burger'>
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
            <i className='fa fa-shopping-bag' aria-hidden='true'></i>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
