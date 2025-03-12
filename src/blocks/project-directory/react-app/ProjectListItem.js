import React, {useState} from "react";

export default function ProjectListItem({post}) {
const imageId = post.acf.project_image;
const imageUrl = post.acf.project_image_url;
	return (
		<li>{post.title.rendered}</li>

	)
}
