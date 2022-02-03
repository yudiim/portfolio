$(document).ready(function () {
    // drawer menu
    // menuBtn click
    var toggle = 0;
    var count = 0;
    $(".menuBtn").click(function () {
        if (toggle == 0) {
            $("#drawerMenu").animate({ "right": "0" }, 500, "swing");
            toggle = 1;
            console.log(toggle);
        } else {
            $("#drawerMenu").animate({ "right": "-100%" }, 500, "swing");
            toggle = 0;
            console.log(toggle);
        }
    });

    // closeBtn click
    $(".closeBtn").click(function () {
        $("#drawerMenu").animate({ "right": "-100%" }, 500, "swing");
        toggle = 0;
        console.log(toggle);
    });

    // top button
    $("#top_btn").click(function () {
        $('html,body').stop().animate({ scrollTop: 0 });
    });

})