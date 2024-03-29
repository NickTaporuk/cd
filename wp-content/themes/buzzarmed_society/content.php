<?php

/**

 * @package zerif

 */

?>



<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>

	<?php if ( ! is_search() ) : ?>

		<?php if ( has_post_thumbnail()) : ?>

		<div class="post-img-wrap">

			 	<a href="<?php the_permalink(); ?>" title="<?php the_title_attribute(); ?>" >

				<?php the_post_thumbnail("post-thumbnails-large-buzzarm"); ?>
				</a>

		</div>

		<div class="listpost-content-wrap">

		<?php else: ?>

		<div class="listpost-content-wrap-full">

		<?php endif; ?>

	<?php else:  ?>

			<div class="listpost-content-wrap-full">

	<?php endif; ?>

	<div class="list-post-top">

	<header class="entry-header">

		<h1 class="entry-title"><a href="<?php the_permalink(); ?>" rel="bookmark"><?php the_title(); ?></a></h1>
		<!-- post-info -->
		<div class="post-info">
			<span id="view-post">
				<i class="fa fa-eye"></i>
				<!-- post views -->
				<?php if(function_exists('the_views')) { the_views(true, '', '', false, true); } ?>
			</span>

			<?php if ( 'post' == get_post_type() ) : ?>
			<!-- comments in post count -->
			<span id="coment-count">
				<i class="fa fa-comment"></i>
				<?php comments_number(0,1,'%'); ?>
			</span>
		</div>
		<!-- end post-info -->
		<div class="entry-meta">

			<?php zerif_posted_on(); ?>

		</div><!-- .entry-meta -->

		<?php endif; ?>

	</header><!-- .entry-header -->



	<?php if ( is_search() ) : // Only display Excerpts for Search ?>

	<div class="entry-summary">

		<?php the_excerpt(); ?>



	<?php else : ?>

	<div class="entry-content">

		<?php 

			the_excerpt()

			//the_content( __( 'Continue reading <span class="meta-nav">&rarr;</span>', 'zerif-lite' ) ); 

		?>

		<?php

			wp_link_pages( array(

				'before' => '<div class="page-links">' . __( 'Pages:', 'zerif-lite' ),

				'after'  => '</div>',

			) );

		?>


	<?php endif; ?>



	<footer class="entry-footer">

		<?php if ( 'post' == get_post_type() ) : // Hide category and tag text for pages on Search ?>

			<?php

				/* translators: used between list items, there is a space after the comma */

				$categories_list = get_the_category_list( __( ', ', 'zerif-lite' ) );

				if ( $categories_list && zerif_categorized_blog() ) :

			?>

			<span class="cat-links">

				<?php printf( __( 'Posted in %1$s', 'zerif-lite' ), $categories_list ); ?>

			</span>

			<?php endif; // End if categories ?>



			<?php

				/* translators: used between list items, there is a space after the comma */

				$tags_list = get_the_tag_list( '', __( ', ', 'zerif-lite' ) );

				if ( $tags_list ) :

			?>

			<span class="tags-links">

				<?php printf( __( 'Tagged %1$s', 'zerif-lite' ), $tags_list ); ?>

			</span>

			<?php endif; // End if $tags_list ?>

		<?php endif; // End if 'post' == get_post_type() ?>



		<?php if ( ! post_password_required() && ( comments_open() || '0' != get_comments_number() ) ) : ?>

		<span class="comments-link"><?php comments_popup_link( __( 'Leave a comment', 'zerif-lite' ), __( '1 Comment', 'zerif-lite' ), __( '% Comments', 'zerif-lite' ) ); ?></span>

		<?php endif; ?>



		<?php edit_post_link( __( 'Edit', 'zerif-lite' ), '<span class="edit-link">', '</span>' ); ?>

	</footer><!-- .entry-footer -->


	</div><!-- .entry-content --><!-- .entry-summary -->

	</div><!-- .list-post-top -->


</div><!-- .listpost-content-wrap -->

</article><!-- #post-## -->







