import React, {PropTypes} from 'react'

const CommunityBlockItem = ({communityItemData}) => {

  let styles = {
    backgroundImage: 'url(' + communityItemData.blockImage + ')'
  }

  let blockId = 'block'+communityItemData.id
  return (
    <li id={blockId} className='communityBoardItem' style={styles}></li>
  )
}

CommunityBlockItem.propTypes = {
  communityItemData: PropTypes.object.isRequired
}

export default CommunityBlockItem
