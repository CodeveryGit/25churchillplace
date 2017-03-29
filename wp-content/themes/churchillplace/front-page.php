<?php
    get_header();

    get_template_part( 'template-parts/content', 'building' );
    get_template_part( 'template-parts/content', 'views' );
    get_template_part( 'template-parts/content', 'schedule' );
    get_template_part( 'template-parts/content', 'gallery' );
    get_template_part( 'template-parts/content', 'specifications' );
    get_template_part( 'template-parts/content', 'location' );
    get_template_part( 'template-parts/content', 'lifestyle' );
    get_template_part( 'template-parts/content', 'downloads' );
    get_template_part( 'template-parts/content', 'contact' );

    get_footer();
?>