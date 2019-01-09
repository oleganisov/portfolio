/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/assets/scripts/auth.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/scripts/auth.js":
/*!************************************!*\
  !*** ./src/assets/scripts/auth.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _switchCards = __webpack_require__(/*! ./modules/switchCards */ \"./src/assets/scripts/modules/switchCards.js\");\n\nvar _switchCards2 = _interopRequireDefault(_switchCards);\n\nvar _parallax = __webpack_require__(/*! ./modules/parallax */ \"./src/assets/scripts/modules/parallax.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\ndocument.addEventListener('DOMContentLoaded', function () {\n\n    var linkAuth = document.querySelector('#to-auth'),\n        flipContainer = document.querySelector('#flip-container'),\n        signInReset = document.querySelector('#log-reset');\n\n    //Swipping cards 'welcome' an 'authorization'\n    (0, _switchCards2.default)(linkAuth, flipContainer, signInReset);\n    (0, _parallax.parallaxMouse)();\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvYXV0aC5qcz85ZWY0Il0sIm5hbWVzIjpbImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImxpbmtBdXRoIiwicXVlcnlTZWxlY3RvciIsImZsaXBDb250YWluZXIiLCJzaWduSW5SZXNldCJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7OztBQUNBOzs7O0FBRUFBLFNBQVNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxZQUFNOztBQUVoRCxRQUFJQyxXQUFXRixTQUFTRyxhQUFULENBQXVCLFVBQXZCLENBQWY7QUFBQSxRQUNJQyxnQkFBZ0JKLFNBQVNHLGFBQVQsQ0FBdUIsaUJBQXZCLENBRHBCO0FBQUEsUUFFSUUsY0FBY0wsU0FBU0csYUFBVCxDQUF1QixZQUF2QixDQUZsQjs7QUFJQTtBQUNBLCtCQUFZRCxRQUFaLEVBQXNCRSxhQUF0QixFQUFxQ0MsV0FBckM7QUFDQTtBQUNILENBVEQiLCJmaWxlIjoiLi9zcmMvYXNzZXRzL3NjcmlwdHMvYXV0aC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzd2l0Y2hDYXJkcyBmcm9tICcuL21vZHVsZXMvc3dpdGNoQ2FyZHMnO1xyXG5pbXBvcnQge3BhcmFsbGF4TW91c2V9IGZyb20gJy4vbW9kdWxlcy9wYXJhbGxheCc7XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xyXG4gICAgXHJcbiAgICBsZXQgbGlua0F1dGggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG8tYXV0aCcpLFxyXG4gICAgICAgIGZsaXBDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZmxpcC1jb250YWluZXInKSxcclxuICAgICAgICBzaWduSW5SZXNldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsb2ctcmVzZXQnKTtcclxuICAgIFxyXG4gICAgLy9Td2lwcGluZyBjYXJkcyAnd2VsY29tZScgYW4gJ2F1dGhvcml6YXRpb24nXHJcbiAgICBzd2l0Y2hDYXJkcyhsaW5rQXV0aCwgZmxpcENvbnRhaW5lciwgc2lnbkluUmVzZXQpO1xyXG4gICAgcGFyYWxsYXhNb3VzZSgpO1xyXG59KTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/assets/scripts/auth.js\n");

/***/ }),

