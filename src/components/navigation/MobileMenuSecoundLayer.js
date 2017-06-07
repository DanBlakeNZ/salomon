import React, {PropTypes} from 'react'
import {closeLayer} from './navigationFunctions/mobileMenuFunctions'

import MobileMenuSecoundLayerItem from './MobileMenuSecoundLayerItem'

import menWomenMenuData from '../../data/menuData/menWomenMenu'
import kidsData from '../../data/menuData/kidsMenu'
import brandData from '../../data/menuData/brandMenu'
import sLabData from '../../data/menuData/sLabMenu'

const MobileMenuSecoundLayer = ({props}) => {
  let menuData = ''

  updateMenuData(props.secoundryMobileMenuLayer)

  function updateMenuData (clickedMenu) {
    switch (clickedMenu) {
      case 'Men':
        menuData = menWomenMenuData
        break

      case 'Women':
        menuData = menWomenMenuData
        break

      case 'Kids':
        menuData = kidsData
        break

      case 'Brand':
        menuData = brandData
        break

      case 'S/Lab':
        menuData = sLabData
        break

      default:
        menuData = ''
    }
  }

  function closeSecoundLayer () {
    closeLayer('mobileMenuSecoundLayerWrapper')
  }

  return (
    <div id='mobileMenuSecoundLayerWrapper' className='mobileMenuHide'>
      <div className='mobileNav'>
        <ul>
          <li className='mobileMenuListItem'>
            <a className='mobileMenuBackButton' onClick={closeSecoundLayer}>GO BACK</a>
            <i className='fa fa-angle-left' aria-hidden='true' />}
          </li>
          {
            menuData === '' ? '' : menuData.map((menuItem) => {
              return (
                <MobileMenuSecoundLayerItem menuItem={menuItem} key={menuItem} actions={props.mobileMenuActions} />
              )
            })
          }
        </ul>
      </div>
    </div>
  )
}

MobileMenuSecoundLayer.propTypes = {
  props: PropTypes.object.isRequired,
  mobileMenuActions: PropTypes.object,
  secoundryMobileMenuLayer: PropTypes.string
}

export default MobileMenuSecoundLayer
