<?php

$attributes = wp_parse_args($attributes ?? [], [
	'numBooks' => 6,
	'order' => 'ASC',
	'cardColor' => '#ffffff',
	'textColor' => '#000000',
	'headingColor' => '#333333',
]);

// Query for all books
$query = new WP_Query([
	'post_type'      => 'book',
	'posts_per_page' => $attributes['numBooks'],
	'orderby'        => 'title',
	'order'          => $attributes['order'],
]);

?>

<div <?php echo get_block_wrapper_attributes(); ?>>
	<?php while ($query->have_posts()) : $query->the_post();
		$meta = get_post_meta(get_the_ID());
		$coverImage = get_the_post_thumbnail_url(get_the_ID(), 'medium');
		?>
		<div class="flip-card">
			<div class="flip-card-inner">
				<div class="flip-card-front">
					<img src="<?= esc_url($coverImage) ?>" alt="<?= esc_attr(get_the_title()) ?>" class="book-cover">
				</div>
				<div class="flip-card-back" style="background-color: <?= esc_attr($attributes['cardColor']) ?>;">
					<h3 class="name" style="color: <?= esc_attr($attributes['headingColor']) ?>;">
						<?= get_the_title() ?>
					</h3>
					<div class="meta" style="color: <?= esc_attr($attributes['textColor']) ?>;">
						<p><strong>Publisher:</strong> <?= esc_html($meta['publisher'][0] ?? '') ?></p>
						<p><strong>Published Date:</strong> <?= esc_html($meta['publishedDate'][0] ?? '') ?></p>
						<p><strong>Genre:</strong> <?= esc_html($meta['genre'][0] ?? '') ?></p>
						<p><strong>Page Count:</strong> <?= esc_html($meta['pageCount'][0] ?? '') ?></p>
						<p><strong>Language:</strong> <?= esc_html($meta['language'][0] ?? '') ?></p>
					</div>
					<div class="synopsis" style="color: <?= esc_attr($attributes['textColor']) ?>;">
						<p><?= esc_html($meta['synopsis'][0] ?? '') ?></p>
					</div>
				</div>
			</div>
		</div>
	<?php endwhile; wp_reset_postdata(); ?>
</div>
