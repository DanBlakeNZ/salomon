import React, {PropTypes} from 'react'

const MadeForYouItem = ({itemData}) => {
  return (
    <div className='madeForYouItemContainer'>
      <img src={itemData.imageUrl} />
      <div className='madeForYouItemTextWrapper'>
        <p>{itemData.text}</p>
          <span className='desktopMenuArrowButton'>
            <i className="fa fa-long-arrow-right" aria-hidden="true" />
          </span>
      </div>
    </div>
  )
}

MadeForYouItem.propTypes = {
  itemData: PropTypes.object.isRequired
}

export default MadeForYouItem
