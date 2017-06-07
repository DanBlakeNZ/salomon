import React, {PropTypes} from 'react'
import MobileMenuThirdLayerItem from './MobileMenuThridLayerItem'

import filterBySportsData from '../../data/menuData/filterBySportsMenu'
import collectionData from '../../data/menuData/collectionsMenu'
import shoesData from '../../data/menuData/shoesMenu'
import clothingData from '../../data/menuData/clothingMenu'
import bagsData from '../../data/menuData/bagsMenu'
import protectiveData from '../../data/menuData/protectiveMenu'
import accessoriesData from '../../data/menuData/accessoriesMenu'
import alpineData from '../../data/menuData/alpineMenu'
import snowboardData from '../../data/menuData/snowboardMenu'
import aboutData from '../../data/menuData/aboutMenu'
import leStoryboardData from '../../data/menuData/leStoryboardMenu'
import sLabFutureData from '../../data/menuData/sLabFutureMenu'
import sLabMeData from '../../data/menuData/sLabMeMenu'

const MobileMenuThirdLayer = ({props}) => {
  let menuData = filterBySportsData // default so will render.
  updateMenuData(props.thirdMobileMenuLayer)

  function updateMenuData (clickedMenu) {
    if (clickedMenu === 'Filter By Sports') {
      menuData = filterBySportsData
    }
    if (clickedMenu === 'Collections') {
      menuData = collectionData
    }
    if (clickedMenu === 'Shoes') {
      menuData = shoesData
    }
    if (clickedMenu === 'Clothing') {
      menuData = clothingData
    }
    if (clickedMenu === 'Bags & Packs') {
      menuData = bagsData
    }
    if (clickedMenu === 'Protective & Googles') {
      menuData = protectiveData
    }
    if (clickedMenu === 'Accessories for') {
      menuData = accessoriesData
    }
    if (clickedMenu === 'Alpine Equipment') {
      menuData = alpineData
    }
    if (clickedMenu === 'Nordic Equipment') {
      menuData = alpineData
    }
    if (clickedMenu === 'Snowboard Equipment') {
      menuData = snowboardData
    }
    if (clickedMenu === 'About Salomon') {
      menuData = aboutData
    }
    if (clickedMenu === 'Le Storyboard') {
      menuData = leStoryboardData
    }
    if (clickedMenu === 'S/Lab Future At Play') {
      menuData = sLabFutureData
    }
    if (clickedMenu === 'S/Lab ME:SH') {
      menuData = sLabMeData
    }
  }
  return (
    <div id='mobileMenuThirdLayerWrapper' className='mobileMenuHide'>
      <div className='mobileNav'>
        <ul>
          <li className='mobileMenuListItem' >
            <a onClick={() => closeThirdLayer()}>GO BACK</a>
            <i className='fa fa-angle-left' aria-hidden='true' />}
          </li>
          {menuData.map((menuItem) => {
            return (
              <MobileMenuThirdLayerItem menuItem={menuItem} key={menuItem} />
            )
          })}
        </ul>
      </div>
    </div>
  )
}

MobileMenuThirdLayer.propTypes = {
  props: PropTypes.object.isRequired,
  mobileMenuActions: PropTypes.object,
  thirdMobileMenuLayer: PropTypes.string
}

export default MobileMenuThirdLayer

function closeThirdLayer () {
  document.getElementById('mobileMenuThirdLayerWrapper').classList.add('mobileMenuHide')
  document.getElementById('mobileMenuThirdLayerWrapper').classList.remove('mobileMenuShow')
}
