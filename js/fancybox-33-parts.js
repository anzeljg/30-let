$(document).ready(function() {

	/*
	 *  Cover
	 */
	$('#vojna31').click(function () {
		$.fancybox.open([
			{
				src: 'media/33/cover331.jpg',
				opts : {
					caption : 'Vir: ',
					thumb   : 'media/33/cover331.jpg'
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
				src: 'media/33/folder/file.jpg',
				opts : {
					caption : 'Vir: ',
					thumb   : 'thumb/33/folder/file.jpg'
				}
			},
		], {
			loop: false,
			buttons: ["zoom", "thumbs", "close"],
			thumbs: { autoStart: true }
		});
	});

});
