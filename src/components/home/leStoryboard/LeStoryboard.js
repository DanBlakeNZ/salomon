import React from 'react'
import LeStoryboardItem from './LeStoryboardItem'

import leStoryboardData from '../../../data/leStoryboardData/leStoryboardData.js'

const LeStoryBoard = () => {
  return (
    <div id='storyboardWrapper'>
      <h2 className='homepageSectionHeader'>Le Storyboard</h2>
      <p className='homepageSectionSubtitle'>Stories from Within our Walls and Beyond</p>
      <div className='storyboardTilesContainer'>
        {leStoryboardData.map((leStoryboardItemData) => {
          return (
            <LeStoryboardItem leStoryboardItemData={leStoryboardItemData} key={leStoryboardItemData.id} />
          )
        })}
        <div className='storyboardItem viewAll'>
          <div className='storyboardContentWrapper'>
            <p className='viewAllText'>View All Content</p>
              <span className='desktopMenuArrowButton'>
                <i className="fa fa-long-arrow-right" aria-hidden="true" />
              </span>
          </div>
        </div>
      </div>
    </div>
  )
}


export default LeStoryBoard
