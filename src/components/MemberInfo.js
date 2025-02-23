import React, {useState} from 'react';
import { PlainText } from '@wordpress/block-editor';


export default function MemberInfo({member, role, setAttributes}) {
	return (
	<div className="member-info">
		<PlainText
			className="member"
			placeholder="John Doe"
			value={memberName}
			onChange={(value) => setAttributes({ memberName: value })}
		/>
		<PlainText
			className="role"
			placeholder="Type Role"
			value={role}
			onChange={(value) => setAttributes({ role: value })}
		/>
	</div>
	);
}
