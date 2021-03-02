$(document).ready(function() {

	/*
	 *  Uvodnik TV Dnevnika 1 na dan slovenskega plebiscita
	 */
	$('#video_uvodnik').click(function () {
		$.fancybox.open([
			{
				width: 720,
				height: 576,
				src: 'video/12/Uvodnik_TV_dnevnika.mp4',
				caption: 'Vir: TV Arhiv in dokumentacija RTV Slovenije',
			},
		], {
			loop: false,
			buttons: ["close"],
		});
	});

	/*
	 *  Glasovanje na domu
	 */
	$('#video_na_domu').click(function () {
		$.fancybox.open([
			{
				width: 720,
				height: 576,
				src: 'video/12/Volitve_na_domu.mp4',
				caption: 'Vir: TV Arhiv in dokumentacija RTV Slovenije',
			},
		], {
			loop: false,
			buttons: ["close"],
		});
	});

	/*
	 *  Dogajanje pred voliščem v Šmarjeti pri Celju
	 */
	$('#video_smarjeta').click(function () {
		$.fancybox.open([
			{
				width: 720,
				height: 576,
				src: 'video/12/Volisce_Smarjeta_pri_Celju.mp4',
				caption: 'Vir: TV Arhiv in dokumentacija RTV Slovenije',
			},
		], {
			loop: false,
			buttons: ["close"],
		});
	});

	/*
	 *  Prispevek iz porodnišnice
	 */
	$('#video_porodnisnica').click(function () {
		$.fancybox.open([
			{
				width: 720,
				height: 576,
				src: 'video/12/Volitve_porodnisnica.mp4',
				caption: 'Vir: TV Arhiv in dokumentacija RTV Slovenije',
			},
		], {
			loop: false,
			buttons: ["close"],
		});
	});

	/*
	 *  Glasovanje starejših občanov
	 */
	$('#video_starejsi').click(function () {
		$.fancybox.open([
			{
				width: 720,
				height: 576,
				src: 'video/12/Starejsi_volijo.mp4',
				caption: 'Vir: TV Arhiv in dokumentacija RTV Slovenije',
			},
		], {
			loop: false,
			buttons: ["close"],
		});
	});

	/*
	 *  Glasovanje v Bojancih
	 */
	$('#video_bojanci').click(function () {
		$.fancybox.open([
			{
				width: 720,
				height: 576,
				src: 'video/12/Volisce_Bojanci.mp4',
				caption: 'Vir: TV Arhiv in dokumentacija RTV Slovenije',
			},
		], {
			loop: false,
			buttons: ["close"],
		});
	});

	/*
	 *  Glasovanje političnih osebnosti
	 */
	$('#video_politiki').click(function () {
		$.fancybox.open([
			{
				width: 720,
				height: 576,
				src: 'video/12/Politiki_volijo.mp4',
				caption: 'Vir: TV Arhiv in dokumentacija RTV Slovenije',
			},
		], {
			loop: false,
			buttons: ["close"],
		});
	});

});
