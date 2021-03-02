$(document).ready(function() {

	/*
	 *  Neuradni izidi Republiške volilne komisije
	 */
	$('#video_izidi').click(function () {
		$.fancybox.open([
			{
				width: 720,
				height: 576,
				src: 'video/13/Neuradni_izidi.mp4',
				caption: 'Vir: TV Arhiv in dokumentacija RTV Slovenije',
			},
		], {
			loop: false,
			buttons: ["close"],
		});
	});

	/*
	 *  Večerno slavje na ulicah
	 */
	$('#video_slavje').click(function () {
		$.fancybox.open([
			{
				width: 720,
				height: 576,
				src: 'video/13/Vecerno_slavje.mp4',
				caption: 'Vir: TV Arhiv in dokumentacija RTV Slovenije',
			},
		], {
			loop: false,
			buttons: ["close"],
		});
	});

	/*
	 *  Navdušenje množic na ljubljanskih ulicah
	 */
	$('#video_navdusenje').click(function () {
		$.fancybox.open([
			{
				width: 720,
				height: 576,
				src: 'video/13/Slavje_2.mp4',
				caption: 'Vir: TV Arhiv in dokumentacija RTV Slovenije',
			},
		], {
			loop: false,
			buttons: ["close"],
		});
	});

	/*
	 *  Božična poslanica Dedka Mraza na temo plebiscita
	 */
	$('#video_poslanica').click(function () {
		$.fancybox.open([
			{
				width: 720,
				height: 576,
				src: 'video/13/Bozicna_poslanica.mp4',
				caption: 'Vir: TV Arhiv in dokumentacija RTV Slovenije',
			},
		], {
			loop: false,
			buttons: ["close"],
		});
	});

	/*
	 *  Odlomek iz slavnostne seje vseh zborov Skupščine RS
	 */
	$('#video_seja').click(function () {
		$.fancybox.open([
			{
				width: 720,
				height: 576,
				src: 'video/13/Slavnostna_seja.mp4',
				caption: 'Vir: TV Arhiv in dokumentacija RTV Slovenije',
			},
		], {
			loop: false,
			buttons: ["close"],
		});
	});

});
