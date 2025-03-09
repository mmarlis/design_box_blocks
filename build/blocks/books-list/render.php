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
		$title = get_the_title();
//		$author = $meta['author'][0] ?? 'Unknown Author';
		$publisher = $meta['publisher'][0] ?? 'Unknown Publisher';
		$publishedDate = $meta['publishedDate'][0] ?? 'Not Available';
		$genre = $meta['genre'][0] ?? 'Unknown Genre';
		$series = $meta['series'][0] ?? 'Not part of a series';
		$pageCount = $meta['pageCount'][0] ?? 'N/A';
		$language = $meta['language'][0] ?? 'Unknown Language';
		$price = !empty($meta['price'][0]) ? '$' . $meta['price'][0] : 'Not Set';
		$synopsis = !empty($meta['synopsis'][0]) ? $meta['synopsis'][0] : 'No synopsis available.';
		?>
		<div class="book-item">
			<img src="<?= esc_url($coverImage) ?>" alt="<?= esc_attr($title) ?>" class="book-cover">
			<h2><?= esc_html($title) ?></h2>
<!--			<p>By: --><?php //= esc_html($author) ?><!--</p>-->
			<button class="view-details"
					data-book-id="<?= esc_attr(get_the_ID()) ?>"
					data-title="<?= esc_attr($title) ?>"
					data-cover="<?= esc_url($coverImage) ?>"
					data-publisher="<?= esc_attr($publisher) ?>"
					data-published-date="<?= esc_attr($publishedDate) ?>"
					data-genre="<?= esc_attr($genre) ?>"
					data-series="<?= esc_attr($series) ?>"
					data-page-count="<?= esc_attr($pageCount) ?>"
					data-language="<?= esc_attr($language) ?>"
					data-price="<?= esc_attr($price) ?>"
					data-synopsis="<?= esc_attr($synopsis) ?>">
				View Details
			</button>

		</div>
	<?php endwhile; ?>
</div>

<!-- Modal (Hidden by Default) -->
<div id="book-modal" class="book-modal">
	<div class="modal-content">
		<span class="close">&times;</span>
		<div class="modal-body">
			<div class="modal-left">
				<img id="modal-cover" src="" alt="" class="book-cover">
			</div>
			<div class="modal-right">
				<h2 id="modal-title"></h2>
				<p><strong>Publisher:</strong> <span id="modal-publisher"></span></p>
				<p><strong>Published Date:</strong> <span id="modal-published-date"></span></p>
				<p><strong>Genre:</strong> <span id="modal-genre"></span></p>
				<p><strong>Series:</strong> <span id="modal-series"></span></p>
				<p><strong>Page Count:</strong> <span id="modal-page-count"></span></p>
				<p><strong>Language:</strong> <span id="modal-language"></span></p>
				<p><strong>Price:</strong> <span id="modal-price"></span></p>
				<div class="book-synopsis">
					<h3>Synopsis</h3>
					<p id="modal-synopsis"></p>
				</div>
			</div>
		</div>
	</div>
</div>
