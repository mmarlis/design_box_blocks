/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';
import { TextareaControl } from '@wordpress/components';
import './editor.scss';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from '@wordpress/block-editor';


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit() {
	return (

	<div { ...useBlockProps() }>
		<div className="hero">
		<div className="hero-content">
			<h1>Hello, my name is Mariana Marlis</h1>
			<p>Short text with details about me, what I do or my professional career. Add more information on the about page.</p>
			<div className="buttons">
				<button className="btn">Projects</button>
				<button className="btn">Resume</button>
			</div>
		</div>
		<div className="hero-photo">
			<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
			<path fill="#FF0066" d="M43.4,-74.1C55.8,-67.9,65.3,-55.5,71.1,-42.1C77,-28.8,79.3,-14.4,77.6,-1C75.9,12.4,70.3,24.9,64.1,37.8C58,50.7,51.4,64.1,40.6,73.5C29.8,82.8,14.9,88.2,2.4,84C-10.1,79.8,-20.2,66.1,-30.9,56.7C-41.7,47.4,-53.1,42.3,-63.9,33.5C-74.7,24.8,-84.9,12.4,-82.4,1.5C-79.9,-9.5,-64.6,-19,-56.3,-32.1C-48.1,-45.2,-46.7,-61.9,-38.5,-70.6C-30.3,-79.2,-15.1,-79.7,0.2,-80C15.5,-80.3,30.9,-80.3,43.4,-74.1Z" transform="translate(100 100)" />
		</svg>
		</div>
		</div>
	</div>
	);
}
