<?php
/**
 * The sidebar containing the main widget area.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package churchillplace
 */

?>

<!-- BEGIN #sidebar -->
<aside id="left-sidebar" class="widget-area"">
	<ul id="widgetlist">
		<?php if ( is_active_sidebar( 'sidebar-1' ) ) :
			dynamic_sidebar( 'sidebar-1' );
		else : ?>

			<li class="widget widget_search">
				<?php get_search_form(); ?>
			</li>
			<?php wp_list_categories('title_li=<p class="wtitle">'. __("Categories", 'basic') .'</p>');  ?>
		<?php endif; ?>
	</ul>
</aside>
<!-- END #sidebar -->



