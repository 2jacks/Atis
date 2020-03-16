$(function () {
    let headerH = $("header").innerHeight();
    let heroH = $("hero").innerHeight();
    let scrollPos = $(window).scrollTop();

    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        let blockID = $(this).data("scroll");
        let elementOffset = $(blockID).offset().top;

        $("html, body").animate({
            scrollTop: elementOffset - headerH
        })
    });
})