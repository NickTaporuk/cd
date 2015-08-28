<?php
/**
 * The header for our theme.
 *
 * @package ThemeGrill
 * @subpackage Ample
 * @since Ample 0.1
 */
?><!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="profile" href="http://gmpg.org/xfn/11">
<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">
<?php
/**
 * This hook is important for wordpress plugins and other many things
 */
wp_head();
?>
<!--<script type="text/javascript" src="--><?php //echo get_template_directory_uri(); ?><!--/js/jquery.js"></script>-->
</head>

<body <?php body_class(); ?>>
	<div id="page" class="hfeed site">
	<?php
		if ( of_get_option( 'ample_show_header_logo_text', 'text_only' ) == 'none' ) {
			$header_extra_class = 'logo-disable';
		} else {
			$header_extra_class = '';
		}
	?>
	<header id="masthead" class="site-header <?php echo $header_extra_class; ?>" role="banner">
		<div class="header">
				<div class="header-top">
					<div class="topinfo container">
						<div class="top-phones">
							<div class="chat-box">
								<div class="chat-num">
									<span class="phone">US 1-866-962-3913</span>
									<span><a href="mailto:info@paperwritinghelp.net" rel="nofollow" data-finder="page.header.link.email">info@paperwritinghelp.net</a></span>
								</div>
								<div class="chat-butbox but" id="chatbut" title="Mon 00:00 a.m. - Sat 01:00 p.m (GMT)">
									<div id="LP_DIV_1438950998957">
										<div class="chat-name">CHAT
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="top-manage">
							<div class="manadge-box">
								<a href="http://paperwritinghelp.net/myorder.html" class="manadge-but but" rel="nofollow" data-finder="page.header.link.myorder.logged">Manage Your Orders</a>
							</div>
						</div>
					</div>
				</div><!-- top-section -->
			<div class="main-head-wrap clearfix">
				<div class="inner-wrap">
					<div id="header-left">
						<a class="logo" href="/" data-finder="page.header.logo.link"><img src="<?php echo esc_url( get_template_directory_uri() ); ?>/img/logo.svg" alt="paper writing help.net" title="PaperWritingHelp.net" /></a>
					</div>

					<div id="header-right" class="topmenu-line">
						<div class="toggle-menu c-hamburger c-hamburger--htx" data-finder="page.header.togglemenu"><span></span></div>
						<div class="topmenu-block">
						<div class="topmenu-rightlinks">
							<a href="/order.html" class="get-order" rel="nofollow" data-finder="page.header.navigation.link.ordernow">Order Now</a>
						</div>
						<nav id="site-navigation" class="main-navigation" role="navigation">
						<div class="menu-primary-menu-container">
							<ul id="menu-primary-menu" class="menu menu-primary-container">
								<li id="menu-item-16" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-16"><a href="/how-we-work.html" rel="nofollow" data-finder="page.header.navigation.link.howwework">How we work</a></li>
								<li id="menu-item-17" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-17"><a href="/our-writers.html" rel="nofollow" data-finder="page.header.navigation.link.ourwriters">Our Writers</a></li>
								<li id="menu-item-18" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-18"><a href="/pricing.html" rel="nofollow" data-finder="page.header.navigation.link.pricing">Prices</a></li>
								<li id="menu-item-19" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-19"><a href="/samples.html" rel="nofollow" data-finder="page.header.navigation.link.samples">Samples</a></li>
								<li id="menu-item-20" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-20"><a href="/frequently_asked_questions.html" rel="nofollow" data-finder="page.header.navigation.link.faq">FAQ</a></li>
								<li id="menu-item-21" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-20"><a href="/myorder.html" class="manadge-but-mobile" rel="nofollow" data-finder="page.header.navigation.link.myorder">Manage Your Orders</a></li>
							</ul>
						</div>
							<?php
							if ( has_nav_menu( 'primary' ) ) {
								wp_nav_menu(
									array(
										'theme_location' => 'primary',
										'menu_class'    => 'menu menu-primary-container'
									)
								);
							}
							else {
								wp_page_menu();
							}
							?>
						</nav>
						</div>
					</div>
				</div>
			</div><!-- .main-head-wrap -->
			<?php if( of_get_option( 'ample_header_image_position', 'above' ) == 'below' ) { ample_render_header_image(); } ?>
		</div><!-- .header -->
	</header><!-- end of header -->
	<!--<script type="text/javascript">
		if ($('.topmenu-line').length > 0) {
			var tmenu = $('.topmenu-line'),
			tmenuTop = $('.topmenu-line').offset().top;
		}
		$(window).scroll(function() {
			var scrlTopPos = $(window).scrollTop();
			if (windowWidth >= 968) {
				if (scrlTopPos <= tmenuTop) {
					$(tmenu).removeClass('fixed');
				} else if (scrlTopPos > tmenuTop) {
					$(tmenu).addClass('fixed');
				}
			}
		});
	</script>-->
	<script type="text/javascript">
	jQuery(document).ready(function() {
		var navPosTop = jQuery('.header').offset().top,
			navHeight = jQuery('.header').height(),
			windowWidth = jQuery(window).width();

		console.log(windowWidth);
		//console.log('navPosTop' + navPosTop +"navHeight" + navHeight);
		jQuery(window).scroll(function () {
			if (windowWidth >= 1025) {
				if (jQuery(window).scrollTop() > navHeight) {
					jQuery('.header').addClass("fixed");
				} else {
					jQuery('.header').removeClass("fixed");
				}
			}
		});

		jQuery(window).resize(function () {
			if (windowWidth >= 1000) {
				var navHeight = jQuery('.header').height();
				if (jQuery(window).scrollTop() > navHeight) {
					jQuery('.header').addClass("fixed");
				} else {
					jQuery('.header').removeClass("fixed");
				}
			}
		});
	});
	 </script>

	 <script type="text/javascript">
	 jQuery('.toggle-menu').click(function() {
		jQuery(this).toggleClass('active');
		if (jQuery(this).next().css('display') == 'none') {
			jQuery(this).next().show();
		} else {
			jQuery(this).next().hide();
		}
		return false;
	});
	if (jQuery('.topmenu-line').length > 0) {
		var tmenu = jQuery('.topmenu-line'),
			tmenuTop = jQuery('.topmenu-line').offset().top;
	}

	(function() {
  	"use strict";
		var toggles = document.querySelectorAll(".c-hamburger");

		for (var i = toggles.length - 1; i >= 0; i--) {
			var toggle = toggles[i];
			toggleHandler(toggle);
		};

		function toggleHandler(toggle) {
			toggle.addEventListener( "click", function(e) {
				e.preventDefault();
				(this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
			});
		}
})();
	</script>
	<div class="main-wrapper">

		<?php if( of_get_option('ample_activate_slider' , '0') == '1' ) {
			if( is_front_page() ) {
				ample_featured_image_slider();
			}
		}
		if( '' != ample_header_title() && !( is_front_page() ) ) {
			?>
			<div class="header-post-title-container clearfix">
				<div class="inner-wrap">
					<div class="post-title-wrapper">
						<h1 class="header-post-title-class entry-title"><?php echo ample_header_title(); ?></h1>
					</div>
					<?php if( function_exists( 'ample_breadcrumb' ) ) { ample_breadcrumb(); } ?>
				</div>
			</div>
	  <?php } ?>