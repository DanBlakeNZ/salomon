import React, {PropTypes} from 'react'
import {openLayer} from './navigationFunctions/mobileMenuFunctions'

const MobileMenuItem = (props) => {
  const menuItem = props.menuItem

  function openSportsLayer () {
    openLayer('mobileMenuSportsLayerWrapper', menuItem)
  }

  return (
    <li className='mobileMenuListItem' onClick={openSportsLayer} >
      <a>{menuItem}</a>}
      <i className='fa fa-angle-right' aria-hidden='true' />}
    </li>
  )
}

MobileMenuItem.propTypes = {
  menuItem: PropTypes.string.isRequired
}

export default MobileMenuItem
