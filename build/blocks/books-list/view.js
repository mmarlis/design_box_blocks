/******/ (() => { // webpackBootstrap
/*!***************************************!*\
  !*** ./src/blocks/books-list/view.js ***!
  \***************************************/
/**
 * Use this file for JavaScript code that you want to run in the front-end
 * on posts/pages that contain this block.
 *
 * When this file is defined as the value of the `viewScript` property
 * in `block.json` it will be enqueued on the front end of the site.
 *
 * Example:
 *
 * ```js
 * {
 *   "viewScript": "file:./view.js"
 * }
 * ```
 *
 * If you're not making any changes to this file because your project doesn't need any
 * JavaScript running in the front-end, then you should delete this file and remove
 * the `viewScript` property from `block.json`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/#view-script
 */

/* eslint-disable no-console */
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".view-details").forEach(button => {
    button.addEventListener("click", function () {
      // Set modal content from button attributes
      document.getElementById("modal-title").textContent = this.getAttribute("data-title");
      document.getElementById("modal-cover").src = this.getAttribute("data-cover");
      document.getElementById("modal-publisher").textContent = this.getAttribute("data-publisher");
      document.getElementById("modal-published-date").textContent = this.getAttribute("data-published-date");
      document.getElementById("modal-genre").textContent = this.getAttribute("data-genre");
      document.getElementById("modal-series").textContent = this.getAttribute("data-series");
      document.getElementById("modal-page-count").textContent = this.getAttribute("data-page-count");
      document.getElementById("modal-language").textContent = this.getAttribute("data-language");
      document.getElementById("modal-price").textContent = this.getAttribute("data-price");
      document.getElementById("modal-synopsis").textContent = this.getAttribute("data-synopsis");

      // Show modal
      document.getElementById("book-modal").style.display = "block";
    });
  });

  // Close modal when clicking the close button
  document.querySelector(".close").addEventListener("click", function () {
    document.getElementById("book-modal").style.display = "none";
  });
});

/* eslint-enable no-console */
/******/ })()
;
//# sourceMappingURL=view.js.map