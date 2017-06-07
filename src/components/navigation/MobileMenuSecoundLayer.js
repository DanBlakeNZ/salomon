import React, {PropTypes} from 'react'
import MobileMenuItem from './MobileMenuItem'
import menWomenMenuData from '../../data/menuData/menWomenMenu'
import kidsData from '../../data/menuData/kidsMenu'
import brandData from '../../data/menuData/brandMenu'
import sLabData from '../../data/menuData/sLabMenu'

const MobileMenuSecoundLayer = ({props}) => {
  let menuData = ''
  updateMenuData(props.secoundryMobileMenuLayer)

  function updateMenuData (clickedMenu) {
    if (clickedMenu === 'Men' || 'Women') {
      menuData = menWomenMenuData
    }
    if (clickedMenu === 'Kids') {
      menuData = kidsData
    }
    if (clickedMenu === 'Brand') {
      menuData = brandData
    }
    if (clickedMenu === 'S/Lab') {
      menuData = sLabData
    }
  }

  return (
    <div id='mobileMenuSecoundLayerWrapper' className='mobileMenuHide'>
      <div className='mobileNav'>
        <ul>
          <li className='mobileMenuListItem' >
            <a onClick={() => closeSecoundryLayer()}>GO BACK</a>
            <i className='fa fa-angle-left' aria-hidden='true' />}
          </li>
          {menuData.map((menuItem) => {
            return (
              <MobileMenuItem menuItem={menuItem} key={menuItem} actions={props.mobileMenuActions} />
            )
          })}
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

function closeSecoundryLayer () {
  document.getElementById('mobileMenuSecoundLayerWrapper').classList.add('mobileMenuHide')
  document.getElementById('mobileMenuSecoundLayerWrapper').classList.remove('mobileMenuShow')
}
