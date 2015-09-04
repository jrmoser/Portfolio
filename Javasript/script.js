/**
 * Created by jarodmoser on 9/4/15.
 */
$(function() {
	$(window).scroll(function() {

		if ($(window).scrollTop() >= 100) {
			$(".header").addClass('smaller');
		} else {
			$(".header").removeClass("smaller");
		}
	});
});