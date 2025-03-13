import React, {useEffect, useState} from "react";

export default function ProjectListItem({post}) {
	// const imageUrl = post.acf?.project_image
	// 	? post.acf.project_image
	// 	: post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "https://picsum.photos/200/300";
	const [imageUrl, setImageUrl] = useState("");

	useEffect(() => {

		setImageUrl(post.acf?.project_image
			|| post._embedded?.["wp:featuredmedia"]?.[0]?.source_url
			|| "https://picsum.photos/200/300");


		fetch(`/wp-json/wp/v2/media/${post.acf?.project_image}`)
			.then(response => response.json())
			.then(data => {
				let imgUrl = data.media_details.sizes.thumbnail.source_url;
				if (imgUrl) {
					setImageUrl(imgUrl);
				}
			});
	}, []);
	return (
		<div className="project-card">
			<img src={imageUrl} alt={post.title.rendered || "No Title"} className="project-image"/>
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
