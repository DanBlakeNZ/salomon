import React, {PropTypes} from 'react'

const MobileMenuItem = ({menuItem}) => {
  return (
    <li className='mobileMenuListItem'>
      {menuItem === 'S/Lab' ? <a id='sLab'>{menuItem}</a> : <a>{menuItem}</a>}
      {menuItem === 'S/Lab' ? <i className='fa fa-angle-right' id='sLabArrow' aria-hidden='true' /> : ''}
      {menuItem === ('Salomon TV') ? '' : <i className='fa fa-angle-right' aria-hidden='true' />}
    </li>
  )
}

MobileMenuItem.propTypes = {
  menuItem: PropTypes.string.isRequired
}

export default MobileMenuItem
