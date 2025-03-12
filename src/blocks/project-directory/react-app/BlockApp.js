import React, {useEffect, useState} from "react";
import ProjectList from "./ProjectList";

export default function BlockApp(props) {
	let [keyword, setKeyword] = useState('');
	let [projects, setProjects] = useState([]); //store the books
	//store the filtered projects
	let [filteredProjects, setFilteredProjects] = useState([]);

	useEffect(() => {
		fetch('/wp-json/wp/v2/project')
			.then(response => response.json())
			.then(data => {
				console.log(data);
				setProjects(data);
				setFilteredProjects(data); // to show all projects when the page loads
			})
	}, []);


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

