( function( $ ) {
	'use strict';

	/*panel btn*/
	$('.theme_panel .toggle_bts').on('click', 'a.sett', function(){
		if($(this).hasClass('active')) {
			$(this).removeClass('active');
            $('.theme_panel').removeClass('active');
		}
		else {
			$(this).addClass('active');
            $('.theme_panel').addClass('active');
		}
		return false;
	});

	/*colors panel*/
	$('.theme_panel .layout_style').on('click', 'a', function(){
		$(this).closest('.segment').find('a').removeClass('active');
		$(this).addClass('active');

		var color = $(this).attr('data-color');

		if(!$('#demo_layout_css').length) {
			$('head').append('<link rel="stylesheet" id="demo_layout_css" href="https://cvio.bslthemes.com/bar/css/'+color+'.css" />');
		}
		else {
			$('#demo_layout_css').attr('href', 'https://cvio.bslthemes.com/bar/css/'+color+'.css');
		}

		return false;
	});

	/*grained panel
	$('body').removeClass('grained-on');
	$('body').addClass('grained-off');
	$('.theme_panel .gr_style').on('click', 'a.off', function(){
		$(this).closest('ul').find('a').removeClass('active');
		$(this).addClass('active');
		$('body').removeClass('grained-on');
		$('body').addClass('grained-off');

		return false;
	});
	$('.theme_panel .gr_style').on('click', 'a.on', function(){
		$(this).closest('ul').find('a').removeClass('active');
		$(this).addClass('active');
		$('body').removeClass('grained-off');
		$('body').addClass('grained-on');

		return false;
	});*/

	/*lines panel
	$('.theme_panel .ln_style').on('click', 'a.off', function(){
		$(this).closest('ul').find('a').removeClass('active');
		$(this).addClass('active');
		$('body').removeClass('lines-on');
		$('body').addClass('lines-off');

		return false;
	});
	$('.theme_panel .ln_style').on('click', 'a.on', function(){
		$(this).closest('ul').find('a').removeClass('active');
		$(this).addClass('active');
		$('body').removeClass('lines-off');
		$('body').addClass('lines-on');

		return false;
	});*/
    
    /*dark panels*/
    if($('.theme-style-dark').length){
    	$('a[data-dark="dark"]').closest('.demo_list').find('a').removeClass('active');
		$('a[data-dark="dark"]').addClass('active');
	}
    $('.theme_panel .dark_style').on('click', 'a', function(){
    	$(this).closest('.demo_list').find('a').removeClass('active');
		$(this).addClass('active');
    	
		var dark = $(this).attr('data-skin');

		if(dark == 'dark') {
			$('#demo_dark_css').remove();
			$('#demo_light_css').remove();
			$('#cvio-light-css').remove();
			$('head').append('<link rel="stylesheet" id="demo_dark_css" href="https://cvio.bslthemes.com/bar/css/dark.css" />');
		}
		if(dark == 'light') {
			$('#demo_dark_css').remove();
			$('#demo_light_css').remove();
			$('#cvio-light-css').remove();
			$('head').append('<link rel="stylesheet" id="demo_light_css" href="https://cvio.bslthemes.com/bar/css/light.css" />');
		}

        return false;
	});

	/*direction panel
	var current_url = location.href;
	if( current_url.indexOf('https://ryancv.bslthemes.com/v6/') != -1 ) {
		$('.direction_style a[href="https://ryancv.bslthemes.com/v1"]').closest('.demo_list').find('a').removeClass('active');
		$('.direction_style a[href="https://ryancv.bslthemes.com/v6"]').addClass('active');
	}*/

} )( jQuery );