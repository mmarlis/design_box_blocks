import React, {useState} from "react";
import ProjectListItem from "./ProjectListItem";

export default function BookList({posts}) {

	return (
		<div className="project-grid">
			{posts.map(post => (
				<ProjectListItem post={post} key={post.id} />
			))}
		</div>

	)
}
