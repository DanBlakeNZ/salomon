import React, {PropTypes} from 'react'
import carouselData from '../../../data/carouselData/carouselData'

const CarouselItem = ({carouselItemData}) => {
  return (
    <div className='carouselItemWrapper'>
      <img src={carouselItemData.imageUrl} className='carouselImage'/>
    </div>
  )
}

CarouselItem.propTypes = {
  carouselItemData: PropTypes.object.isRequired
}

export default CarouselItem
