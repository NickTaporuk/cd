<?php
/**
 * The template for displaying 404 pages (Page Not Found).
 *
 * @package ThemeGrill
 * @subpackage Ample
 * @since Ample 0.1
 */
?>

<?php get_header();

   do_action( 'ample_before_body_content' ); ?>

   <div class="single-page clearfix">
      <div class="inner-wrap">
         <div id="primary">
            <div id="content">
               <section class="error-404 not-found">
                  <div class="page-content">

                     <header class="page-header">
                        <h1 class="page-title"><?php _e( 'Error 404 - Page not found', 'ample'); ?></h1>
                     </header>

                     <?php if ( ! dynamic_sidebar( 'ample_error_404_page_sidebar' ) ) : ?>
                        <p><?php _e( 'The Web address you entered is not a functioning page on our site.', 'ample'); ?></p>
      <div class="chat-butbox but main" id="chatbut" title="Mon 00:00 a.m. - Sat 01:00 p.m (GMT)">
         <div id="LP_DIV_1366886765015">
            <div class="chat-name">CHAT<span class="perspective-shadow"></span>
            </div>
         </div>
      </div>
                        <p><?php _e( 'We are always ready to help you!', 'ample'); ?></p>
                       
                     <?php endif; ?>
                  </div>
               </section>
            </div>
            <?php ample_both_sidebar_select(); ?>
         </div>

         <?php ample_sidebar_select(); ?>
      </div><!-- .inner-wrap -->
   </div><!-- .single-page -->

   <?php do_action( 'ample_after_body_content' );
get_footer(); ?>