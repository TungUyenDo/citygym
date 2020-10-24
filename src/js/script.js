

$('.ct-menu__toggle').click(function (e) {
    e.preventDefault();
    $('.ct-menu__nav').toggleClass('active')
    $('.ct-menu__nav-item').show()
    $('body').toggleClass('sidebar-menu-open')
})
$('.ct-menu__toggle-mobile').click(function (e) {
    e.preventDefault();
    $('.ct-menu__nav').removeClass('active')
    $('body').removeClass('sidebar-menu-open')
})


$(window).on("load", function () {
});

$(window).on("resize", function () {
});
