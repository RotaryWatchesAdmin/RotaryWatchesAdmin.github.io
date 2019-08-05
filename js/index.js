$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('.scrollup').fadeIn(200);
			
			if ($('#navbarheader').hasClass("rty-invisibleheader")) {
				$('#navbarheader').addClass("rty-smallheader");
				$('#navbarheader').removeClass("rty-invisibleheader");
			}
			
			if ($('#navbarheader').hasClass("rty-solidheader")) {
				$('#navbarheader').addClass("rty-smallheader-alt");
				$('#navbarheader').removeClass("rty-solidheader");
			}
			
        } else {
            $('.scrollup').fadeOut();
			
			if ($('#navbarheader').hasClass("rty-smallheader")) {
				$('#navbarheader').addClass("rty-invisibleheader");
				$('#navbarheader').removeClass("rty-smallheader");
			}
			
			if ($('#navbarheader').hasClass("rty-smallheader-alt")) {
				$('#navbarheader').addClass("rty-solidheader");
				$('#navbarheader').removeClass("rty-smallheader-alt");
			}
        }
    });

    $('.scrollup').click(function () {
        $("html, body").animate({scrollTop: 0}, 600);
        return false;
    });

	$("a[href^='#']").click(function(e) {
		e.preventDefault();
		
		var position = $($(this).attr("href")).offset().top;

		$("body, html").animate({
			scrollTop: position
		}, 600 );
	});

});
