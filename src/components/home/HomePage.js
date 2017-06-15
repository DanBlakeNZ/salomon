import React from 'react'
import Carousel from './carousel/Carousel'
import carouselFunctions from './carousel/functions/carouselFunctions'

class HomePage extends React.Component {
  render () {
    carouselFunctions() // Calls all related carouselFunctions
    return (
      <div id='homepage-wrapper'>
        <section id='carousel-section'>
          <Carousel />
        </section>

      </div>
    )
  }
}

export default HomePage
