$(document).ready(function(){
  $('.slider-intro').slick({
		dots: true,
		initialSlide: 1,
		responsive: [
			{
				breakpoint: 640,
				settings: {
					arrows: false,
				}
			}
		]
	});
});

$(document).ready(function(){
	$('.quotes__slider').slick({
		arrows: false,
		dots: true,
		initialSlide: 1,
	});
});