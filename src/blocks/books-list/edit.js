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
 */
export default function Edit({ attributes, setAttributes }) {
	return (
		<div {...useBlockProps()}>
			<BlockSettings attributes={attributes} setAttributes={setAttributes} />

			{/* Example Preview in Editor */}
			<div className="flip-card">
				<div className="flip-card-inner">
					<div className="flip-card-front">
						<img src="https://via.placeholder.com/150" alt="Book Cover"/>
					</div>
					<div className="flip-card-back" style={{ backgroundColor: attributes.cardColor }}>
						<h3 className="name" style={{ color: attributes.headingColor }}>Example Book Title</h3>
						<div className="meta" style={{ color: attributes.textColor }}>Author: John Doe</div>
						<div className="synopsis" style={{ color: attributes.textColor }}>
							<p>This is a short book synopsis preview.</p>
						</div>
					</div>
				</div>
			</div>

			{/* Server-Side Rendered Books */}
			<ServerSideRender
				block={metadata.name}
				attributes={attributes}
			/>
		</div>
	);
}
