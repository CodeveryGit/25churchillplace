# 25 Churchill Place
**Project URL:**  http://project.25churchillplace.codevery.com/
![img](preview.jpg "Desctop")

## Project description
I had to turn one page website into a new WordPress theme and build out a blog section as well. The blog section retains the same design theme and has a sidebar section.
Theme name: **churchillplace**.

 
## Technologies that were used
   * WordPress
   * PHP
   * CSS
   
## Compatibility
* **Browsers** : Safari, Chrome, Opera, Mozilla, Edge, IE9.
* **Devices** : Desctop, Tablet, Mobile.

![alt tag](devices.gif)

## Code example
### PHP
/wp-content/themes/churchillplace/inc/customizer.php
```php
function churchillplace_customize_register( $wp_customize ) {
	$wp_customize->get_setting( 'blogname' )->transport         = 'postMessage';
	$wp_customize->get_setting( 'blogdescription' )->transport  = 'postMessage';
	$wp_customize->get_setting( 'header_textcolor' )->transport = 'postMessage';
}
add_action( 'customize_register', 'churchillplace_customize_register' );

function churchillplace_customize_preview_js() {
	wp_enqueue_script( 'churchillplace_customizer', get_template_directory_uri() . '/js/customizer.js', array( 'customize-preview' ), '20151215', true );
}
add_action( 'customize_preview_init', 'churchillplace_customize_preview_js' );
```

