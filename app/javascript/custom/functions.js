/*! jRespond.js v 0.10 | Author: Jeremy Fields [jeremy.fields@viget.com], 2013 | License: MIT */
!function(a,b,c){"object"==typeof module&&module&&"object"==typeof module.exports?module.exports=c:(a[b]=c,"function"==typeof define&&define.amd&&define(b,[],function(){return c}))}(this,"jRespond",function(a,b,c){"use strict";return function(a){var b=[],d=[],e=a,f="",g="",i=0,j=100,k=500,l=k,m=function(){var a=0;return a="number"!=typeof window.innerWidth?0!==document.documentElement.clientWidth?document.documentElement.clientWidth:document.body.clientWidth:window.innerWidth},n=function(a){if(a.length===c)o(a);else for(var b=0;b<a.length;b++)o(a[b])},o=function(a){var e=a.breakpoint,h=a.enter||c;b.push(a),d.push(!1),r(e)&&(h!==c&&h.call(null,{entering:f,exiting:g}),d[b.length-1]=!0)},p=function(){for(var a=[],e=[],h=0;h<b.length;h++){var i=b[h].breakpoint,j=b[h].enter||c,k=b[h].exit||c;"*"===i?(j!==c&&a.push(j),k!==c&&e.push(k)):r(i)?(j===c||d[h]||a.push(j),d[h]=!0):(k!==c&&d[h]&&e.push(k),d[h]=!1)}for(var l={entering:f,exiting:g},m=0;m<e.length;m++)e[m].call(null,l);for(var n=0;n<a.length;n++)a[n].call(null,l)},q=function(a){for(var b=!1,c=0;c<e.length;c++)if(a>=e[c].enter&&a<=e[c].exit){b=!0;break}b&&f!==e[c].label?(g=f,f=e[c].label,p()):b||""===f||(f="",p())},r=function(a){if("object"==typeof a){if(a.join().indexOf(f)>=0)return!0}else{if("*"===a)return!0;if("string"==typeof a&&f===a)return!0}},s=function(){var a=m();a!==i?(l=j,q(a)):l=k,i=a,setTimeout(s,l)};return s(),{addFunc:function(a){n(a)},getBreakpoint:function(){return f}}}}(this,this.document));

var $ = jQuery.noConflict();

/*
 * jQuery Easing v1.4.1 - http://gsgd.co.uk/sandbox/jquery/easing/
 * Open source under the BSD License.
 * Copyright © 2008 George McGinley Smith
 * All rights reserved.
 * https://raw.github.com/gdsmith/jquery.easing/master/LICENSE
*/
!function(n){"function"==typeof define&&define.amd?define(["jquery"],function(e){return n(e)}):"object"==typeof module&&"object"==typeof module.exports?module.exports=n(require("jquery")):n(jQuery)}(function(n){function e(n){var e=7.5625,t=2.75;return n<1/t?e*n*n:n<2/t?e*(n-=1.5/t)*n+.75:n<2.5/t?e*(n-=2.25/t)*n+.9375:e*(n-=2.625/t)*n+.984375}void 0!==n.easing&&(n.easing.jswing=n.easing.swing);var t=Math.pow,u=Math.sqrt,r=Math.sin,i=Math.cos,a=Math.PI,o=1.70158,c=1.525*o,s=2*a/3,f=2*a/4.5;return n.extend(n.easing,{def:"easeOutQuad",swing:function(e){return n.easing[n.easing.def](e)},easeInQuad:function(n){return n*n},easeOutQuad:function(n){return 1-(1-n)*(1-n)},easeInOutQuad:function(n){return n<.5?2*n*n:1-t(-2*n+2,2)/2},easeInCubic:function(n){return n*n*n},easeOutCubic:function(n){return 1-t(1-n,3)},easeInOutCubic:function(n){return n<.5?4*n*n*n:1-t(-2*n+2,3)/2},easeInQuart:function(n){return n*n*n*n},easeOutQuart:function(n){return 1-t(1-n,4)},easeInOutQuart:function(n){return n<.5?8*n*n*n*n:1-t(-2*n+2,4)/2},easeInQuint:function(n){return n*n*n*n*n},easeOutQuint:function(n){return 1-t(1-n,5)},easeInOutQuint:function(n){return n<.5?16*n*n*n*n*n:1-t(-2*n+2,5)/2},easeInSine:function(n){return 1-i(n*a/2)},easeOutSine:function(n){return r(n*a/2)},easeInOutSine:function(n){return-(i(a*n)-1)/2},easeInExpo:function(n){return 0===n?0:t(2,10*n-10)},easeOutExpo:function(n){return 1===n?1:1-t(2,-10*n)},easeInOutExpo:function(n){return 0===n?0:1===n?1:n<.5?t(2,20*n-10)/2:(2-t(2,-20*n+10))/2},easeInCirc:function(n){return 1-u(1-t(n,2))},easeOutCirc:function(n){return u(1-t(n-1,2))},easeInOutCirc:function(n){return n<.5?(1-u(1-t(2*n,2)))/2:(u(1-t(-2*n+2,2))+1)/2},easeInElastic:function(n){return 0===n?0:1===n?1:-t(2,10*n-10)*r((10*n-10.75)*s)},easeOutElastic:function(n){return 0===n?0:1===n?1:t(2,-10*n)*r((10*n-.75)*s)+1},easeInOutElastic:function(n){return 0===n?0:1===n?1:n<.5?-t(2,20*n-10)*r((20*n-11.125)*f)/2:t(2,-20*n+10)*r((20*n-11.125)*f)/2+1},easeInBack:function(n){return 2.70158*n*n*n-o*n*n},easeOutBack:function(n){return 1+2.70158*t(n-1,3)+o*t(n-1,2)},easeInOutBack:function(n){return n<.5?t(2*n,2)*(7.189819*n-c)/2:(t(2*n-2,2)*((c+1)*(2*n-2)+c)+2)/2},easeInBounce:function(n){return 1-e(1-n)},easeOutBounce:e,easeInOutBounce:function(n){return n<.5?(1-e(1-2*n))/2:(1+e(2*n-1))/2}}),n});

