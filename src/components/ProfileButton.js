import { URLInput } from '@wordpress/block-editor';


export default function ProfileButton({ profileUrl, setAttributes}) {
	return (
		<div className="profile-button-wrapper">
			<URLInput
				value={profileUrl}
				onChange={(url) => setAttributes({ profileUrl: url })}
				placeholder="Enter profile link"
			/>

		</div>
	);
}
