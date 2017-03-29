<?php
/**
 * The template for displaying all single posts.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 * @package churchillplace
 */

get_header("blog"); ?>
    <div class="close-btn"></div>
    <h3 class="subheader text-center"></h3>

    <section id="blog" class="section-container">
        <div class="container">
            <div class="row">
                <div class="col-xs-12 col-sm-8">
                    <div id="primary" class="content-area">
                        <main id="main" class="site-main" role="main">
                            <?php

                            while (have_posts()) : the_post();

                                get_template_part('content', get_post_format());//                                the_post_navigation();
                                // If comments are open or we have at least one comment, load up the comment template.
                                if (comments_open() || get_comments_number()) :
                                    comments_template();
                                endif;
                            endwhile; // End of the loop.
                            ?>
                        </main><!-- #main -->
                    </div><!-- #primary -->
                </div>
                <div class="col-xs-12 col-sm-4">
                    <?php get_sidebar() ?>
                </div>
            </div>
        </div>
    </section>
<?php
get_footer();