/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import {RichText, useBlockProps} from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */
export default function save({attributes}) {
	// build the stars
	let stars = '';
	for (let i = 0; i < attributes.stars; i++) {
		stars +='&starf;';
	}
	return (
		<div {...useBlockProps.save()}>
			<div className="stars">
				{ stars }
			</div>

			<RichText.Content className="quote"
							  tagName="div"
							  value={attributes.quote}
			>
			</RichText.Content>
			<div className="quote-profile">
				<div className="photo">
					<img src={ attributes.avatarURL} alt= {"Photo of" + attributes.author}></img>
				</div>
				<div className="text">
					<p className="author">{attributes.author}</p>
					<p className="location">{attributes.location}</p>
				</div>
			</div>
		</div>
	);
}
