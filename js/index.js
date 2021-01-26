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

/*MODAL BUSCAR*/

const modalOverlay = document.querySelector('.modal-overlay');
    const buscar_all = document.querySelectorAll('.buscar');

    for (let buscar of buscar_all){
        buscar.addEventListener("click", function(){
  
          modalOverlay.classList.add("ativar")
          
        })
    }

    document.querySelector('.close-modal').addEventListener("click", function(){
      modalOverlay.classList.add("desativar")
     
    })

/*SLIDER GALERIA DE IMAGENS USADO NOS ROTEIROS, O QUE VC PROCURA, SEGMENTOS TURISTICOS, DESTINOS*/

var slider = new Glider(document.querySelector('.glider'), {
    slidesToShow:6,
    slidesToScroll: 6,
    draggable: true,
    arrows: {
        prev: '.glider-prev',
        next: '.glider-next'
    },

    responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 900,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 3,
            },
        },
    ],
});

slideAutoPaly(slider, '.glider');

function slideAutoPaly(glider, selector, delay = 2000, repeat = true) {
    let autoplay = null;
    const slidesCount = glider.track.childElementCount;
    let nextIndex = 1;
    let pause = true;

    function slide() {
        autoplay = setInterval(() => {
            if (nextIndex >= slidesCount) {
                if (!repeat) {
                    clearInterval(autoplay);
                } else {
                    nextIndex = 0;
                }
            }
            glider.scrollItem(nextIndex++);
        }, delay);
    }

    slide();

    var element = document.querySelector('.glinder');
    element.addEventListener('mouseover', (event) => {
        if (pause) {
            clearInterval(autoplay);
            pause = false;
        }
    }, 3000);

    element.addEventListener('mouseout', (event) => {
        if (!pause) {
            slide();
            pause = true;
        }
    }, 3000);
}


