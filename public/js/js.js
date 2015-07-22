$( document ).ready(function() {
    console.log( "ready!" );
    $(".Header-menu").addClass("Header-isHidden");
    $(".Header-button").click(function(){
    	$(".Header-menu").toggleClass("Header-isHidden");
    })
    $(".Header-menu>li>a").click(function(){
    	$(".Header-menu").toggleClass("Header-isHidden");
    })
});
