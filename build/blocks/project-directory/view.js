/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/react-dom/client.js":
/*!******************************************!*\
  !*** ./node_modules/react-dom/client.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var m = __webpack_require__(/*! react-dom */ "react-dom");
if (false) {} else {
  var i = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  exports.createRoot = function(c, o) {
    i.usingClientEntryPoint = true;
    try {
      return m.createRoot(c, o);
    } finally {
      i.usingClientEntryPoint = false;
    }
  };
  exports.hydrateRoot = function(c, h, o) {
    i.usingClientEntryPoint = true;
    try {
      return m.hydrateRoot(c, h, o);
    } finally {
      i.usingClientEntryPoint = false;
    }
  };
}


/***/ }),

/***/ "./src/blocks/project-directory/react-app/BlockApp.js":
/*!************************************************************!*\
  !*** ./src/blocks/project-directory/react-app/BlockApp.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BlockApp)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ProjectList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProjectList */ "./src/blocks/project-directory/react-app/ProjectList.js");
/* harmony import */ var _SearchBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SearchBar */ "./src/blocks/project-directory/react-app/SearchBar.js");
/* harmony import */ var _FilterDropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FilterDropdown */ "./src/blocks/project-directory/react-app/FilterDropdown.js");
/* harmony import */ var _Pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Pagination */ "./src/blocks/project-directory/react-app/Pagination.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);






function BlockApp() {
  const [keyword, setKeyword] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [allProjects, setAllProjects] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [projects, setProjects] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [filteredProjects, setFilteredProjects] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [technology, setTechnology] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const [currentPage, setCurrentPage] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1);
  const [totalPages, setTotalPages] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1);
  const projectsPerPage = 2;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setLoading(true);
    fetch(`/wp-json/wp/v2/project?_embed&page=${currentPage}&per_page=${projectsPerPage}`).then(response => {
      const total = response.headers.get("X-WP-Total");
      const totalPages = response.headers.get("X-WP-TotalPages");
      console.log("Total Projects:", total, "Total Pages:", totalPages);
      setTotalPages(Number(totalPages));
      return response.json();
    }).then(data => {
      console.log("Fetched Data:", data);
      setProjects(data);
      setFilteredProjects(data);
      setLoading(false);
    });
  }, [currentPage, projectsPerPage]);
  const totalPagesCalculated = totalPages;
  const uniqueTechnologies = react__WEBPACK_IMPORTED_MODULE_0___default().useMemo(() => {
    const techs = projects.reduce((acc, project) => {
      if (Array.isArray(project.acf?.project_technology)) {
        acc.push(...project.acf.project_technology);
      }
      return acc;
    }, []);
    return ["All", ...new Set(techs)];
  }, [projects]);
  function applyFilters(projects, keyword, technology) {
    let filtered = projects;
    if (keyword.trim() !== "") {
      filtered = filtered.filter(project => project.title.rendered.toLowerCase().includes(keyword.toLowerCase()));
      console.log(filtered);
    }
    if (technology !== "All" && technology) {
      filtered = filtered.filter(project => {
        const projectTechs = project.acf?.project_technology || [];
        return projectTechs.includes(technology);
      });
    }
    return filtered;
  }
  function filterProjects(keyword) {
    setKeyword(keyword);
    setFilteredProjects(applyFilters(projects, keyword, technology));
  }
  function filterByTechnology(selectedTechnology) {
    setTechnology(selectedTechnology);
    setFilteredProjects(applyFilters(projects, keyword, selectedTechnology));
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
    className: "project-directory",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_SearchBar__WEBPACK_IMPORTED_MODULE_2__["default"], {
      value: keyword,
      setValue: filterProjects
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_FilterDropdown__WEBPACK_IMPORTED_MODULE_3__["default"], {
      value: technology,
      setValue: filterByTechnology,
      technologies: uniqueTechnologies
    }), loading ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
      children: "Loading..."
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_ProjectList__WEBPACK_IMPORTED_MODULE_1__["default"], {
      posts: filteredProjects
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Pagination__WEBPACK_IMPORTED_MODULE_4__["default"], {
      currentPage: currentPage,
      totalPages: totalPagesCalculated,
      setPage: setCurrentPage
    })]
  });
}

