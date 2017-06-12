import React, {PropTypes} from 'react'

const DesktopMenuItem = ({menuItem}) => {

  return (
    <li className='desktopMenuItem'>
      <p>{menuItem}</p>
    </li>
  )
}

DesktopMenuItem.propTypes = {
  menuItem: PropTypes.string.isRequired
}

export default DesktopMenuItem
