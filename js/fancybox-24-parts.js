$(document).ready(function() {

	/*
	 *  Cover
	 */
	$('#samostojnost41').click(function () {
		$.fancybox.open([
			{
				src: 'media/24/cover241.jpg',
				opts : {
					caption : 'Vir: Vaja Premik, avtor Marjan Garbajs, hrani Park vojaške zgodovine Pivka.',
					thumb   : 'media/24/cover241.jpg'
				}
			},
		], {
			loop: false,
			buttons: ["zoom", "thumbs", "close"],
			thumbs: { autoStart: true }
		});
	});

	/*
	 *  Diareja 1_01
	 */
	$('#diareja_mladina_supersonic').click(function () {
		$.fancybox.open([
			{
				src: 'media/24/diareja_mladina_supersonic.jpg',
				opts : {
					caption : 'Vir: Diareja, Tomaž Lavrič: »Neuresničen projekt domače vojaške industrije - nadzvočno bojno letalo Supersonic«, Mladina, 1989.',
					thumb   : 'media/24/diareja_mladina_supersonic.jpg'
				}
			},
		], {
			loop: false,
			buttons: ["zoom", "thumbs", "close"],
			thumbs: { autoStart: true }
		});
	});

	/*
	 *  Nekaj misli o vojaškem roku
	 */
	$('#docs1_misli').click(function () {
		$.fancybox.open([
			{
				src: 'media/24/docs1/misli.jpg',
				opts : {
					caption : 'Vir: Nekaj misli o vojaškem roku, Pogovori, št. 1, 1986-1987, str. 16-17.',
					thumb   : 'thumb/24/docs1/misli.jpg'
				}
			},
		], {
			loop: false,
			buttons: ["zoom", "thumbs", "close"],
			thumbs: { autoStart: true }
		});
	});

	/*
	 *  Pozdrav miru
	 */
	$('#docs1_mir').click(function () {
		$.fancybox.open([
			{
				src: 'media/24/docs1/pozdrav_miru.jpg',
				opts : {
					caption : 'Vir: Pozdrav miru, Pogovori, št. 1, 1986-1987, str. 18-19.',
					thumb   : 'thumb/24/docs1/pozdrav_miru.jpg'
				}
			},
		], {
			loop: false,
			buttons: ["zoom", "thumbs", "close"],
			thumbs: { autoStart: true }
		});
	});

	/*
	 *  Ukaz o razorožitvi
	 */
	$('#docs1_ukaz').click(function () {
		$.fancybox.open([
			{
				src: 'media/24/docs1/ukaz1.jpg',
				opts : {
					caption : 'Spletni vir: Ukaz o razorožitvi, Vojaški muzej SV.',
					thumb   : 'thumb/24/docs1/ukaz1.jpg'
				}
			},
			{
				src: 'media/24/docs1/ukaz2.jpg',
				opts : {
					caption : 'Spletni vir: Ukaz o razorožitvi, Vojaški muzej SV.',
					thumb   : 'thumb/24/docs1/ukaz2.jpg'
				}
			},
		], {
			loop: false,
			buttons: ["zoom", "thumbs", "close"],
			thumbs: { autoStart: true }
		});
	});

	/*
	 *  Odmevi v časopisju
	 */
	$('#news1_1').click(function () {
		$.fancybox.open([
			{
				src: 'media/24/news1/01.jpg',
				opts : {
					caption : 'Vir: »Upravičeni protesti«, Večer, 23. 5. 1990, str. 2.',
					thumb   : 'thumb/24/news1/01.jpg'
				}
			},
			{
				src: 'media/24/news1/02.jpg',
				opts : {
					caption : 'Vir: »Orožje dobiti nazaj«, Večer, 21. 5. 1990, str. 2.',
					thumb   : 'thumb/24/news1/02.jpg'
				}
			},
			{
				src: 'media/24/news1/03.jpg',
				opts : {
					caption : 'Vir: »Čigava je TO«, Naša obramba, leto 22, št. 5, maj 1990, str. 4.',
					thumb   : 'thumb/24/news1/03.jpg'
				}
			},
			{
				src: 'media/24/news1/04.jpg',
				opts : {
					caption : 'Vir: »Vrnitev orožja«, Primorske novice, št. 46, 12. 6. 1990, str. 3.',
					thumb   : 'thumb/24/news1/04.jpg'
				}
			},
		], {
			loop: false,
			buttons: ["zoom", "thumbs", "close"],
			thumbs: { autoStart: true }
		});
	});

	/*
	 *  Odločba o imenovanju načelnika Narodne Zaščite
	 */
	$('#docs1_odlocba').click(function () {
		$.fancybox.open([
			{
				src: 'media/24/docs1/odlocba.jpg',
				opts : {
					caption : 'Vir: Odločba o imenovanju načelnika Narodne Zaščite, arhiv Muzej novejše zgodovine Slovenije.',
					thumb   : 'thumb/24/docs1/odlocba.jpg'
				}
			},
		], {
			loop: false,
			buttons: ["zoom", "thumbs", "close"],
			thumbs: { autoStart: true }
		});
	});

	/*
	 *  Razglednice
	 */
	$('#docs1_razglednice').click(function () {
		$.fancybox.open([
			{
				src: 'media/24/docs1/razglednica1.jpg',
				opts : {
					caption : 'Vir: Razglednica - skrivanje orožja, Pokrajinski muzej Brežice.',
					thumb   : 'thumb/24/docs1/razglednica1.jpg'
				}
			},
			{
				src: 'media/24/docs1/razglednica2.jpg',
				opts : {
					caption : 'Vir: Razglednica - skrivanje orožja, Pokrajinski muzej Brežice.',
					thumb   : 'thumb/24/docs1/razglednica2.jpg'
				}
			},
		], {
			loop: false,
			buttons: ["zoom", "thumbs", "close"],
			thumbs: { autoStart: true },
			baseClass : 'gallery'
		});
	});

	/*
	 *  Gonilo slovenske vojske
	 */
	$('#news1_2').click(function () {
		$.fancybox.open([
			{
				src: 'media/24/news1/11.jpg',
				opts : {
					caption : 'Vir: »Gonilo slovenske vojske«, Primorske novice, št. 37, 19. 5. 1992, str. 20.',
					thumb   : 'thumb/24/news1/11.jpg'
				}
			},
		], {
			loop: false,
			buttons: ["zoom", "thumbs", "close"],
			thumbs: { autoStart: true }
		});
	});

	/*
	 *  Igor Bavčar ob zasedbi RŠTO
	 */
	$('#zasedba_rsto').click(function () {
		$.fancybox.open([
			{
				src: 'media/24/photo/zasedba_rsto.jpg',
				opts : {
					caption : 'Vir: Igor Bavčar ob zasedbi RŠTO, 5. 10. 1990, avtor Igor Napast, hrani Večer.',
					thumb   : 'thumb/24/photo/zasedba_rsto.jpg'
				}
			},
		], {
			loop: false,
			buttons: ["zoom", "thumbs", "close"],
			thumbs: { autoStart: true }
		});
	});

	/*
	 *  Odmevi v časopisju
	 */
	$('#news1_3').click(function () {
		$.fancybox.open([
			{
				src: 'media/24/news1/21.jpg',
				opts : {
					caption : 'Vir: »Ni razloga za vznemirjenje!«, Večer, 6. 10. 1990, str. 2.',
					thumb   : 'thumb/24/news1/21.jpg'
				}
			},
			{
				src: 'media/24/news1/22.jpg',
				opts : {
					caption : 'Vir: »Nasilen vdor vojaške policije«, Delo, 6. 10. 1990, str. 1.',
					thumb   : 'thumb/24/news1/22.jpg'
				}
			},
			{
				src: 'media/24/news1/23.jpg',
				opts : {
					caption : 'Vir: »Novi poveljnik TO«, Večer, 5. 10. 1990, str. 3.',
					thumb   : 'thumb/24/news1/23.jpg'
				}
			},
			{
				src: 'media/24/news1/24.jpg',
				opts : {
					caption : 'Vir: »Odmevi slovenskih strank po včerajšnji zasedbi bivše zgradbe RŠ TO«, Večer, 6. 10. 1990, str. 4.',
					thumb   : 'thumb/24/news1/24.jpg'
				}
			},
			{
				src: 'media/24/news1/25.jpg',
				opts : {
					caption : 'Vir: »Puč odstavljenega poveljnika TO Slovenije«, Primorske novice, št. 80, 9. 10. 1990, str. 2.',
					thumb   : 'thumb/24/news1/25.jpg'
				}
			},
		], {
			loop: false,
			buttons: ["zoom", "thumbs", "close"],
			thumbs: { autoStart: true }
		});
	});

	/*
	 *  Karikatura Na muhi
	 */
	$('#karikatura_na_muhi').click(function () {
		$.fancybox.open([
			{
				src: 'media/24/karikatura_na_muhi.jpg',
				opts : {
					caption : 'Vir: Karikatura »Na muhi«, avtor Franco Juri, Delo, 6. 10. 1990, str. 1.',
					thumb   : 'media/24/karikatura_na_muhi.jpg'
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
	$('#samostojnost42').click(function () {
		$.fancybox.open([
			{
				src: 'media/24/cover242.jpg',
				opts : {
					caption : 'Vir: Postroj v Kočevski reki, avtor Marjan Garbajs, hrani Park vojaške zgodovine Pivka.',
					thumb   : 'media/24/cover242.jpg'
				}
			},
		], {
			loop: false,
			buttons: ["zoom", "thumbs", "close"],
			thumbs: { autoStart: true }
		});
	});

	/*
	 *  Fotogalerija 1
	 */
	$('.photo2_1').click(function () {
		$.fancybox.open([
			{
				src: 'media/24/photo/postroj01.jpg',
				opts : {
					caption : 'Vir: Postroj v Kočevski reki, avtor Marjan Garbajs, hrani Park vojaške zgodovine Pivka.',
					thumb   : 'thumb/24/photo/postroj01.jpg'
				}
			},
			{
				src: 'media/24/photo/postroj02.jpg',
				opts : {
					caption : 'Vir: Postroj v Kočevski reki, avtor Marjan Garbajs, hrani Park vojaške zgodovine Pivka.',
					thumb   : 'thumb/24/photo/postroj02.jpg'
				}
			},
			{
				src: 'media/24/photo/postroj03.jpg',
				opts : {
					caption : 'Vir: Postroj v Kočevski reki, avtor Marjan Garbajs, hrani Park vojaške zgodovine Pivka.',
					thumb   : 'thumb/24/photo/postroj03.jpg'
				}
			},
			{
				src: 'media/24/photo/postroj04.jpg',
				opts : {
					caption : 'Vir: Postroj v Kočevski reki, avtor Marjan Garbajs, hrani Park vojaške zgodovine Pivka.',
					thumb   : 'thumb/24/photo/postroj04.jpg'
				}
			},
			{
				src: 'media/24/photo/postroj06.jpg',
				opts : {
					caption : 'Vir: Postroj v Kočevski reki, avtor Marjan Garbajs, hrani Park vojaške zgodovine Pivka.',
					thumb   : 'thumb/24/photo/postroj06.jpg'
				}
			},
			{
				src: 'media/24/photo/postroj09.jpg',
				opts : {
					caption : 'Vir: Postroj v Kočevski reki, avtor Marjan Garbajs, hrani Park vojaške zgodovine Pivka.',
					thumb   : 'thumb/24/photo/postroj09.jpg'
				}
			},
			{
				src: 'media/24/photo/postroj12.jpg',
				opts : {
					caption : 'Vir: Postroj v Kočevski reki, avtor Marjan Garbajs, hrani Park vojaške zgodovine Pivka.',
					thumb   : 'thumb/24/photo/postroj12.jpg'
				}
			},
			{
				src: 'media/24/photo/postroj14.jpg',
				opts : {
					caption : 'Vir: Postroj v Kočevski reki, avtor Marjan Garbajs, hrani Park vojaške zgodovine Pivka.',
					thumb   : 'thumb/24/photo/postroj14.jpg'
				}
			},
			{
				src: 'media/24/photo/postroj16.jpg',
				opts : {
					caption : 'Vir: Postroj v Kočevski reki, avtor Marjan Garbajs, hrani Park vojaške zgodovine Pivka.',
					thumb   : 'thumb/24/photo/postroj16.jpg'
				}
			},
			{
				src: 'media/24/photo/postroj18.jpg',
				opts : {
					caption : 'Vir: Postroj v Kočevski reki, avtor Marjan Garbajs, hrani Park vojaške zgodovine Pivka.',
					thumb   : 'thumb/24/photo/postroj18.jpg'
				}
			},
			{
				src: 'media/24/photo/postroj19.jpg',
				opts : {
					caption : 'Vir: Postroj v Kočevski reki, avtor Marjan Garbajs, hrani Park vojaške zgodovine Pivka.',
					thumb   : 'thumb/24/photo/postroj19.jpg'
				}
			},
			{
				src: 'media/24/photo/postroj20.jpg',
				opts : {
					caption : 'Vir: Postroj v Kočevski reki, avtor Marjan Garbajs, hrani Park vojaške zgodovine Pivka.',
					thumb   : 'thumb/24/photo/postroj20.jpg'
				}
			},
			{
				src: 'media/24/photo/postroj21.jpg',
				opts : {
					caption : 'Vir: Postroj v Kočevski reki, avtor Marjan Garbajs, hrani Park vojaške zgodovine Pivka.',
					thumb   : 'thumb/24/photo/postroj21.jpg'
				}
			},
			{
				src: 'media/24/photo/postroj22.jpg',
				opts : {
					caption : 'Vir: Postroj v Kočevski reki, avtor Marjan Garbajs, hrani Park vojaške zgodovine Pivka.',
					thumb   : 'thumb/24/photo/postroj22.jpg'
				}
			},
			{
				src: 'media/24/photo/postroj23.jpg',
				opts : {
					caption : 'Vir: Postroj v Kočevski reki, avtor Marjan Garbajs, hrani Park vojaške zgodovine Pivka.',
					thumb   : 'thumb/24/photo/postroj23.jpg'
				}
			},
			{
				src: 'media/24/photo/postroj31.jpg',
				opts : {
					caption : 'Vir: Postroj v Kočevski reki, avtor Marjan Garbajs, hrani Park vojaške zgodovine Pivka.',
					thumb   : 'thumb/24/photo/postroj31.jpg'
				}
			},
			{
				src: 'media/24/photo/postroj33.jpg',
				opts : {
					caption : 'Vir: Postroj v Kočevski reki, avtor Marjan Garbajs, hrani Park vojaške zgodovine Pivka.',
					thumb   : 'thumb/24/photo/postroj33.jpg'
				}
			},
		], {
			loop: false,
			buttons: ["zoom", "thumbs", "close"],
			thumbs: { autoStart: true },
			baseClass : 'gallery'
		});
	});

	/*
	 *  Odmevi v časopisju
	 */
	$('#news2_1').click(function () {
		$.fancybox.open([
			{
				src: 'media/24/news2/01.jpg',
				opts : {
					caption : 'Vir: »Vpoklic v prihodnjih dneh«, Primorske novice, št. 65, 17. 8. 1990, str. 3.',
					thumb   : 'thumb/24/news2/01.jpg'
				}
			},
			{
				src: 'media/24/news2/02.jpg',
				opts : {
					caption : 'Vir: »Armada ima velike apetite«, Primorske novice, št. 19, 8. 3. 1991, str. 3.',
					thumb   : 'thumb/24/news2/02.jpg'
				}
			},
			{
				src: 'media/24/news2/03.jpg',
				opts : {
					caption : 'Vir: »Z orožjem ali brez«, Primorske novice, št. 5, 18. 1. 1991, str. 3.',
					thumb   : 'thumb/24/news2/03.jpg'
				}
			},
		], {
			loop: false,
			buttons: ["zoom", "thumbs", "close"],
			thumbs: { autoStart: true }
		});
	});

	/*
	 *  Karikatura Kam na služenje vojaškega roka
	 */
	$('#karikatura_kam').click(function () {
		$.fancybox.open([
			{
				src: 'media/24/karikatura_kam.jpg',
				opts : {
					caption : 'Vir: Karikatura »Kam na služenje vojaškega roka«, Primorske novice, 31. 8. 1990, str. 2.',
					thumb   : 'thumb/24/karikatura_kam.jpg'
				}
			},
		], {
			loop: false,
			buttons: ["zoom", "thumbs", "close"],
			thumbs: { autoStart: true }
		});
	});

	/*
	 *  Odmevi v časopisju
	 */
	$('#news2_2').click(function () {
		$.fancybox.open([
			{
				src: 'media/24/news2/11.jpg',
				opts : {
					caption : 'Vir: »Deklaracija za mir«, Primorske novice, št. 16, 26. 2. 1991, str. 10.',
					thumb   : 'thumb/24/news2/11.jpg'
				}
			},
			{
				src: 'media/24/news2/12.jpg',
				opts : {
					caption : 'Vir: »Za Slovenijo brez vojske«, Primorske novice, št. 16, 26. 2. 1991.',
					thumb   : 'thumb/24/news2/12.jpg'
				}
			},
			{
				src: 'media/24/news2/13.jpg',
				opts : {
					caption : 'Vir: »Slovenija brez vojske«, Primorske novice, št. 90, 13. 11. 1990, str. 3.',
					thumb   : 'thumb/24/news2/13.jpg'
				}
			},
			{
				src: 'media/24/news2/14.jpg',
				opts : {
					caption : 'Vir: »Slovenija - demilitarizirana dežela«, Primorske novice, 21. 9. 1990, str. 3.',
					thumb   : 'thumb/24/news2/14.jpg'
				}
			},
		], {
			loop: false,
			buttons: ["zoom", "thumbs", "close"],
			thumbs: { autoStart: true }
		});
	});

	/*
	 *  Sklep o ustanovitvi koordinacijskega telesa
	 */
	$('#docs2_sklep').click(function () {
		$.fancybox.open([
			{
				src: 'media/24/docs2/sukt1.jpg',
				opts : {
					caption : 'Vir: Sklep o ustanovitvi koordinacijskega telesa, hrani Urad predsednika RS.',
					thumb   : 'thumb/24/docs2/sukt1.jpg'
				}
			},
			{
				src: 'media/24/docs2/sukt2.jpg',
				opts : {
					caption : 'Vir: Sklep o ustanovitvi koordinacijskega telesa, hrani Urad predsednika RS.',
					thumb   : 'thumb/24/docs2/sukt2.jpg'
				}
			},
			{
				src: 'media/24/docs2/sukt3.jpg',
				opts : {
					caption : 'Vir: Sklep o ustanovitvi koordinacijskega telesa, hrani Urad predsednika RS.',
					thumb   : 'thumb/24/docs2/sukt3.jpg'
				}
			},
			{
				src: 'media/24/docs2/sukt4.jpg',
				opts : {
					caption : 'Vir: Sklep o ustanovitvi koordinacijskega telesa, hrani Urad predsednika RS.',
					thumb   : 'thumb/24/docs2/sukt4.jpg'
				}
			},
			{
				src: 'media/24/docs2/sukt5.jpg',
				opts : {
					caption : 'Vir: Sklep o ustanovitvi koordinacijskega telesa, hrani Urad predsednika RS.',
					thumb   : 'thumb/24/docs2/sukt5.jpg'
				}
			},
		], {
			loop: false,
			buttons: ["zoom", "thumbs", "close"],
			thumbs: { autoStart: true }
		});
	});

	/*
	 *  Vojaška vaja Premik
	 */
	$('#photo_premik').click(function () {
		$.fancybox.open([
			{
				src: 'media/24/photo/premik1.jpg',
				opts : {
					caption : 'Vir: Vaja Premik \'91, avtor Marjan Garbajs, hrani Park vojaške zgodovine Pivka.',
					thumb   : 'thumb/24/photo/premik1.jpg'
				}
			},
			{
				src: 'media/24/photo/premik2.jpg',
				opts : {
					caption : 'Vir: Vaja Premik \'91, avtor Marjan Garbajs, hrani Park vojaške zgodovine Pivka.',
					thumb   : 'thumb/24/photo/premik2.jpg'
				}
			},
		], {
			loop: false,
			buttons: ["zoom", "thumbs", "close"],
			thumbs: { autoStart: true },
			baseClass : 'gallery'
		});
	});

	/*
	 *  Obramba Slovenije zagotovljena
	 */
	$('#news2_3').click(function () {
		$.fancybox.open([
			{
				src: 'media/24/news2/21.jpg',
				opts : {
					caption : 'Vir: »Obramba Slovenije je zagotovljena«, Primorske novice, št. 24, 26. 3. 1991.',
					thumb   : 'thumb/24/news2/21.jpg'
				}
			},
		], {
			loop: false,
			buttons: ["zoom", "thumbs", "close"],
			thumbs: { autoStart: true }
		});
	});

	/*
	 *  Zakon o obrambi in zaščiti
	 */
	$('#docs2_zoz').click(function () {
		$.fancybox.open([
			{
				src: 'media/24/docs2/zoz01.jpg',
				opts : {
					caption : 'Spletni vir: Zakon o obrambi in zaščiti, Služba za zakonodajo.',
					thumb   : 'thumb/24/docs2/zoz01.jpg'
				}
			},
			{
				src: 'media/24/docs2/zoz02.jpg',
				opts : {
					caption : 'Spletni vir: Zakon o obrambi in zaščiti, Služba za zakonodajo.',
					thumb   : 'thumb/24/docs2/zoz02.jpg'
				}
			},
			{
				src: 'media/24/docs2/zoz03.jpg',
				opts : {
					caption : 'Spletni vir: Zakon o obrambi in zaščiti, Služba za zakonodajo.',
					thumb   : 'thumb/24/docs2/zoz03.jpg'
				}
			},
			{
				src: 'media/24/docs2/zoz04.jpg',
				opts : {
					caption : 'Spletni vir: Zakon o obrambi in zaščiti, Služba za zakonodajo.',
					thumb   : 'thumb/24/docs2/zoz04.jpg'
				}
			},
			{
				src: 'media/24/docs2/zoz05.jpg',
				opts : {
					caption : 'Spletni vir: Zakon o obrambi in zaščiti, Služba za zakonodajo.',
					thumb   : 'thumb/24/docs2/zoz05.jpg'
				}
			},
			{
				src: 'media/24/docs2/zoz06.jpg',
				opts : {
					caption : 'Spletni vir: Zakon o obrambi in zaščiti, Služba za zakonodajo.',
					thumb   : 'thumb/24/docs2/zoz06.jpg'
				}
			},
			{
				src: 'media/24/docs2/zoz07.jpg',
				opts : {
					caption : 'Spletni vir: Zakon o obrambi in zaščiti, Služba za zakonodajo.',
					thumb   : 'thumb/24/docs2/zoz07.jpg'
				}
			},
			{
				src: 'media/24/docs2/zoz08.jpg',
				opts : {
					caption : 'Spletni vir: Zakon o obrambi in zaščiti, Služba za zakonodajo.',
					thumb   : 'thumb/24/docs2/zoz08.jpg'
				}
			},
			{
				src: 'media/24/docs2/zoz09.jpg',
				opts : {
					caption : 'Spletni vir: Zakon o obrambi in zaščiti, Služba za zakonodajo.',
					thumb   : 'thumb/24/docs2/zoz09.jpg'
				}
			},
			{
				src: 'media/24/docs2/zoz10.jpg',
				opts : {
					caption : 'Spletni vir: Zakon o obrambi in zaščiti, Služba za zakonodajo.',
					thumb   : 'thumb/24/docs2/zoz10.jpg'
				}
			},
			{
				src: 'media/24/docs2/zoz11.jpg',
				opts : {
					caption : 'Spletni vir: Zakon o obrambi in zaščiti, Služba za zakonodajo.',
					thumb   : 'thumb/24/docs2/zoz11.jpg'
				}
			},
			{
				src: 'media/24/docs2/zoz12.jpg',
				opts : {
					caption : 'Spletni vir: Zakon o obrambi in zaščiti, Služba za zakonodajo.',
					thumb   : 'thumb/24/docs2/zoz12.jpg'
				}
			},
			{
				src: 'media/24/docs2/zoz13.jpg',
				opts : {
					caption : 'Spletni vir: Zakon o obrambi in zaščiti, Služba za zakonodajo.',
					thumb   : 'thumb/24/docs2/zoz13.jpg'
				}
			},
			{
				src: 'media/24/docs2/zoz14.jpg',
				opts : {
					caption : 'Spletni vir: Zakon o obrambi in zaščiti, Služba za zakonodajo.',
					thumb   : 'thumb/24/docs2/zoz14.jpg'
				}
			},
			{
				src: 'media/24/docs2/zoz15.jpg',
				opts : {
					caption : 'Spletni vir: Zakon o obrambi in zaščiti, Služba za zakonodajo.',
					thumb   : 'thumb/24/docs2/zoz15.jpg'
				}
			},
			{
				src: 'media/24/docs2/zoz16.jpg',
				opts : {
					caption : 'Spletni vir: Zakon o obrambi in zaščiti, Služba za zakonodajo.',
					thumb   : 'thumb/24/docs2/zoz16.jpg'
				}
			},
			{
				src: 'media/24/docs2/zoz17.jpg',
				opts : {
					caption : 'Spletni vir: Zakon o obrambi in zaščiti, Služba za zakonodajo.',
					thumb   : 'thumb/24/docs2/zoz17.jpg'
				}
			},
			{
				src: 'media/24/docs2/zoz18.jpg',
				opts : {
					caption : 'Spletni vir: Zakon o obrambi in zaščiti, Služba za zakonodajo.',
					thumb   : 'thumb/24/docs2/zoz18.jpg'
				}
			},
			{
				src: 'media/24/docs2/zoz19.jpg',
				opts : {
					caption : 'Spletni vir: Zakon o obrambi in zaščiti, Služba za zakonodajo.',
					thumb   : 'thumb/24/docs2/zoz19.jpg'
				}
			},
			{
				src: 'media/24/docs2/zoz20.jpg',
				opts : {
					caption : 'Spletni vir: Zakon o obrambi in zaščiti, Služba za zakonodajo.',
					thumb   : 'thumb/24/docs2/zoz20.jpg'
				}
			},
			{
				src: 'media/24/docs2/zoz21.jpg',
				opts : {
					caption : 'Spletni vir: Zakon o obrambi in zaščiti, Služba za zakonodajo.',
					thumb   : 'thumb/24/docs2/zoz21.jpg'
				}
			},
		], {
			loop: false,
			buttons: ["zoom", "thumbs", "close"],
			thumbs: { autoStart: true }
		});
	});

	/*
	 *  Zakon o vojaški dolžnosti
	 */
	$('#docs2_zvd').click(function () {
		$.fancybox.open([
			{
				src: 'media/24/docs2/zvd01.jpg',
				opts : {
					caption : 'Spletni vir: Zakon o vojaški dolžnosti, Služba za zakonodajo.',
					thumb   : 'thumb/24/docs2/zvd01.jpg'
				}
			},
			{
				src: 'media/24/docs2/zvd02.jpg',
				opts : {
					caption : 'Spletni vir: Zakon o vojaški dolžnosti, Služba za zakonodajo.',
					thumb   : 'thumb/24/docs2/zvd02.jpg'
				}
			},
			{
				src: 'media/24/docs2/zvd03.jpg',
				opts : {
					caption : 'Spletni vir: Zakon o vojaški dolžnosti, Služba za zakonodajo.',
					thumb   : 'thumb/24/docs2/zvd03.jpg'
				}
			},
			{
				src: 'media/24/docs2/zvd04.jpg',
				opts : {
					caption : 'Spletni vir: Zakon o vojaški dolžnosti, Služba za zakonodajo.',
					thumb   : 'thumb/24/docs2/zvd04.jpg'
				}
			},
			{
				src: 'media/24/docs2/zvd05.jpg',
				opts : {
					caption : 'Spletni vir: Zakon o vojaški dolžnosti, Služba za zakonodajo.',
					thumb   : 'thumb/24/docs2/zvd05.jpg'
				}
			},
			{
				src: 'media/24/docs2/zvd06.jpg',
				opts : {
					caption : 'Spletni vir: Zakon o vojaški dolžnosti, Služba za zakonodajo.',
					thumb   : 'thumb/24/docs2/zvd06.jpg'
				}
			},
			{
				src: 'media/24/docs2/zvd07.jpg',
				opts : {
					caption : 'Spletni vir: Zakon o vojaški dolžnosti, Služba za zakonodajo.',
					thumb   : 'thumb/24/docs2/zvd07.jpg'
				}
			},
			{
				src: 'media/24/docs2/zvd08.jpg',
				opts : {
					caption : 'Spletni vir: Zakon o vojaški dolžnosti, Služba za zakonodajo.',
					thumb   : 'thumb/24/docs2/zvd08.jpg'
				}
			},
			{
				src: 'media/24/docs2/zvd09.jpg',
				opts : {
					caption : 'Spletni vir: Zakon o vojaški dolžnosti, Služba za zakonodajo.',
					thumb   : 'thumb/24/docs2/zvd09.jpg'
				}
			},
			{
				src: 'media/24/docs2/zvd10.jpg',
				opts : {
					caption : 'Spletni vir: Zakon o vojaški dolžnosti, Služba za zakonodajo.',
					thumb   : 'thumb/24/docs2/zvd10.jpg'
				}
			},
			{
				src: 'media/24/docs2/zvd11.jpg',
				opts : {
					caption : 'Spletni vir: Zakon o vojaški dolžnosti, Služba za zakonodajo.',
					thumb   : 'thumb/24/docs2/zvd11.jpg'
				}
			},
		], {
			loop: false,
			buttons: ["zoom", "thumbs", "close"],
			thumbs: { autoStart: true }
		});
	});

	/*
	 *  Odmevi v časopisju
	 */
	$('#news2_4').click(function () {
		$.fancybox.open([
			{
				src: 'media/24/news2/31.jpg',
				opts : {
					caption : 'Vir: »Slovenski fantje bodo po novem služili doma«, Delo, 8. 3. 1991, str. 1.',
					thumb   : 'thumb/24/news2/31.jpg'
				}
			},
			{
				src: 'media/24/news2/32.jpg',
				opts : {
					caption : 'Vir: »Novosti zakona«, Večer, 25. 6. 1991, str. 13.',
					thumb   : 'thumb/24/news2/32.jpg'
				}
			},
			{
				src: 'media/24/news2/33.jpg',
				opts : {
					caption : 'Vir: »Vojaki se vračajo domov«, Primorske novice, št. 41, 24. 5. 1991, str. 13.',
					thumb   : 'thumb/24/news2/33.jpg'
				}
			},
			{
				src: 'media/24/news2/41.jpg',
				opts : {
					caption : 'Vir: »Prisegla prva generacija vojakov«, Delo, 3. 6. 1991, str. 1.',
					thumb   : 'thumb/24/news2/41.jpg'
				}
			},
			{
				src: 'media/24/news2/42.jpg',
				opts : {
					caption : 'Vir: »Prisegli prvi slovenski vojaki«, Večer, 3. 6. 1991, str. 2.',
					thumb   : 'thumb/24/news2/42.jpg'
				}
			},
			{
				src: 'media/24/news2/43.jpg',
				opts : {
					caption : 'Vir: »Stroka postavila politiko pred vrata«, Primorske novice, 25. 6. 1991, št. 50, str. 7.',
					thumb   : 'thumb/24/news2/43.jpg'
				}
			},
		], {
			loop: false,
			buttons: ["zoom", "thumbs", "close"],
			thumbs: { autoStart: true }
		});
	});

	/*
	 *  Svojega brata hočem domov
	 */
	$('#hocem_brata').click(function () {
		$.fancybox.open([
			{
				src: 'media/24/photo/hocem_brata.jpg',
				opts : {
					caption : 'Vir: Svojega brata hočem domov, avtor Nace Bizilj, hrani Muzej novejše zgodovine Slovenije.',
					thumb   : 'thumb/24/photo/hocem_brata.jpg'
				}
			},
		], {
			loop: false,
			buttons: ["zoom", "thumbs", "close"],
			thumbs: { autoStart: true }
		});
	});

	/*
	 *  Ne žrtvujte naših sinov
	 */
	$('#news2_5a').click(function () {
		$.fancybox.open([
			{
				src: 'media/24/news2/51.jpg',
				opts : {
					caption : 'Vir: »Ne žrtvujte naših sinov JA!«, Primorske novice, št. 54, 9. 7. 1991, str. 7.',
					thumb   : 'thumb/24/news2/51.jpg'
				}
			},
		], {
			loop: false,
			buttons: ["zoom", "thumbs", "close"],
			thumbs: { autoStart: true }
		});
	});

	/*
	 *  Default
	 */
	$('#news2_5b').click(function () {
		$.fancybox.open([
			{
				src: 'media/24/news2/52.jpg',
				opts : {
					caption : 'Vir: »Koprski starši obiskali sinove v JA«, Primorske novice, št. 54, 9. 7. 1991, str. 6.',
					thumb   : 'thumb/24/news2/52.jpg'
				}
			},
		], {
			loop: false,
			buttons: ["zoom", "thumbs", "close"],
			thumbs: { autoStart: true }
		});
	});

});
