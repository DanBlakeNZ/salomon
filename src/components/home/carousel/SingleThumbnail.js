import React, {PropTypes} from 'react'

const SingleThumbnail  = ({carouselItemData}) => {

  let carouselId = ('carouselThumbnail' + carouselItemData.id)
  return (
      <img id={carouselId} src={carouselItemData.imageUrl} className='thumbnailImage' />
  )
}

SingleThumbnail.propTypes = {
  carouselItemData: PropTypes.object.isRequired
}

export default SingleThumbnail
