import React, {PropTypes} from 'react'

const MobileMenuItem = (props) => {
  const menuItem = props.menuItem

  return (
    <li className='mobileMenuListItem' >
      <a className='grayedOutItem'>{menuItem}</a>
    </li>
  )
}

MobileMenuItem.propTypes = {
  menuItem: PropTypes.string.isRequired,
  actions: PropTypes.object
}

export default MobileMenuItem
