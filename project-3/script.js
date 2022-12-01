//opening animation
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

//spaceship animation
var window_width = $(window).width();
var document_height = $(document).height();
var isMouseHover = false;

function mouseOver() {
    isMouseHover = true;
}

function mouseOut() {
    isMouseHover = false;
}
$(function () {


    $(window).scroll(function () {
        var scroll_position = $(window).scrollTop();
        if (scroll_position > document_height / 7 * 3 && scroll_position < document_height / 7 * 4) {
            var difference = scroll_position - document_height / 7 * 3;
            var object_position_left = window_width - difference * 2;
            var object_position_top = document_height / 7 * 3.2 + difference * 1.1;

            $('.ship').css('position', 'relative');
            $('.ship').css('left', object_position_left + "px");
            $('.ship').css('top', object_position_top + "px");
            $('.ship').css('transform', "initial");

            $('.spaceship').css('width', 700 + difference / 5 + 'px');

        } 

    });
});
