import React, {PropTypes} from 'react'
import {openLayer} from './navigationFunctions/mobileMenuFunctions'

const MobileMenuItem = (props) => {
  const menuItem = props.menuItem
  const actions = props.actions

  function openSecoundryLayer () {
    openLayer('mobileMenuSecoundLayerWrapper', actions, menuItem)
  }

  return (
    <li className='mobileMenuListItem' onClick={openSecoundryLayer} >

      {menuItem === 'S/Lab' ? <a id='sLab'>{menuItem}</a> : <a>{menuItem}</a>}
      {menuItem === 'S/Lab' ? <i className='fa fa-angle-right' id='sLabArrow' aria-hidden='true' /> : ''}
      {menuItem === ('Salomon TV') ? '' : <i className='fa fa-angle-right' aria-hidden='true' />}
    </li>
  )
}

MobileMenuItem.propTypes = {
  menuItem: PropTypes.string.isRequired,
  actions: PropTypes.object
}

export default MobileMenuItem
