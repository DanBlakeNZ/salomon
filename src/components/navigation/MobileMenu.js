import React, {PropTypes} from 'react'
import MobileMenuItem from './MobileMenuItem.js'
import MobileMenuSportsItem from './MobileMenuSportsItem'
import firstMenuData from '../../data/menuData/firstMenu'

const MobileMenu = ({props}) => {
  return (
    <div id='mobileMenuWrapper' className='mobileMenuHide MobileMenuWrapper'>
      <div className='mobileNav'>
        <ul>
          {firstMenuData.map((menuItem) => {
            if (menuItem === 'Sports') {
              return (
                <MobileMenuSportsItem menuItem={menuItem} key={menuItem} actions={props.mobileMenuActions} />
              )
            } else {
              return (
                <MobileMenuItem menuItem={menuItem} key={menuItem} actions={props.mobileMenuActions} />
              )
            }
          })}
        </ul>
      </div>
    </div>
  )
}

MobileMenu.propTypes = {
  props: PropTypes.object.isRequired,
  mobileMenuActions: PropTypes.object
}

export default MobileMenu
