//event pada link
$('.page-scroll').on('click', function(e) {
    //a,bil isi href
    var tujuan = $(this).attr('href');
    //tangkap element yang bersangkutan
    var elemenTujuan = $(tujuan);

    //pindah scroll
    $('html,body').animate({
        scrollTop: elemenTujuan.offset().top - 50
    }, 1000, 'easeInOutExpo');


    e.preventDefault();
})

//about
$(window).on('load', function() {
        $('.pKiri').addClass('pMuncul');
        $('.pKanan').addClass('pMuncul');

    })
    //parallax
$(window).scroll(function() {
    var wScroll = $(this).scrollTop();
    //Jumbotron
    $('.jumbotron img').css({
        'transform': 'translate(0px, ' + wScroll / 4 + '%)'
    })
    $('.jumbotron h1').css({
        'transform': 'translate(0px, ' + wScroll / 2 + '%)'
    })
    $('.jumbotron p').css({
            'transform': 'translate(0px, ' + wScroll / 1.2 + '%)'
        })
        //Portofolio
        // cara mencari tinggi portofilio
        // if (wScroll > $('.portofolio').offset().top - 250) {
        //     console.log('ok')
        // }

    if (wScroll > $('.portofolio').offset().top - 200) {
        $('.portofolio .thumbnail').each(function(i) {
            setTimeout(function() {
                $('.portofolio .thumbnail').eq(i).addClass('muncul')

            }, 300 * i)
        })




    }

})