/***/ }),

/***/ "./src/blocks/project-directory/react-app/FilterDropdown.js":
/*!******************************************************************!*\
  !*** ./src/blocks/project-directory/react-app/FilterDropdown.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FilterDropdown)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


function FilterDropdown({
  value,
  setValue,
  technologies
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("select", {
    value: value,
    onChange: e => setValue(e.target.value),
    children: technologies.map((tech, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("option", {
      value: tech,
      children: tech
    }, index))
  });
}

/***/ }),

/***/ "./src/blocks/project-directory/react-app/Pagination.js":
/*!**************************************************************!*\
  !*** ./src/blocks/project-directory/react-app/Pagination.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Pagination)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


function Pagination({
  currentPage,
  totalPages,
  setPage
}) {
  if (totalPages <= 1) return null;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    className: "pagination",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
      disabled: currentPage === 1,
      onClick: () => setPage(currentPage - 1),
      children: "Previous"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("span", {
      children: ["Page ", currentPage, " of ", totalPages]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
      disabled: currentPage >= totalPages,
      onClick: () => setPage(currentPage + 1),
      children: "Next"
    })]
  });
}

/***/ }),

/***/ "./src/blocks/project-directory/react-app/ProjectList.js":
/*!***************************************************************!*\
  !*** ./src/blocks/project-directory/react-app/ProjectList.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BookList)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ProjectListItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProjectListItem */ "./src/blocks/project-directory/react-app/ProjectListItem.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



function BookList({
  posts
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    className: "project-grid",
    children: posts.map(post => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_ProjectListItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
      post: post
    }, post.id))
  });
}

/***/ }),

/***/ "./src/blocks/project-directory/react-app/ProjectListItem.js":
/*!*******************************************************************!*\
  !*** ./src/blocks/project-directory/react-app/ProjectListItem.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProjectListItem)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


function ProjectListItem({
  post
}) {
  // const imageUrl = post.acf?.project_image
  // 	? post.acf.project_image
  // 	: post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "https://picsum.photos/200/300";
  const [imageUrl, setImageUrl] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setImageUrl(post.acf?.project_image || post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "https://picsum.photos/200/300");
    fetch(`/wp-json/wp/v2/media/${post.acf?.project_image}`).then(response => response.json()).then(data => {
      let imgUrl = data.media_details.sizes.thumbnail.source_url;
      if (imgUrl) {
        setImageUrl(imgUrl);
      }
    });
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    className: "project-card",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img", {
      src: imageUrl,
      alt: post.title.rendered || "No Title",
      className: "project-image"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h3", {
      children: post.title.rendered
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
      children: post.acf?.project_description || "No description available."
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("p", {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("strong", {
        children: "Technologies Used:"
      }), Array.isArray(post.acf?.project_technology) ? post.acf.project_technology.join(", ") : post.acf?.project_technology || "Not specified"]
    })]
  });
}

/***/ }),

/***/ "./src/blocks/project-directory/react-app/SearchBar.js":
/*!*************************************************************!*\
  !*** ./src/blocks/project-directory/react-app/SearchBar.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SearchBar)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


function SearchBar({
  value,
  setValue
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("input", {
    type: "text",
    placeholder: "Search projects...",
    value: value,
    onChange: e => setValue(e.target.value)
  });
}

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/***/ ((module) => {

module.exports = window["ReactDOM"];

/***/ }),

/***/ "react/jsx-runtime":
/*!**********************************!*\
  !*** external "ReactJSXRuntime" ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["ReactJSXRuntime"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************************************!*\
  !*** ./src/blocks/project-directory/view.js ***!
  \**********************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var _react_app_BlockApp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./react-app/BlockApp */ "./src/blocks/project-directory/react-app/BlockApp.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



// Render your React component instead
// This file is tell it where to render this React code on the page

const blocks = document.querySelectorAll('.wp-block-mm-project-directory');
blocks.forEach(block => {
  (0,react_dom_client__WEBPACK_IMPORTED_MODULE_0__.createRoot)(block).render(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_react_app_BlockApp__WEBPACK_IMPORTED_MODULE_1__["default"], {}));
});
})();

/******/ })()
;
//# sourceMappingURL=view.js.map