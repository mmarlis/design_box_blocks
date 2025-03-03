<?php
function mm_add_borders( $block_content = '', $block = [] ) {
	// TODO: create wrapper
	// only do this if border style is set
	// bc is for border-control

	$defaults = [
		'bcBorderStyle'   => 'none',
		'bcBorderPadding' => '0px',
		'bcBorderMargin'  => '0px',
		'bcBorderColor'   => '#000000',
		'bcBorderRadius'  => '0px',
		'bcBorderWidth'   => '0px',
	];

	// merge our defaults with whatever the attributes are
	$attrs = array_merge( $defaults, $block['attrs'] );

	if ( $attrs['bcBorderStyle'] !== 'none' ) {
		$divStyles = "
			border-style: {$attrs['bcBorderStyle']};
			padding: {$attrs['bcBorderPadding']}px;
			margin: {$attrs['bcBorderMargin']}px;
			border-color: {$attrs['bcBorderColor']};
			border-radius: {$attrs['bcBorderRadius']}px;
			border-width: {$attrs['bcBorderWidth']}px;
		";

		// Wrap the block content with a div with these styles
		$block_content = '<div style="' . $divStyles . '">' . $block_content . '</div>';

	}


	// return unmodified block content
	return $block_content;
}

add_filter( 'render_block', 'mm_add_borders', 10, 2 );
