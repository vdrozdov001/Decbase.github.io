$(document).ready(function(){
    $('.slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive:[
            {
                breakpoint: 1420 ,
                settings: {
                    slidesToShow: 2,
                },
            },{
                breakpoint: 930 ,
                settings: {
                    slidesToShow: 1,
                    dots: true,
                }
            }
        ]
        
        
    });

    $('.reviews-slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive:[
            {
                breakpoint: 1420 ,
                settings: {
                    slidesToShow: 1,
                },
            },{
                breakpoint: 930 ,
                settings: {
                    slidesToShow: 1,
                    dots: true,
                },
            }
                   
            
        ]
    });

    var a = 0;
$(window).scroll(function() {

  var oTop = $('#counter').offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {
    $('.counter-value').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },

        {

          duration: 2000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            //alert('finished');
          }

        });
    });
    a = 1;
  }

});
});
