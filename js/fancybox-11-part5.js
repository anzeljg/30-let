$(document).ready(function() {

	/*
	 *  Cover
	 */
	$('#plebiscit15').click(function () {
		$.fancybox.open([
			{
				src: 'media/11/cover115.jpg',
				opts : {
					caption : 'Vir: Tone Stojko, fototeka Muzeja novejše zgodovine Slovenije.',
					thumb   : 'media/11/cover115.jpg'
				}
			},
		], {
			loop: false,
			buttons: ["zoom", "thumbs", "close"],
			thumbs: { autoStart: true }
		});
	});

	/*
	 *  Dokumenti s podporo plebiscitu
	 */
	$('#docs5_podpora').click(function () {
		$.fancybox.open([
			{
				src: 'media/11/docs5/podpora1a.jpg',
				opts : {
					caption : 'Vir: Arhiv RS, AS 2040, Rudi Šeligo, šk. 3, a. e. 111.',
					thumb   : 'thumb/11/docs5/podpora1a.jpg'
				}
			},
			{
				src: 'media/11/docs5/podpora1b.jpg',
				opts : {
					caption : 'Vir: Arhiv RS, AS 2040, Rudi Šeligo, šk. 3, a. e. 111.',
					thumb   : 'thumb/11/docs5/podpora1b.jpg'
				}
			},
			{
				src: 'media/11/docs5/podpora2a.jpg',
				opts : {
					caption : 'Vir: Arhiv RS, AS 1210, Zbirka Plebiscit 1990, šk. 530.',
					thumb   : 'thumb/11/docs5/podpora2a.jpg'
				}
			},
			{
				src: 'media/11/docs5/podpora2b.jpg',
				opts : {
					caption : 'Vir: Arhiv RS, AS 1210, Zbirka Plebiscit 1990, šk. 530.',
					thumb   : 'thumb/11/docs5/podpora2b.jpg'
				}
			},
			{
				src: 'media/11/docs5/podpora3.jpg',
				opts : {
					caption : 'Vir: Arhiv RS, AS 1210, Zbirka Plebiscit 1990, šk. 530.',
					thumb   : 'thumb/11/docs5/podpora3.jpg'
				}
			},
			{
				src: 'media/11/docs5/podpora4.jpg',
				opts : {
					caption : 'Vir: Arhiv RS, AS 1944, Predsedstvo SR Slovenije, šk. 283.',
					thumb   : 'thumb/11/docs5/podpora4.jpg'
				}
			},
			{
				src: 'media/11/docs5/podpora5.jpg',
				opts : {
					caption : 'Vir: Arhiv Državnega zbora RS, fond Skupščina Slovenije, šk. 5, št. zadeve: 235/90.',
					thumb   : 'thumb/11/docs5/podpora5.jpg'
				}
			},
			{
				src: 'media/11/docs5/podpora6a.jpg',
				opts : {
					caption : 'Vir: Arhiv Vlade RS, št. zadeve: 191-01/90-3/5-1.',
					thumb   : 'thumb/11/docs5/podpora6a.jpg'
				}
			},
			{
				src: 'media/11/docs5/podpora6b.jpg',
				opts : {
					caption : 'Vir: Arhiv Vlade RS, št. zadeve: 191-01/90-3/5-1.',
					thumb   : 'thumb/11/docs5/podpora6b.jpg'
				}
			},
			{
				src: 'media/11/docs5/podpora6c.jpg',
				opts : {
					caption : 'Vir: Arhiv Vlade RS, št. zadeve: 191-01/90-3/5-1.',
					thumb   : 'thumb/11/docs5/podpora6c.jpg'
				}
			},
			{
				src: 'media/11/docs5/podpora6d.jpg',
				opts : {
					caption : 'Vir: Arhiv Vlade RS, št. zadeve: 191-01/90-3/5-1.',
					thumb   : 'thumb/11/docs5/podpora6d.jpg'
				}
			},
			{
				src: 'media/11/docs5/podpora6e.jpg',
				opts : {
					caption : 'Vir: Arhiv Vlade RS, št. zadeve: 191-01/90-3/5-1.',
					thumb   : 'thumb/11/docs5/podpora6e.jpg'
				}
			},
			{
				src: 'media/11/docs5/podpora7.jpg',
				opts : {
					caption : 'Vir: Arhiv Državnega zbora RS, fond Skupščina Slovenije, šk. 5, št. zadeve: 001-01/90-2.',
					thumb   : 'thumb/11/docs5/podpora7.jpg'
				}
			},
			{
				src: 'media/11/docs5/podpora8.jpg',
				opts : {
					caption : 'Vir: Arhiv Državnega zbora RS, fond Skupščina Slovenije, šk. 3, št. zadeve: 005-02/89-1.',
					thumb   : 'thumb/11/docs5/podpora8.jpg'
				}
			},
		], {
			loop: false,
			buttons: ["zoom", "thumbs", "close"],
			thumbs: { autoStart: true }
		});
	});

	/*
	 *  Dokumenti z nasprotovanjem plebiscitu
	 */
	$('#docs5_nasprotovanje').click(function () {
		$.fancybox.open([
			{
				src: 'media/11/docs5/nasprotovanje1.jpg',
				opts : {
					caption : 'Vir: Arhiv Državnega zbora RS, fond Skupščina Slovenije, šk. 3, št. zadeve: 005-02/89-1/3-1.',
					thumb   : 'thumb/11/docs5/nasprotovanje1.jpg'
				}
			},
			{
				src: 'media/11/docs5/nasprotovanje2.jpg',
				opts : {
					caption : 'Vir: Arhiv Državnega zbora RS, fond Skupščina Slovenije, šk. 3, št. zadeve: 005-02/89-1/5-1.',
					thumb   : 'thumb/11/docs5/nasprotovanje2.jpg'
				}
			},
			/*{
				src: 'media/11/docs5/nasprotovanje3.jpg',
				opts : {
					caption : 'Vir: Arhiv RS, AS 1210, Zbirka Plebiscit 1990, šk. 530.',
					thumb   : 'thumb/11/docs5/nasprotovanje3.jpg'
				}
			},*/
			{
				src: 'media/11/docs5/nasprotovanje4.jpg',
				opts : {
					caption : 'Vir: Arhiv RS, AS 1210, Zbirka Plebiscit 1990, šk. 530.',
					thumb   : 'thumb/11/docs5/nasprotovanje4.jpg'
				}
			},
		], {
			loop: false,
			buttons: ["zoom", "thumbs", "close"],
			thumbs: { autoStart: true }
		});
	});

	/*
	 *  Karikature
	 */
	$('#delo_4').click(function () {
		$.fancybox.open([
			{
				src: 'media/11/karikatura_delo_4.jpg',
				opts : {
					caption : 'Vir: »Na odprtem odru«, Franco Juri, Delo, 14. 11. 1990, str. 1.',
					thumb   : 'thumb/11/delo_4.jpg'
				}
			},
		], {
			loop: false,
			buttons: ["zoom", "thumbs", "close"],
			thumbs: { autoStart: true }
		});
	});

	$('#politika_expres_1').click(function () {
		$.fancybox.open([
			{
				src: 'media/11/karikatura_politika_expres_1.jpg',
				opts : {
					caption : 'Vir: »Plebiscit«, M. Sekerezović, Politika ekspres, 23. 12. 1990, str. 5.',
					thumb   : 'thumb/11/karikatura_politika_expres_1.jpg'
				}
			},
		], {
			loop: false,
			buttons: ["zoom", "thumbs", "close"],
			thumbs: { autoStart: true }
		});
	});

	$('#politika_expres_7').click(function () {
		$.fancybox.open([
			{
				src: 'media/11/karikatura_politika_expres_7.jpg',
				opts : {
					caption : 'Vir: »Evropa«, J. Samarđić, Politika ekspres, 8. 12. 1990, str. 4.',
					thumb   : 'thumb/11/karikatura_politika_expres_7.jpg'
				}
			},
		], {
			loop: false,
			buttons: ["zoom", "thumbs", "close"],
			thumbs: { autoStart: true }
		});
	});

});
