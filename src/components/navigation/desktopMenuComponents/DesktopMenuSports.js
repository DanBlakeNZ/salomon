import React, {PropTypes} from 'react'
import sportsData from '../../../data/menuData/sportsMenu'
import MenuSportsLayerItem from '../MenuSportsLayerItem.js'


const desktopMenuSports = () => {

  return (
    <div id='desktopMenuSports'>
      <h2>Latest News</h2>
        <ul className='desktopSportsImagesWrapper'>
          {sportsData.map((menuItem) => {
            return (
              <MenuSportsLayerItem menuItem={menuItem} key={menuItem.id} />
            )
          })}
        </ul>
    </div>
  )
}

desktopMenuSports.propTypes = {

}

export default desktopMenuSports
