import React, {PropTypes} from 'react'
import carouselData from '../../../data/carouselData/carouselData'

const CarouselItem = ({carouselItemData}) => {
  return (
    <div className='carouselItemWrapper'>
      <img src={carouselItemData.imageUrl} className='carouselImage'/>
      <div className='carouselTextWrapper'>
        <p className='carouselCatagory'>{carouselItemData.catagory}</p>
        <h2 className='carouselHeading'>{carouselItemData.headline}</h2>
        <span className='carouselCtaText'>{carouselItemData.ctaText1}</span><i className="fa fa-long-arrow-right" aria-hidden="true" />
        {carouselItemData.ctaText2 === null ? '' :
          <span>
            <span className='carouselCtaText'>{carouselItemData.ctaText2}</span><i className="fa fa-long-arrow-right" aria-hidden="true" />
          </span>}
      </div>
    </div>
  )
}

CarouselItem.propTypes = {
  carouselItemData: PropTypes.object.isRequired
}

export default CarouselItem
