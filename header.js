$(function(){
    // html 共通部分読み込み
    $("#header").load("header.html");
    $("#footer").load("footer.html");

    // 中略

    $('#menuWrap').on('click', function() {
        $(this).next().slideToggle();
        $('#menuBtn').toggleClass('close');
    },
    function() {
        $(this).next().slideToggle();
        $('#menuBtn').removeClass('close');
    });
});
