import React from "react";

export default function ProjectListItem({ post }) {
	const imageUrl = post.acf?.project_image
		? post.acf.project_image
		: post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "https://picsum.photos/200/300";

	return (
		<div className="project-card">
			<img src={imageUrl} alt={post.title.rendered || "No Title"} className="project-image" />
			<h3>{post.title.rendered}</h3>
			<p>{post.acf?.project_description || "No description available."}</p>
			<p>
				<strong>Technologies Used:</strong>
				{Array.isArray(post.acf?.project_technology)
					? post.acf.project_technology.join(", ")
					: post.acf?.project_technology || "Not specified"}
			</p>
		</div>
	);
}
