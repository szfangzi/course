$(function () {
    $('#wrapper').fullpage({
        onLeave: function (index, nextIndex, direction) {

        },
        afterLoad: function (anchorLink, index) {

        },
        afterRender: function (a, b, c) {

          var h = $(window).height();
          $('.logo').css({marginTop:h*0.13,height:h*0.13,opacity:1});
          setTimeout(function () {
            $('.slogan').css({marginTop:h*0.05,height:h*0.08,opacity:1});
            setTimeout(function () {
              $('.bottom').css({marginTop:h-$('.slogan').offset().top-$('.slogan').height()-h*0.45,height:h*0.45,opacity:1});
            }, 1000);
          }, 500)


        }
    });
  //去第几页
  //$.fn.fullpage.moveTo(1);

});
