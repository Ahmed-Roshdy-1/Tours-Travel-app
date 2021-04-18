$(document).ready(function(){

    $('.menu').click(function(){
        $('.navbar').toggle();
       $('.menu .fa-bars').toggleClass('fa-times');
    });
});