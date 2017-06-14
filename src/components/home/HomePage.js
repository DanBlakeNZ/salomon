import React from 'react'
import CarouselItem from './carousel/CarouselItem'
import carouselData from '../../data/carouselData/carouselData'

import $ from 'jquery';
import 'owl.carousel'

class HomePage extends React.Component {
  render () {
    $(document).ready(function(){
      let owl = $('.owl-carousel');

      owl.owlCarousel({
        items:1,
        loop:true,
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:true
      });
      $('.play').on('click',function(){
        owl.trigger('play.owl.autoplay',[1000])
      })
      $('.stop').on('click',function(){
        owl.trigger('stop.owl.autoplay')
      })
    })

    return (
      <div id='homepage-wrapper'>
          <div id='carousel-wrapper'>
            <div className="owl-carousel owl-theme">
              {carouselData.map((carouselItemData) => {
                return (
                  <CarouselItem carouselItemData={carouselItemData} key={carouselItemData.id} />
                )
              })}
          </div>
          </div>
      </div>
    )
  }
}

export default HomePage
