import React, {useState} from "react";

export default function BookListItem({post}) {

	return (
		<li>{post.title.rendered}</li>

	)
}
