import { URLInput } from '@wordpress/block-editor';


export default function ProfileButton() {
	return (
		<div className="profile-button-wrapper">
			<URLInput
				value={profileUrl}
				onChange={(url) => setAttributes({ profileUrl: url })}
				placeholder="Enter profile link"
			/>

			<a href={profileUrl || '#'} className="profile-button">View Profile</a>
		</div>
	);
}
