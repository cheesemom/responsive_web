$(function () {

    $('.mbtn').on('click', function () {
        $('.gnb').toggleClass('on');
    })

    $('.gnb>ul>li>a').on('click', function (event) {
        if ($(window).width() < 769) {
            event.preventDefault();
            $('.smenu').hide();
            // 메뉴 하나씩 나타내기
            $(this).next().show();
            //메뉴 누르면 세미메뉴 뜨게하기
        }

    });

    $(window).on('resize', function () {
        $('.smenu').removeAttr('style')
    })

})