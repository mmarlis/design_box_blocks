/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';
import { useBlockProps} from '@wordpress/block-editor';
import ServerSideRender from "@wordpress/server-side-render";
import BlockSettings from "./BlockSettings";
import metadata from './block.json';


import { PanelBody, RangeControl, SelectControl, ColorPicker } from '@wordpress/components';
import { Fragment } from '@wordpress/element';
/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 *
 */

// placeholders To see how it looks in the editor
const mockBooks = [
	{
		id: 1,
		title: "A Little Life",
		cover: "https://via.placeholder.com/150",
		synopsis: "A deeply moving novel about friendship and trauma."
	},
	{
		id: 2,
		title: "Book Lovers",
		cover: "https://via.placeholder.com/150",
		synopsis: "A witty, heartfelt romance about bookish people."
	}
];


export default function Edit({ attributes, setAttributes }) {
	return (
		<div {...useBlockProps()}>
			<BlockSettings attributes={attributes} setAttributes={setAttributes} />

			<div className="books-grid">
				{mockBooks.map((book) => (
					<div key={book.id} className="book-item">
						<img src={book.cover} alt={book.title} className="book-cover"/>
						<h2>{book.title}</h2>
						<button className="view-details">View Details</button>
					</div>
				))}
			</div>

			<div className="books-grid">
				<ServerSideRender block={metadata.name} attributes={attributes} />
			</div>
		</div>
	);
}
