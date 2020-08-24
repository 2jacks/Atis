$('#burger').click(function(event) {
    $('#burger').toggleClass('active');
    $('#header__nav').toggleClass('active');
    $('body').toggleClass('lock');
});