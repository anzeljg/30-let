$(document).ready(function() {

	/*
	 *  Ivan Oman na zborovanju v Dornberku
	 */
	$('#video_oman').click(function () {
		$.fancybox.open([
			{
				width: 576,
				height: 460,
				src: 'video/22/Oman.mp4',
				caption: 'Vir: Park vojaške zgodovine Pivka',
			},
		], {
			loop: false,
			buttons: ["close"],
			baseClass: 'television'
		});
	});

	/*
	 *  Jože Pučnik na zborovanju v Dornberku
	 */
	$('#video_pucnik').click(function () {
		$.fancybox.open([
			{
				width: 576,
				height: 460,
				src: 'video/22/Pucnik.mp4',
				caption: 'Vir: Park vojaške zgodovine Pivka',
			},
		], {
			loop: false,
			buttons: ["close"],
			baseClass: 'television'
		});
	});

});