/***/ "./src/assets/scripts/modules/parallax.js":
/*!************************************************!*\
  !*** ./src/assets/scripts/modules/parallax.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar parallaxMouse = function parallaxMouse() {\n  var parallaxContainer = document.querySelector(\".parallax-block\");\n  var layers = Array.from(parallaxContainer.children);\n\n  var moveLayers = function moveLayers(e) {\n    var initialX = window.innerWidth / 2 - e.pageX;\n    var initialY = window.innerHeight / 2 - e.pageY;\n    layers.forEach(function (layer, i) {\n      var divider = i / 100;\n      var positionX = initialX * divider;\n      var positionY = initialY * divider;\n      var bottomPosition = window.innerHeight / 2 * divider;\n      var image = layer.firstElementChild;\n      image.style.bottom = \"-\" + bottomPosition + \"px\";\n\n      layer.style.transform = \"translate(\" + positionX + \"px, \" + positionY + \"px)\";\n    });\n  };\n\n  window.addEventListener(\"mousemove\", moveLayers);\n};\n\nvar parallaxScroll = function parallaxScroll() {\n  var avatar = document.querySelector('.avatar');\n  var svg = document.querySelector('.avatar__svg');\n\n  var move = function move(block, windowScroll, strafeAmount) {\n    var strafe = -windowScroll / strafeAmount + '%';\n    var transformString = \"translate3d(0,\" + strafe + \",0)\";\n    var style = block.style;\n\n    style.transform = transformString;\n    style.webkitTransform = transformString;\n  };\n  var init = function init(wScroll) {\n    move(svg, wScroll, 20);\n    move(avatar, wScroll, 3);\n  };\n  window.addEventListener('scroll', function () {\n    init(window.pageYOffset);\n  });\n};\n\nexports.parallaxMouse = parallaxMouse;\nexports.parallaxScroll = parallaxScroll;\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9wYXJhbGxheC5qcz9jNjZkIl0sIm5hbWVzIjpbInBhcmFsbGF4TW91c2UiLCJwYXJhbGxheENvbnRhaW5lciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImxheWVycyIsIkFycmF5IiwiZnJvbSIsImNoaWxkcmVuIiwibW92ZUxheWVycyIsImluaXRpYWxYIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImUiLCJwYWdlWCIsImluaXRpYWxZIiwiaW5uZXJIZWlnaHQiLCJwYWdlWSIsImZvckVhY2giLCJsYXllciIsImkiLCJkaXZpZGVyIiwicG9zaXRpb25YIiwicG9zaXRpb25ZIiwiYm90dG9tUG9zaXRpb24iLCJpbWFnZSIsImZpcnN0RWxlbWVudENoaWxkIiwic3R5bGUiLCJib3R0b20iLCJ0cmFuc2Zvcm0iLCJhZGRFdmVudExpc3RlbmVyIiwicGFyYWxsYXhTY3JvbGwiLCJhdmF0YXIiLCJzdmciLCJtb3ZlIiwiYmxvY2siLCJ3aW5kb3dTY3JvbGwiLCJzdHJhZmVBbW91bnQiLCJzdHJhZmUiLCJ0cmFuc2Zvcm1TdHJpbmciLCJ3ZWJraXRUcmFuc2Zvcm0iLCJpbml0Iiwid1Njcm9sbCIsInBhZ2VZT2Zmc2V0Il0sIm1hcHBpbmdzIjoiOzs7OztBQUFBLElBQU1BLGdCQUFnQixTQUFoQkEsYUFBZ0IsR0FBTTtBQUMxQixNQUFNQyxvQkFBb0JDLFNBQVNDLGFBQVQsQ0FBdUIsaUJBQXZCLENBQTFCO0FBQ0EsTUFBTUMsU0FBU0MsTUFBTUMsSUFBTixDQUFXTCxrQkFBa0JNLFFBQTdCLENBQWY7O0FBRUEsTUFBTUMsYUFBYSxTQUFiQSxVQUFhLElBQUs7QUFDdEIsUUFBTUMsV0FBV0MsT0FBT0MsVUFBUCxHQUFvQixDQUFwQixHQUF3QkMsRUFBRUMsS0FBM0M7QUFDQSxRQUFNQyxXQUFXSixPQUFPSyxXQUFQLEdBQXFCLENBQXJCLEdBQXlCSCxFQUFFSSxLQUE1QztBQUNBWixXQUFPYSxPQUFQLENBQWUsVUFBQ0MsS0FBRCxFQUFRQyxDQUFSLEVBQWM7QUFDM0IsVUFBTUMsVUFBVUQsSUFBSSxHQUFwQjtBQUNBLFVBQU1FLFlBQVlaLFdBQVdXLE9BQTdCO0FBQ0EsVUFBTUUsWUFBWVIsV0FBV00sT0FBN0I7QUFDQSxVQUFNRyxpQkFBa0JiLE9BQU9LLFdBQVAsR0FBbUIsQ0FBcEIsR0FBeUJLLE9BQWhEO0FBQ0EsVUFBTUksUUFBTU4sTUFBTU8saUJBQWxCO0FBQ0FELFlBQU1FLEtBQU4sQ0FBWUMsTUFBWixTQUF1QkosY0FBdkI7O0FBRUFMLFlBQU1RLEtBQU4sQ0FBWUUsU0FBWixrQkFBcUNQLFNBQXJDLFlBQXFEQyxTQUFyRDtBQUNELEtBVEQ7QUFVRCxHQWJEOztBQWVBWixTQUFPbUIsZ0JBQVAsQ0FBd0IsV0FBeEIsRUFBcUNyQixVQUFyQztBQUNELENBcEJEOztBQXNCQSxJQUFNc0IsaUJBQWlCLFNBQWpCQSxjQUFpQixHQUFLO0FBQzFCLE1BQU1DLFNBQU83QixTQUFTQyxhQUFULENBQXVCLFNBQXZCLENBQWI7QUFDQSxNQUFNNkIsTUFBSTlCLFNBQVNDLGFBQVQsQ0FBdUIsY0FBdkIsQ0FBVjs7QUFFQSxNQUFNOEIsT0FBTyxTQUFQQSxJQUFPLENBQUNDLEtBQUQsRUFBUUMsWUFBUixFQUFzQkMsWUFBdEIsRUFBdUM7QUFDbEQsUUFBTUMsU0FBUyxDQUFDRixZQUFELEdBQWNDLFlBQWQsR0FBMkIsR0FBMUM7QUFDQSxRQUFNRSxxQ0FBbUNELE1BQW5DLFFBQU47QUFDQSxRQUFNWCxRQUFRUSxNQUFNUixLQUFwQjs7QUFFQUEsVUFBTUUsU0FBTixHQUFnQlUsZUFBaEI7QUFDQVosVUFBTWEsZUFBTixHQUFzQkQsZUFBdEI7QUFDRCxHQVBEO0FBUUEsTUFBTUUsT0FBTyxTQUFQQSxJQUFPLFVBQVc7QUFDdEJQLFNBQUtELEdBQUwsRUFBVVMsT0FBVixFQUFtQixFQUFuQjtBQUNBUixTQUFLRixNQUFMLEVBQWFVLE9BQWIsRUFBc0IsQ0FBdEI7QUFDRCxHQUhEO0FBSUEvQixTQUFPbUIsZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0MsWUFBTTtBQUN0Q1csU0FBSzlCLE9BQU9nQyxXQUFaO0FBQ0QsR0FGRDtBQUlELENBcEJEOztRQXNCUTFDLGEsR0FBQUEsYTtRQUFlOEIsYyxHQUFBQSxjIiwiZmlsZSI6Ii4vc3JjL2Fzc2V0cy9zY3JpcHRzL21vZHVsZXMvcGFyYWxsYXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBwYXJhbGxheE1vdXNlID0gKCkgPT4ge1xyXG4gIGNvbnN0IHBhcmFsbGF4Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wYXJhbGxheC1ibG9ja1wiKTtcclxuICBjb25zdCBsYXllcnMgPSBBcnJheS5mcm9tKHBhcmFsbGF4Q29udGFpbmVyLmNoaWxkcmVuKTtcclxuXHJcbiAgY29uc3QgbW92ZUxheWVycyA9IGUgPT4ge1xyXG4gICAgY29uc3QgaW5pdGlhbFggPSB3aW5kb3cuaW5uZXJXaWR0aCAvIDIgLSBlLnBhZ2VYO1xyXG4gICAgY29uc3QgaW5pdGlhbFkgPSB3aW5kb3cuaW5uZXJIZWlnaHQgLyAyIC0gZS5wYWdlWTtcclxuICAgIGxheWVycy5mb3JFYWNoKChsYXllciwgaSkgPT4ge1xyXG4gICAgICBjb25zdCBkaXZpZGVyID0gaSAvIDEwMDtcclxuICAgICAgY29uc3QgcG9zaXRpb25YID0gaW5pdGlhbFggKiBkaXZpZGVyO1xyXG4gICAgICBjb25zdCBwb3NpdGlvblkgPSBpbml0aWFsWSAqIGRpdmlkZXI7XHJcbiAgICAgIGNvbnN0IGJvdHRvbVBvc2l0aW9uID0gKHdpbmRvdy5pbm5lckhlaWdodC8yKSAqIGRpdmlkZXI7XHJcbiAgICAgIGNvbnN0IGltYWdlPWxheWVyLmZpcnN0RWxlbWVudENoaWxkO1xyXG4gICAgICBpbWFnZS5zdHlsZS5ib3R0b209YC0ke2JvdHRvbVBvc2l0aW9ufXB4YFxyXG5cclxuICAgICAgbGF5ZXIuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZSgke3Bvc2l0aW9uWH1weCwgJHtwb3NpdGlvbll9cHgpYDtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIG1vdmVMYXllcnMpO1xyXG59XHJcblxyXG5jb25zdCBwYXJhbGxheFNjcm9sbCA9ICgpID0+e1xyXG4gIGNvbnN0IGF2YXRhcj1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXZhdGFyJyk7XHJcbiAgY29uc3Qgc3ZnPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hdmF0YXJfX3N2ZycpO1xyXG4gIFxyXG4gIGNvbnN0IG1vdmUgPSAoYmxvY2ssIHdpbmRvd1Njcm9sbCwgc3RyYWZlQW1vdW50KSA9PiB7XHJcbiAgICBjb25zdCBzdHJhZmUgPSAtd2luZG93U2Nyb2xsL3N0cmFmZUFtb3VudCsnJSc7XHJcbiAgICBjb25zdCB0cmFuc2Zvcm1TdHJpbmcgPSBgdHJhbnNsYXRlM2QoMCwke3N0cmFmZX0sMClgO1xyXG4gICAgY29uc3Qgc3R5bGUgPSBibG9jay5zdHlsZTtcclxuXHJcbiAgICBzdHlsZS50cmFuc2Zvcm09dHJhbnNmb3JtU3RyaW5nO1xyXG4gICAgc3R5bGUud2Via2l0VHJhbnNmb3JtPXRyYW5zZm9ybVN0cmluZztcclxuICB9O1xyXG4gIGNvbnN0IGluaXQgPSB3U2Nyb2xsID0+IHtcclxuICAgIG1vdmUoc3ZnLCB3U2Nyb2xsLCAyMCk7XHJcbiAgICBtb3ZlKGF2YXRhciwgd1Njcm9sbCwgMyk7XHJcbiAgfTtcclxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgKCkgPT4ge1xyXG4gICAgaW5pdCh3aW5kb3cucGFnZVlPZmZzZXQpO1xyXG4gIH0pO1xyXG5cclxufTtcclxuXHJcbmV4cG9ydCB7cGFyYWxsYXhNb3VzZSwgcGFyYWxsYXhTY3JvbGx9OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/assets/scripts/modules/parallax.js\n");

/***/ }),

