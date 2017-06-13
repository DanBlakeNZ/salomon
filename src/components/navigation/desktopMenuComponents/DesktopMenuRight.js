import React, {PropTypes} from 'react'
import DesktopMenuCatagoryContainer from './DesktopMenuCatagoryContainer'
import DesktopMenuImage from './DesktopMenuImage'

import SLabFutureData from '../../../data/menuData/sLabFutureMenu'
import SLabMeData from '../../../data/menuData/sLabMeMenu'
import aboutData from '../../../data/menuData/aboutMenu'
import leStoryboardData from '../../../data/menuData/leStoryboardMenu'

import desktopMenuImages from '../../../data/menuData/desktopMenuImages'


const DesktopMenuRight = ({desktopMenuOpen}) => {

  let catagoryReference = 3

    switch (desktopMenuOpen) {
      case 'Brand':
        catagoryReference = 3
        break

      case 'S/Lab':
        catagoryReference = 4
        break

      default:
        catagoryReference = 3
    }

    let backgroundImages = [
      {backgroundImage: 'url(' +desktopMenuImages[catagoryReference].imageUrl1 + ')'}
    ]

    let imageText = [
      desktopMenuImages[catagoryReference].imageUrl1Text
    ]

  return (
    <div className='desktopMenuRight'>
      <div className='col-1'></div>
      <div className='col-3'></div>

      <div className='col-3'>
        {desktopMenuOpen === 'Brand' ? <DesktopMenuCatagoryContainer heading='About Salomon' menuData={SLabFutureData} /> : ''}
        {desktopMenuOpen === 'S/Lab' ? <DesktopMenuCatagoryContainer heading='S/Lab Future At Play' menuData={aboutData} /> : ''}
      </div>

      <div className='col-3'>
        {desktopMenuOpen === 'Brand' ? <DesktopMenuCatagoryContainer heading='Le Storyboard' menuData={leStoryboardData} />: ''}
        {desktopMenuOpen === 'S/Lab' ? <DesktopMenuCatagoryContainer heading='S/Lab ME:SH' menuData={SLabMeData} />: ''}
      </div>

      <div className='productColomn'>
        <DesktopMenuImage backgroundImage={backgroundImages[0]} imageText={imageText[0]} />
      </div>
    </div>
  )
}

DesktopMenuRight.propTypes = {
  desktopMenuOpen: PropTypes.string.isRequired
}

export default DesktopMenuRight
