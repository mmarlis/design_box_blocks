import { MediaUpload } from '@wordpress/block-editor';
import { Button } from '@wordpress/components';

export default function ProfilePhoto({ memberPhoto, setAttributes }) {
	return (
		<div className="member-photo">
			<img src={memberPhoto || 'https://via.placeholder.com/250x250'} alt="Member Photo" />

			<MediaUpload
				onSelect={(media) => setAttributes({ memberPhoto: media.url })}
				allowedTypes={['image']}
				value={memberPhoto}
				render={({ open }) => (
					<Button onClick={open} variant="secondary">
						Change Photo
					</Button>
				)}
			/>
		</div>
	);

}
