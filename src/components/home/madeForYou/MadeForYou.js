import React from 'react'
import MadeForYouItem from './MadeForYouItem'
import madeForYouData from '../../../data/madeForYouData/madeForYouData'

const MadeForYou = () => {
  return (
    <div id='madeForYouWrapper'>
      <h2 className='homepageSectionHeader'>Made For You</h2>
      <p className='homepageSectionSubtitle'>Video clips, mountaineering education, apps and more.</p>
      <div className='madeForYouImagesContainer'>
        {madeForYouData.map((itemData) => {
          return (
            <MadeForYouItem itemData={itemData} key={itemData.id} />
          )
        })}
      </div>
    </div>
  )
}


export default MadeForYou
