import $ from 'jquery';
import 'owl.carousel'

function carouselFunctions() {
  $(document).ready(function(){

    const owl = $('.owl-carousel')

    owl.owlCarousel({
      items:1,
      loop:true,
      autoplay:true,
      autoplayTimeout:5000,
      autoplayHoverPause:true,
      onChanged: updateThumbnail
    })
    $('.play').on('click',function(){
      owl.trigger('play.owl.autoplay',[1000])
    })
    $('.stop').on('click',function(){
      owl.trigger('stop.owl.autoplay')
    })
    $('#carouselThumbnail1').on('click',function(){
      owl.trigger('to.owl.carousel',[0, 200])
    })
    $('#carouselThumbnail2').on('click',function(){
      owl.trigger('to.owl.carousel',[1, 200])
    })
    $('#carouselThumbnail3').on('click',function(){
      owl.trigger('to.owl.carousel',[2, 200])
    })
  })
}

export default carouselFunctions

function updateThumbnail(event) {
  activeThumbnail (event.item.index)
}

// Note that the owl carousel event above returns the following item index:
// event.item.index.2 = carouselThumbnail1
// event.item.index.3 = carouselThumbnail2
// event.item.index.4 = carouselThumbnail3

function activeThumbnail (nextThumbnail){
  let activeThumbnail = 0

  switch (nextThumbnail) {
    case 2:
      activeThumbnail = 1
    break

    case 3:
      activeThumbnail = 2
    break

    case 4:
      activeThumbnail = 3
    break

    default:
      activeThumbnail = 1
  }

  document.getElementById('carouselThumbnail1').classList.remove('active')
  document.getElementById('carouselThumbnail2').classList.remove('active')
  document.getElementById('carouselThumbnail3').classList.remove('active')
  document.getElementById('carouselThumbnail'+activeThumbnail).classList.add('active')
}
