let carusel = $("#carusel")
let play_h3 = $("#play_h3")
carusel.slick({
    autoplay:true,
    slidesToShow: 1,
    slidesToScroll:1,
    dots: true
})
const myText = new AutoTyping({
    id: 'play_h3',                   //Your HTML element id (string) - REQUIRED
    typeText: ['frontend','BeckEnd','flutter'] //Your text (array with strings)
  }).init();
  AOS.init();