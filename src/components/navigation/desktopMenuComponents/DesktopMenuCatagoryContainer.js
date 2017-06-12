import React, {PropTypes} from 'react'
import DesktopMenuItem from './DesktopMenuItem'

const DesktopMenuCatagoryContainer = ({heading, menuData}) => {
  return (
    <div>
      <h3>{heading}</h3>
        <ul>
          {menuData.map((menuItem) => {
              return (
                <DesktopMenuItem menuItem={menuItem} key={menuItem} />
              )
          })}
        </ul>
    </div>
  )
}

DesktopMenuCatagoryContainer.propTypes = {
  heading: PropTypes.string.isRequired,
  menuData: PropTypes.array.isRequired
}

export default DesktopMenuCatagoryContainer
