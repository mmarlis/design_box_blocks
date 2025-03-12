import React, {useEffect,useState} from "react";
import BookList from "./BookList";

export default function BlockApp(props) {
	let [keyword, setKeyword] = useState('');
	let [books, setBooks] = useState([]); //store the books

	useEffect(() => {
		fetch('/wp-json/wp/v2/book')
			.then(response => response.json())
			.then(data => {
				console.log(data);
				setBooks(data);
			})
	}, []);



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
			<BookList posts={books}/>
		</div>

	)
}
