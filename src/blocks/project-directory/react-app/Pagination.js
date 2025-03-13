import React from "react";

export default function Pagination({ currentPage, totalPages, setPage }) {
	if (totalPages <= 1) return null;

	return (
		<div className="pagination">
			<button disabled={currentPage === 1} onClick={() => setPage(currentPage - 1)}>Previous</button>
			<span>Page {currentPage} of {totalPages}</span>
			<button disabled={currentPage >= totalPages} onClick={() => setPage(currentPage + 1)}>Next</button>
		</div>
	);
}
