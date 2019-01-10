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
eval("\n\nvar _switchCards = __webpack_require__(/*! ./modules/switchCards */ \"./src/assets/scripts/modules/switchCards.js\");\n\nvar _switchCards2 = _interopRequireDefault(_switchCards);\n\nvar _parallax = __webpack_require__(/*! ./modules/parallax */ \"./src/assets/scripts/modules/parallax.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\ndocument.addEventListener('DOMContentLoaded', function () {\n\n    var linkAuth = document.querySelector('#to-auth'),\n        flipContainer = document.querySelector('#flip-container'),\n        signInReset = document.querySelector('#log-reset');\n\n    //Swipping cards 'welcome' an 'authorization'\n    (0, _switchCards2.default)(linkAuth, flipContainer, signInReset);\n    (0, _parallax.parallaxMouse)();\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvYXV0aC5qcz85ZWY0Il0sIm5hbWVzIjpbImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImxpbmtBdXRoIiwicXVlcnlTZWxlY3RvciIsImZsaXBDb250YWluZXIiLCJzaWduSW5SZXNldCJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7OztBQUNBOzs7O0FBSUFBLFNBQVNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxZQUFNOztBQUVoRCxRQUFJQyxXQUFXRixTQUFTRyxhQUFULENBQXVCLFVBQXZCLENBQWY7QUFBQSxRQUNJQyxnQkFBZ0JKLFNBQVNHLGFBQVQsQ0FBdUIsaUJBQXZCLENBRHBCO0FBQUEsUUFFSUUsY0FBY0wsU0FBU0csYUFBVCxDQUF1QixZQUF2QixDQUZsQjs7QUFJQTtBQUNBLCtCQUFZRCxRQUFaLEVBQXNCRSxhQUF0QixFQUFxQ0MsV0FBckM7QUFDQTtBQUNILENBVEQiLCJmaWxlIjoiLi9zcmMvYXNzZXRzL3NjcmlwdHMvYXV0aC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzd2l0Y2hDYXJkcyBmcm9tICcuL21vZHVsZXMvc3dpdGNoQ2FyZHMnO1xyXG5pbXBvcnQge1xyXG4gICAgcGFyYWxsYXhNb3VzZVxyXG59IGZyb20gJy4vbW9kdWxlcy9wYXJhbGxheCc7XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xyXG5cclxuICAgIGxldCBsaW5rQXV0aCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0by1hdXRoJyksXHJcbiAgICAgICAgZmxpcENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmbGlwLWNvbnRhaW5lcicpLFxyXG4gICAgICAgIHNpZ25JblJlc2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xvZy1yZXNldCcpO1xyXG5cclxuICAgIC8vU3dpcHBpbmcgY2FyZHMgJ3dlbGNvbWUnIGFuICdhdXRob3JpemF0aW9uJ1xyXG4gICAgc3dpdGNoQ2FyZHMobGlua0F1dGgsIGZsaXBDb250YWluZXIsIHNpZ25JblJlc2V0KTtcclxuICAgIHBhcmFsbGF4TW91c2UoKTtcclxufSk7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/assets/scripts/auth.js\n");

/***/ }),

