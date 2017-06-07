import React, {PropTypes} from 'react'
import {closeLayer} from './navigationFunctions/mobileMenuFunctions'

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
  let menuData = ''

  updateMenuData(props.thirdMobileMenuLayer)

  function updateMenuData (clickedMenu) {
    switch (clickedMenu) {
      case 'Filter By Sports':
        menuData = filterBySportsData
        break

      case 'Collections':
        menuData = collectionData
        break

      case 'Shoes':
        menuData = shoesData
        break

      case 'Clothing':
        menuData = clothingData
        break

      case 'Bags & Packs':
        menuData = bagsData
        break

      case 'Protective & Googles':
        menuData = protectiveData
        break

      case 'Accessories for':
        menuData = accessoriesData
        break

      case 'Alpine Equipment':
        menuData = alpineData
        break

      case 'Nordic Equipment':
        menuData = alpineData
        break

      case 'Snowboard Equipment':
        menuData = snowboardData
        break

      case 'About Salomon':
        menuData = aboutData
        break

      case 'Le Storyboard':
        menuData = leStoryboardData
        break

      case 'S/Lab Future At Play':
        menuData = sLabFutureData
        break

      case 'S/Lab ME:SH':
        menuData = sLabMeData
        break

      default:
        menuData = ''
    }
  }

  function closeThridLayer () {
    closeLayer('mobileMenuThirdLayerWrapper')
  }
  return (
    <div id='mobileMenuThirdLayerWrapper' className='mobileMenuHide'>
      <div className='mobileNav'>
        <ul>
          <li className='mobileMenuListItem' >
            <a className='mobileMenuBackButton' onClick={closeThridLayer}>GO BACK</a>
            <i className='fa fa-angle-left' aria-hidden='true' />}
          </li>
          {
            menuData === '' ? '' : menuData.map((menuItem) => {
              return (
                <MobileMenuThirdLayerItem menuItem={menuItem} key={menuItem} />
              )
            })
          }
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
