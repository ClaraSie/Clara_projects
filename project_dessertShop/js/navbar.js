$(document).ready(function () {
    $('.ham-icon').click(function(e) {
        e.preventDefault();
        $('.dropdown').toggleClass('active')
    })
    $('.dropdown').click(function(e) {
        $('.dropdown').removeClass('active')
    })
});
