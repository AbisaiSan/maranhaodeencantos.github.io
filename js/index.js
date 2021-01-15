const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  //Fazendo aparecer os itens
  const navLinks = document.querySelectorAll('.nav-links li');

  //Fazendo o clique do menu funcionar
  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');

    //Animações links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `navlinkFade 0.5s ease forwards ${index/7+1.5}s`

      }
    });
    //Transformando em X
    burger.classList.toggle('toggle');


  });


}

navSlide();

/*SLIDER GALERIA DE IMAGENS USADO NOS ROTEIROS, O QUE VC PROCURA, SEGMENTOS TURISTICOS, DESTINOS*/

var $simpleCarousel = document.querySelector("#options-autoplay-input");

new Glider($simpleCarousel, {
  slidesToShow: 2,
  slidesToScroll: 2,
  draggable: true,
  dots: ".js-carousel--simple-dots",
  arrows: {
    prev: ".js-carousel--simple-prev",
    next: ".js-carousel--simple-next",
  },
});


new Glide('.glide', {
  autoplay: 4000
})

var input = document.querySelector('')

var glide = new Glide('#options-autoplay', {
  autoplay: input.value,
  hoverpause: false,
  perView: 3
})

input.addEventListener('input', function (event) {
  glide.update({
    autoplay: (event.target.value != 0) ? event.target.value : false
  })
})

glide.mount()