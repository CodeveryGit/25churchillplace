<?php
/**
 * The header for our theme.
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package churchillplace
 */
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
<meta http-equiv="X-UA-Compatible" content="IE=9">
<meta charset="<?php bloginfo( 'charset' ); ?>">
<title>25 Churchill Place</title>
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1">
<link rel="profile" href="http://gmpg.org/xfn/11">
<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">
<?php wp_head(); ?>
</head>

<body <?php body_class(); ?> id="skrollr-body">
<!-- introduction +++++++++++++++++++++++++++++++++++++++++ -->
<section id="introduction" data-stellar-background-ratio="1.5" data-stellar-vertical-offset="50"> <!--  -->
	<div id="logo-container" class="intro-box">
		<h1><img src="<?php bloginfo('template_directory'); ?>/images/logo-25-churchill-place.svg"/></h1>
	</div>
	<div id="intro-container" class="intro-box">

		<!-- navigation +++++++++++++++++++++++++++++++++++++++++ -->
		<header id="navigation" class="navigation-bar" data-0="position:absolute;" data-22-top="position:fixed;">
			<div class="container">
				<div class="row">
					<div class="col-xs-12 col-md-6"><img class="logo" data-anchor-target="#navigation" data-0="@class:logo;" data-top="@class:logo active;" src="<?php bloginfo('template_directory'); ?>/images/logo.svg"/></div>
					<div id="menu-btn"></div>
					<?php wp_nav_menu(array(
						'menu' => 'Header menu',
						'container' => 'nav',
						'container_class' => 'col-xs-12 col-md-6',
						'container_id' => 'navbar',
						'menu_class' => 'nav',
						'menu_id' => '',
					));?>
				</div>
			</div>
		</header>
		<div class="container">
			<div class="row table">
				<div class="centered">
					<div class="separator col-md-1 col-md-offset-3 fade"></div>
					<h2 class="col-xs-12 col-md-offset-2 col-md-6 fade">
						25 Churchill Place has 56,692 sq ft remaining of the very latest generation office space to suit all types of occupier.
					</h2>
				</div>
			</div>
		</div>
	</div>
</section>