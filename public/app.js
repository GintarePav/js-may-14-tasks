/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_addNewItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/addNewItem */ "./src/modules/addNewItem.js");
/* harmony import */ var _modules_completeItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/completeItem */ "./src/modules/completeItem.js");
/* harmony import */ var _modules_completionReverse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/completionReverse */ "./src/modules/completionReverse.js");
/* harmony import */ var _modules_changeStatus__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/changeStatus */ "./src/modules/changeStatus.js");
// console.log("test");




document.getElementById("save-btn").addEventListener("click", function (e) {
  e.preventDefault();
  (0,_modules_addNewItem__WEBPACK_IMPORTED_MODULE_0__["default"])();
});
document.querySelector("tbody").addEventListener("click", function (e) {
  if (e.target.matches("svg")) {
    e.preventDefault();
    if (e.target.classList.contains("list-table__unchecked")) {
      (0,_modules_completeItem__WEBPACK_IMPORTED_MODULE_1__["default"])(e);
    } else {
      (0,_modules_completionReverse__WEBPACK_IMPORTED_MODULE_2__["default"])(e);
    }
  }
  if (e.target.matches("td:nth-child(4)") && !e.target.classList.contains("list-table__greyed")) {
    (0,_modules_changeStatus__WEBPACK_IMPORTED_MODULE_3__["default"])(e);
  }
});

/***/ }),

/***/ "./src/modules/addNewItem.js":
/*!***********************************!*\
  !*** ./src/modules/addNewItem.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var addNewItem = function addNewItem() {
  if (document.getElementById("new-item-form").checkValidity()) {
    var itemRow = document.createElement("tr");
    var checkmark = document.createElement("th");
    checkmark.setAttribute("scope", "row");
    checkmark.innerHTML = "<svg\n        xmlns=\"http://www.w3.org/2000/svg\"\n        width=\"30\"\n        height=\"30\"\n        fill=\"currentColor\"\n        class=\"bi bi-check list-table__unchecked svg\"\n        viewBox=\"0 0 16 16\"\n      >\n        <path d=\"M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z\" />\n      </svg>";
    itemRow.appendChild(checkmark);
    var taskTitle = document.createElement("td");
    taskTitle.textContent = document.getElementById("subject").value;
    itemRow.appendChild(taskTitle);
    var dueDate = document.createElement("td");
    dueDate.textContent = document.getElementById("due-date").value;
    itemRow.appendChild(dueDate);
    var itemStatus = document.createElement("td");
    itemStatus.textContent = document.getElementById("status").value;
    itemStatus.classList.add("list-table__clickable");
    itemRow.appendChild(itemStatus);
    document.getElementById("table-body").appendChild(itemRow);
  } else {
    alert("All fields are required.");
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addNewItem);

/***/ }),

/***/ "./src/modules/changeStatus.js":
/*!*************************************!*\
  !*** ./src/modules/changeStatus.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _completeItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./completeItem */ "./src/modules/completeItem.js");

var changeStatus = function changeStatus(e) {
  var availableStatuses = ["New", "In Progress", "Completed"];
  var updatedStatus = e.target;
  updatedStatus.classList.remove("list-table__attention");
  if (availableStatuses.includes(updatedStatus.textContent)) {
    var statusIndex = availableStatuses.indexOf(updatedStatus.textContent);
    if (availableStatuses[statusIndex + 1] === "Completed") {
      updatedStatus.textContent = availableStatuses[(statusIndex + 0) % availableStatuses.length];
    } else {
      updatedStatus.textContent = availableStatuses[(statusIndex + 1) % availableStatuses.length];
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (changeStatus);

/***/ }),

/***/ "./src/modules/completeItem.js":
/*!*************************************!*\
  !*** ./src/modules/completeItem.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var completeItem = function completeItem(e) {
  var checkmark = e.target;
  var currentRow = checkmark.closest("tr");
  checkmark.classList.remove("list-table__unchecked");
  checkmark.classList.add("list-table__checked");
  var taskTitle = currentRow.querySelector("td:nth-child(2)");
  taskTitle.classList.add("list-table__crossed", "list-table__greyed");
  var dueDate = currentRow.querySelector("td:nth-child(3)");
  dueDate.classList.add("list-table__greyed");
  var status = currentRow.querySelector("td:nth-child(4)");
  status.classList.add("list-table__greyed");
  status.textContent = "Completed";
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (completeItem);

/***/ }),

/***/ "./src/modules/completionReverse.js":
/*!******************************************!*\
  !*** ./src/modules/completionReverse.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var reverseCompletion = function reverseCompletion(e) {
  var checkmark = e.target;
  var currentRow = checkmark.closest("tr");
  checkmark.classList.remove("list-table__checked");
  checkmark.classList.add("list-table__unchecked");
  var taskTitle = currentRow.querySelector("td:nth-child(2)");
  taskTitle.classList.remove("list-table__crossed", "list-table__greyed");
  var dueDate = currentRow.querySelector("td:nth-child(3)");
  dueDate.classList.remove("list-table__greyed");
  var status = currentRow.querySelector("td:nth-child(4)");
  status.classList.remove("list-table__greyed");
  status.classList.add("list-table__attention");
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reverseCompletion);

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/app": 0,
/******/ 			"css/style": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk_2024_05_14"] = self["webpackChunk_2024_05_14"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/style"], () => (__webpack_require__("./src/app.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/style"], () => (__webpack_require__("./src/scss/style.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;