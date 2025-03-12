import React, {useState} from "react";
import BookList from "./BookList";

export default function BlockApp(props) {
	let [keyword, setKeyword] = useState('');

	fetch('wp-json/wp/v2/books')
		.then(response => response.json())
		.then(data => {
			console.log(data);
		})


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
			<BookList posts={[1, 2, 3]}/>
		</div>

	)
}
