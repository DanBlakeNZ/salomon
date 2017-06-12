import React, {PropTypes} from 'react'
import DesktopMenuItem from './DesktopMenuItem'

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

const DesktopMenuMenWomen = () => {

  let backgroundImages = [
    {backgroundImage: 'url(' +desktopMenuImages[1].imageUrl1 + ')'},
    {backgroundImage: 'url(' +desktopMenuImages[1].imageUrl2 + ')'}
  ]

  let imageText = [
    desktopMenuImages[1].imageUrl1Text,
    desktopMenuImages[1].imageUrl2Text
  ]


  return (
    <div className='desktopMenuLeft'>
      <div className='col-1'>
        <h3>Filter By Sports</h3>
        <ul>
          {filterBySportData.map((menuItem) => {
              return (
                <DesktopMenuItem menuItem={menuItem} key={menuItem} />
              )
          })}
        </ul>
        <h3>Collections</h3>
        <ul>
          {collectionsData.map((menuItem) => {
              return (
                <DesktopMenuItem menuItem={menuItem} key={menuItem} />
              )
          })}
        </ul>
      </div>

      <div className='col-3'>
        <h3>Shoes</h3>
        <ul>
          {shoesData.map((menuItem) => {
              return (
                <DesktopMenuItem menuItem={menuItem} key={menuItem} />
              )
          })}
        </ul>
        <h3>Clothing</h3>
        <ul>
          {clothingData.map((menuItem) => {
              return (
                <DesktopMenuItem menuItem={menuItem} key={menuItem} />
              )
          })}
        </ul>
      </div>

      <div className='col-3'>
        <h3>Bags & Packs</h3>
        <ul>
          {bagsData.map((menuItem) => {
              return (
                <DesktopMenuItem menuItem={menuItem} key={menuItem} />
              )
          })}
        </ul>
        <h3>Protective & Googles</h3>
        <ul>
          {protectiveData.map((menuItem) => {
              return (
                <DesktopMenuItem menuItem={menuItem} key={menuItem} />
              )
          })}
        </ul>
        <h3>Accessories</h3>
        <ul>
          {accessoriesData.map((menuItem) => {
              return (
                <DesktopMenuItem menuItem={menuItem} key={menuItem} />
              )
          })}
        </ul>
      </div>

      <div className='col-3'>
        <h3>Alpine Equipment</h3>
        <ul>
          {alpineData.map((menuItem) => {
              return (
                <DesktopMenuItem menuItem={menuItem} key={menuItem} />
              )
          })}
        </ul>
        <h3>Nordic Equipment</h3>
        <ul>
          {alpineData.map((menuItem) => {
              return (
                <DesktopMenuItem menuItem={menuItem} key={menuItem} />
              )
          })}
        </ul>
        <h3>Snowboard Equipment</h3>
        <ul>
          {snowboardData.map((menuItem) => {
              return (
                <DesktopMenuItem menuItem={menuItem} key={menuItem} />
              )
          })}
        </ul>
      </div>

      <div className='productColomn'>
        <div>
          <div className='desktopMenuImage'style={backgroundImages[0]}>
            <div className='desktopMenuImageText'>
              <p>{imageText[0]}</p>
              <span className='desktopMenuArrowButton'>
                <i className="fa fa-long-arrow-right" aria-hidden="true" />
              </span>
            </div>
          </div>
          <div className='desktopMenuImage' style={backgroundImages[1]}>
            <div className='desktopMenuImageText'>
              <p>{imageText[1]}</p>
              <span className='desktopMenuArrowButton'>
                <i className="fa fa-long-arrow-right" aria-hidden="true" />
              </span>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

DesktopMenuMenWomen.propTypes = {

}

export default DesktopMenuMenWomen
