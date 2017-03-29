<?php
/*
 * Template name: Blog
 */
get_header("blog");?>
    <div class="close-btn"></div>
    <h3 class="subheader text-center"></h3>
<?php
get_template_part( 'template-parts/content', 'blog' );
get_footer();
?>