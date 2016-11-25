$(function () {
    var firstPage = 1;
    var $pages = null;
    var _ = 'page';
    var prefix = _ + '-';
    $('#wrapper').fullpage({
        onLeave: function (index, nextIndex, direction) {
            $(this).trigger('onLeave');

        },
        afterLoad: function (anchorLink, index) {
            $(this).trigger('afterLoad');
          console.log(this,index);
        },
        afterRender: function (a, b, c) {
            $(".fp-tableCell").addClass('clearfix');

            $.fn.fullpage.moveTo(1);
            $(this).find('.page.p1').addClass(prefix + 'load');
          var w = $(window).width();
          var h = $(window).height();
          $('.logo').css({marginTop:h*0.13,height:h*0.13});
          $('.slogan').css({marginTop:h*0.05,height:h*0.08});
          $('.lbox').css({marginTop:h*0.05,height:h*0.45});


        }
    });

    $('.page').on('onLeave', function (e) {
        $(this).removeClass(prefix + 'load');
    }).on('afterLoad', function (e) {
        $(this).addClass(prefix + 'load');
    });



    //$('.component').on('onLeave', function (e) {
    //    $(this).fadeOut();
    //}).on('afterLoad', function (e) {
    //    $(this).fadeIn();
    //});
});
