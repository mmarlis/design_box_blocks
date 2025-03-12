<?php
/**
 * Portfolio Showcase Block Rendering
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */

// Query for fetching Portfolio Pieces
$query = new WP_Query([
	'post_type'      => 'portfolio',
	'posts_per_page' => 6,
	'orderby'        => 'date',
	'order'          => 'DESC'
]);

?>

<div <?php echo get_block_wrapper_attributes(); ?>>
	<?php if ($query->have_posts()) : ?>
		<div class="portfolio-showcase">
			<?php while ($query->have_posts()) : $query->the_post(); ?>
				<?php
				$project_id = get_the_ID();
				$project_title = get_the_title();
				$project_url = get_field('project_url');
				$project_description = get_field('project_description');
				$project_image = get_the_post_thumbnail('project_image');
				$image_url = $project_image ? esc_url($project_image['url']) : 'https://via.placeholder.com/300';
				?>


				<div class="portfolio-card">
					<img src="<?= $image_url; ?>" alt="<?= esc_attr($project_title); ?>" />
					<h3>
						<button class="portfolio-title" data-modal="modal-<?= $project_id; ?>">
							<?= esc_html($project_title); ?>
						</button>
					</h3>
				</div>

				<div id="modal-<?= $project_id; ?>" class="portfolio-modal" aria-hidden="true">
					<div class="modal-content">
						<button class="close-modal" data-modal="modal-<?= $project_id; ?>">&times;</button>
						<h2><?= esc_html($project_title); ?></h2>
						<p><?= esc_html($project_description); ?></p>
						<?php if ($project_url) : ?>
							<a href="<?= esc_url($project_url); ?>" target="_blank" rel="noopener noreferrer">
								View Project
							</a>
						<?php endif; ?>
					</div>
				</div>

			<?php endwhile; ?>
		</div>
	<?php else : ?>
		<p>No portfolio items found.</p>
	<?php endif; ?>

	<?php wp_reset_postdata(); ?>
</div>