/***/ "./src/assets/scripts/modules/parallax.js":
/*!************************************************!*\
  !*** ./src/assets/scripts/modules/parallax.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar parallaxMouse = function parallaxMouse() {\n  var parallaxContainer = document.querySelector(\".parallax-block\");\n  var layers = Array.from(parallaxContainer.children);\n\n  var moveLayers = function moveLayers(e) {\n    var initialX = window.innerWidth / 2 - e.pageX;\n    var initialY = window.innerHeight / 2 - e.pageY;\n    layers.forEach(function (layer, i) {\n      var divider = i / 100;\n      var positionX = initialX * divider;\n      var positionY = initialY * divider;\n      var bottomPosition = window.innerHeight / 2 * divider;\n      var image = layer.firstElementChild;\n      image.style.bottom = \"-\" + bottomPosition + \"px\";\n\n      layer.style.transform = \"translate(\" + positionX + \"px, \" + positionY + \"px)\";\n    });\n  };\n\n  window.addEventListener(\"mousemove\", moveLayers);\n};\n\nvar parallaxScroll = function parallaxScroll() {\n  var avatar = document.querySelector('.avatar');\n  var svg = document.querySelector('.avatar__svg');\n  var bg = document.querySelector('.header__bg');\n\n  var move = function move(block, windowScroll, strafeAmount) {\n    var strafe = -windowScroll / strafeAmount + '%';\n    var transformString = \"translate3d(0,\" + strafe + \",0)\";\n    var style = block.style;\n\n    style.transform = transformString;\n    style.webkitTransform = transformString;\n  };\n  var init = function init(wScroll) {\n    move(bg, wScroll, 55);\n    move(svg, wScroll, 20);\n    move(avatar, wScroll, 3);\n  };\n  window.addEventListener('scroll', function () {\n    init(window.pageYOffset);\n  });\n};\n\nexports.parallaxMouse = parallaxMouse;\nexports.parallaxScroll = parallaxScroll;\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9wYXJhbGxheC5qcz9jNjZkIl0sIm5hbWVzIjpbInBhcmFsbGF4TW91c2UiLCJwYXJhbGxheENvbnRhaW5lciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImxheWVycyIsIkFycmF5IiwiZnJvbSIsImNoaWxkcmVuIiwibW92ZUxheWVycyIsImluaXRpYWxYIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImUiLCJwYWdlWCIsImluaXRpYWxZIiwiaW5uZXJIZWlnaHQiLCJwYWdlWSIsImZvckVhY2giLCJsYXllciIsImkiLCJkaXZpZGVyIiwicG9zaXRpb25YIiwicG9zaXRpb25ZIiwiYm90dG9tUG9zaXRpb24iLCJpbWFnZSIsImZpcnN0RWxlbWVudENoaWxkIiwic3R5bGUiLCJib3R0b20iLCJ0cmFuc2Zvcm0iLCJhZGRFdmVudExpc3RlbmVyIiwicGFyYWxsYXhTY3JvbGwiLCJhdmF0YXIiLCJzdmciLCJiZyIsIm1vdmUiLCJibG9jayIsIndpbmRvd1Njcm9sbCIsInN0cmFmZUFtb3VudCIsInN0cmFmZSIsInRyYW5zZm9ybVN0cmluZyIsIndlYmtpdFRyYW5zZm9ybSIsImluaXQiLCJ3U2Nyb2xsIiwicGFnZVlPZmZzZXQiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsSUFBTUEsZ0JBQWdCLFNBQWhCQSxhQUFnQixHQUFNO0FBQzFCLE1BQU1DLG9CQUFvQkMsU0FBU0MsYUFBVCxDQUF1QixpQkFBdkIsQ0FBMUI7QUFDQSxNQUFNQyxTQUFTQyxNQUFNQyxJQUFOLENBQVdMLGtCQUFrQk0sUUFBN0IsQ0FBZjs7QUFFQSxNQUFNQyxhQUFhLFNBQWJBLFVBQWEsSUFBSztBQUN0QixRQUFNQyxXQUFXQyxPQUFPQyxVQUFQLEdBQW9CLENBQXBCLEdBQXdCQyxFQUFFQyxLQUEzQztBQUNBLFFBQU1DLFdBQVdKLE9BQU9LLFdBQVAsR0FBcUIsQ0FBckIsR0FBeUJILEVBQUVJLEtBQTVDO0FBQ0FaLFdBQU9hLE9BQVAsQ0FBZSxVQUFDQyxLQUFELEVBQVFDLENBQVIsRUFBYztBQUMzQixVQUFNQyxVQUFVRCxJQUFJLEdBQXBCO0FBQ0EsVUFBTUUsWUFBWVosV0FBV1csT0FBN0I7QUFDQSxVQUFNRSxZQUFZUixXQUFXTSxPQUE3QjtBQUNBLFVBQU1HLGlCQUFrQmIsT0FBT0ssV0FBUCxHQUFxQixDQUF0QixHQUEyQkssT0FBbEQ7QUFDQSxVQUFNSSxRQUFRTixNQUFNTyxpQkFBcEI7QUFDQUQsWUFBTUUsS0FBTixDQUFZQyxNQUFaLFNBQXlCSixjQUF6Qjs7QUFFQUwsWUFBTVEsS0FBTixDQUFZRSxTQUFaLGtCQUFxQ1AsU0FBckMsWUFBcURDLFNBQXJEO0FBQ0QsS0FURDtBQVVELEdBYkQ7O0FBZUFaLFNBQU9tQixnQkFBUCxDQUF3QixXQUF4QixFQUFxQ3JCLFVBQXJDO0FBQ0QsQ0FwQkQ7O0FBc0JBLElBQU1zQixpQkFBaUIsU0FBakJBLGNBQWlCLEdBQU07QUFDM0IsTUFBTUMsU0FBUzdCLFNBQVNDLGFBQVQsQ0FBdUIsU0FBdkIsQ0FBZjtBQUNBLE1BQU02QixNQUFNOUIsU0FBU0MsYUFBVCxDQUF1QixjQUF2QixDQUFaO0FBQ0EsTUFBTThCLEtBQUsvQixTQUFTQyxhQUFULENBQXVCLGFBQXZCLENBQVg7O0FBRUEsTUFBTStCLE9BQU8sU0FBUEEsSUFBTyxDQUFDQyxLQUFELEVBQVFDLFlBQVIsRUFBc0JDLFlBQXRCLEVBQXVDO0FBQ2xELFFBQU1DLFNBQVMsQ0FBQ0YsWUFBRCxHQUFnQkMsWUFBaEIsR0FBK0IsR0FBOUM7QUFDQSxRQUFNRSxxQ0FBbUNELE1BQW5DLFFBQU47QUFDQSxRQUFNWixRQUFRUyxNQUFNVCxLQUFwQjs7QUFFQUEsVUFBTUUsU0FBTixHQUFrQlcsZUFBbEI7QUFDQWIsVUFBTWMsZUFBTixHQUF3QkQsZUFBeEI7QUFDRCxHQVBEO0FBUUEsTUFBTUUsT0FBTyxTQUFQQSxJQUFPLFVBQVc7QUFDdEJQLFNBQUtELEVBQUwsRUFBU1MsT0FBVCxFQUFrQixFQUFsQjtBQUNBUixTQUFLRixHQUFMLEVBQVVVLE9BQVYsRUFBbUIsRUFBbkI7QUFDQVIsU0FBS0gsTUFBTCxFQUFhVyxPQUFiLEVBQXNCLENBQXRCO0FBQ0QsR0FKRDtBQUtBaEMsU0FBT21CLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDLFlBQU07QUFDdENZLFNBQUsvQixPQUFPaUMsV0FBWjtBQUNELEdBRkQ7QUFJRCxDQXRCRDs7UUF5QkUzQyxhLEdBQUFBLGE7UUFDQThCLGMsR0FBQUEsYyIsImZpbGUiOiIuL3NyYy9hc3NldHMvc2NyaXB0cy9tb2R1bGVzL3BhcmFsbGF4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgcGFyYWxsYXhNb3VzZSA9ICgpID0+IHtcclxuICBjb25zdCBwYXJhbGxheENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGFyYWxsYXgtYmxvY2tcIik7XHJcbiAgY29uc3QgbGF5ZXJzID0gQXJyYXkuZnJvbShwYXJhbGxheENvbnRhaW5lci5jaGlsZHJlbik7XHJcblxyXG4gIGNvbnN0IG1vdmVMYXllcnMgPSBlID0+IHtcclxuICAgIGNvbnN0IGluaXRpYWxYID0gd2luZG93LmlubmVyV2lkdGggLyAyIC0gZS5wYWdlWDtcclxuICAgIGNvbnN0IGluaXRpYWxZID0gd2luZG93LmlubmVySGVpZ2h0IC8gMiAtIGUucGFnZVk7XHJcbiAgICBsYXllcnMuZm9yRWFjaCgobGF5ZXIsIGkpID0+IHtcclxuICAgICAgY29uc3QgZGl2aWRlciA9IGkgLyAxMDA7XHJcbiAgICAgIGNvbnN0IHBvc2l0aW9uWCA9IGluaXRpYWxYICogZGl2aWRlcjtcclxuICAgICAgY29uc3QgcG9zaXRpb25ZID0gaW5pdGlhbFkgKiBkaXZpZGVyO1xyXG4gICAgICBjb25zdCBib3R0b21Qb3NpdGlvbiA9ICh3aW5kb3cuaW5uZXJIZWlnaHQgLyAyKSAqIGRpdmlkZXI7XHJcbiAgICAgIGNvbnN0IGltYWdlID0gbGF5ZXIuZmlyc3RFbGVtZW50Q2hpbGQ7XHJcbiAgICAgIGltYWdlLnN0eWxlLmJvdHRvbSA9IGAtJHtib3R0b21Qb3NpdGlvbn1weGBcclxuXHJcbiAgICAgIGxheWVyLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUoJHtwb3NpdGlvblh9cHgsICR7cG9zaXRpb25ZfXB4KWA7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBtb3ZlTGF5ZXJzKTtcclxufVxyXG5cclxuY29uc3QgcGFyYWxsYXhTY3JvbGwgPSAoKSA9PiB7XHJcbiAgY29uc3QgYXZhdGFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmF2YXRhcicpO1xyXG4gIGNvbnN0IHN2ZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hdmF0YXJfX3N2ZycpO1xyXG4gIGNvbnN0IGJnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fYmcnKTtcclxuXHJcbiAgY29uc3QgbW92ZSA9IChibG9jaywgd2luZG93U2Nyb2xsLCBzdHJhZmVBbW91bnQpID0+IHtcclxuICAgIGNvbnN0IHN0cmFmZSA9IC13aW5kb3dTY3JvbGwgLyBzdHJhZmVBbW91bnQgKyAnJSc7XHJcbiAgICBjb25zdCB0cmFuc2Zvcm1TdHJpbmcgPSBgdHJhbnNsYXRlM2QoMCwke3N0cmFmZX0sMClgO1xyXG4gICAgY29uc3Qgc3R5bGUgPSBibG9jay5zdHlsZTtcclxuXHJcbiAgICBzdHlsZS50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1TdHJpbmc7XHJcbiAgICBzdHlsZS53ZWJraXRUcmFuc2Zvcm0gPSB0cmFuc2Zvcm1TdHJpbmc7XHJcbiAgfTtcclxuICBjb25zdCBpbml0ID0gd1Njcm9sbCA9PiB7XHJcbiAgICBtb3ZlKGJnLCB3U2Nyb2xsLCA1NSk7XHJcbiAgICBtb3ZlKHN2Zywgd1Njcm9sbCwgMjApO1xyXG4gICAgbW92ZShhdmF0YXIsIHdTY3JvbGwsIDMpO1xyXG4gIH07XHJcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsICgpID0+IHtcclxuICAgIGluaXQod2luZG93LnBhZ2VZT2Zmc2V0KTtcclxuICB9KTtcclxuXHJcbn07XHJcblxyXG5leHBvcnQge1xyXG4gIHBhcmFsbGF4TW91c2UsXHJcbiAgcGFyYWxsYXhTY3JvbGxcclxufTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/assets/scripts/modules/parallax.js\n");

/***/ }),

