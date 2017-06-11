import React, {PropTypes} from 'react'
import DesktopMenuLeft from './desktopMenuComponents/DesktopMenuLeft'
import * as desktopMenuFunctions from './navigationFunctions/desktopMenuFunctions'

const DesktopMenu = () => {
  function showDesktopMenu (event){
    desktopMenuFunctions.desktopMenuVisable()
  }

  function hideDesktopMenu (){
    desktopMenuFunctions.desktopMenuHidden()
  }
  return (
    <div id='desktopMenu' className='desktop desktopMenuHide' onMouseOver={showDesktopMenu} onMouseOut={hideDesktopMenu}>
      <DesktopMenuLeft />
    </div>
  )
}

DesktopMenu.propTypes = {

}

export default DesktopMenu
