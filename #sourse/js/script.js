$('.header-menu__icon').click(function(event){ //При нажатии на клас хедер меню айкон (бургер)
	$(this).toggleClass('active');//Добавлялся класс актів
	$('.header-menu').toggleClass('active');// к диву с класом хедер меню
	if($(this).hasClass('active')){
		$('body').data('scroll',$(window).scrollTop());
	}
	$('body').toggleClass('lock');
	if(!$(this).hasClass('active')){
		$('body, html').scrollTop(parseInt($('body').data('scroll')));
	}
});

function ibg(){
	let ibg=document.querySelectorAll('.ibg');
	for (var i = 0; i < ibg.length; i++) {
		if(ibg[i].querySelector('img')){
			ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
		}
	}
}
ibg();