/***/ "./src/assets/scripts/modules/switchCards.js":
/*!***************************************************!*\
  !*** ./src/assets/scripts/modules/switchCards.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nvar switchCards = exports.switchCards = function switchCards(linkAuth, flipContainer, signInReset) {\n    document.body.addEventListener('click', function (e) {\n        //Click in auth or reset or out of flip container\n        if (!e.target.closest('.flip') || e.target === signInReset) {\n            //If click out of front flip container - no flip\n            if (!flipContainer.classList.contains('flip_rotate') && e.target !== linkAuth) return false;\n            flipContainer.classList.toggle('flip_rotate');\n            linkAuth.classList.toggle('hidden');\n        }\n    });\n};\n\nexports.default = switchCards;\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9zd2l0Y2hDYXJkcy5qcz8xMjk1Il0sIm5hbWVzIjpbInN3aXRjaENhcmRzIiwibGlua0F1dGgiLCJmbGlwQ29udGFpbmVyIiwic2lnbkluUmVzZXQiLCJkb2N1bWVudCIsImJvZHkiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInRhcmdldCIsImNsb3Nlc3QiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsInRvZ2dsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBTyxJQUFNQSxvQ0FBYyxTQUFkQSxXQUFjLENBQUNDLFFBQUQsRUFBV0MsYUFBWCxFQUEwQkMsV0FBMUIsRUFBMEM7QUFDakVDLGFBQVNDLElBQVQsQ0FBY0MsZ0JBQWQsQ0FBK0IsT0FBL0IsRUFBd0MsVUFBVUMsQ0FBVixFQUFhO0FBQ2pEO0FBQ0EsWUFBSyxDQUFDQSxFQUFFQyxNQUFGLENBQVNDLE9BQVQsQ0FBaUIsT0FBakIsQ0FBRCxJQUE4QkYsRUFBRUMsTUFBRixLQUFhTCxXQUFoRCxFQUE4RDtBQUMxRDtBQUNBLGdCQUFJLENBQUNELGNBQWNRLFNBQWQsQ0FBd0JDLFFBQXhCLENBQWlDLGFBQWpDLENBQUQsSUFBb0RKLEVBQUVDLE1BQUYsS0FBYVAsUUFBckUsRUFDSSxPQUFPLEtBQVA7QUFDSkMsMEJBQWNRLFNBQWQsQ0FBd0JFLE1BQXhCLENBQStCLGFBQS9CO0FBQ0FYLHFCQUFTUyxTQUFULENBQW1CRSxNQUFuQixDQUEwQixRQUExQjtBQUNIO0FBQ0osS0FURDtBQVVILENBWE07O2tCQWFRWixXIiwiZmlsZSI6Ii4vc3JjL2Fzc2V0cy9zY3JpcHRzL21vZHVsZXMvc3dpdGNoQ2FyZHMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3Qgc3dpdGNoQ2FyZHMgPSAobGlua0F1dGgsIGZsaXBDb250YWluZXIsIHNpZ25JblJlc2V0KSA9PiB7XHJcbiAgICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAvL0NsaWNrIGluIGF1dGggb3IgcmVzZXQgb3Igb3V0IG9mIGZsaXAgY29udGFpbmVyXHJcbiAgICAgICAgaWYgKCghZS50YXJnZXQuY2xvc2VzdCgnLmZsaXAnKSB8fCBlLnRhcmdldCA9PT0gc2lnbkluUmVzZXQpKSB7XHJcbiAgICAgICAgICAgIC8vSWYgY2xpY2sgb3V0IG9mIGZyb250IGZsaXAgY29udGFpbmVyIC0gbm8gZmxpcFxyXG4gICAgICAgICAgICBpZiAoIWZsaXBDb250YWluZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdmbGlwX3JvdGF0ZScpICYmIGUudGFyZ2V0ICE9PSBsaW5rQXV0aClcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgZmxpcENvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKCdmbGlwX3JvdGF0ZScpO1xyXG4gICAgICAgICAgICBsaW5rQXV0aC5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHN3aXRjaENhcmRzOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/assets/scripts/modules/switchCards.js\n");

/***/ })

/******/ });