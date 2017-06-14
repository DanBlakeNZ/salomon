import React from 'react'
import MenuSportsLayerItem from '../MenuSportsLayerItem.js'
import {closeLayer} from '../navigationFunctions/mobileMenuFunctions'
import sportsData from '../../../data/menuData/sportsMenu'

const MobileMenuSport = () => {
  function closeSportLayer () {
    closeLayer('mobileMenuSportsLayerWrapper')
  }
  return (
    <div id='mobileMenuSportsLayerWrapper' className='mobileMenuHide'>
      <div className='mobileNav'>
        <ul>
          <li className='mobileMenuListItem' >
            <a className='mobileMenuBackButton' onClick={closeSportLayer}>GO BACK</a>
            <i className='fa fa-angle-left' aria-hidden='true' />}
          </li>
          {sportsData.map((menuItem) => {
            return (
              <MenuSportsLayerItem menuItem={menuItem} key={menuItem.id} />
            )
          })
        }
        </ul>
      </div>
    </div>
  )
}

export default MobileMenuSport
