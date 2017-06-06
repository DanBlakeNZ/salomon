import React from 'react'
import MobileMenuItem from './MobileMenuItem.js'
import firstMenuData from '../../data/menuData/firstMenu'

const MobileMenu = () => {
  return (
    <div id='mobileMenuWrapper' className='mobileMenuHide'>
      <div className='mobileNav'>
        <ul>
          {firstMenuData.map((menuItem) => {
            return (
              <MobileMenuItem menuItem={menuItem} key={menuItem} />
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default MobileMenu