// Scrolled
$.fn.scrollEnd = function(callback, timeout) {
	$(this).scroll(function(){
		let container = $(this);
		if (container.data('scrollTimeout')) {
			clearTimeout(container.data('scrollTimeout'));
		}
		container.data('scrollTimeout', setTimeout(callback,timeout));
	});
};

(function() {
	let lastTime = 0;
	let vendors = ['ms', 'moz', 'webkit', 'o'];
	for(let x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
		window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
		window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame']
									|| window[vendors[x]+'CancelRequestAnimationFrame'];
	}

	if (!window.requestAnimationFrame)
		window.requestAnimationFrame = function(callback, element) {
			let currTime = new Date().getTime();
			let timeToCall = Math.max(0, 16 - (currTime - lastTime));
			let id = window.setTimeout(function() { callback(currTime + timeToCall); },
			  timeToCall);
			lastTime = currTime + timeToCall;
			return id;
		};

	if (!window.cancelAnimationFrame)
		window.cancelAnimationFrame = function(id) {
			clearTimeout(id);
		};
}());

function debounce(func, wait, immediate) {
	let timeout, args, context, timestamp, result;
	return function() {
		context = this;
		args = arguments;
		timestamp = new Date();
		let later = function() {
			let last = (new Date()) - timestamp;
			if (last < wait) {
				timeout = setTimeout(later, wait - last);
			} else {
				timeout = null;
				if (!immediate) result = func.apply(context, args);
			}
		};
		let callNow = immediate && !timeout;
		if (!timeout) {
			timeout = setTimeout(later, wait);
		}
		if (callNow) result = func.apply(context, args);
		return result;
	};
}

var SEMICOLON = SEMICOLON || {};
window.scwEvents = window.scwEvents || {};

