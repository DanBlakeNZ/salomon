import React, {PropTypes} from 'react'
import DesktopMenuCatagoryContainer from './DesktopMenuCatagoryContainer'
import DesktopMenuItem from './DesktopMenuItem'
import DesktopMenuImage from './DesktopMenuImage'

import filterBySportData from '../../../data/menuData/filterBySportsMenu'
import collectionsData from '../../../data/menuData/collectionsMenu'
import shoesData from '../../../data/menuData/shoesMenu'
import clothingData from '../../../data/menuData/clothingMenu'
import bagsData from '../../../data/menuData/bagsMenu'
import protectiveData from '../../../data/menuData/protectiveMenu'
import accessoriesData from '../../../data/menuData/accessoriesMenu'
import alpineData from '../../../data/menuData/alpineMenu'
import snowboardData from '../../../data/menuData/snowboardMenu'

import desktopMenuImages from '../../../data/menuData/desktopMenuImages'

const desktopMenuLeft = ({desktopMenuOpen}) => {

let catagoryReference = 0

  switch (desktopMenuOpen) {
    case 'Men':
      catagoryReference = 0
      break

    case 'Women':
      catagoryReference = 1
      break

    case 'Kids':
      catagoryReference = 2
      break

    default:
      catagoryReference = 0
  }

  let backgroundImages = [
    {backgroundImage: 'url(' +desktopMenuImages[catagoryReference].imageUrl1 + ')'},
    {backgroundImage: 'url(' +desktopMenuImages[catagoryReference].imageUrl2 + ')'}
  ]

  let imageText = [
    desktopMenuImages[catagoryReference].imageUrl1Text,
    desktopMenuImages[catagoryReference].imageUrl2Text
  ]


  return (
    <div className='desktopMenuLeft'>
      <div className='col-1'>
        <DesktopMenuCatagoryContainer heading='Filter By Sports' menuData={filterBySportData} />
        <DesktopMenuCatagoryContainer heading='Collections' menuData={collectionsData} />
      </div>

      <div className='col-3'>
        <DesktopMenuCatagoryContainer heading='Shoes' menuData={shoesData} />
        <DesktopMenuCatagoryContainer heading='Clothing' menuData={clothingData} />
      </div>

      <div className='col-3'>
        <DesktopMenuCatagoryContainer heading='Bags & Packs' menuData={bagsData} />
        <DesktopMenuCatagoryContainer heading='Protective & Googles' menuData={protectiveData} />
        <DesktopMenuCatagoryContainer heading='Accessories' menuData={accessoriesData} />
      </div>

      <div className='col-3'>
        <DesktopMenuCatagoryContainer heading='Alpine Equipment' menuData={alpineData} />
        <DesktopMenuCatagoryContainer heading='Nordic Equipment' menuData={alpineData} />
        <DesktopMenuCatagoryContainer heading='Snowboard Equipment' menuData={snowboardData} />
      </div>

      <div className='productColomn'>
        <DesktopMenuImage backgroundImage={backgroundImages[0]} imageText={imageText[0]} />
        <DesktopMenuImage backgroundImage={backgroundImages[1]} imageText={imageText[1]} />
      </div>
    </div>
  )
}

desktopMenuLeft.propTypes = {
  desktopMenuOpen: PropTypes.string.isRequired
}

export default desktopMenuLeft
