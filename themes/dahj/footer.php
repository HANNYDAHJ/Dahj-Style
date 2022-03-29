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

	<?php
$recipe_args = array(
	'post_type'              => array('dahj_recipe'), // use any for any kind of post type, custom post type slug for custom post type
    'post_status'            => 'publish', // Also support: pending, draft, auto-draft, future, private, inherit, trash, any
    'posts_per_page'         => 3, // use -1 for all post
    'orderby'                => 'rand',
);
$recipe_query = new WP_Query($recipe_args);

if ($recipe_query->have_posts()){

	?>
	<div class="grid-container">
		<div class="grid-x grid-margin-x grid-margin-y">
		<?php
	while ( $recipe_query->have_posts()){
		$recipe_query->the_post();
		?>
		<div class="cell small-12 medium-4">
		<?php
		the_post_thumbnail();
		the_title( '<h3>','</h3>');
		the_excerpt(  );
		the_permalink();
		?>
		</div>
		<?php
	}
	wp_reset_postdata();
	?>
		</div>
	</div>

	<?php } ?>
	
		<div class="site-info">
				<?php
				/* translators: 1: Copyright, 2: Theme name. */
				printf( esc_html__('Copyright %1$s by %2$s.', 'dahj'), '2022', '<a href=".home_url.">Dahj Style</a>' );
				?>
		</div><!-- .site-info -->
	</footer><!-- #colophon -->
</div><!-- #page -->

<?php wp_footer(); ?>

</body>
</html>
