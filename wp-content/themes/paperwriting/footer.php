<?php
/**
 * Footer Section for our theme.
 *
 * @package ThemeGrill
 * @subpackage Ample
 * @since Ample 0.1
 */
?>
		</div><!-- .main-wrapper -->
		<div class="container-full fplaceorder">
			<div class="container inner-wrap">
				<div class="grid60 footmenublock">
					<p><span class="right">Since you are already here, don't give it another thought! As the saying goes, just do it!</span>
				</p></div>
				<div class="grid40 paceorder-but">
					<div class="submit-but btn-order"><a href="/order.html" class="submitform but" rel="nofollow" data-finder="page.content.link.ordernow.b1">Order Now</a></div>
				</div>
			</div>
		</div>
		<footer id="colophon">
			<div class="inner-wrap">
				<?php get_sidebar( 'footer' ); ?>
				<div class="footer-bottom clearfix">
					<div class="copyright-info">
					</div>

					<div class="footer-nav">
					<?php
						if ( has_nav_menu( 'footer' ) ) {
							wp_nav_menu( array( 'theme_location' => 'footer', 'depth' => -1 ) );
						}
					?>
					</div>
				</div>
			</div>
		</footer>
		<div class="main-footer-dark container-full" role="contentinfo">
			<div class="container bottom">
				<div class="copyright">
					&copy; <?php
					if( date("Y") > 2014){
						echo "2008 &mdash; ".date("Y");
						}else{
						echo (date("Y"));
					} ?> PaperWritingHelp.net
				</div>
			</div>
		</div>
		<a href="#masthead" id="scroll-up" class="totop-link">to top</a>
	</div><!-- #page -->
	<?php wp_footer(); ?>
</body>
</html>