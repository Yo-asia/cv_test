$(document).ready(()=>{
    $(window).scroll(function () {
        if ($(document).scrollTop() > 100) {
            $('header').addClass('shrink');
        } else {
            $('header').removeClass('shrink');
        }
    });


    $('.rozwin-button').on('click',event =>{
        $(event.currentTarget).parent().next().removeClass('d-none');
        $(event.currentTarget).next().removeClass('d-none');
        $(event.currentTarget).addClass('d-none');
    });

    $('.zwin-button').on('click',event =>{
        $(event.currentTarget).parent().next().addClass('d-none');
        $(event.currentTarget).prev().removeClass('d-none');
        $(event.currentTarget).addClass('d-none');
    });
});