$(document).ready(function() {

	/*
	 *  Izhod tankovske kolone iz vojašnice v Pivki
	 */
	$('#tanki_pivka').click(function () {
		$.fancybox.open([
			{
				width: 720,
				height: 576,
				src: 'video/31/tanki_pivka.mp4',
				caption: 'Vir: Izhod tankov v Pivki, hrani PVZ.',
			},
		], {
			loop: false,
			buttons: ["close"],
		});
	});

	/*
	 *  Tankovska kolona v Bukovju
	 */
	$('#tanki_bukovje').click(function () {
		$.fancybox.open([
			{
				width: 720,
				height: 576,
				src: 'video/31/tanki_bukovje.mp4',
				caption: 'Vir: Tanki v Bukovju, hrani PVZ.',
			},
		], {
			loop: false,
			buttons: ["close"],
		});
	});

});
