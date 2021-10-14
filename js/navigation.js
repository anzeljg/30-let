$(function() {
	  
	/*
	 *  Toggle side menu on/off
	 */
	$('#navbarToggleMenu')
		.on('shown.bs.collapse', function() {
			$('#navbar-hamburger').addClass('hidden');
			$('#navbar-cheeseburger').removeClass('hidden'); 
			$('#navbarToggleMenu').removeClass('hidden');		  
		})
		.on('hidden.bs.collapse', function() {
			$('#navbar-hamburger').removeClass('hidden');
			$('#navbar-cheeseburger').addClass('hidden');        
			$('#navbarToggleMenu').addClass('hidden');		  
		});
	  
	/*
	 *  Toggle bottom menu on/off
	 */
	$('#navbarBottomMenu')
		.on('shown.bs.collapse', function() {
			$('#btmbar-hamburger').addClass('hidden');
			$('#btmbar-cheeseburger').removeClass('hidden'); 
			$('#navbarBottomMenu').removeClass('hidden');		  
		})
		.on('hidden.bs.collapse', function() {
			$('#btmbar-hamburger').removeClass('hidden');
			$('#btmbar-cheeseburger').addClass('hidden');        
			$('#navbarBottomMenu').addClass('hidden');		  
		});

	/*
	 *  Mobile menu collapse/toggle submenus
	 */
	$('#plebiscit-menu')
		.on('mouseup touchend', function() {
			event.preventDefault();
			if ($('#plebiscit-menu-m').hasClass('hidden')) {
				$('#plebiscit-menu').removeClass('disabled');
				$('#samostojnost-menu').addClass('disabled');
				$('#vojna-menu').addClass('disabled');
				$('#osnovni-menu').addClass('disabled');

				$('#plebiscit-menu-m').removeClass('hidden');
				$('#samostojnost-menu-m').addClass('hidden');
				$('#vojna-menu-m').addClass('hidden');
				$('#osnovni-menu-m').addClass('hidden');
			}
		});

	$('#samostojnost-menu')
		.on('mouseup touchend', function() {
			event.preventDefault();
			if ($('#samostojnost-menu-m').hasClass('hidden')) {
				$('#plebiscit-menu').addClass('disabled');
				$('#samostojnost-menu').removeClass('disabled');
				$('#vojna-menu').addClass('disabled');
				$('#osnovni-menu').addClass('disabled');

				$('#plebiscit-menu-m').addClass('hidden');
				$('#samostojnost-menu-m').removeClass('hidden');
				$('#vojna-menu-m').addClass('hidden');
				$('#osnovni-menu-m').addClass('hidden');
			}
		});

	$('#vojna-menu')
		.on('mouseup touchend', function() {
			event.preventDefault();
			if ($('#vojna-menu-m').hasClass('hidden')) {
				$('#plebiscit-menu').addClass('disabled');
				$('#samostojnost-menu').addClass('disabled');
				$('#vojna-menu').removeClass('disabled');
				$('#osnovni-menu').addClass('disabled');

				$('#plebiscit-menu-m').addClass('hidden');
				$('#samostojnost-menu-m').addClass('hidden');
				$('#vojna-menu-m').removeClass('hidden');
				$('#osnovni-menu-m').addClass('hidden');
			}
		});

	$('#osnovni-menu')
		.on('mouseup touchend', function() {
			event.preventDefault();
			if ($('#osnovni-menu-m').hasClass('hidden')) {
				$('#plebiscit-menu').addClass('disabled');
				$('#samostojnost-menu').addClass('disabled');
				$('#vojna-menu').addClass('disabled');
				$('#osnovni-menu').removeClass('disabled');

				$('#plebiscit-menu-m').addClass('hidden');
				$('#samostojnost-menu-m').addClass('hidden');
				$('#vojna-menu-m').addClass('hidden');
				$('#osnovni-menu-m').removeClass('hidden');
			}
		});

	/*
	 *  Progress bar
	 */

	// When the user scrolls the page, execute progressFunction
	window.onscroll = function() { progressFunction() };

	function progressFunction() {
		var winScroll = document.body.scrollLeft || document.documentElement.scrollLeft;
		var width = document.documentElement.scrollWidth - document.documentElement.clientWidth;
		var scrolled = (winScroll / width) * 100;
		document.getElementById("progressBar").style.width = scrolled + "%";
	}

	/*
	 *  Previous and next buttons
	 */
	const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)

	$('#navNextBtn').click(function() {
		event.preventDefault();
		$('html, body').animate({
			scrollLeft: $('html, body').scrollLeft() + vw
		}, "slow");
	});

	$('#navPrevBtn').click(function() {
		event.preventDefault();
		$('html, body').animate({
			scrollLeft: $('html, body').scrollLeft() - vw
		}, "slow");
	});

    /*
	 *  Scroll newspaper articles up in carousel
	 */
	$('.news_up').slick({
		vertical: true,
		verticalSwiping: true,
		slidesToScroll: -1,
		autoplay: true,
		autoplaySpeed: 0,
		speed: 15000,
		cssEase: 'linear',
		infinite: true,
		arrows: false,
		touchMove: true,
		swipeToSlide: true,
		swipe: true
	});

    /*
	 *  Scroll newspaper articles down in carousel
	 *  The opposite (down) direction is achieved by CSS
	 */
	$('.news_down').slick({
		vertical: true,
		verticalSwiping: true,
		slidesToScroll: -1,
		autoplay: true,
		autoplaySpeed: 0,
		speed: 15000,
		cssEase: 'linear',
		infinite: true,
		arrows: false,
		touchMove: true,
		swipeToSlide: true,
		swipe: true
	});

});
