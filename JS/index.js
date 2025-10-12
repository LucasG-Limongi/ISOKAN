$('.menu-mobile i').click(function () {
    $('.nav-mobile').slideToggle();
})

$(window).resize(function() {
    if ($(window).width < 900) {
        $('.nav-mobile, .menu-mobile').css('display', 'none')
        $('.nav').css('display', 'flex')
    }
}) // tentativa de corrigir o bug do menu mobile que aparece no desktop