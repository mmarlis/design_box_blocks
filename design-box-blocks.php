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



}
add_action( 'init', 'mm_design_box_blocks_block_init' );
