import React from 'react'
import NewStylesItem from './NewStylesItem'

import newStylesData from '../../../data/newStylesData/newStylesData'

const NewStyles = () => {
  return (
    <div id='newStylesWrapper'>
      <h2 className='homepageSectionHeader'>New Styles</h2>
        {newStylesData.map((itemData) => {
          return (
            <NewStylesItem itemData={itemData} key={itemData.id} />
          )
        })}
    </div>
  )
}


export default NewStyles
