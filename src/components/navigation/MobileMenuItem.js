import React, {PropTypes} from 'react'

const MobileMenuItem = (props) => {
  const menuItem = props.menuItem
  const actions = props.actions

  return (
    <li className='mobileMenuListItem' onClick={() => openSecoundryLayer(actions, menuItem)} >

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

function openSecoundryLayer (actions, menuItem) {
  actions.loadSecoundryMobileMenuLayer(menuItem)
  document.getElementById('mobileMenuSecoundLayerWrapper').classList.remove('mobileMenuHide')
  document.getElementById('mobileMenuSecoundLayerWrapper').classList.add('mobileMenuShow')
}
