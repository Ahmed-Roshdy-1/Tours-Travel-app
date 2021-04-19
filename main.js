$(document).ready(function(){

    $('.menu').click(function(){
        $('.navbar').toggle();
        $('.menu .fa-bars').toggleClass('fa-times');
        $('section').toggleClass('nav-toggle');
    });
});