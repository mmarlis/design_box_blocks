import { createRoot } from 'react-dom/client';

// Render your React component instead
// This file is tell it where to render this React code on the page

document.querySelectorAll('.wp-block-mm-book-finder');
const root = createRoot(document.getElementById('app'));
root.render(<h1>Hello world</h1>);
