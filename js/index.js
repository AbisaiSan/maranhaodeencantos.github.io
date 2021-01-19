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

new Glider(document.querySelector('.glider'), {
  slidesToShow: 5,
  slidesToScroll: 5,
  draggable: true,
  arrows: {
    prev: '.glider-prev',
    next: '.glider-next'
  },
  dots: '.dots',
  time: 5000,
  responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
  ],
});