/***/ "./src/assets/scripts/modules/switchCards.js":
/*!***************************************************!*\
  !*** ./src/assets/scripts/modules/switchCards.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nvar switchCards = exports.switchCards = function switchCards(linkAuth, flipContainer, signInReset) {\n    document.body.addEventListener('click', function (e) {\n        //Click in auth or reset or out of flip container\n        if (!e.target.closest('.flip') || e.target === signInReset) {\n            //If click out of front flip container - no flip\n            if (!flipContainer.classList.contains('flip_rotate') && e.target !== linkAuth) return false;\n            flipContainer.classList.toggle('flip_rotate');\n            linkAuth.classList.toggle('hidden');\n        }\n    });\n};\n\nexports.default = switchCards;\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9zd2l0Y2hDYXJkcy5qcz8xMjk1Il0sIm5hbWVzIjpbInN3aXRjaENhcmRzIiwibGlua0F1dGgiLCJmbGlwQ29udGFpbmVyIiwic2lnbkluUmVzZXQiLCJkb2N1bWVudCIsImJvZHkiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInRhcmdldCIsImNsb3Nlc3QiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsInRvZ2dsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBTyxJQUFNQSxvQ0FBYyxTQUFkQSxXQUFjLENBQUNDLFFBQUQsRUFBV0MsYUFBWCxFQUEwQkMsV0FBMUIsRUFBMEM7QUFDbkVDLGFBQVNDLElBQVQsQ0FBY0MsZ0JBQWQsQ0FBK0IsT0FBL0IsRUFBd0MsVUFBU0MsQ0FBVCxFQUFZO0FBQ2hEO0FBQ0EsWUFBSyxDQUFDQSxFQUFFQyxNQUFGLENBQVNDLE9BQVQsQ0FBaUIsT0FBakIsQ0FBRCxJQUE4QkYsRUFBRUMsTUFBRixLQUFhTCxXQUFoRCxFQUErRDtBQUMzRDtBQUNBLGdCQUFHLENBQUNELGNBQWNRLFNBQWQsQ0FBd0JDLFFBQXhCLENBQWlDLGFBQWpDLENBQUQsSUFBb0RKLEVBQUVDLE1BQUYsS0FBYVAsUUFBcEUsRUFDSSxPQUFPLEtBQVA7QUFDSkMsMEJBQWNRLFNBQWQsQ0FBd0JFLE1BQXhCLENBQStCLGFBQS9CO0FBQ0FYLHFCQUFTUyxTQUFULENBQW1CRSxNQUFuQixDQUEwQixRQUExQjtBQUNIO0FBQ0osS0FURDtBQVVELENBWE07O2tCQWFRWixXIiwiZmlsZSI6Ii4vc3JjL2Fzc2V0cy9zY3JpcHRzL21vZHVsZXMvc3dpdGNoQ2FyZHMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3Qgc3dpdGNoQ2FyZHMgPSAobGlua0F1dGgsIGZsaXBDb250YWluZXIsIHNpZ25JblJlc2V0KSA9PiB7XHJcbiAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgLy9DbGljayBpbiBhdXRoIG9yIHJlc2V0IG9yIG91dCBvZiBmbGlwIGNvbnRhaW5lclxyXG4gICAgICBpZiggKCFlLnRhcmdldC5jbG9zZXN0KCcuZmxpcCcpIHx8IGUudGFyZ2V0ID09PSBzaWduSW5SZXNldCkgKSB7XHJcbiAgICAgICAgICAvL0lmIGNsaWNrIG91dCBvZiBmcm9udCBmbGlwIGNvbnRhaW5lciAtIG5vIGZsaXBcclxuICAgICAgICAgIGlmKCFmbGlwQ29udGFpbmVyLmNsYXNzTGlzdC5jb250YWlucygnZmxpcF9yb3RhdGUnKSAmJiBlLnRhcmdldCAhPT0gbGlua0F1dGgpIFxyXG4gICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgIGZsaXBDb250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZSgnZmxpcF9yb3RhdGUnKTtcclxuICAgICAgICAgIGxpbmtBdXRoLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xyXG4gICAgICB9XHJcbiAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzd2l0Y2hDYXJkczsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/assets/scripts/modules/switchCards.js\n");

/***/ })

/******/ });