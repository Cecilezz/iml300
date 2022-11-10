$(document).ready(function () {

    $('.flower').click(function () {
        $('p').toggle();
    });
    
    $(function () {
        $(".flower").draggable();
    });
    
    $('.keyboard').click(function () {
        $(this).toggleClass("larger");
    });

});
