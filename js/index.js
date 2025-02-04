$(document).ready(function(){
    $('#banner').owlCarousel({
        loop:true,
        margin:10,
        autoplay:true,
        animateIn:'animate__slideInUp',
        animateOut:'animate__slideOutUp',
        dots:false,
        autoplayTimeout:3000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })

    $(window).scroll(function(){
        var sticky = $('.sticky'),
            scroll = $(window).scrollTop();
      
        if (scroll >= 100) sticky.addClass('fixed');
        else sticky.removeClass('fixed');
      });
    // loader
    setTimeout(function(){
         $('.loader').fadeOut();
     },3000)  

    //bottom to top
    $('.bottom_top').click(function () {
      $('html, body').animate({
          scrollTop: '0px'
      },1500);
      return false;
  });

    // counter
    $(function() {
        var winHeight = $(window).height(),
          eleOffsetTop = $(".counter").offset().top,
          eleTop = eleOffsetTop - winHeight,
          current = 0;
        $(window).on("scroll", function() {
          var scrollTop = $(window).scrollTop();
          if (current == 0 && scrollTop >= eleTop) {
              $('.counter div').each(function() {
        var $this = $(this),
            countTo = $this.attr('data-count');
        $({ countNum: $this.text()}).animate({
          countNum: countTo
        },
        {
          duration: 2000,
          easing:'linear',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
          }
        });  
      });  
          }
        });
      });
      
      $('#mega').owlCarousel({
        loop:true,
        margin:10,
        autoplay:true,
        animateIn:'animate__slideInUp',
        animateOut:'animate__slideOutUp',
        dots:false,
        autoplayTimeout:3000,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:2
            },
            1000:{
                items:2
            }
        }
    })

    $('#blog').owlCarousel({
      loop:true,
      margin:10,
      autoplay:true,
      animateIn:'animate__slideInUp',
      animateOut:'animate__slideOutUp',
      dots:false,
      autoplayTimeout:3000,
      responsive:{
          0:{
              items:2
          },
          600:{
              items:2
          },
          1000:{
              items:2
          }
      }
  })

  $('#blog_img').owlCarousel({
    loop:true,
    margin:10,
    autoplay:true,
    animateIn:'animate__slideInUp',
    animateOut:'animate__slideOutUp',
    dots:false,
    autoplayTimeout:3000,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:2
        },
        1000:{
            items:2
        }
    }
})

  $('#Gallery').owlCarousel({
    loop:true,
    margin:10,
    autoplay:true,
    animateIn:'animate__slideInUp',
    animateOut:'animate__slideOutUp',
    dots:false,
    autoplayTimeout:3000,
    responsive:{
        0:{
            items:6
        },
        600:{
            items:6
        },
        1000:{
            items:6
        }
    }
  })

  $('#peple').owlCarousel({
    loop:true,
    margin:10,
    autoplay:true,
    animateIn:'animate__fadeIn',
    animateOut:'animate__fadeOut',
    dots:false,
    autoplayTimeout:3000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})


});