$(document).ready(function() {

	/*
	 *  Cover
	 */
	$('#vojna11').click(function () {
		$.fancybox.open([
			{
				src: 'media/31/cover311.jpg',
				opts : {
					caption : 'Vir: ',
					thumb   : 'media/31/cover311.jpg'
				}
			},
		], {
			loop: false,
			buttons: ["zoom", "thumbs", "close"],
			thumbs: { autoStart: true }
		});
	});

	/*
	 *  Cover
	 */
	$('#vojna12').click(function () {
		$.fancybox.open([
			{
				src: 'media/31/cover312.jpg',
				opts : {
					caption : 'Vir: ',
					thumb   : 'media/31/cover312.jpg'
				}
			},
		], {
			loop: false,
			buttons: ["zoom", "thumbs", "close"],
			thumbs: { autoStart: true }
		});
	});

	/*
	 *  Opis
	 */
	$('#id').click(function () {
		$.fancybox.open([
			{
				src: 'media/31/folder/file.jpg',
				opts : {
					caption : 'Vir: ',
					thumb   : 'thumb/31/folder/file.jpg'
				}
			},
		], {
			loop: false,
			buttons: ["zoom", "thumbs", "close"],
			thumbs: { autoStart: true }
		});
	});

});
