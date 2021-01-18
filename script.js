//bar d'accueil

          // Menu-toggle button

          $(document).ready(function() {
                $(".menu-icon").on("click", function() {
                      $("nav ul").toggleClass("showing");
                });
          });

          // Scrolling Effect

          $(window).on("scroll", function() {
                if($(window).scrollTop()) {
                      $('nav').addClass('black');
                }

                else {
                      $('nav').removeClass('black');
                }
          })


//animation expérience

onst allRonds = document.querySelectorAll('.rond');
const allBoxes = document.querySelectorAll('.box');

const controller = new ScrollMagic.Controller()

allBoxes.forEach(box => {

    for(i = 0; i < allRonds.length; i++){

        if(allRonds[i].getAttribute('data-anim') === box.getAttribute('data-anim')){

            let tween = gsap.from(box, {y: -50, opacity: 0, duration: 0.5})

            let scene = new ScrollMagic.Scene({
                triggerElement: allRonds[i],
                reverse: true
            })
            .setTween(tween)
            // .addIndicators()
            .addTo(controller)

        }

    }

})