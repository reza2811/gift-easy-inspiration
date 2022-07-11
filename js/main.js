jQuery(document).ready(function($) {
	$('.web-counter-number').counterUp({
		delay: 10,
		time: 1000
	});
	var menu = $('.web-header-section');
	$(window).scroll(function() {
		if ($(this).scrollTop() > 0 && menu.hasClass('web-header-section')) {
			menu.addClass('web-header-fixed');
		} else if ($(this).scrollTop() <= 0 && menu.hasClass('web-header-fixed')) {
			menu.removeClass('web-header-fixed');
		}
	});
});