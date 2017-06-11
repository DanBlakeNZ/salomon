import React, {PropTypes} from 'react'
import * as desktopMenuFunctions from './navigationFunctions/desktopMenuFunctions'

const DesktopNavBar = ({props}) => {
  function showDesktopMenu (event){
    props.loadDesktopMenuData(event.currentTarget.dataset.navbarcatagory)
    desktopMenuFunctions.desktopMenuVisable()
  }

  function hideDesktopMenu (){
    desktopMenuFunctions.desktopMenuHidden()
  }

  return (
    <div>
      <div className='desktop-navbar-wrapper desktop'>
        <div className='navbar-left'>
          <ul>
            <li className='desktopNavItem' data-navbarCatagory='Men' onMouseOver={showDesktopMenu} onMouseOut={hideDesktopMenu}>
              <p>Men</p>
            </li>
            <li className='desktopNavItem' data-navbarCatagory='Women' onMouseOver={showDesktopMenu} onMouseOut={hideDesktopMenu}>
              <p>Women</p>
            </li>
            <li className='desktopNavItem' data-navbarCatagory='Kids' onMouseOver={showDesktopMenu} onMouseOut={hideDesktopMenu}>
              <p>Kids</p>
            </li>
          </ul>
        </div>
        <div className='navbar-right'>
          <ul>
            <li className='desktopNavItem' data-navbarCatagory='Sports' onMouseOver={showDesktopMenu} onMouseOut={hideDesktopMenu}>
              <p>Sports</p>
            </li>
            <li>
              <p>/</p>
            </li>
            <li className='desktopNavItem' data-navbarCatagory='Brand' onMouseOver={showDesktopMenu} onMouseOut={hideDesktopMenu}>
              <p>Brand</p>
            </li>
            <li className='desktopNavItem' data-navbarCatagory='S/Lab' onMouseOver={showDesktopMenu} onMouseOut={hideDesktopMenu}>
              <p>S/Lab</p>
            </li>
            <li className='desktopNavItem' data-navbarCatagory='Salomon TV' onMouseOver={showDesktopMenu} onMouseOut={hideDesktopMenu}>
              <p>Salomon Tv</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

DesktopNavBar.propTypes = {
  props: PropTypes.object.isRequired,
  loadDesktopMenuData: PropTypes.func
}

export default DesktopNavBar
