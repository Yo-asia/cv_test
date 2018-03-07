$(document).ready(()=>{
    $(window).scroll(function () {
        if ($(document).scrollTop() > 100) {
            $('header').addClass('shrink');
        } else {
            $('header').removeClass('shrink');
        }
    });

    $('.bosch .rozwin-button').on('click',()=>{
        $('.bosch .rozwin').toggle();
    });
    $('.pas .rozwin-button').on('click',()=>{
        $('.pas .rozwin').toggle();
    });
    $('.aspa .rozwin-button').on('click',()=>{
        $('.aspa .rozwin').toggle();
    });
});