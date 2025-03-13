<?php
/**
 * Plugin Name:       Design Box Blocks
 * Description:       Make your website extra original with these awesome blocks
 * Version:           0.1.0
 * Requires at least: 6.7
 * Requires PHP:      7.4
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       design-box-blocks
 *
 * @package Mm
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function mm_design_box_blocks_block_init() {
	register_block_type( __DIR__ . '/build/blocks/design-box-blocks' );
	register_block_type( __DIR__ . '/build/blocks/hero-section' );
	register_block_type( __DIR__ . '/build/blocks/team-member' );
	register_block_type( __DIR__ . '/build/blocks/testimonial' );
	register_block_type( __DIR__ . '/build/filters/border-control' );
	register_block_type( __DIR__ . '/build/blocks/books-list' );
	register_block_type(__DIR__ . '/build/blocks/book-finder');
	register_block_type(__DIR__ . '/build/blocks/project-directory');


}
add_action( 'init', 'mm_design_box_blocks_block_init' );


add_action('rest_api_init', 'register_rest_images' );

function register_rest_images() {
	register_rest_field(
		array('project'), // Change 'post' to 'project' (your CPT)
		'fimg_url',
		array(
			'get_callback'    => 'get_rest_featured_image',
			'update_callback' => null,
			'schema'          => null,
		)
	);
}

function get_rest_featured_image( $object, $field_name, $request ) {
	if( $object['featured_media'] ){
		$img = wp_get_attachment_image_src( $object['featured_media'], 'full' );
		return $img ? $img[0] : false;
	}
	return false;
}


include __DIR__ . '/filters.php';
