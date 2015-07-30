$( document ).ready(function() {
    $(".Header-menu").addClass("Header-isHidden");
    $("#Header-button").click(function(){
    	$(".Header-menu").toggleClass("Header-isHidden");
        $("#Header-button").toggleClass('open');
    })
    $(".Header-menu>li>a").click(function(){
    	$(".Header-menu").toggleClass("Header-isHidden");
        $("#Header-button").toggleClass('open');
    })
});
