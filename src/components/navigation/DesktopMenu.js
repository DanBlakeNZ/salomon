import React, {PropTypes} from 'react'
import DesktopMenuLeft from './desktopMenuComponents/DesktopMenuLeft'
import * as desktopMenuFunctions from './navigationFunctions/desktopMenuFunctions'

const DesktopMenu = ({desktopMenuOpen}) => {
  function showDesktopMenu (event){
    desktopMenuFunctions.desktopMenuVisable()
  }

  function hideDesktopMenu (){
    desktopMenuFunctions.desktopMenuHidden()
  }
  return (
    <div id='desktopMenu' className='desktop desktopMenuHide' onMouseOver={showDesktopMenu} onMouseOut={hideDesktopMenu}>
      {desktopMenuOpen === 'Men' ? <DesktopMenuLeft desktopMenuOpen={desktopMenuOpen} /> : ''}
      {desktopMenuOpen === 'Women' ? <DesktopMenuLeft desktopMenuOpen={desktopMenuOpen} /> : ''}
      {desktopMenuOpen === 'Kids' ? <DesktopMenuLeft desktopMenuOpen={desktopMenuOpen} /> : ''}
    </div>
  )
}

DesktopMenu.propTypes = {
  desktopMenuOpen: PropTypes.string.isRequired
}

export default DesktopMenu
