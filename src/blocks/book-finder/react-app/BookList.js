import React, {useState} from "react";
import BookListItem from "./BookListItem";

export default function BookList({posts}) {

	return (
		<ul>
			{posts.map(post => (
				<BookListItem post={post} />
			))}
		</ul>

	)
}
