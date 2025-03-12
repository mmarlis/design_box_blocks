import { createRoot } from 'react-dom/client';
import BlockApp from "./react-app/BlockApp";

// Render your React component instead
// This file is tell it where to render this React code on the page

const blocks = document.querySelectorAll('.wp-block-mm-book-finder');

blocks.forEach((block) => {
	createRoot(block).render(<BlockApp />);

});
