$(window).scroll(function(){
    if(location.pathname!="/"){
            if($(this).scrollTop() <= 500 &&  $(window).width()>992) {
                $(".date #navigation").css({"position": "absolute", "top": "500"});
                $(".single-post #navigation").css({"position": "absolute", "top": "500"});
                $(".category #navigation").css({"position": "absolute", "top": "500"});
                $(".page-id-14 #navigation").css({"position": "absolute", "top": "500"});
            }
            else if($(this).scrollTop() > 500 &&  $(window).width()>992) {
                $(".date #navigation").css({"position": "absolute", top: $(this).scrollTop()});
                $(".single-post #navigation").css({"position": "absolute", "top": $(this).scrollTop()});
                $(".category #navigation").css({"position": "absolute", "top": $(this).scrollTop()});
                $(".page-id-14 #navigation").css({"position": "absolute", "top": $(this).scrollTop()});
            }
            if($(this).scrollTop() < 10 &&  $(window).width()>992) {
                $(".date #navigation").css({"position": "absolute", "top": "500"});
                $(".single-post #navigation").css({"position": "absolute", "top": "500"});
                $(".category #navigation").css({"position": "absolute", "top": "500"});
                $(".page-id-14 #navigation").css({"position": "absolute", "top": "500"});
            }
    }
});