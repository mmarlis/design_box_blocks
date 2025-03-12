import React, {useEffect, useState} from "react";
import ProjectList from "./ProjectList";
import getProject from "./api/project";

export default function BlockApp(props) {
	let [keyword, setKeyword] = useState('');
	let [projects, setProjects] = useState([]); //store the books
	//store the filtered projects
	let [filteredProjects, setFilteredProjects] = useState([]);

	useEffect(() => getProject(setProjects, setFilteredProjects), []);


	function filterProjects(keyword) {
		// If I had a ton of records, I would do another ajax call here

		const results = projects.filter(project => {
			return project.title.rendered.toLowerCase().includes(keyword.toLowerCase());
		});
		setKeyword(keyword);
		setFilteredProjects(results);
	}

	return (
		<div>
			<div>
				<label>Filter:
					<input type="text"
						   value={keyword}
						   onChange={e => filterProjects(e.target.value)}
					/>
				</label>
			</div>
			<ProjectList posts={filteredProjects}/>
		</div>

	)
}

