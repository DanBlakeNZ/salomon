import React, {PropTypes} from 'react'

const DesktopMenu = ({props}) => {
  function showDesktopMenu (event){
    props.loadDesktopMenuData(event.currentTarget.dataset)
  }

  return (
    <div>
      <div className='desktop-menu-wrapper desktop'>
        <div className='menu-left'>
          <ul>
            <li><p data-menuCatagory='Men' onMouseOver={showDesktopMenu}>Men</p></li>
            <li><p data-menuCatagory='Women' onMouseOver={showDesktopMenu}>Women</p></li>
            <li><p data-menuCatagory='Kids' onMouseOver={showDesktopMenu}>Kids</p></li>
          </ul>
        </div>
        <div className='menu-right'>
          <ul>
            <li><p data-menuCatagory='Sports' onMouseOver={showDesktopMenu}>Sports</p></li>
            <li><p data-menuCatagory='Brand' onMouseOver={showDesktopMenu}>Brand</p></li>
            <li><p data-menuCatagory='S\Lab' onMouseOver={showDesktopMenu}>S\Lab</p></li>
            <li><p data-menuCatagory='Salomon TV' onMouseOver={showDesktopMenu}>Salomon Tv</p></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

DesktopMenu.propTypes = {
  props: PropTypes.object.isRequired,
  loadDesktopMenuData: PropTypes.func
}

export default DesktopMenu
