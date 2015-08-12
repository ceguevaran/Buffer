$( document ).ready(function() {
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
		document.querySelector("video").style.display="none";
	}
    $('.Header-menu>li>a').on('click', function(e) {
        e.preventDefault();
        var $link = $(this);
        var anchor  = $link.attr('href');
        $('html, body').stop().animate({
            scrollTop: $(anchor).offset().top
        }, 1000);
    });

    $('.Header-layout>a').on('click', function(e) {
        e.preventDefault();
        var $link = $(this);
        var anchor  = $link.attr('href');
        $('html, body').stop().animate({
            scrollTop: $(anchor).offset().top
        }, 1000);
    });

    $(".Header-menu").addClass("Header-isHidden");

    $("#Header-button").click(function(){
    	$(".Header-menu").toggleClass("Header-isHidden");
        $("#Header-button").toggleClass('open');
    })
    $(".Header-menu>li>a").click(function(){
    	$(".Header-menu").toggleClass("Header-isHidden");
        $("#Header-button").toggleClass('open');
    })

    $(window).scroll(function () {
    var nav = $("#Layout");
    if (nav.length){
        if ($(window).scrollTop() >= nav.offset().top) {
            $(".Header-nav").addClass("Header-background");  
        }
        else{
            $(".Header-nav").removeClass("Header-background");
        }
    }
});
});
