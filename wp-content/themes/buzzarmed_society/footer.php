<?php

/**

 * The template for displaying the footer.

 *

 * Contains the closing of the #content div and all content after

 *

 * @package zerif

 */

?>



<footer id="footer">

<div class="container">

<!--	--><?php
		$footer_sections = 0;
		$zerif_address = get_theme_mod('zerif_address',__('Company address','zerif-lite'));
		$zerif_address_icon = get_theme_mod('zerif_address_icon',get_template_directory_uri().'/images/map25-redish.png');

		$zerif_email = get_theme_mod('zerif_email','<a href="mailto:contact@site.com">contact@site.com</a>');
		$zerif_email_icon = get_theme_mod('zerif_email_icon',get_template_directory_uri().'/images/envelope4-green.png');

		$zerif_phone = get_theme_mod('zerif_phone','<a href="tel:0 332 548 954">0 332 548 954</a>');
		$zerif_phone_icon = get_theme_mod('zerif_phone_icon',get_template_directory_uri().'/images/telephone65-blue.png');

		$zerif_socials_facebook = get_theme_mod('zerif_socials_facebook','#');
		$zerif_socials_twitter = get_theme_mod('zerif_socials_twitter','#');
		$zerif_socials_linkedin = get_theme_mod('zerif_socials_linkedin','#');
		$zerif_socials_behance = get_theme_mod('zerif_socials_behance','#');
		$zerif_socials_dribbble = get_theme_mod('zerif_socials_dribbble','#');

		$zerif_copyright = get_theme_mod('zerif_copyright');

		if(!empty($zerif_address) || !empty($zerif_address_icon)):
			$footer_sections++;
		endif;

		if(!empty($zerif_email) || !empty($zerif_email_icon)):
			$footer_sections++;
		endif;

		if(!empty($zerif_phone) || !empty($zerif_phone_icon)):
			$footer_sections++;
		endif;
		if(!empty($zerif_socials_facebook) || !empty($zerif_socials_twitter) || !empty($zerif_socials_linkedin) || !empty($zerif_socials_behance) || !empty($zerif_socials_dribbble) ||
		!empty($zerif_copyright)):
			$footer_sections++;
		endif;

		if( $footer_sections == 1 ):
			$footer_class = 'col-md-12';
		elseif( $footer_sections == 2 ):
			$footer_class = 'col-md-6';
		elseif( $footer_sections == 3 ):
			$footer_class = 'col-md-4';
		elseif( $footer_sections == 4 ):
			$footer_class = 'col-md-3';
		else:
			$footer_class = 'col-md-3';
		endif;

		/* COMPANY ADDRESS */ /* FOOTER SOCIALS */
		if( !empty($zerif_address) ):
			//echo '<div class="'.$footer_class.' company-details">';
            // footer-socials
            echo '<div class="col-md-3 footer-socials">';
                echo            '<a href="https://facebook.com/buzzarmcard" target="_blank"><i class="fa fa-facebook"></i></a>';
                echo            '<a href="https://twitter.com/buzzarmcard" target="_blank"><i class="fa fa-twitter"></i></a>';
                echo            '<a href="#"><i class="fa fa-linkedin" target="_blank"></i></a>';

			echo '</div>';
            // end footer-socials
		endif;

		/* COMPANY EMAIL */ /* COPYRIGHT */


		if( !empty($zerif_email) ):
			//echo '<div class="'.$footer_class.' company-details">';
            echo '<div class="col-md-6 footer-copy">';
				//echo '<div class="icon-top green-text">';

					//if( !empty($zerif_email_icon) ) echo '<img src="'.esc_url(__($zerif_email_icon,'zerif-lite')).'">';
				//echo '</div>';
				//echo $zerif_email;
                echo '<p class="copy">Copyright © 2015 Buzzarm. All rights reserved.</p>';
			echo '</div>';
		endif;

		/* COMPANY PHONE NUMBER */


		/*if( !empty($zerif_phone) ):
			echo '<div class="'.$footer_class.' company-details">';
				echo '<div class="icon-top blue-text">';
					if( !empty($zerif_phone_icon) ) echo '<img src="'.esc_url(__($zerif_phone_icon,'zerif-lite')).'">';
				echo '</div>';
				echo $zerif_phone;
			echo '</div>';
		endif;*/

		if( !empty($zerif_socials_facebook) || !empty($zerif_socials_twitter) || !empty($zerif_socials_linkedin) || !empty($zerif_socials_behance) || !empty($zerif_socials_dribbble) ||
		!empty($zerif_copyright)):

					//echo '<div class="'.$footer_class.' copyright">';
                    echo '<div class="col-md-3 footer-top">';
                        echo    '<div class="top">';
                        echo        '<p>To the top</p>';
                        echo        '<div class="btn-top">';
                        echo            '<a href="#home" class="cd-top btn-tomato">';
                        echo                '<i class="fa fa-angle-up "></i>';
                        echo            '</a>';
                        echo        '</div>';
                        echo    '</div>';

					echo '</div>';

		endif;
	?>
<!---->
</div> <!-- / END CONTAINER -->



</footer> <!-- / END FOOOTER  -->



<?php wp_footer(); ?>



</body>

</html>
