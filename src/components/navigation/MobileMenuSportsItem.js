import React, {PropTypes} from 'react'

const MobileMenuItem = (props) => {
  const menuItem = props.menuItem

  return (
    <li className='mobileMenuListItem' onClick={() => openSportsMenu()} >
      <a>{menuItem}</a>}
      <i className='fa fa-angle-right' aria-hidden='true' />}
    </li>
  )
}

MobileMenuItem.propTypes = {
  menuItem: PropTypes.string.isRequired
}

export default MobileMenuItem

function openSportsMenu (actions, menuItem) {
  document.getElementById('mobileMenuSportsLayerWrapper').classList.remove('mobileMenuHide')
  document.getElementById('mobileMenuSportsLayerWrapper').classList.add('mobileMenuShow')
}
