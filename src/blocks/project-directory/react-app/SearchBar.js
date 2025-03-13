import React from "react";

export default function SearchBar({ value, setValue }) {
	return (
		<input
			type="text"
			placeholder="Search projects..."
			value={value}
			onChange={e => setValue(e.target.value)}
		/>
	);
}
