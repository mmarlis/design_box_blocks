export default function getProject(setProjects, setFilteredProjects) {
	fetch('/wp-json/wp/v2/project')
		.then(response => response.json())
		.then(data => {
			console.log(data);
			setProjects(data);
			setFilteredProjects(data); // to show all projects when the page loads
		})
}
