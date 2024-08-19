(function($) {
    'use strict';

    /*------------------------------------
        DateCountdown active 1
    ------------------------------------- */
    $(".DateCountdown").TimeCircles({
        direction: "Counter-clockwise",
        fg_width: 0.009,
        bg_width: 0,
        use_background: false,
        time: {
            Days: {
                text: "Days",
                color: "#fff"
            },
            Hours: {
                text: "Hours",
                color: "#fff"
            },
            Minutes: {
                text: "Mins",
                color: "#fff"
            },
            Seconds: {
                text: "Secs",
                color: "#fff"
            }
        }

    });


    /*------------------------------------
        DateCountdown active 2
    ------------------------------------- */

    $(".DateCountdownTwo").TimeCircles({
        fg_width: 0.07,
        bg_width: 0,
        circle_bg_color: "#fff",
        use_background: true,
        time: {
            Days: {
                text: "Days",
                color: "#ff3b7c"
            },
            Hours: {
                text: "Hours",
                color: "#ff3b7c"
            },
            Minutes: {
                text: "Mins",
                color: "#ff3b7c"
            },
            Seconds: {
                text: "Secs",
                color: "#ff3b7c"
            }
        }

    });

    /*-----------------------
        Youtube active
    ------------------------- */

    $('.youtube-bg').YTPlayer({
        containment: '.youtube-bg',
        loop: true,
    });


    /*-----------------------
        HTML5 active
    ------------------------- */
    $("#example").vegas({
        slides: [{
                src: "assets/img/banner/banner.jpg"
            },
            {
                src: "assets/img/banner/banner-3.jpg"
            },
        ]
    });


    /*-----------------------
        Vimeo active
    ------------------------- */
    $(".vimeo-active").vimeo_player();




    /*-----------------------
        Mouse Moving Background
    ------------------------- */

    $('#background-1').mouseParallax({
        moveFactor: 3
    });

    $('#background-2').mouseParallax({
        moveFactor: 2
    });

    $('#background-3').mouseParallax({
        moveFactor: 2
    });

    $('#background-4').mouseParallax({
        moveFactor: -2
    });

    $('#background-5').mouseParallax({
        moveFactor: 3
    });

    $('#background-6').mouseParallax({
        moveFactor: -2
    });
    $('#background-12').mouseParallax({
        moveFactor: 2
    });



    /*-----------------------------
        Mouse Moving Background 2
    ------------------------------- */

    $('#background-7').mouseParallax({
        moveFactor: 3
    });

    $('#background-8').mouseParallax({
        moveFactor: 3
    });

    $('#background-9').mouseParallax({
        moveFactor: 3
    });

    $('#background-10').mouseParallax({
        moveFactor: 1
    });

    $('#background-11').mouseParallax({
        moveFactor: 3
    });



    /*-----------------------------
        Mouse Moving Background 3
    ------------------------------- */

    $('#background-13').mouseParallax({
        moveFactor: 2
    });

    $('#background-14').mouseParallax({
        moveFactor: 2
    });

    $('#background-15').mouseParallax({
        moveFactor: 1
    });

    $('#background-16').mouseParallax({
        moveFactor: 3
    });

    $('#background-17').mouseParallax({
        moveFactor: 3
    });

    $('#background-18').mouseParallax({
        moveFactor: 2
    });

    $('#background-19').mouseParallax({
        moveFactor: 3
    });




})(jQuery);