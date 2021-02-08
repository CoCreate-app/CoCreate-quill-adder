(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["CoCreateQuillAdder"] = factory();
	else
		root["CoCreateQuillAdder"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/CoCreate-quill-adder.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/CoCreate-quill-adder.js":
/*!*************************************!*\
  !*** ./src/CoCreate-quill-adder.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nvar canvasSelector = \"#canvas\";\nvar canvas, canvasDocument, canvasWindow;\n\nfunction QuillAdder() {\n  // this.lastPlacement;\n  this.quill = document.createElement(\"div\");\n  this.quill.setAttribute(\"class\", \"quill bubble block-observer\");\n  this.quill.setAttribute(\"data-theme\", \"bubble\");\n  this.quill.setAttribute(\"data-document_id\", \"null\");\n  this.quill.setAttribute(\"data-collection\", \"12test\");\n\n  this.wrapQuill = function (el) {\n    if (!this.quill.children.length) {\n      this.quill.setAttribute(\"name\", el.getAttribute('data-element_id'));\n      this.quill.append(el.cloneNode(true));\n      el.replaceWith(this.quill); // it's always editor 0\n\n      var quill = canvasWindow.CoCreateQuill;\n\n      quill.onNewEditor = function (editor) {\n        canvasWindow.CoCreateQuill.editors[0].clipboard.dangerouslyPasteHTML(el.outerHTML);\n      }; // it's always editor 0\n      // let quill = canvasWindow.CoCreateQuill;\n      // quill.onNewEditor = function (editor) {\n      // for every change in quill get the elements and update using crdt\n      //   editor.on(\"text-change\", function () {\n      //     let quillEl = quill.elements[0];\n      //     let [nextSibling, skip] = getNextSibling(quillEl)\n      //     // el = quillEl;\n      //     // do{\n      //     //if (el.previousSibling) {\n      //     //   el = el.previousSibling;\n      //     //   position = \"afterend\";\n      //     // } else {\n      //     //   el = el.parentElement;\n      //     //   position = \"afterbegin\";\n      //     // }\n      //     // }while(!el.getAttribute)\n      //     sendCrdtPayload(\n      //       {\n      //         method: \"insertAdjacentElement\",\n      //         property: 'beforebegin',\n      //         target: {\n      //           target: el.getAttribute(\"data-element_id\"),\n      //           tagName: el.tagName,\n      //           nextSibling: nextSibling.getAttribute(\"data-element_id\"),\n      //           skip,\n      //         },\n      //         element: {\n      //           value: quillEl.querySelector(\":scope > .ql-editor\").innerHTML,\n      //         },\n      //       },\n      //       {\n      //         collection: \"module_activities\",\n      //         document_id: \"5edda7608d5c7a7d656edecd\",\n      //         name: \"html\",\n      //       }\n      //     );\n      //   });\n      // };\n\n    }\n  };\n\n  this.unwrapQuill = function (target) {\n    if (!this.quill.contains(target)) {\n      var _this$quill;\n\n      //if we don't click inside quill\n      var content = this.quill.querySelector(\":scope > .ql-editor\");\n      if (content) (_this$quill = this.quill).replaceWith.apply(_this$quill, _toConsumableArray(content.children));\n      this.quill.innerHTML = \"\";\n    }\n  };\n}\n\nfunction load() {\n  var q = new QuillAdder();\n  canvas = document.querySelector(canvasSelector);\n  canvasWindow = canvas.contentWindow;\n  canvasDocument = canvasWindow.document || canvas.contentDocument;\n  canvasDocument.addEventListener(\"dblclick\", function (e) {\n    CoCreate.utils.configExecuter(e.target, \"editable\", function (el) {\n      return q.wrapQuill(el);\n    }); // for (let config of window.cc.configMatch(window.elementConfig, e.target))\n    //   if (config.selectable === true) q.wrapQuill(e.target);\n    //   else if(config.selectable === false) return;\n    //   else if(config.selectable === undefined) continue;\n    //   else if (window.cc.isValidSelector(config.selectable)) {\n    //     window.cc.findElement(canvasDocument, config.selectable, el => q.wrapQuill(el))\n    //   }\n    //   else\n    //   console.warn('builder: ', 'wrong element config ', config);\n  });\n  canvasDocument.addEventListener(\"click\", function (e) {\n    q.unwrapQuill(e.target);\n  }); //   document.addEventListener(\"click\", (e) => {\n  //     // e.target.dispatchEvent(new Event('dblclick'), {bubble: true})\n  //     q.unwrapQuill(e.target);\n  //   });\n  //   document.addEventListener(\"dblclick\", (e) => {\n  //     q.wrapQuill(e.target);\n  //   });\n}\n\nwindow.addEventListener(\"load\", load);\nwindow.addEventListener(\"CoCreateHtmlTags-rendered\", load);\n/* harmony default export */ __webpack_exports__[\"default\"] = (QuillAdder);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Db0NyZWF0ZVF1aWxsQWRkZXIvLi9zcmMvQ29DcmVhdGUtcXVpbGwtYWRkZXIuanM/ZjU1ZCJdLCJuYW1lcyI6WyJjYW52YXNTZWxlY3RvciIsImNhbnZhcyIsImNhbnZhc0RvY3VtZW50IiwiY2FudmFzV2luZG93IiwiUXVpbGxBZGRlciIsInF1aWxsIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwid3JhcFF1aWxsIiwiZWwiLCJjaGlsZHJlbiIsImxlbmd0aCIsImdldEF0dHJpYnV0ZSIsImFwcGVuZCIsImNsb25lTm9kZSIsInJlcGxhY2VXaXRoIiwiQ29DcmVhdGVRdWlsbCIsIm9uTmV3RWRpdG9yIiwiZWRpdG9yIiwiZWRpdG9ycyIsImNsaXBib2FyZCIsImRhbmdlcm91c2x5UGFzdGVIVE1MIiwib3V0ZXJIVE1MIiwidW53cmFwUXVpbGwiLCJ0YXJnZXQiLCJjb250YWlucyIsImNvbnRlbnQiLCJxdWVyeVNlbGVjdG9yIiwiaW5uZXJIVE1MIiwibG9hZCIsInEiLCJjb250ZW50V2luZG93IiwiY29udGVudERvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJDb0NyZWF0ZSIsInV0aWxzIiwiY29uZmlnRXhlY3V0ZXIiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxjQUFjLEdBQUcsU0FBckI7QUFDQSxJQUFJQyxNQUFKLEVBQVlDLGNBQVosRUFBNEJDLFlBQTVCOztBQUVBLFNBQVNDLFVBQVQsR0FBc0I7QUFDcEI7QUFFQSxPQUFLQyxLQUFMLEdBQWFDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixLQUF2QixDQUFiO0FBQ0EsT0FBS0YsS0FBTCxDQUFXRyxZQUFYLENBQXdCLE9BQXhCLEVBQWlDLDZCQUFqQztBQUNBLE9BQUtILEtBQUwsQ0FBV0csWUFBWCxDQUF3QixZQUF4QixFQUFzQyxRQUF0QztBQUVBLE9BQUtILEtBQUwsQ0FBV0csWUFBWCxDQUF3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QUFQLENBQXdCLDJCQUF4QixFQUFxREosSUFBckQ7QUFDZTFCLHlFQUFmIiwiZmlsZSI6Ii4vc3JjL0NvQ3JlYXRlLXF1aWxsLWFkZGVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibGV0IGNhbnZhc1NlbGVjdG9yID0gXCIjY2FudmFzXCI7XG5sZXQgY2FudmFzLCBjYW52YXNEb2N1bWVudCwgY2FudmFzV2luZG93O1xuXG5mdW5jdGlvbiBRdWlsbEFkZGVyKCkge1xuICAvLyB0aGlzLmxhc3RQbGFjZW1lbnQ7XG5cbiAgdGhpcy5xdWlsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRoaXMucXVpbGwuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJxdWlsbCBidWJibGUgYmxvY2stb2JzZXJ2ZXJcIik7XG4gIHRoaXMucXVpbGwuc2V0QXR0cmlidXRlKFwiZGF0YS10aGVtZVwiLCBcImJ1YmJsZVwiKTtcblxuICB0aGlzLnF1aWxsLnNldEF0dHJpYnV0ZShcImRhdGEtZG9jdW1lbnRfaWRcIiwgXCJudWxsXCIpO1xuICB0aGlzLnF1aWxsLnNldEF0dHJpYnV0ZShcImRhdGEtY29sbGVjdGlvblwiLCBcIjEydGVzdFwiKTtcblxuICB0aGlzLndyYXBRdWlsbCA9IGZ1bmN0aW9uIChlbCkge1xuICAgIGlmICghdGhpcy5xdWlsbC5jaGlsZHJlbi5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5xdWlsbC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIGVsLmdldEF0dHJpYnV0ZSgnZGF0YS1lbGVtZW50X2lkJykpO1xuICAgICAgdGhpcy5xdWlsbC5hcHBlbmQoZWwuY2xvbmVOb2RlKHRydWUpKTtcbiAgICAgIGVsLnJlcGxhY2VXaXRoKHRoaXMucXVpbGwpO1xuICAgICAgXG4gICAgICAgICAgICBcbiAgICAgIFxuICAgICAgLy8gaXQncyBhbHdheXMgZWRpdG9yIDBcbiAgICAgIGxldCBxdWlsbCA9IGNhbnZhc1dpbmRvdy5Db0NyZWF0ZVF1aWxsO1xuXG4gICAgICBxdWlsbC5vbk5ld0VkaXRvciA9IGZ1bmN0aW9uIChlZGl0b3IpIHtcbiAgICAgICAgY2FudmFzV2luZG93LkNvQ3JlYXRlUXVpbGwuZWRpdG9yc1swXS5jbGlwYm9hcmQuZGFuZ2Vyb3VzbHlQYXN0ZUhUTUwoZWwub3V0ZXJIVE1MKVxuICAgICAgfTtcbiAgICAgIFxuICAgICAgXG4gICAgICBcbiAgICAgIC8vIGl0J3MgYWx3YXlzIGVkaXRvciAwXG4gICAgICAvLyBsZXQgcXVpbGwgPSBjYW52YXNXaW5kb3cuQ29DcmVhdGVRdWlsbDtcblxuICAgICAgLy8gcXVpbGwub25OZXdFZGl0b3IgPSBmdW5jdGlvbiAoZWRpdG9yKSB7XG4gICAgICAvLyBmb3IgZXZlcnkgY2hhbmdlIGluIHF1aWxsIGdldCB0aGUgZWxlbWVudHMgYW5kIHVwZGF0ZSB1c2luZyBjcmR0XG4gICAgICAvLyAgIGVkaXRvci5vbihcInRleHQtY2hhbmdlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vICAgICBsZXQgcXVpbGxFbCA9IHF1aWxsLmVsZW1lbnRzWzBdO1xuICAgICAgLy8gICAgIGxldCBbbmV4dFNpYmxpbmcsIHNraXBdID0gZ2V0TmV4dFNpYmxpbmcocXVpbGxFbClcbiAgICAgIC8vICAgICAvLyBlbCA9IHF1aWxsRWw7XG4gICAgICAvLyAgICAgLy8gZG97XG4gICAgICAvLyAgICAgLy9pZiAoZWwucHJldmlvdXNTaWJsaW5nKSB7XG4gICAgICAvLyAgICAgLy8gICBlbCA9IGVsLnByZXZpb3VzU2libGluZztcbiAgICAgIC8vICAgICAvLyAgIHBvc2l0aW9uID0gXCJhZnRlcmVuZFwiO1xuICAgICAgLy8gICAgIC8vIH0gZWxzZSB7XG4gICAgICAvLyAgICAgLy8gICBlbCA9IGVsLnBhcmVudEVsZW1lbnQ7XG4gICAgICAvLyAgICAgLy8gICBwb3NpdGlvbiA9IFwiYWZ0ZXJiZWdpblwiO1xuICAgICAgLy8gICAgIC8vIH1cbiAgICAgIC8vICAgICAvLyB9d2hpbGUoIWVsLmdldEF0dHJpYnV0ZSlcblxuXG4gICAgICAvLyAgICAgc2VuZENyZHRQYXlsb2FkKFxuICAgICAgLy8gICAgICAge1xuICAgICAgLy8gICAgICAgICBtZXRob2Q6IFwiaW5zZXJ0QWRqYWNlbnRFbGVtZW50XCIsXG4gICAgICAvLyAgICAgICAgIHByb3BlcnR5OiAnYmVmb3JlYmVnaW4nLFxuICAgICAgLy8gICAgICAgICB0YXJnZXQ6IHtcbiAgICAgIC8vICAgICAgICAgICB0YXJnZXQ6IGVsLmdldEF0dHJpYnV0ZShcImRhdGEtZWxlbWVudF9pZFwiKSxcbiAgICAgIC8vICAgICAgICAgICB0YWdOYW1lOiBlbC50YWdOYW1lLFxuICAgICAgLy8gICAgICAgICAgIG5leHRTaWJsaW5nOiBuZXh0U2libGluZy5nZXRBdHRyaWJ1dGUoXCJkYXRhLWVsZW1lbnRfaWRcIiksXG4gICAgICAvLyAgICAgICAgICAgc2tpcCxcbiAgICAgIC8vICAgICAgICAgfSxcbiAgICAgIC8vICAgICAgICAgZWxlbWVudDoge1xuICAgICAgLy8gICAgICAgICAgIHZhbHVlOiBxdWlsbEVsLnF1ZXJ5U2VsZWN0b3IoXCI6c2NvcGUgPiAucWwtZWRpdG9yXCIpLmlubmVySFRNTCxcbiAgICAgIC8vICAgICAgICAgfSxcbiAgICAgIC8vICAgICAgIH0sXG4gICAgICAvLyAgICAgICB7XG4gICAgICAvLyAgICAgICAgIGNvbGxlY3Rpb246IFwibW9kdWxlX2FjdGl2aXRpZXNcIixcbiAgICAgIC8vICAgICAgICAgZG9jdW1lbnRfaWQ6IFwiNWVkZGE3NjA4ZDVjN2E3ZDY1NmVkZWNkXCIsXG4gICAgICAvLyAgICAgICAgIG5hbWU6IFwiaHRtbFwiLFxuICAgICAgLy8gICAgICAgfVxuICAgICAgLy8gICAgICk7XG4gICAgICAvLyAgIH0pO1xuICAgICAgLy8gfTtcbiAgICAgIFxuICAgICAgXG4gICAgfVxuICB9O1xuICBcbiAgdGhpcy51bndyYXBRdWlsbCA9IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICBpZiAoIXRoaXMucXVpbGwuY29udGFpbnModGFyZ2V0KSkge1xuICAgICAgLy9pZiB3ZSBkb24ndCBjbGljayBpbnNpZGUgcXVpbGxcbiAgICAgIGxldCBjb250ZW50ID0gdGhpcy5xdWlsbC5xdWVyeVNlbGVjdG9yKFwiOnNjb3BlID4gLnFsLWVkaXRvclwiKTtcbiAgICAgIGlmIChjb250ZW50KSB0aGlzLnF1aWxsLnJlcGxhY2VXaXRoKC4uLmNvbnRlbnQuY2hpbGRyZW4pO1xuICAgICAgdGhpcy5xdWlsbC5pbm5lckhUTUwgPSBcIlwiO1xuICAgIH1cbiAgfTtcbn1cblxuZnVuY3Rpb24gbG9hZCgpIHtcbiAgbGV0IHEgPSBuZXcgUXVpbGxBZGRlcigpO1xuXG4gIGNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY2FudmFzU2VsZWN0b3IpO1xuICBjYW52YXNXaW5kb3cgPSBjYW52YXMuY29udGVudFdpbmRvdztcbiAgY2FudmFzRG9jdW1lbnQgPSBjYW52YXNXaW5kb3cuZG9jdW1lbnQgfHwgY2FudmFzLmNvbnRlbnREb2N1bWVudDtcblxuICBjYW52YXNEb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiZGJsY2xpY2tcIiwgKGUpID0+IHtcbiAgICBDb0NyZWF0ZS51dGlscy5jb25maWdFeGVjdXRlcihlLnRhcmdldCwgXCJlZGl0YWJsZVwiLCAoZWwpID0+IHEud3JhcFF1aWxsKGVsKSk7XG4gICAgLy8gZm9yIChsZXQgY29uZmlnIG9mIHdpbmRvdy5jYy5jb25maWdNYXRjaCh3aW5kb3cuZWxlbWVudENvbmZpZywgZS50YXJnZXQpKVxuICAgIC8vICAgaWYgKGNvbmZpZy5zZWxlY3RhYmxlID09PSB0cnVlKSBxLndyYXBRdWlsbChlLnRhcmdldCk7XG4gICAgLy8gICBlbHNlIGlmKGNvbmZpZy5zZWxlY3RhYmxlID09PSBmYWxzZSkgcmV0dXJuO1xuICAgIC8vICAgZWxzZSBpZihjb25maWcuc2VsZWN0YWJsZSA9PT0gdW5kZWZpbmVkKSBjb250aW51ZTtcbiAgICAvLyAgIGVsc2UgaWYgKHdpbmRvdy5jYy5pc1ZhbGlkU2VsZWN0b3IoY29uZmlnLnNlbGVjdGFibGUpKSB7XG4gICAgLy8gICAgIHdpbmRvdy5jYy5maW5kRWxlbWVudChjYW52YXNEb2N1bWVudCwgY29uZmlnLnNlbGVjdGFibGUsIGVsID0+IHEud3JhcFF1aWxsKGVsKSlcbiAgICAvLyAgIH1cbiAgICAvLyAgIGVsc2VcbiAgICAvLyAgIGNvbnNvbGUud2FybignYnVpbGRlcjogJywgJ3dyb25nIGVsZW1lbnQgY29uZmlnICcsIGNvbmZpZyk7XG4gIH0pO1xuICBjYW52YXNEb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBxLnVud3JhcFF1aWxsKGUudGFyZ2V0KTtcbiAgfSk7XG4gIC8vICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gIC8vICAgICAvLyBlLnRhcmdldC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnZGJsY2xpY2snKSwge2J1YmJsZTogdHJ1ZX0pXG4gIC8vICAgICBxLnVud3JhcFF1aWxsKGUudGFyZ2V0KTtcbiAgLy8gICB9KTtcbiAgLy8gICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiZGJsY2xpY2tcIiwgKGUpID0+IHtcbiAgLy8gICAgIHEud3JhcFF1aWxsKGUudGFyZ2V0KTtcbiAgLy8gICB9KTtcbn1cblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGxvYWQpO1xud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJDb0NyZWF0ZUh0bWxUYWdzLXJlbmRlcmVkXCIsIGxvYWQpO1xuZXhwb3J0IGRlZmF1bHQgUXVpbGxBZGRlcjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/CoCreate-quill-adder.js\n");

/***/ })

/******/ })["default"];
});