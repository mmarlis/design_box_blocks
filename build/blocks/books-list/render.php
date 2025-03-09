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

<div class="books-grid">
	<?php while ($query->have_posts()) : $query->the_post();
		$meta = get_post_meta(get_the_ID());
		$coverImage = get_the_post_thumbnail_url(get_the_ID(), 'medium');
		$author = $meta['author'][0] ?? 'Unknown Author';
		$synopsis = $meta['synopsis'][0] ?? 'No synopsis available.';
		?>
		<div class="book-item">
			<img src="<?= esc_url($coverImage) ?>" alt="<?= esc_attr(get_the_title()) ?>" class="book-cover">
			<h2><?= get_the_title() ?></h2>
<!--			<p>By: --><?php //= esc_html($author) ?><!--</p>-->
			<button class="view-details" data-book-id="<?= get_the_ID() ?>">View Details</button>


			<div id="modal-<?= get_the_ID() ?>" class="book-modal">
				<div class="modal-content">
					<span class="close" data-book-id="<?= get_the_ID() ?>">&times;</span>
					<h2><?= get_the_title() ?></h2>
<!--					<p><strong>Author:</strong> --><?php //= esc_html($author) ?><!--</p>-->
					<p><strong>Synopsis:</strong> <?= esc_html($synopsis) ?></p>
				</div>
			</div>
		</div>
	<?php endwhile; ?>
</div>


