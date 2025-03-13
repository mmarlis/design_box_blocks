import React from "react";

export default function FilterDropdown({ value, setValue, technologies }) {
	return (
		<select value={value} onChange={e => setValue(e.target.value)}>
			{technologies.map((tech, index) => (
				<option key={index} value={tech}>{tech}</option>
			))}
		</select>
	);
}
