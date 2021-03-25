$(document).ready(function() {

	/*
	 *  Ivan Oman na zborovanju v Dornberku
	 */
	$('#video_oman').click(function () {
		$.fancybox.open([
			{
				width: 720,
				height: 576,
				src: 'video/22/Oman.mp4',
				caption: 'Vir: Park vojaške zgodovine Pivka',
			},
		], {
			loop: false,
			buttons: ["close"],
		});
	});

	/*
	 *  Jože Pučnik na zborovanju v Dornberku
	 */
	$('#video_pucnik').click(function () {
		$.fancybox.open([
			{
				width: 720,
				height: 576,
				src: 'video/22/Pucnik.mp4',
				caption: 'Vir: Park vojaške zgodovine Pivka',
			},
		], {
			loop: false,
			buttons: ["close"],
		});
	});

});
