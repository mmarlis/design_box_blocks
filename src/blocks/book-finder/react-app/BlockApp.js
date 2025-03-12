import React, {useState} from "react";

export default function BlockApp(props) {
	let [keyword, setKeyword] = useState('');
	return (
		<div>
			<div>
				<label>Filter:
					<input type="text"
						   value={keyword}
						   onChange={e => setKeyword(e.target.value)}
					/>
					{keyword}
				</label>
			</div>
		</div>

	)
}
