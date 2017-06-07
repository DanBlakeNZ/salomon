import React from 'react'

const MobileMenuSport = () => {
  return (
    <div id='mobileMenuSportsLayerWrapper' className='mobileMenuHide'>
      <div className='mobileNav'>
        <ul>
          <li className='mobileMenuListItem' >
            <a onClick={() => closeSportMenu()}>GO BACK</a>
            <i className='fa fa-angle-left' aria-hidden='true' />}
          </li>
        </ul>
      </div>
    </div>
  )
}

export default MobileMenuSport

function closeSportMenu () {
  document.getElementById('mobileMenuSportsLayerWrapper').classList.add('mobileMenuHide')
  document.getElementById('mobileMenuSportsLayerWrapper').classList.remove('mobileMenuShow')
}