(function($){

	// USE STRICT
	"use strict";

	SEMICOLON.initialize = {

		init: function(){
			SEMICOLON.initialize.goToTop();
			SEMICOLON.initialize.dataResponsiveClasses();
			SEMICOLON.initialize.dataResponsiveHeights();
		},

		execFunc: function( functionName, context ) {
			let args = Array.prototype.slice.call( arguments, 2 ),
				namespaces = functionName.split("."),
				func = namespaces.pop();

			for( let i = 0; i < namespaces.length; i++ ) {
				context = context[namespaces[i]];
			}

			if( typeof context[func] !== 'undefined' ) {
				return context[func].apply( context, args );
			} else {
				console.log( functionName + ' Function does not exist' );
			}
		},

		execPlugin: function( element, settings, available ) {
			let pluginActive = false,
				pluginLinkingInterval;

			if( available ) {

				if( settings.trigger && !scwEvents[settings.trigger] ) {
					$window.trigger( settings.trigger );
					scwEvents[settings.trigger] = true;
				}

				if( settings.execfn ) {
					SEMICOLON.initialize.execFunc( settings.execfn, window, element );
				}

				if( settings.class ) {
					$body.addClass( settings.class );
				}

			} else {
				if( settings.trigger && !scwEvents[settings.trigger] ) {
					pluginLinkingInterval = setInterval( function plugFn(){
						let pluginFnExec = Function( 'return ' + settings.pluginfn )();
						if( pluginFnExec ) {
							$window.trigger( settings.trigger );
							scwEvents[settings.trigger] = true;
							clearInterval( pluginLinkingInterval );
						}
						return plugFn;
					}(), 1000);
				} else {
					pluginActive = true;
				}

				if( settings.execfn ) {
					if( settings.trigger && !pluginActive ) {
						$window.on( settings.trigger, function(){
							SEMICOLON.initialize.execFunc( settings.execfn, window, element );
						});
					} else {
						SEMICOLON.initialize.execFunc( settings.execfn, window, element );
					}
				}

				if( settings.class ) {
					$body.addClass( settings.class );
				}
			}
		},

		jsLinking: function( element, settings ) {
			if( element.length < 1 ){
				return false;
			}

			if( settings.hiddendisable && ( element.filter(':hidden').length == element.length ) ) {
				return false;
			}

			let pluginFnExec = Function( 'return ' + settings.pluginfn )(),
				jsPath = 'js/', file,
				disableAJAX = false;

			if( typeof scwJsPath !== 'undefined' ) {
				jsPath = scwJsPath + '/';
			}

			if( typeof scwDisableJsAJAX !== 'undefined' && scwDisableJsAJAX === true ) {
				disableAJAX = true;
			}

			if( /^(f|ht)tps?:\/\//i.test( window.decodeURIComponent( settings.file ) ) ) {
				file = settings.file;
			} else {
				file = jsPath + settings.file;
			}

			if( pluginFnExec ) {
				SEMICOLON.initialize.execPlugin( element, settings, true );
			} else {
				if( !disableAJAX ) {
					$.ajax({
						url: file,
						dataType: "script",
						cache: true,
						crossDomain: true,
						timeout: 5000,
					}).done(function() {
						SEMICOLON.initialize.execPlugin( element, settings, false );
					}).fail(function() {
						console.log( settings.error );
					});
				} else {
					console.log( settings.error );
				}
			}
		},

		functions: function( settings ){
			let element, parent, item;

			if( typeof settings.element === 'object' && settings.element !== null ) {
				if( settings.element.parent !== 'undefined' ) {
					parent = settings.element.parent;
				}
				if( settings.element.el !== 'undefined' ) {
					settings.element = settings.element.el;
				}
			}

			if( settings.element ) {
				item = settings.element;
			} else {
				item = settings.default;
			}

			if( parent === 'object' ) {
				element = parent.find( item );
			} else {
				element = $( item );
			}

			this.jsLinking( element, settings );
		},

		goToTop: function(){
			let elementScrollSpeed = $goToTopEl.attr('data-speed'),
				elementScrollEasing = $goToTopEl.attr('data-easing');

			if( !elementScrollSpeed ) { elementScrollSpeed = 700; }
			if( !elementScrollEasing ) { elementScrollEasing = 'easeOutQuad'; }

			$goToTopEl.off( 'click' ).on( 'click', function() {
				$('body,html').stop(true).animate({
					'scrollTop': 0
				}, Number( elementScrollSpeed ), elementScrollEasing );
				return false;
			});
		},

		goToTopScroll: function(){
			let elementMobile = $goToTopEl.attr('data-mobile'),
				elementOffset = $goToTopEl.attr('data-offset');

			if( !elementOffset ) { elementOffset = 450; }

			if( elementMobile != 'true' && ( $body.hasClass('device-sm') || $body.hasClass('device-xs') ) ) { return true; }

			if( $window.scrollTop() > Number(elementOffset) ) {
				$goToTopEl.fadeIn();
				$body.addClass('gototop-active');
			} else {
				$goToTopEl.fadeOut();
				$body.removeClass('gototop-active');
			}
		},

		dataResponsiveClasses: function(){
			let settings = {
				default: '[data-class-xl],[data-class-lg],[data-class-md],[data-class-sm],[data-class-xs]',
				file: 'plugins.dataclasses.js',
				error: 'plugins.dataclasses.js: Plugin could not be loaded',
				execfn: 'SEMICOLON_dataClassesInit',
				pluginfn: 'typeof scwDataClassesPlugin !== "undefined"',
				trigger: 'pluginDataClassesReady',
				class: 'has-plugin-dataclasses'
			};

			SEMICOLON.initialize.functions( settings );
		},

		dataResponsiveHeights: function(){
			let settings = {
				default: '[data-height-xl],[data-height-lg],[data-height-md],[data-height-sm],[data-height-xs]',
				file: 'plugins.dataheights.js',
				error: 'plugins.dataheights.js: Plugin could not be loaded',
				execfn: 'SEMICOLON_dataHeightsInit',
				pluginfn: 'typeof scwDataHeightsPlugin !== "undefined"',
				trigger: 'pluginDataHeightsReady',
				class: 'has-plugin-dataheights'
			};

			SEMICOLON.initialize.functions( settings );
		},
	};

	SEMICOLON.header = {

		init: function(){
			SEMICOLON.header.initialize();
			SEMICOLON.header.menufunctions();
			SEMICOLON.header.stickyMenu();
			SEMICOLON.header.stickyPageMenu();
		},

		initialize: function() {
			initHeaderHeight = $headerWrap.outerHeight();

			if( $headerWrap.length > 0 ) {
				if( $('.header-wrap-clone').length < 1 ) {
					$headerWrap.after('<div class="header-wrap-clone"></div>');
				}
				$headerWrapClone = $('.header-wrap-clone');
			}

			if( $pagemenu.length > 0 ) {
				$pagemenu.find('#page-menu-wrap').after('<div class="page-menu-wrap-clone"></div>');
				$pageMenuClone = $('.page-menu-wrap-clone');
			}

			let menuItemSubs = $( '.menu-item:has(.sub-menu-container)' );

			menuItemSubs.addClass('sub-menu'); // , .primary-menu.with-arrows > .menu-container > .menu-item:has(.sub-menu-container) > .menu-link > div:not(:has(.icon-angle-down))
			$( '.top-links-item:has(.top-links-sub-menu,.top-links-section) > a:not(:has(.icon-angle-down)), .menu-item:not(.mega-menu-title):has(.sub-menu-container) > .menu-link > div:not(:has(.icon-angle-down)), .page-menu-item:has(.page-menu-sub-menu) > a > div:not(:has(.icon-angle-down))' ).append( '<i class="icon-angle-down"></i>' );
			$( '.menu-item:not(.mega-menu-title):has(.sub-menu-container):not(:has(.sub-menu-trigger))' ).append( '<button class="sub-menu-trigger icon-chevron-right"></button>' );

			SEMICOLON.header.menuInvert();

		},

		menuInvert: function( subMenuEl ) {

			let submenus = subMenuEl || $( '.mega-menu-content, .sub-menu-container, .top-links-section' );

			submenus.children().css({ 'display': 'block' });
			submenus.css({ 'display': 'block' });
			submenus.each( function( index, element ){
				let $menuChildElement = $(element),
					menuChildOffset = $menuChildElement.offset(),
					menuChildWidth = $menuChildElement.width();

				if(windowWidth - (menuChildWidth + menuChildOffset.left) < 0) {
					$menuChildElement.addClass('menu-pos-invert');
				}
			});
			submenus.children().css({ 'display': '' });
			submenus.css({ 'display': '' });

		},

		includeOffset: function(){
			if( $headerInc.length < 1 ) {
				return true;
			}

			let headerInc = $header.outerHeight();
			if( $header.hasClass('floating-header') || $headerInc.hasClass('include-topbar') ) {
				headerInc = headerInc + $header.offset().top;
			}
			$headerInc.css({ 'margin-top': -headerInc });
		},

    // here we have the actual logic we care about
		menufunctions: function(){

			let menuItemSubs		= $( '.menu-item:has(.sub-menu-container)' ),
				menuItemSubsLinks	= menuItemSubs.children( '.menu-link' ),
				submenusT			= '.mega-menu-content, .sub-menu-container',
				submenus			= $( submenusT ),
				menuItemT			= '.menu-item',
				subMenuT			= '.sub-menu',
				menuSpeed			= primaryMenu.attr( 'data-trigger-speed' ) || 200,
				subMenuTriggerT		= '.sub-menu-trigger',
				menuItemTrigger;

			menuSpeed = Number( menuSpeed );

			menuItemTrigger	= menuItemSubs.children( subMenuTriggerT );

			if( $body.hasClass('device-xl') || $body.hasClass('device-lg') ) {
				setTimeout( function(){
					if( $headerWrapClone.length > 0 ) {
						$headerWrapClone.css({ 'height': initHeaderHeight });
					}
					SEMICOLON.header.includeOffset();
				}, 1000);
				primaryMenu.find( submenus ).css({ 'display': '' });
			} else {
				$headerInc.css({ 'margin-top': '' });
			}

			if( ( $body.hasClass('overlay-menu') && primaryMenu.hasClass('on-click') ) && ( $body.hasClass('device-xl') || $body.hasClass('device-lg') ) ) {
				menuItemSubsLinks.off( 'click' ).on( 'click', function(e){
					let triggerEl = $(this);
					triggerEl.parents( subMenuT ).siblings().find( submenus ).stop( true, true ).slideUp( menuSpeed );
					triggerEl.parent( menuItemT ).children( submenusT ).stop( true, true ).slideToggle( menuSpeed );
					e.preventDefault();
				});
			} else if( ( $body.hasClass('side-header') && primaryMenu.hasClass('on-click') ) || ( $body.hasClass('device-md') || $body.hasClass('device-sm') || $body.hasClass('device-xs') ) ) {
				menuItemTrigger.removeClass('icon-rotate-90');
				$( menuItemT ).find( submenus ).filter(':not(:animated)').stop( true, true ).slideUp( menuSpeed , function(){
					$body.toggleClass("primary-menu-open", false);
				});

				menuItemTrigger = menuItemTrigger.add( menuItemSubsLinks.filter('[href^="#"]') );

				menuItemTrigger.off( 'click' ).on( 'click', function(e){
					let triggerEl = $(this);
					triggerEl.parents( subMenuT ).siblings().find( subMenuTriggerT ).removeClass('icon-rotate-90');
					triggerEl.parents( subMenuT ).siblings().find( submenus ).filter(':not(:animated)').stop( true, true ).slideUp( menuSpeed );
					triggerEl.parent( menuItemT ).children( submenusT ).filter(':not(:animated)').stop( true, true ).slideToggle( menuSpeed );

					let subMenuTriggerEl = triggerEl.parent( menuItemT ).children( subMenuTriggerT );

					if( !subMenuTriggerEl.hasClass( 'icon-rotate-90' ) ) {
						subMenuTriggerEl.addClass('icon-rotate-90');
					} else {
						subMenuTriggerEl.removeClass('icon-rotate-90');
					}

					e.preventDefault();
				});
			} else if( ( $body.hasClass('overlay-menu') || $body.hasClass('side-header') ) && ( $body.hasClass('device-xl') || $body.hasClass('device-lg') ) ) {
				primaryMenu.find( submenus ).stop( true, true ).slideUp( menuSpeed );
				$( menuItemT ).hover( function(e){
					$(this).children( submenusT ).stop( true, true ).slideDown( menuSpeed );
				}, function(){
					$(this).children( submenusT ).stop( true, true ).slideUp( menuSpeed );
				});
			} else {
				if( primaryMenu.hasClass('on-click') ) {
					menuItemSubsLinks.off( 'click' ).on( 'click', function(e){
						let triggerEl = $(this);
						triggerEl.parents( subMenuT ).siblings().find( submenus ).removeClass('d-block');
						triggerEl.parent( menuItemT ).children( submenusT ).toggleClass('d-block');
						triggerEl.parent( menuItemT ).siblings().removeClass('current');
						triggerEl.parent( menuItemT ).toggleClass('current');
						e.preventDefault();
					});
				}
			}

			if( $('.top-links').hasClass('on-click') || ( $body.hasClass('device-md') || $body.hasClass('device-sm') || $body.hasClass('device-xs') ) ) {
				$('.top-links-item:has(.top-links-sub-menu,.top-links-section) > a').on( 'click', function(e){
					$(this).parents('li').siblings().find('.top-links-sub-menu,.top-links-section').removeClass('d-block');
					$(this).parent('li').children('.top-links-sub-menu,.top-links-section').toggleClass('d-block');
					e.preventDefault();
				});
			}

			SEMICOLON.header.menuInvert( $('.top-links-section') );

			$('#primary-menu-trigger').off( 'click' ).on( 'click', function() {
				if( $body.hasClass('device-md') || $body.hasClass('device-sm') || $body.hasClass('device-xs') ) {
					if( primaryMenu.find('.mobile-primary-menu').length > 0 ) {
						$( '.primary-menu:not(.mobile-menu-off-canvas) .mobile-primary-menu' ).stop( true, true ).slideToggle( menuSpeed );
						$( '.primary-menu.mobile-menu-off-canvas .mobile-primary-menu' ).toggleClass('d-block');
					} else {
						$( '.primary-menu:not(.mobile-menu-off-canvas) .menu-container' ).stop( true, true ).slideToggle( menuSpeed );
						$( '.primary-menu.mobile-menu-off-canvas .menu-container' ).toggleClass('d-block');
					}
				}
				$body.toggleClass("primary-menu-open");
				return false;
			});

			$( '.menu-container:not(.mobile-primary-menu)' ).css({ 'display': '' });
			if( $body.hasClass('device-xl') || $body.hasClass('device-lg') ) {
				primaryMenu.find('.mobile-primary-menu').removeClass('d-block');
			}
		},

		stickyMenu: function( headerOffset ){

			windowScrT	= $window.scrollTop();

			if( $body.hasClass('device-xl') || $body.hasClass('device-lg') ) {
				if( windowScrT > headerOffset ) {

					if( !$body.hasClass('side-header') ) {
						$header.filter(':not(.no-sticky)').addClass('sticky-header');
						// if( !$headerWrap.hasClass('force-not-dark') ) { $headerWrap.removeClass('not-dark'); }
						SEMICOLON.header.stickyMenuClass();

						if( stickyShrink == 'true' && !$header.hasClass('no-sticky') ) {
							if( ( windowScrT - headerOffset ) > Number( stickyShrinkOffset ) ) {
								$header.addClass('sticky-header-shrink');
								if( headerSizeCustom ){
									SEMICOLON.header.menuItemsSpacing( stickyMenuP );
								}
							} else {
								$header.removeClass('sticky-header-shrink');
								if( headerSizeCustom ){
									SEMICOLON.header.menuItemsSpacing( defMenuP );
								}
							}
						}
					}

				} else {
					SEMICOLON.header.removeStickyness();
					if( headerSizeCustom ){
						SEMICOLON.header.menuItemsSpacing( defMenuP );
					}
				}
			}

			if( $body.hasClass('device-xs') || $body.hasClass('device-sm') || $body.hasClass('device-md') ) {
				if( mobileSticky == 'true' ) {
					if( windowScrT > headerOffset ) {
						$header.filter(':not(.no-sticky)').addClass('sticky-header');
						SEMICOLON.header.stickyMenuClass();
					} else {
						SEMICOLON.header.removeStickyness();
						SEMICOLON.header.responsiveMenuClass();
					}
				} else {
					SEMICOLON.header.removeStickyness();
				}
				if( headerSizeCustom ){
					SEMICOLON.header.menuItemsSpacing( '' );
				}
			}
		},

		menuItemsSpacing: function( spacing ) {

			let item	= primaryMenuMainItems;

			if( !$body.hasClass('side-header') && !$body.hasClass('overlay-menu') ) {
				if( primaryMenu.hasClass('menu-spacing-margin') ) {
					if( spacing == '' ) {
						item.css({ 'margin-top': '', 'margin-bottom': '' });
					} else {
						item.css({ 'margin-top': Number( spacing ), 'margin-bottom': Number( spacing ) });
					}
				} else {
					if( spacing == '' ) {
						item.css({ 'padding-top': '', 'padding-bottom': '' });
					} else {
						item.css({ 'padding-top': Number( spacing ), 'padding-bottom': Number( spacing ) });
					}
				}
			}

		},

		stickyPageMenu: function( pageMenuOffset ){
			if( $window.scrollTop() > pageMenuOffset ) {
				if( $body.hasClass('device-xl') || $body.hasClass('device-lg') ) {
					$pagemenu.filter(':not(.dots-menu,.no-sticky)').addClass('sticky-page-menu');
					let headerHeight = $headerWrap.outerHeight();
					if( $header.length > 0 && !$header.hasClass('no-sticky') ) {
						$pagemenu.filter('.sticky-page-menu:not(.dots-menu,.no-sticky)').find( $pageMenuWrap ).css({ 'top': headerHeight +'px' });
					}
				} else if( $body.hasClass('device-sm') || $body.hasClass('device-xs') || $body.hasClass('device-md') ) {
					if( $pagemenu.attr('data-mobile-sticky') == 'true' ) {
						$pagemenu.filter(':not(.dots-menu,.no-sticky)').addClass('sticky-page-menu');
					}
				}
			} else {
				$pagemenu.removeClass('sticky-page-menu');
				$pagemenu.find( $pageMenuWrap ).css({ 'top': '' });
			}
		},

		removeStickyness: function(){
			if( $header.hasClass('sticky-header') ){
				$header.removeClass('sticky-header');
				$header.removeClass().addClass(oldHeaderClasses);
				$headerWrap.removeClass().addClass(oldHeaderWrapClasses);
				if( !$headerWrap.hasClass('force-not-dark') ) { $headerWrap.removeClass('not-dark'); }
			}
			if( ( $body.hasClass('device-sm') || $body.hasClass('device-xs') || $body.hasClass('device-md') ) && ( typeof responsiveMenuClasses === 'undefined' ) ) {
				$header.removeClass().addClass(oldHeaderClasses);
				$headerWrap.removeClass().addClass(oldHeaderWrapClasses);
				if( !$headerWrap.hasClass('force-not-dark') ) { $headerWrap.removeClass('not-dark'); }
			}
		},

		stickyMenuClass: function(){
			let newClassesArray = '';

			if( stickyMenuClasses ) {
				newClassesArray = stickyMenuClasses.split(/ +/);
			}

			let noOfNewClasses = newClassesArray.length;

			if( noOfNewClasses > 0 ) {
				let i = 0;
				for( i=0; i<noOfNewClasses; i++ ) {
					if( newClassesArray[i] == 'not-dark' ) {
						$header.removeClass('dark');
						$headerWrap.filter(':not(.not-dark)').addClass('not-dark');
					} else if( newClassesArray[i] == 'dark' ) {
						$headerWrap.removeClass('not-dark force-not-dark');
						if( !$header.hasClass( newClassesArray[i] ) ) {
							$header.addClass( newClassesArray[i] );
						}
					} else if( !$header.hasClass( newClassesArray[i] ) ) {
						$header.addClass( newClassesArray[i] );
					}
				}
			}
		},

		responsiveMenuClass: function(){
			if( $body.hasClass('device-xl') || $body.hasClass('device-lg') ){
				return true;
			}

			let newClassesArray = '';

			if( responsiveMenuClasses ) {
				newClassesArray = responsiveMenuClasses.split(/ +/);
			}

			let noOfNewClasses = newClassesArray.length;

			if( noOfNewClasses > 0 ) {
				let i = 0;
				for( i=0; i<noOfNewClasses; i++ ) {
					if( newClassesArray[i] == 'not-dark' ) {
						$header.removeClass('dark');
						$headerWrap.addClass('not-dark');
					} else if( newClassesArray[i] == 'dark' ) {
						$headerWrap.removeClass('not-dark force-not-dark');
						if( !$header.hasClass( newClassesArray[i] ) ) {
							$header.addClass( newClassesArray[i] );
						}
					} else if( !$header.hasClass( newClassesArray[i] ) ) {
						$header.addClass( newClassesArray[i] );
					}
				}
			}
		},
	};

	SEMICOLON.widget = {

		init: function(){
			SEMICOLON.widget.extras();
		},

		gridInit: function( element ){
			let settings = {
				element: element,
				default: '.grid-container',
				file: 'plugins.isotope.js',
				error: 'plugins.isotope.js: Plugin could not be loaded',
				execfn: 'SEMICOLON_gridContainerInit',
				pluginfn: '$().isotope',
				trigger: 'pluginIsotopeReady',
				class: 'has-plugin-isotope'
			};

			SEMICOLON.initialize.functions( settings );
		},

		filterInit: function( element ){
			let settings = {
				element: element,
				default: '.grid-filter,.custom-filter',
				file: 'plugins.gridfilter.js',
				error: 'plugins.gridfilter.js: Plugin could not be loaded',
				execfn: 'SEMICOLON_gridFilterInit',
				pluginfn: '$().isotope && typeof scwGridFilterPlugin !== "undefined"',
				trigger: 'pluginGridFilterReady',
				class: 'has-plugin-isotope-filter'
			};

			SEMICOLON.initialize.functions( settings );
		},

		stickySidebar: function( element ){
			let settings = {
				element: element,
				default: '.sticky-sidebar-wrap',
				file: 'plugins.stickysidebar.js',
				error: 'plugins.stickysidebar.js: Plugin could not be loaded',
				execfn: 'SEMICOLON_stickySidebarInit',
				pluginfn: '$().scwStickySidebar',
				trigger: 'pluginStickySidebarReady',
				class: 'has-plugin-stickysidebar'
			};

			SEMICOLON.initialize.functions( settings );
		},

		extras: function(){
			let btsCheckIntevral = setInterval( function(){
				if( 'pluginBootstrapReady' in scwEvents ) {
					if( $().tooltip ) {
						$('[data-bs-toggle="tooltip"]').tooltip({container: 'body'});
					} else {
						console.log('extras: Bootstrap Tooltip not defined.');
					}

					if( $().popover ) {
						$('[data-bs-toggle="popover"]').popover({container: 'body'});
					} else {
						console.log('extras: Bootstrap Popover not defined.');
					}

					clearInterval( btsCheckIntevral );
				}
			}, 1000 );

			$('.style-msg').on( 'click', '.close', function(e){
				$( this ).parents( '.style-msg' ).slideUp();
				e.preventDefault();
			});

			$('#page-menu-trigger').off( 'click' ).on( 'click', function() {
				$body.toggleClass('top-search-open', false);
				$pagemenu.toggleClass("page-menu-open");
				return false;
			});

			$pagemenu.find('nav').off( 'click' ).on( 'click', function(e){
				$body.toggleClass('top-search-open', false);
			});

			if( SEMICOLON.isMobile.any() ){
				$body.addClass('device-touch');
			}

			if( $body.hasClass( 'adaptive-color-scheme' ) ) {

				let adaptiveEl 		= $('[data-adaptive-light-class], [data-adaptive-dark-class]'),
					adaptLightClass	= adaptiveEl.attr( 'data-adaptive-light-class' ),
					adaptDarkClass	= adaptiveEl.attr( 'data-adaptive-dark-class' );

				let adaptClasses = function( dark ) {
					if( dark ) {
						$body.toggleClass( 'dark', true );
						adaptiveEl.removeClass( adaptLightClass ).addClass( adaptDarkClass );
					} else {
						$body.toggleClass( 'dark', false );
						adaptiveEl.removeClass( adaptDarkClass ).addClass( adaptLightClass );
					}
				};

				if( window.matchMedia ) {
					adaptClasses( window.matchMedia('(prefers-color-scheme: dark)').matches );

					window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e) {
						adaptClasses( e.matches );
					});
				}
			}

			$body.off( 'click' ).on( 'click', 'a[href*="#"]', function() {
				$window.on('beforeunload', function() {
					$window.scrollTop(0);
				});
			});

			let linkElement = location.hash;
			if( $(linkElement).length > 0 && $('.one-page-menu').find('[data-href="'+linkElement+'"]').length > 0 ) {
				$window.scrollTop(0);
			}
		}

	};

	SEMICOLON.isMobile = {
		Android: function() {
			return navigator.userAgent.match(/Android/i);
		},
		BlackBerry: function() {
			return navigator.userAgent.match(/BlackBerry/i);
		},
		iOS: function() {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
		Opera: function() {
			return navigator.userAgent.match(/Opera Mini/i);
		},
		Windows: function() {
			return navigator.userAgent.match(/IEMobile/i);
		},
		any: function() {
			return (SEMICOLON.isMobile.Android() || SEMICOLON.isMobile.BlackBerry() || SEMICOLON.isMobile.iOS() || SEMICOLON.isMobile.Opera() || SEMICOLON.isMobile.Windows());
		}
	};

	// Add your Custom JS Codes here
	SEMICOLON.customization = {

		onReady: function(){

			// Add JS Codes here to Run on Document Ready

		},

		onLoad: function(){

			// Add JS Codes here to Run on Window Load

		},

		onResize: function(){

			// Add JS Codes here to Run on Window Resize

		}

	}

	SEMICOLON.documentOnResize = {

		init: function(){

			SEMICOLON.header.menufunctions();
			SEMICOLON.header.stickyMenu();
			SEMICOLON.initialize.dataResponsiveHeights();
			SEMICOLON.initialize.dataResponsiveClasses();
			SEMICOLON.customization.onResize();

			windowWidth = $window.width();

			$(window).trigger( 'scwWindowResize' );

		}

	};

	SEMICOLON.documentOnReady = {

		init: function(){
			SEMICOLON.initialize.init();
			SEMICOLON.header.init();
			SEMICOLON.widget.init();
			SEMICOLON.documentOnReady.windowscroll();
			SEMICOLON.customization.onReady();
		},

		windowscroll: function(){
			if( $header.length > 0 ) {
				headerOffset = $header.offset().top;
				$headerWrap.addClass('position-absolute');
				headerWrapOffset = $headerWrap.offset().top;
				$headerWrap.removeClass('position-absolute');
			}

			let headerDefinedOffset = $header.attr('data-sticky-offset');
			if( typeof headerDefinedOffset !== 'undefined' ) {
				if( headerDefinedOffset == 'full' ) {
					headerWrapOffset = $window.height();
					let headerOffsetNegative = $header.attr('data-sticky-offset-negative');
					if( typeof headerOffsetNegative !== 'undefined' ) {
						headerWrapOffset = headerWrapOffset - headerOffsetNegative - 1;
					}
				} else {
					headerWrapOffset = Number(headerDefinedOffset);
				}
			} else {
				if( headerWrapOffset === 'undefined' ) {
					headerWrapOffset = headerOffset;
				}
			}

			let pageMenuWrap	= $pagemenu.find('#page-menu-wrap'),
				offset			= $headerWrap.outerHeight(),
				head			= document.head || document.getElementsByTagName('head')[0],
				style			= document.createElement('style'),
				css;

			if( $pagemenu.length > 0 ) {
				$pageMenuClone.css({ 'height': $pagemenu.find('#page-menu-wrap').outerHeight() });
				setTimeout( function(){
					if( $header.length > 0 && !$header.hasClass('no-sticky') ) {
						if( $body.hasClass('device-xl') || $body.hasClass('device-lg') || mobileSticky == 'true' ) {
							pageMenuOffset = $pagemenu.offset().top - $headerWrap.outerHeight();
							head.appendChild(style);
							css = '#page-menu.sticky-page-menu:not(.dots-menu) #page-menu-wrap { top: '+ offset +'px; }';

							style.type = 'text/css';
							style.appendChild(document.createTextNode(css));
						} else {
							pageMenuOffset = $pagemenu.offset().top;
						}
					} else {
						pageMenuOffset = $pagemenu.offset().top;
					}
				}, 1000);
			}

			SEMICOLON.header.stickyMenu( headerWrapOffset );
			SEMICOLON.header.stickyPageMenu( pageMenuOffset );

			window.addEventListener( 'scroll', function(){

				SEMICOLON.initialize.goToTopScroll();
				$('body.open-header.close-header-on-scroll').removeClass("side-header-open");
				SEMICOLON.header.stickyMenu( headerWrapOffset );
				SEMICOLON.header.stickyPageMenu( pageMenuOffset );

			}, { passive: true });

			$window.scrollEnd( function(){
				let headerHeight = $headerWrap.outerHeight();
				if( $pagemenu.length > 0 && $header.length > 0 && !$header.hasClass('no-sticky') ) {
					if( $body.hasClass('device-xl') || $body.hasClass('device-lg') ) {
						$pagemenu.filter('.sticky-page-menu:not(.dots-menu,.no-sticky)').find( $pageMenuWrap ).css({ 'top': headerHeight +'px' });
					}
				}
			}, 500 );

		}

	};

	SEMICOLON.documentOnLoad = {
		init: function(){
			SEMICOLON.widget.gridInit();
			let isoCheckInt = setInterval( function(){
				if( 'pluginIsotopeReady' in scwEvents ) {
					SEMICOLON.widget.filterInit();
					clearInterval( isoCheckInt );
				}
			}, 1000 );
			SEMICOLON.header.responsiveMenuClass();
			SEMICOLON.customization.onLoad();
		}
	};

	let $window = $(window),
		windowScrT,
		$body = $('body'),
		$wrapper = $('#wrapper'),
		$header = $('#header'),
		$headerWrap = $('#header-wrap'),
		$headerInc = $('.include-header'),
		mobileSticky = $header.attr('data-mobile-sticky') || 'false',
		defMenuP	= $header.attr('data-menu-padding') || 39,
		stickyMenuP = $header.attr('data-sticky-menu-padding') || 19,
		headerSizeCustom = !$header.hasClass('header-size-lg') && !$header.hasClass('header-size-md') && !$header.hasClass('header-size-sm') && !$header.hasClass('header-size-custom'),
		stickyShrink = $header.attr('data-sticky-shrink') || 'true',
		stickyShrinkOffset = $header.attr('data-sticky-shrink-offset') || 300,
		primaryMenu = $('.primary-menu'),
		primaryMenuMainItems = primaryMenu.find('.menu-container:not(mobile-primary-menu):not(.custom-spacing)').children('.menu-item').children('.menu-link'),
		$headerWrapClone = '',
		initialHeaderWrapHeight = $headerWrap.outerHeight(),
		$headerRow = $headerWrap.find('.header-row:eq(0)'),
		$content = $('#content'),
		$footer = $('#footer'),
		windowWidth = $window.width(),
		oldHeaderClasses = $header.attr('class'),
		oldHeaderWrapClasses = $headerWrap.attr('class'),
		stickyMenuClasses = $header.attr('data-sticky-class'),
		responsiveMenuClasses = $header.attr('data-responsive-class'),
		topSearchTimeOut,
		$pagemenu = $('#page-menu'),
		$pageMenuClone = '',
		$pageMenuWrap = $pagemenu.find('#page-menu-wrap'),
		$onePageMenuEl = $('.one-page-menu'),
		swiperSlider = '',
		$pageTitle = $('#page-title'),
		$topSearch = $('.top-search-form'),
		$goToTopEl = $('#gotoTop'),
		xScrollPosition,
		yScrollPosition,
		sliderParallaxElInner = document.querySelector('.slider-inner'),
		initHeaderHeight,
		headerOffset = 0,
		headerWrapOffset = 0,
		pageMenuOffset = 0,
		resizeTimer;

	$(document).ready( SEMICOLON.documentOnReady.init );

	$window.on( 'load', SEMICOLON.documentOnLoad.init );

	$window.on( 'resize', function() {
		let thisWindow = $(this);
		clearTimeout(resizeTimer);
		resizeTimer = setTimeout(function() {
			if ( thisWindow.width() !== windowWidth ) {
				SEMICOLON.documentOnResize.init();
			}
		}, 250);
	});

})(jQuery);
