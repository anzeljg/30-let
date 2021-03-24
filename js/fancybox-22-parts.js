$(document).ready(function() {

	/*
	 *  Cover
	 */
	$('#samostojnost21').click(function () {
		$.fancybox.open([
			{
				src: 'media/22/cover21.jpg',
				opts : {
					caption : 'Vir: Tone Stojko, fototeka Muzeja novejše zgodovine Slovenije.',
					thumb   : 'media/22/cover21.jpg'
				}
			},
		], {
			loop: false,
			buttons: ["zoom", "thumbs", "close"],
			thumbs: { autoStart: true }
		});
	});

/* TULE MANJKAJO STVARI! */

	/*
	 *  Ustavni amandmaji
	 */
	$('#docs1_amandmaji').click(function () {
		$.fancybox.open([
			{
				src: 'media/22/docs1/amandmaji.pdf',
				opts : {
					caption : 'Vir: ',
					thumb   : 'thumb/22/docs1/amandmaji.jpg'
				}
			},
		], {
			loop: false,
			buttons: ["zoom", "thumbs", "close"],
			thumbs: { autoStart: true },
		});
	});

	/*
	 *  Zakon o himni
	 */
	$('#docs1_himna').click(function () {
		$.fancybox.open([
			{
				src: 'media/22/docs1/himna1.jpg',
				opts : {
					caption : 'Vir: ',
					thumb   : 'thumb/22/docs1/himna1.jpg'
				}
			},
			{
				src: 'media/22/docs1/himna2.jpg',
				opts : {
					caption : 'Vir: ',
					thumb   : 'thumb/22/docs1/himna2.jpg'
				}
			},
			{
				src: 'media/22/docs1/himna3.jpg',
				opts : {
					caption : 'Vir: ',
					thumb   : 'thumb/22/docs1/himna3.jpg'
				}
			},
		], {
			loop: false,
			buttons: ["zoom", "thumbs", "close"],
			thumbs: { autoStart: true },
		});
	});

/* ============================================ */

	/*
	 *  Description
	 */
	$('#id').click(function () {
		$.fancybox.open([
			{
				src: 'media/22/folder/file.jpg',
				opts : {
					caption : 'Vir: ',
					thumb   : 'thumb/22/folder/file.jpg'
				}
			},
		], {
			loop: false,
			buttons: ["zoom", "thumbs", "close"],
			thumbs: { autoStart: true }
		});
	});

});
