import React, {PropTypes} from 'react'
import MobileMenuItem from './MobileMenuItem.js'
import firstMenuData from '../../data/menuData/firstMenu'

const MobileMenu = ({props}) => {
  return (
    <div id='mobileMenuWrapper' className='mobileMenuHide'>
      <div className='mobileNav'>
        <ul>
          {firstMenuData.map((menuItem) => {
            return (
              <MobileMenuItem menuItem={menuItem} key={menuItem} actions={props.mobileMenuActions} />
            )
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
