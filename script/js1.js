$(document).ready(function(){
    // top button
    $("#topBtn").click(function () {
        $('html,body').stop().animate({ scrollTop: 0 });
    });

});