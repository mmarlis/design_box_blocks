import React, {useEffect, useState} from "react";
import ProjectList from "./ProjectList";
import SearchBar from "./SearchBar";
import FilterDropdown from "./FilterDropdown";

import Pagination from "./Pagination";

export default function BlockApp() {
	const [keyword, setKeyword] = useState('');
	const [projects, setProjects] = useState([]);
	const [filteredProjects, setFilteredProjects] = useState([]);
	const [technology, setTechnology] = useState("");
	// const [sortOrder, setSortOrder] = useState("asc");
	const [loading, setLoading] = useState(true);
	const [currentPage, setCurrentPage] = useState(1);
	const projectsPerPage = 6;

	useEffect(() => {
		setLoading(true);
		fetch(`/wp-json/wp/v2/project?_embed&page=${currentPage}&per_page=${projectsPerPage}`)
			.then(response => response.json())
			.then(data => {
				console.log("Fetched Data:", data);
				setProjects(data);
				setFilteredProjects(data);
				setLoading(false);
			});
	}, [currentPage]);


	const uniqueTechnologies = React.useMemo(() => {
		const techs = projects.reduce((acc, project) => {
			if (Array.isArray(project.acf?.project_technology)) {
				acc.push(...project.acf.project_technology);
			}
			return acc;
		}, []);

		return ["All", ...new Set(techs)];
	}, [projects]);



	function filterProjects(keyword) {
		setKeyword(keyword);
		const results = projects.filter(project =>
			project.title.rendered.toLowerCase().includes(keyword.toLowerCase())
		);
		setFilteredProjects(results);
	}

	function filterByTechnology(selectedTechnology) {
		setTechnology(selectedTechnology);

		if (selectedTechnology === "All") {
			setFilteredProjects(projects);
		} else {
			const filtered = projects.filter(project => {
				const projectTechs = project.acf?.project_technology || [];

				return projectTechs.includes(selectedTechnology);
			});

			setFilteredProjects(filtered);
		}
	}



	return (
		<div className="project-directory">
			<SearchBar value={keyword} setValue={filterProjects} />
			<FilterDropdown value={technology} setValue={filterByTechnology} technologies={uniqueTechnologies} />

			{loading ? <p>Loading...</p> : <ProjectList posts={filteredProjects} />}

			<Pagination
				currentPage={currentPage}
				totalPages={5}
				setPage={setCurrentPage}
			/>
		</div>
	);
}
