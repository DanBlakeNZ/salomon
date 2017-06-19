import React from 'react'
import carouselFunctions from './carousel/functions/carouselFunctions'
import Carousel from './carousel/Carousel'
import NewStyles from './newStyles/NewStyles'
import LeStoryboard from './leStoryboard/LeStoryboard'
import Community from './community/Community.js'

class HomePage extends React.Component {
  render () {
    carouselFunctions() // Calls all related carouselFunctions
    return (
      <div id='homepage-wrapper'>
        <section id='carousel-section'>
          <Carousel />
        </section>
        <section id='newStyes-section' className='section-container dark-section'>
          <NewStyles />
        </section>
        <section id='leStoryboard-section' className='section-container dark-section'>
          <LeStoryboard />
        </section>
        <section id='community-section' className='section-container gray-section'>
          <Community />
        </section>
      </div>
    )
  }
}

export default HomePage
