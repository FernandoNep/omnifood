$(document).ready(function () {

    /* For the sticky navigation */
    $('.js--section-features').waypoint(function (direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '60px;'
    });

    /*Scroll on buttons */
    $('.js--scroll-to-plan').click(function () {
        $('html, body').animate({
            scrollTop: $('.js--section-plans').offset().top
        }, 1000);
    });

    $('.js--scroll-to-start').click(function () {
        $('html, body').animate({
            scrollTop: $('.js--section-features').offset().top
        }, 1000);
    });

    /*Navigation scroll */

    $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function () {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        };
                    });
                }
            }
        });
    /* Animation on scroll */
    
    $('.js--wp-1').waypoint(function(direction){
        $('.js--wp-1').addClass('animated fadeIn');                
    }, {
        offset: '50%'
    });

     $('.js--wp-2').waypoint(function(direction){
        $('.js--wp-2').addClass('animated fadeInUp');                
    }, {
        offset: '50%'
    });
    
     $('.js--wp-3').waypoint(function(direction){
        $('.js--wp-3').addClass('animated fadeIn');                
    }, {
        offset: '50%'
    });
    
     $('.js--wp-4').waypoint(function(direction){
        $('.js--wp-4').addClass('animated pulse');                
    }, {
        offset: '50%'
    });
    
    /*Mobile nav */
    
    $('.js--nav-icon').click(function(){
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');
        
        nav.slideToggle(200);
        
        if (icon.hasClass('ion-navicon-round')){
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        } else{
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
            
        }
    });

});

/*CÓDIGO JAVA SCRIPT COMPRIMIDO
$(document).ready(function(){$(".js--section-features").waypoint(function(n){"down"==n?$("nav").addClass("sticky"):$("nav").removeClass("sticky")},{offset:"60px;"}),$(".js--scroll-to-plan").click(function(){$("html, body").animate({scrollTop:$(".js--section-plans").offset().top},1e3)}),$(".js--scroll-to-start").click(function(){$("html, body").animate({scrollTop:$(".js--section-features").offset().top},1e3)}),$('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function(n){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var s=$(this.hash);(s=s.length?s:$("[name="+this.hash.slice(1)+"]")).length&&(n.preventDefault(),$("html, body").animate({scrollTop:s.offset().top},1e3,function(){var n=$(s);if(n.focus(),n.is(":focus"))return!1;n.attr("tabindex","-1"),n.focus()}))}}),$(".js--wp-1").waypoint(function(n){$(".js--wp-1").addClass("animated fadeIn")},{offset:"50%"}),$(".js--wp-2").waypoint(function(n){$(".js--wp-2").addClass("animated fadeInUp")},{offset:"50%"}),$(".js--wp-3").waypoint(function(n){$(".js--wp-3").addClass("animated fadeIn")},{offset:"50%"}),$(".js--wp-4").waypoint(function(n){$(".js--wp-4").addClass("animated pulse")},{offset:"50%"}),$(".js--nav-icon").click(function(){var n=$(".js--main-nav"),s=$(".js--nav-icon i");n.slideToggle(200),s.hasClass("ion-navicon-round")?(s.addClass("ion-close-round"),s.removeClass("ion-navicon-round")):(s.addClass("ion-navicon-round"),s.removeClass("ion-close-round"))})}); */