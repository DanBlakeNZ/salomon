import React, {PropTypes} from 'react'
import SingleThumbnail from './SingleThumbnail'
import carouselData from '../../../data/carouselData/carouselData'

const CarouselThumbnails  = () => {
  return (
    <div className='thumbnail-wrapper'>
      {carouselData.map((carouselItemData) => {
        return (
          <SingleThumbnail carouselItemData={carouselItemData} key={carouselItemData.id} />
        )
      })}
    </div>
  )
}

export default CarouselThumbnails
