$(function () {
    var partLeftPos = 0;
    var partRightPos = 0;

    $(window).scroll(function (event) {
        var distance = $(this).scrollTop() * 2;
        var left = partLeftPos - distance;
        var right = partRightPos - distance;

        $('.left').css('left', left + "px");
        $('.right').css('right', right + "px");

        console.log(partLeftPos);
        console.log(partRightPos);

    });
})

$(document).ready(function(){
            $('.toggle').click(function(){
                $('.menu').toggleClass('active');
            });
        });