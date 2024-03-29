<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Dahj_Style
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>

<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="profile" href="https://gmpg.org/xfn/11">

    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
    <?php wp_body_open(); ?>
    <div id="page" class="site">
        <!-- skip link  -->

        <a class="skip-link screen-reader-text" href="#primary"><?php esc_html_e( 'Skip to content', 'dahj' ); ?></a>

        <header id="masthead" class="site-header">
            <div class="site-branding">
                <?php
//* if logo is empty, will show site branding.
if (! empty (has_custom_logo())){
the_custom_logo();
} else{
if ( is_front_page() && is_home() ) :
?>
                <!-- site title display -->
                <h1 class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>"
                        rel="home"><?php bloginfo( 'name' ); ?></a></h1> -->
                <?php
else :
?>
                <p class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>"
                        rel="home"><?php bloginfo( 'name' ); ?></a></p> -->
                <?php
endif;
// get description if it displays home
$dahj_description = get_bloginfo( 'description', 'display' );
if ( $dahj_description || is_customize_preview() ) :
?>
                <p class="site-description">
                    <?php echo $dahj_description; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
                </p>
                <?php endif;
}
?>
            </div><!-- .site-branding -->

            <nav id="site-navigation" class="main-navigation">

                <!-- <button class="menu-toggle" aria-controls="primary-menu" -->
                <!-- aria-expanded="false"><?php esc_html_e( 'Primary Menu', 'dahj' ); ?></button> -->
                <?php

if (has_nav_menu( 'menu-primary' )){
wp_nav_menu(
array(
'theme_location' => 'menu-primary',
'menu_id'        => 'primary-menu',
)
);
}
// menu social is a secondary menu if needed

if (has_nav_menu( 'menu-social' )){
wp_nav_menu(
array(
'theme_location' => 'Social-menu',
)
);
}
?>

                <!-- if it is the home or single page will show content else the excerpt -->
                <?php if ( is_home() || is_single() ) {

the_content();

}
else {

the_excerpt();

}
?>
            </nav><!-- #site-navigation -->
        </header><!-- #masthead -->