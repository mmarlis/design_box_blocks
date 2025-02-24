/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import {useBlockProps} from '@wordpress/block-editor';
import ProfileButton from '../../components/ProfileButton';
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
	return (
		<div{...useBlockProps.save()}>
			<div className="member-card">
				<div className="member-photo">
					<img src={attributes.memberPhoto || 'https://via.placeholder.com/250x250'}
						 alt={"Photo of " + attributes.memberName}/>
				</div>
				<div className="member-info">
					<h3 className="member">{attributes.memberName}</h3>
					<p className="role">{attributes.role}</p>
				</div>
				{/*<a href={attributes.profileUrl || '#'} className="profile-button">View Profile</a>*/}
				<a href={attributes.profileUrl || '#'} className="profile-button">View Profile</a>
			</div>
		</div>
	);
}
