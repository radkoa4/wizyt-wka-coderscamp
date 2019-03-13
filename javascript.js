$(".arrow").click(function () {
    $('html,body').animate({
            scrollTop: $("#projekty").offset().top
        },
        1000);
});

$(".arrowa").click(function () {
    $('html,body').animate({
        scrollTop: $("#media").offset().top
    },
        1000);
});

$(".arrowb").click(function () {
    $('html,body').animate({
            scrollTop: $("#kontakt").offset().top
        },
        1000);
});