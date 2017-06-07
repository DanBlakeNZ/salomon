import React, {PropTypes} from 'react'

const MobileMenuItem = (props) => {
  const menuItem = props.menuItem
  const actions = props.actions

  return (
    <li className='mobileMenuListItem' onClick={() => openThirdLayer(actions, menuItem)} >
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

function openThirdLayer (actions, menuItem) {
  actions.loadThirdMobileMenuLayer(menuItem)
  document.getElementById('mobileMenuThirdLayerWrapper').classList.remove('mobileMenuHide')
  document.getElementById('mobileMenuThirdLayerWrapper').classList.add('mobileMenuShow')
}
