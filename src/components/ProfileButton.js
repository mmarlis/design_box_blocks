import { URLInput } from '@wordpress/block-editor';


export default function ProfileButton({ profileUrl, setAttributes, buttonStyles}) {
	return (
		<div className="profile-button-wrapper" style={buttonStyles}>
			<URLInput
				value={profileUrl}
				onChange={(url) => setAttributes({ profileUrl: url })}
				placeholder="Enter profile link"
			/>

		</div>
	);
}
