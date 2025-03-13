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
	const [loading, setLoading] = useState(true);
	const [currentPage, setCurrentPage] = useState(1);
	const [totalPages, setTotalPages] = useState(1);
	const projectsPerPage = 2;

	useEffect(() => {
		setLoading(true);
		fetch(`/wp-json/wp/v2/project?_embed&page=${currentPage}&per_page=${projectsPerPage}`)
			.then(response => {
				const total = response.headers.get("X-WP-Total");
				const totalPages = response.headers.get("X-WP-TotalPages");
				console.log("Total Projects:", total, "Total Pages:", totalPages);
				setTotalPages(Number(totalPages));
				return response.json();
			})
			.then(data => {
				console.log("Fetched Data:", data);
				setProjects(data);
				setFilteredProjects(data);
				setLoading(false);
			});
	}, [currentPage, projectsPerPage]);


	const totalPagesCalculated = totalPages;

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
				totalPages={totalPagesCalculated}
				setPage={setCurrentPage}
			/>
		</div>
	);
}
