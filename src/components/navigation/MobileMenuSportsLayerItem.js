import React, {PropTypes} from 'react'

const MobileMenuItem = ({menuItem}) => {
  let textColor = {
    color: menuItem.menuTextColor
  }
  return (
    <li className='sportItem'>
      <img className='sportItemImage' src={menuItem.imageUrl} />
      <span style={textColor} className='sportsItemText'>{menuItem.catagory}</span>
    </li>
  )
}

MobileMenuItem.propTypes = {
  menuItem: PropTypes.object
}

export default MobileMenuItem
