<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Dahj_Style
 */

?>

	<footer id="colophon" class="site-footer">
		<div class="site-info">
				<?php
				/* translators: 1: Copyright, 2: Theme name. */
				printf( esc_html__( 'Copyright %1$s by %2$s.', 'dahj' ), '2022', '<a href="'.home_url.'" >Dahj Style</a>' );
				?>
		</div><!-- .site-info -->
	</footer><!-- #colophon -->
</div><!-- #page -->

<?php wp_footer(); ?>

</body>
</html>
