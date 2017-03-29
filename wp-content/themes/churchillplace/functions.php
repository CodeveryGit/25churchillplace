<?php
/**
 * churchillplace functions and definitions.
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package churchillplace
 */

if ( ! function_exists( 'churchillplace_setup' ) ) :
/**
 * Sets up theme defaults and registers support for various WordPress features.
 *
 * Note that this function is hooked into the after_setup_theme hook, which
 * runs before the init hook. The init hook is too late for some features, such
 * as indicating support for post thumbnails.
 */
function churchillplace_setup() {
	/*
	 * Make theme available for translation.
	 * Translations can be filed in the /languages/ directory.
	 * If you're building a theme based on churchillplace, use a find and replace
	 * to change 'churchillplace' to the name of your theme in all the template files.
	 */
	load_theme_textdomain( 'churchillplace', get_template_directory() . '/languages' );

	// Add default posts and comments RSS feed links to head.
	add_theme_support( 'automatic-feed-links' );

	/*
	 * Let WordPress manage the document title.
	 * By adding theme support, we declare that this theme does not use a
	 * hard-coded <title> tag in the document head, and expect WordPress to
	 * provide it for us.
	 */
	add_theme_support( 'title-tag' );

	/*
	 * Enable support for Post Thumbnails on posts and pages.
	 *
	 * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
	 */
	add_theme_support( 'post-thumbnails' );

	// This theme uses wp_nav_menu() in one location.

	add_action( 'init', 'register_churchillplace_menu' );
	function register_churchillplace_menu() {
		register_nav_menus(array(
			'header_menu' =>  esc_html__( 'Header menu', 'churchillplace' ),
			'blog_menu' =>  esc_html__( 'Blog menu', 'churchillplace' ),
		));
	}

	/*
	 * Switch default core markup for search form, comment form, and comments
	 * to output valid HTML5.
	 */
	add_theme_support( 'html5', array(
		'search-form',
		'comment-form',
		'comment-list',
		'gallery',
		'caption',
	) );

	// Set up the WordPress core custom background feature.
	add_theme_support( 'custom-background', apply_filters( 'churchillplace_custom_background_args', array(
		'default-color' => 'ffffff',
		'default-image' => '',
	) ) );
}
endif;
add_action( 'after_setup_theme', 'churchillplace_setup' );

/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @global int $content_width
 */
function churchillplace_content_width() {
	$GLOBALS['content_width'] = apply_filters( 'churchillplace_content_width', 640 );
}
add_action( 'after_setup_theme', 'churchillplace_content_width', 0 );

/**
 * Register widget area.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */

function churchillplace_widgets_init() {
	register_sidebar( array(
		'name'          => esc_html__( 'Left sidebar', 'churchillplace' ),
		'id'            => 'sidebar-1',
		'description'   => esc_html__( 'Add widgets here.', 'churchillplace' ),
		'before_widget' => '<section id="%1$s" class="widget %2$s">',
		'after_widget'  => '</section>',
		'before_title'  => '<h2 class="widget-title">',
		'after_title'   => '</h2>',
	) );
}
add_action( 'widgets_init', 'churchillplace_widgets_init' );

/**
 * Enqueue scripts and styles.
 */
function churchillplace_scripts() {
	wp_enqueue_style( 'churchillplace-style', get_stylesheet_uri() );
	wp_enqueue_script( 'churchillplace-navigation', get_template_directory_uri() . '/js/j.js', array(), '20160701', true );
	wp_enqueue_script( 'churchillplace-scrolling', get_template_directory_uri() . '/js/j2.js', array(), '20160707', true );
}
add_action( 'wp_enqueue_scripts', 'churchillplace_scripts' );



/**
 * Implement the Custom Header feature.
 */
require get_template_directory() . '/inc/custom-header.php';

/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/inc/template-tags.php';

/**
 * Custom functions that act independently of the theme templates.
 */
require get_template_directory() . '/inc/extras.php';

/**
 * Customizer additions.
 */
require get_template_directory() . '/inc/customizer.php';

/**
 * Load Jetpack compatibility file.
 */
require get_template_directory() . '/inc/jetpack.php';

