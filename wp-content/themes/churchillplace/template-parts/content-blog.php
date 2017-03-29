<section id="blog" class="section-container">
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8">
                <main id="posts" class="list-posts" role="main">
                    <?php
                        $temp = $wp_query;
                        $wp_query= null;
                        $wp_query = new WP_Query(); $wp_query->query('showposts=5' . '&paged='.$paged);

                        if (have_posts()) :
                        while ($wp_query->have_posts()) : $wp_query->the_post();
                            get_template_part( 'content' );

                        endwhile; ?>

                        <?php

                        the_posts_pagination( array(
                            'mid_size' => 2,
                            'prev_text' => __( '&laquo; Prev', 'basic'),
                            'next_text' => __( 'Next &raquo;', 'basic'),
                        ) );

                    else: ?>

                        <div class="post clearfix">
                            <h2><?php _e( 'Posts not found', 'basic' ); ?></h2>
                            <?php get_search_form(); ?>
                        </div>

                    <?php endif; ?>


                </main>
            </div>
            <div class="col-xs-12 col-sm-4">
                <?php get_sidebar() ?>
            </div>
        </div>
    </div>

</section>




