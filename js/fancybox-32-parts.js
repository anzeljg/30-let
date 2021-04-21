$(document).ready(function() {

	/*
	 *  Cover
	 */
	$('#vojna21').click(function () {
		$.fancybox.open([
			{
				src: 'media/32/cover321.jpg',
				opts : {
					caption : 'Vir: ',
					thumb   : 'media/32/cover321.jpg'
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
	$('#vojna22').click(function () {
		$.fancybox.open([
			{
				src: 'media/32/cover322.jpg',
				opts : {
					caption : 'Vir: ',
					thumb   : 'media/32/cover322.jpg'
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
	$('#vojna23').click(function () {
		$.fancybox.open([
			{
				src: 'media/32/cover323.jpg',
				opts : {
					caption : 'Vir: ',
					thumb   : 'media/32/cover323.jpg'
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
	$('#vojna24').click(function () {
		$.fancybox.open([
			{
				src: 'media/32/cover324.jpg',
				opts : {
					caption : 'Vir: ',
					thumb   : 'media/32/cover324.jpg'
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
				src: 'media/32/folder/file.jpg',
				opts : {
					caption : 'Vir: ',
					thumb   : 'thumb/32/folder/file.jpg'
				}
			},
		], {
			loop: false,
			buttons: ["zoom", "thumbs", "close"],
			thumbs: { autoStart: true }
		});
	});

});
