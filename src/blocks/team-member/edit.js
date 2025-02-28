/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import {__} from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import {useBlockProps} from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
// import {RichText, PlainText, useBlocks, URLInput, MediaUpload, MediaUploadCheck} from '@wordpress/block-editor';
// import {Button} from '@wordpress/components';
import './editor.scss';
import MemberInfo from '../../components/MemberInfo';
import ProfileButton from "../../components/ProfileButton";
import ProfilePhoto from "../../components/ProfilePhoto";
import BlockSettings from "./BlockSettings";

export default function Edit({attributes, setAttributes}) {
	/**
	 * Style overrides for the block
	 * @type CSSProperties
	 */
	const divStyles = {
		color: attributes.textColor,
	}
	const cardStyles = {
		backgroundColor: attributes.backgroundColor,
	}
	const memberInfoStyles = {
		color: attributes.textColor,
		backgroundColor: attributes.backgroundColor,
	}

	const buttonStyles = {
		color: attributes.buttonTextColor,
		backgroundColor: attributes.buttonBackgroundColor,
	}


	return (
		<div {...useBlockProps()} style={cardStyles}>

			<BlockSettings
				attributes={attributes} setAttributes={setAttributes}
			/>

			<div className="member-card" style={cardStyles}>

				<ProfilePhoto
					memberPhoto={attributes.memberPhoto}
					setAttributes={setAttributes}
				/>

				<MemberInfo
					memberName={attributes.memberName}
					role={attributes.role}
					setAttributes={setAttributes}
					memberInfoStyles={memberInfoStyles}
				/>


				<ProfileButton
					profileUrl={attributes.profileUrl}
					setAttributes={setAttributes}
					buttonStyles={buttonStyles}
				/>

			</div>
		</div>
	);
}
