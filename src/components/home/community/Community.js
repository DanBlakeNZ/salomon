import React from 'react'
import communityData from '../../../data/communityData/communityData'
import CommunityBlockItem from './CommunityBlockItem'

const Community = () => {
  return (
    <div id='communityWrapper'>
      <h2 className='homepageSectionHeader'>Salomon Community</h2>
      <p className='homepageSectionSubtitle communitySubtitle'>Photos and posts from members of the Salomon community</p>
        <div className='communityBoardContainer'>
          <ul>
            <li className='communityBoardItem socialItem'>
              <p>Join The</p>
              <h3>Salomon Community</h3>
              <p>#Time To Play</p>
              <i className="fa fa-facebook socialIcon" aria-hidden="true" />
              <i className="fa fa-instagram socialIcon" aria-hidden="true" />
              <i className="fa fa-twitter socialIcon" aria-hidden="true" />
              <p className='seeMore'>See More<i className="fa fa-long-arrow-right" aria-hidden="true" /></p>
            </li>
            {communityData.map((communityItemData) => {
              return (
                <CommunityBlockItem communityItemData={communityItemData} key={communityItemData.id} />
              )
            })}
          </ul>
        </div>
    </div>
  )
}


export default Community
