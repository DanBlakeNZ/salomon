import React from 'react'

const DesktopMenu = () => {

    function showDesktopMenu (event){
      console.log(event.currentTarget.dataset);
    }
    
  return (
    <div>
      <div className='desktop-menu-wrapper desktop'>
        <div className='menu-left'>
          <ul>
            <li><p data-menuItem='Men' onMouseOver={showDesktopMenu}>Men</p></li>
            <li><p data-menuItem='Women' onMouseOver={showDesktopMenu}>Women</p></li>
            <li><p data-menuItem='Kids' onMouseOver={showDesktopMenu}>Kids</p></li>
          </ul>
        </div>
        <div className='menu-right'>
          <ul>
            <li><p data-menuItem='Sports' onMouseOver={showDesktopMenu}>Sports</p></li>
            <li><p data-menuItem='Brand' onMouseOver={showDesktopMenu}>Brand</p></li>
            <li><p data-menuItem='S\Lab' onMouseOver={showDesktopMenu}>S\Lab</p></li>
            <li><p data-menuItem='Salomon TV' onMouseOver={showDesktopMenu}>Salomon Tv</p></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default DesktopMenu
