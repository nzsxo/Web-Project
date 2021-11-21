$(window).scroll(function() {
var height = $(window).scrollTop();
  if(height > 100) {
		$('.navigation').addClass('non-transparent');
	} else {
		$('.navigation').removeClass('non-transparent');
	}
});