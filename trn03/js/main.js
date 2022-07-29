$(function () {
    $('.TopBanner i').on('click', function () {
        $('.TopBanner').slideUp();
    });

    $('.pop button').on('click', function () {
        $(this).parent().hide();
    })

    // 팝업창 하나씩 닫히게 하려면 $(this).parent().hide();
    // 팝업창 한번에 닫히게 하려면 $('.팝업창명').hide();

})