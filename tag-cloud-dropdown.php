<?php
/*
 * Plugin Name: Tag Cloud Dropdown
 * Description: Transforms the Tag Cloud Widget into a dropdown on mobile, rather than having very small links which are hard to hit.
 * Version: 1.0.0
 * Author: Bernhard Kau
 * Author URI: http://kau-boys.de
 * Plugin URI: https://github.com/2ndkauboy/tag-cloud-mobile-dropdown
 * License: GPLv3
 * License URI: http://www.gnu.org/licenses/gpl-3.0
*/

function tag_cloud_dropdown_enqueue_scripts() {
	if ( $tag_cloud_css = apply_filters( 'tag_cloud_dropdown_css', plugins_url( 'tag-cloud-dropdown.css', __FILE__ ) ) ) {
		wp_enqueue_style( 'tag-cloud-dropdown', $tag_cloud_css );
	}

	wp_enqueue_script( 'tag-cloud-dropdown', plugins_url( 'tag-cloud-dropdown.js', __FILE__ ), null, '1.0.0', true );
}
add_action( 'wp_enqueue_scripts', 'tag_cloud_dropdown_enqueue_scripts' );