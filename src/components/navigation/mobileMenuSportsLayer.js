import React from 'react'
import {closeLayer} from './navigationFunctions/mobileMenuFunctions'

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
        </ul>
      </div>
    </div>
  )
}

export default MobileMenuSport
