import React from 'react'
import CarouselItem from './CarouselItem'
import SingleThumbnail from './SingleThumbnail'
import carouselData from '../../../data/carouselData/carouselData'

const Carousel = () => {
  return (
    <div id='carousel-wrapper'>
      <div className="owl-carousel owl-theme">
        {carouselData.map((carouselItemData) => {
          return (
            <CarouselItem carouselItemData={carouselItemData} key={carouselItemData.id} />
          )
        })}
      </div>
      <div id='thumbnail-wrapper'>
        {carouselData.map((carouselItemData) => {
          return (
            <SingleThumbnail carouselItemData={carouselItemData} key={carouselItemData.id} />
          )
        })}
      </div>
    </div>
  )
}


export default Carousel
