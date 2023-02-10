(function () {
    $(window).scroll(function () {
        var oVal = $(window).scrollTop() / 30;
        // $(".blur").css("filter", `blur(${oVal}px) `);
        // $(".bannerLogo>img").css("transform", `scale(${oVal / 4 <= 1 ? 1 : oVal / 4})`);
        // $("nav.nav").css("top", `${oVal}px `);
    });
}).call(this);

$(document).ready(function () {

    setTimeout(() => { 
        // bannerVideo.play();
    }, 2000);
    // $("#bannerVideo").prop('muted', false);

    $(window).scroll(function () {
        var scroll = $(window).scrollTop();

        //>=, not <=
        // if (scroll >= 700) {
        //     bannerVideo.pause();
        // } else {
        //     bannerVideo.play();
        // }
    }); //missing );

    //MixitUp Gallery Filters
    if ($(".filter-list").length) {
        $(".filter-list").mixItUp({});
    }

    window.addEventListener('click', () => {
        if (window.location.href.indexOf("portfolio") > -1) {
            if ($(".filter-list").length) {
                $(".filter-list").mixItUp({});
            }
        }
    })

    if ($(".side-menu__block").length) {
        $(".mobile-nav__container").find("li.dropdown a").on("click", function (e) {
            // e.preventDefault();
            $(this).toggleClass("open");
            $(this).parent("li").children("ul").slideToggle(500);
        });
    }
    if ($(".masonary-layout").length) {
        setTimeout(() => {
            $(".masonary-layout").isotope({
                layoutMode: "masonry",
                itemSelector: ".masonary-item"
            });
        }, 500);
    }

});
