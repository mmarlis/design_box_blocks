import React, {useState} from "react";
import ProjectListItem from "./ProjectListItem";

export default function BookList({posts}) {

	return (
		<ul>
			{posts.map(post => (
				<ProjectListItem post={post} key={post.id} />
			))}
		</ul>

	)
}
