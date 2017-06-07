import React, {PropTypes} from 'react'
import {openLayer} from './navigationFunctions/mobileMenuFunctions'

const MobileMenuItem = (props) => {
  const menuItem = props.menuItem
  const actions = props.actions

  function openThirdLayer () {
    openLayer('mobileMenuThirdLayerWrapper', actions, menuItem)
  }

  return (
    <li className='mobileMenuListItem' onClick={openThirdLayer} >
      <a>{menuItem}</a>
      <i className='fa fa-angle-right' aria-hidden='true' />
    </li>
  )
}

MobileMenuItem.propTypes = {
  menuItem: PropTypes.string.isRequired,
  actions: PropTypes.object
}

export default MobileMenuItem
