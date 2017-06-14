import React from 'react'

import $ from 'jquery';
import 'owl.carousel'

class HomePage extends React.Component {
  render () {
    $(document).ready(function(){
      // Owl functionality goes here //
      $('.owl-carousel').owlCarousel({
          loop:true,
          margin:1,
          nav:true,
          responsive:{
              0:{
                  items:2
              },
              600:{
                  items:3
              },
              1000:{
                  items:5
              }
          }
      })
      //
    });

    return (
      <div id='homepage-wrapper'>
        <h1>I'm the HomePage component</h1>
          <div className="owl-carousel owl-theme">
            <div className="item"><h4>1</h4></div>
            <div className="item"><h4>2</h4></div>
            <div className="item"><h4>3</h4></div>
            <div className="item"><h4>4</h4></div>
            <div className="item"><h4>5</h4></div>
            <div className="item"><h4>6</h4></div>
            <div className="item"><h4>7</h4></div>
            <div className="item"><h4>8</h4></div>
            <div className="item"><h4>9</h4></div>
            <div className="item"><h4>10</h4></div>
            <div className="item"><h4>11</h4></div>
            <div className="item"><h4>12</h4></div>
        </div>
      </div>
    )
  }
}

export default HomePage
