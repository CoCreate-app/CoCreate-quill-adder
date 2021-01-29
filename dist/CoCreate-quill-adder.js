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
eval("__webpack_require__.r(__webpack_exports__);\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nvar canvasSelector = \"#canvas\";\nvar canvas, canvasDocument, canvasWindow;\n\nfunction QuillAdder() {\n  // this.lastPlacement;\n  this.quill = document.createElement(\"div\");\n  this.quill.setAttribute(\"class\", \"quill bubble block-observer\");\n  this.quill.setAttribute(\"data-theme\", \"bubble\");\n  this.quill.setAttribute(\"data-document_id\", \"null\");\n  this.quill.setAttribute(\"data-collection\", \"12test\");\n\n  this.wrapQuill = function (el) {\n    if (!this.quill.children.length) {\n      this.quill.setAttribute(\"name\", el.getAttribute('data-element_id'));\n      this.quill.append(el.cloneNode(true));\n      el.replaceWith(this.quill); // it's always editor 0\n\n      var quill = canvasWindow.CoCreateQuill;\n\n      quill.onNewEditor = function (editor) {\n        canvasWindow.CoCreateQuill.editors[0].clipboard.dangerouslyPasteHTML(el.outerHTML);\n      }; // it's always editor 0\n      // let quill = canvasWindow.CoCreateQuill;\n      // quill.onNewEditor = function (editor) {\n      // for every change in quill get the elements and update using crdt\n      //   editor.on(\"text-change\", function () {\n      //     let quillEl = quill.elements[0];\n      //     let [nextSibling, skip] = getNextSibling(quillEl)\n      //     // el = quillEl;\n      //     // do{\n      //     //if (el.previousSibling) {\n      //     //   el = el.previousSibling;\n      //     //   position = \"afterend\";\n      //     // } else {\n      //     //   el = el.parentElement;\n      //     //   position = \"afterbegin\";\n      //     // }\n      //     // }while(!el.getAttribute)\n      //     sendCrdtPayload(\n      //       {\n      //         method: \"insertAdjacentElement\",\n      //         property: 'beforebegin',\n      //         target: {\n      //           target: el.getAttribute(\"data-element_id\"),\n      //           tagName: el.tagName,\n      //           nextSibling: nextSibling.getAttribute(\"data-element_id\"),\n      //           skip,\n      //         },\n      //         element: {\n      //           value: quillEl.querySelector(\":scope > .ql-editor\").innerHTML,\n      //         },\n      //       },\n      //       {\n      //         collection: \"module_activities\",\n      //         document_id: \"5edda7608d5c7a7d656edecd\",\n      //         name: \"html\",\n      //       }\n      //     );\n      //   });\n      // };\n\n    }\n  };\n\n  this.unwrapQuill = function (target) {\n    if (!this.quill.contains(target)) {\n      var _this$quill;\n\n      //if we don't click inside quill\n      var content = this.quill.querySelector(\":scope > .ql-editor\");\n      if (content) (_this$quill = this.quill).replaceWith.apply(_this$quill, _toConsumableArray(content.children));\n      this.quill.innerHTML = \"\";\n    }\n  };\n}\n\nfunction load() {\n  var q = new QuillAdder();\n  canvas = document.querySelector(canvasSelector);\n  canvasWindow = canvas.contentWindow;\n  canvasDocument = canvasWindow.document || canvas.contentDocument;\n  canvasDocument.addEventListener(\"dblclick\", function (e) {\n    CoCreateUtils.configExecuter(e.target, \"editable\", function (el) {\n      return q.wrapQuill(el);\n    }); // for (let config of window.cc.configMatch(window.elementConfig, e.target))\n    //   if (config.selectable === true) q.wrapQuill(e.target);\n    //   else if(config.selectable === false) return;\n    //   else if(config.selectable === undefined) continue;\n    //   else if (window.cc.isValidSelector(config.selectable)) {\n    //     window.cc.findElement(canvasDocument, config.selectable, el => q.wrapQuill(el))\n    //   }\n    //   else\n    //   console.warn('builder: ', 'wrong element config ', config);\n  });\n  canvasDocument.addEventListener(\"click\", function (e) {\n    q.unwrapQuill(e.target);\n  }); //   document.addEventListener(\"click\", (e) => {\n  //     // e.target.dispatchEvent(new Event('dblclick'), {bubble: true})\n  //     q.unwrapQuill(e.target);\n  //   });\n  //   document.addEventListener(\"dblclick\", (e) => {\n  //     q.wrapQuill(e.target);\n  //   });\n}\n\nwindow.addEventListener(\"load\", load);\nwindow.addEventListener(\"CoCreateHtmlTags-rendered\", load);\n/* harmony default export */ __webpack_exports__[\"default\"] = (QuillAdder);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Db0NyZWF0ZVF1aWxsQWRkZXIvLi9zcmMvQ29DcmVhdGUtcXVpbGwtYWRkZXIuanM/ZjU1ZCJdLCJuYW1lcyI6WyJjYW52YXNTZWxlY3RvciIsImNhbnZhcyIsImNhbnZhc0RvY3VtZW50IiwiY2FudmFzV2luZG93IiwiUXVpbGxBZGRlciIsInF1aWxsIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwid3JhcFF1aWxsIiwiZWwiLCJjaGlsZHJlbiIsImxlbmd0aCIsImdldEF0dHJpYnV0ZSIsImFwcGVuZCIsImNsb25lTm9kZSIsInJlcGxhY2VXaXRoIiwiQ29DcmVhdGVRdWlsbCIsIm9uTmV3RWRpdG9yIiwiZWRpdG9yIiwiZWRpdG9ycyIsImNsaXBib2FyZCIsImRhbmdlcm91c2x5UGFzdGVIVE1MIiwib3V0ZXJIVE1MIiwidW53cmFwUXVpbGwiLCJ0YXJnZXQiLCJjb250YWlucyIsImNvbnRlbnQiLCJxdWVyeVNlbGVjdG9yIiwiaW5uZXJIVE1MIiwibG9hZCIsInEiLCJjb250ZW50V2luZG93IiwiY29udGVudERvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJDb0NyZWF0ZVV0aWxzIiwiY29uZmlnRXhlY3V0ZXIiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxjQUFjLEdBQUcsU0FBckI7QUFDQSxJQUFJQyxNQUFKLEVBQVlDLGNBQVosRUFBNEJDLFlBQTVCOztBQUVBLFNBQVNDLFVBQVQsR0FBc0I7QUFDcEI7QUFFQSxPQUFLQyxLQUFMLEdBQWFDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixLQUF2QixDQUFiO0FBQ0EsT0FBS0YsS0FBTCxDQUFXRyxZQUFYLENBQXdCLE9BQXhCLEVBQWlDLDZCQUFqQztBQUNBLE9BQUtILEtBQUwsQ0FBV0csWUFBWCxDQUF3QixZQUF4QixFQUFzQyxRQUF0QztBQUVBLE9BQUtILEtBQUwsQ0FBV0csWUFBWCxDQUF3Qixr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QXhCLEVBQXFESixJQUFyRDtBQUNlMUIseUVBQWYiLCJmaWxlIjoiLi9zcmMvQ29DcmVhdGUtcXVpbGwtYWRkZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgY2FudmFzU2VsZWN0b3IgPSBcIiNjYW52YXNcIjtcbmxldCBjYW52YXMsIGNhbnZhc0RvY3VtZW50LCBjYW52YXNXaW5kb3c7XG5cbmZ1bmN0aW9uIFF1aWxsQWRkZXIoKSB7XG4gIC8vIHRoaXMubGFzdFBsYWNlbWVudDtcblxuICB0aGlzLnF1aWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdGhpcy5xdWlsbC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInF1aWxsIGJ1YmJsZSBibG9jay1vYnNlcnZlclwiKTtcbiAgdGhpcy5xdWlsbC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXRoZW1lXCIsIFwiYnViYmxlXCIpO1xuXG4gIHRoaXMucXVpbGwuc2V0QXR0cmlidXRlKFwiZGF0YS1kb2N1bWVudF9pZFwiLCBcIm51bGxcIik7XG4gIHRoaXMucXVpbGwuc2V0QXR0cmlidXRlKFwiZGF0YS1jb2xsZWN0aW9uXCIsIFwiMTJ0ZXN0XCIpO1xuXG4gIHRoaXMud3JhcFF1aWxsID0gZnVuY3Rpb24gKGVsKSB7XG4gICAgaWYgKCF0aGlzLnF1aWxsLmNoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgICB0aGlzLnF1aWxsLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgZWwuZ2V0QXR0cmlidXRlKCdkYXRhLWVsZW1lbnRfaWQnKSk7XG4gICAgICB0aGlzLnF1aWxsLmFwcGVuZChlbC5jbG9uZU5vZGUodHJ1ZSkpO1xuICAgICAgZWwucmVwbGFjZVdpdGgodGhpcy5xdWlsbCk7XG4gICAgICBcbiAgICAgICAgICAgIFxuICAgICAgXG4gICAgICAvLyBpdCdzIGFsd2F5cyBlZGl0b3IgMFxuICAgICAgbGV0IHF1aWxsID0gY2FudmFzV2luZG93LkNvQ3JlYXRlUXVpbGw7XG5cbiAgICAgIHF1aWxsLm9uTmV3RWRpdG9yID0gZnVuY3Rpb24gKGVkaXRvcikge1xuICAgICAgICBjYW52YXNXaW5kb3cuQ29DcmVhdGVRdWlsbC5lZGl0b3JzWzBdLmNsaXBib2FyZC5kYW5nZXJvdXNseVBhc3RlSFRNTChlbC5vdXRlckhUTUwpXG4gICAgICB9O1xuICAgICAgXG4gICAgICBcbiAgICAgIFxuICAgICAgLy8gaXQncyBhbHdheXMgZWRpdG9yIDBcbiAgICAgIC8vIGxldCBxdWlsbCA9IGNhbnZhc1dpbmRvdy5Db0NyZWF0ZVF1aWxsO1xuXG4gICAgICAvLyBxdWlsbC5vbk5ld0VkaXRvciA9IGZ1bmN0aW9uIChlZGl0b3IpIHtcbiAgICAgIC8vIGZvciBldmVyeSBjaGFuZ2UgaW4gcXVpbGwgZ2V0IHRoZSBlbGVtZW50cyBhbmQgdXBkYXRlIHVzaW5nIGNyZHRcbiAgICAgIC8vICAgZWRpdG9yLm9uKFwidGV4dC1jaGFuZ2VcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgLy8gICAgIGxldCBxdWlsbEVsID0gcXVpbGwuZWxlbWVudHNbMF07XG4gICAgICAvLyAgICAgbGV0IFtuZXh0U2libGluZywgc2tpcF0gPSBnZXROZXh0U2libGluZyhxdWlsbEVsKVxuICAgICAgLy8gICAgIC8vIGVsID0gcXVpbGxFbDtcbiAgICAgIC8vICAgICAvLyBkb3tcbiAgICAgIC8vICAgICAvL2lmIChlbC5wcmV2aW91c1NpYmxpbmcpIHtcbiAgICAgIC8vICAgICAvLyAgIGVsID0gZWwucHJldmlvdXNTaWJsaW5nO1xuICAgICAgLy8gICAgIC8vICAgcG9zaXRpb24gPSBcImFmdGVyZW5kXCI7XG4gICAgICAvLyAgICAgLy8gfSBlbHNlIHtcbiAgICAgIC8vICAgICAvLyAgIGVsID0gZWwucGFyZW50RWxlbWVudDtcbiAgICAgIC8vICAgICAvLyAgIHBvc2l0aW9uID0gXCJhZnRlcmJlZ2luXCI7XG4gICAgICAvLyAgICAgLy8gfVxuICAgICAgLy8gICAgIC8vIH13aGlsZSghZWwuZ2V0QXR0cmlidXRlKVxuXG5cbiAgICAgIC8vICAgICBzZW5kQ3JkdFBheWxvYWQoXG4gICAgICAvLyAgICAgICB7XG4gICAgICAvLyAgICAgICAgIG1ldGhvZDogXCJpbnNlcnRBZGphY2VudEVsZW1lbnRcIixcbiAgICAgIC8vICAgICAgICAgcHJvcGVydHk6ICdiZWZvcmViZWdpbicsXG4gICAgICAvLyAgICAgICAgIHRhcmdldDoge1xuICAgICAgLy8gICAgICAgICAgIHRhcmdldDogZWwuZ2V0QXR0cmlidXRlKFwiZGF0YS1lbGVtZW50X2lkXCIpLFxuICAgICAgLy8gICAgICAgICAgIHRhZ05hbWU6IGVsLnRhZ05hbWUsXG4gICAgICAvLyAgICAgICAgICAgbmV4dFNpYmxpbmc6IG5leHRTaWJsaW5nLmdldEF0dHJpYnV0ZShcImRhdGEtZWxlbWVudF9pZFwiKSxcbiAgICAgIC8vICAgICAgICAgICBza2lwLFxuICAgICAgLy8gICAgICAgICB9LFxuICAgICAgLy8gICAgICAgICBlbGVtZW50OiB7XG4gICAgICAvLyAgICAgICAgICAgdmFsdWU6IHF1aWxsRWwucXVlcnlTZWxlY3RvcihcIjpzY29wZSA+IC5xbC1lZGl0b3JcIikuaW5uZXJIVE1MLFxuICAgICAgLy8gICAgICAgICB9LFxuICAgICAgLy8gICAgICAgfSxcbiAgICAgIC8vICAgICAgIHtcbiAgICAgIC8vICAgICAgICAgY29sbGVjdGlvbjogXCJtb2R1bGVfYWN0aXZpdGllc1wiLFxuICAgICAgLy8gICAgICAgICBkb2N1bWVudF9pZDogXCI1ZWRkYTc2MDhkNWM3YTdkNjU2ZWRlY2RcIixcbiAgICAgIC8vICAgICAgICAgbmFtZTogXCJodG1sXCIsXG4gICAgICAvLyAgICAgICB9XG4gICAgICAvLyAgICAgKTtcbiAgICAgIC8vICAgfSk7XG4gICAgICAvLyB9O1xuICAgICAgXG4gICAgICBcbiAgICB9XG4gIH07XG4gIFxuICB0aGlzLnVud3JhcFF1aWxsID0gZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIGlmICghdGhpcy5xdWlsbC5jb250YWlucyh0YXJnZXQpKSB7XG4gICAgICAvL2lmIHdlIGRvbid0IGNsaWNrIGluc2lkZSBxdWlsbFxuICAgICAgbGV0IGNvbnRlbnQgPSB0aGlzLnF1aWxsLnF1ZXJ5U2VsZWN0b3IoXCI6c2NvcGUgPiAucWwtZWRpdG9yXCIpO1xuICAgICAgaWYgKGNvbnRlbnQpIHRoaXMucXVpbGwucmVwbGFjZVdpdGgoLi4uY29udGVudC5jaGlsZHJlbik7XG4gICAgICB0aGlzLnF1aWxsLmlubmVySFRNTCA9IFwiXCI7XG4gICAgfVxuICB9O1xufVxuXG5mdW5jdGlvbiBsb2FkKCkge1xuICBsZXQgcSA9IG5ldyBRdWlsbEFkZGVyKCk7XG5cbiAgY2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihjYW52YXNTZWxlY3Rvcik7XG4gIGNhbnZhc1dpbmRvdyA9IGNhbnZhcy5jb250ZW50V2luZG93O1xuICBjYW52YXNEb2N1bWVudCA9IGNhbnZhc1dpbmRvdy5kb2N1bWVudCB8fCBjYW52YXMuY29udGVudERvY3VtZW50O1xuXG4gIGNhbnZhc0RvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJkYmxjbGlja1wiLCAoZSkgPT4ge1xuICAgIENvQ3JlYXRlVXRpbHMuY29uZmlnRXhlY3V0ZXIoZS50YXJnZXQsIFwiZWRpdGFibGVcIiwgKGVsKSA9PiBxLndyYXBRdWlsbChlbCkpO1xuICAgIC8vIGZvciAobGV0IGNvbmZpZyBvZiB3aW5kb3cuY2MuY29uZmlnTWF0Y2god2luZG93LmVsZW1lbnRDb25maWcsIGUudGFyZ2V0KSlcbiAgICAvLyAgIGlmIChjb25maWcuc2VsZWN0YWJsZSA9PT0gdHJ1ZSkgcS53cmFwUXVpbGwoZS50YXJnZXQpO1xuICAgIC8vICAgZWxzZSBpZihjb25maWcuc2VsZWN0YWJsZSA9PT0gZmFsc2UpIHJldHVybjtcbiAgICAvLyAgIGVsc2UgaWYoY29uZmlnLnNlbGVjdGFibGUgPT09IHVuZGVmaW5lZCkgY29udGludWU7XG4gICAgLy8gICBlbHNlIGlmICh3aW5kb3cuY2MuaXNWYWxpZFNlbGVjdG9yKGNvbmZpZy5zZWxlY3RhYmxlKSkge1xuICAgIC8vICAgICB3aW5kb3cuY2MuZmluZEVsZW1lbnQoY2FudmFzRG9jdW1lbnQsIGNvbmZpZy5zZWxlY3RhYmxlLCBlbCA9PiBxLndyYXBRdWlsbChlbCkpXG4gICAgLy8gICB9XG4gICAgLy8gICBlbHNlXG4gICAgLy8gICBjb25zb2xlLndhcm4oJ2J1aWxkZXI6ICcsICd3cm9uZyBlbGVtZW50IGNvbmZpZyAnLCBjb25maWcpO1xuICB9KTtcbiAgY2FudmFzRG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgcS51bndyYXBRdWlsbChlLnRhcmdldCk7XG4gIH0pO1xuICAvLyAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAvLyAgICAgLy8gZS50YXJnZXQuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2RibGNsaWNrJyksIHtidWJibGU6IHRydWV9KVxuICAvLyAgICAgcS51bndyYXBRdWlsbChlLnRhcmdldCk7XG4gIC8vICAgfSk7XG4gIC8vICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImRibGNsaWNrXCIsIChlKSA9PiB7XG4gIC8vICAgICBxLndyYXBRdWlsbChlLnRhcmdldCk7XG4gIC8vICAgfSk7XG59XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBsb2FkKTtcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiQ29DcmVhdGVIdG1sVGFncy1yZW5kZXJlZFwiLCBsb2FkKTtcbmV4cG9ydCBkZWZhdWx0IFF1aWxsQWRkZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/CoCreate-quill-adder.js\n");

/***/ })

/******/ })["default"];
});