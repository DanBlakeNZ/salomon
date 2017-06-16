import React, {PropTypes} from 'react'

const LeStoryBoardItem = ({leStoryboardItemData}) => {

  let styles = {
    backgroundImage: 'url(' + leStoryboardItemData.imageUrl + ')'
  }

  return (
    <div className='storyboardItem' style={styles}>
      <div className='storyboardContentWrapper'>
        <p className='storyboardCatagory'>{leStoryboardItemData.catagory}</p>
        <p className='storyboardDate'>
          {leStoryboardItemData.date}
        </p>
        <p className='storyboardTitle'>
          {leStoryboardItemData.articleTitle}
        </p>

      </div>
    </div>
  )
}

LeStoryBoardItem.propTypes = {
  leStoryboardItemData: PropTypes.object.isRequired
}


export default LeStoryBoardItem
