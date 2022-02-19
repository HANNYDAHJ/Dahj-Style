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
        <a class="skip-link screen-reader-text" href="#primary"><?php esc_html_e( 'Skip to content', 'dahj' ); ?></a>

        <header id="masthead" class="site-header">
            <!-- <div class="site-branding"> -->
                <?php
			// the_custom_logo();
			if ( is_front_page() && is_home() ) :
				?>
                <!-- <h1 class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" -->
                        <!-- rel="home"><?php bloginfo( 'name' ); ?></a></h1> -->
                <?php
			else :
				?>
                <!-- <p class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" -->
                        <!-- rel="home"><?php bloginfo( 'name' ); ?></a></p> -->
                <?php
			endif;
			$dahj_description = get_bloginfo( 'description', 'display' );
			if ( $dahj_description || is_customize_preview() ) :
				?>
                <!-- <p class="site-description"> -->
                    <?php echo $dahj_description; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
                </p>
                <?php endif; ?>
            </div><!-- .site-branding -->

        <nav id="site-navigation" class="main-navigation">

                <div class="top-bar">
                    <div class="top-bar-left">
                        <ul class="dropdown menu" data-dropdown-menu>
                            <li class="menu-text"><img class="logo" src="http://dahj.local/wp-content/themes/dahj/assets/image/logo.jpg"></li>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Contact Us</a></li>
                        </ul>
                    </div>
                    <div class="top-bar-right">
                        <ul class="menu">
                            <li><input type="search" placeholder="Search"></li>
                            <li><button type="button" class="button">Search</button></li>
                        </ul>
                    </div>
                </div>










                <button class="menu-toggle" aria-controls="primary-menu"
                    aria-expanded="false"><?php esc_html_e( 'Primary Menu', 'dahj' ); ?></button>
                <?php
			wp_nav_menu(
				array(
					'theme_location' => 'menu-primary',
					'menu_id'        => 'primary-menu',
				)
			);
			?>
            </nav><!-- #site-navigation -->
        </header><!-- #masthead -->