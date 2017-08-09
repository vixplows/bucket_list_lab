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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var SelectListView = __webpack_require__(2);

var makeRequest = function(url, callback) {
  var request = new XMLHttpRequest();
  request.addEventListener('load', callback);
  request.open("GET", url);
  request.send();
}

var requestComplete = function() {
  if(this.status !== 200) return;

  var jsonString = this.responseText;
  countries = JSON.parse(jsonString);
  console.log(countries);
  var countriesView = new SelectListView(countries)
}

////

var saveToMyList = function(evt) {
  var mylistUrl = "/mylist"
  var value = this.value
  var postToMyList = { "name": value }


  
  var putRequest = new XMLHttpRequest();
  putRequest.addEventListener('load', function() {
    saveMyListComplete(this, postToMyList);
  });
  putRequest.open("POST", mylistUrl)
  putRequest.setRequestHeader('Content-Type', 'application/json')
//  saveMyListComplete(postToMyList)
  putRequest.send(JSON.stringify(postToMyList))
}

/*
   var putRequest = new XMLHttpRequest();
   putRequest.open("DELETE", "/countries")
   putRequest.send() 
*/


var saveMyListComplete = function(res, data) {
  if(res.status !== 200) return;

  console.log(res.responseText);
  console.log(data)

  // var jsonString = this.value;
  // country = JSON.parse(jsonString);
  // console.log(country);
  // var myListView = new MyListView(country)
}


/////

var app = function(){

  var url = "https://restcountries.eu/rest/v2/all";
  makeRequest(url, requestComplete);

  var countrySelect = document.querySelector("#countries-list")
  countrySelect.addEventListener("change", saveToMyList)
}


window.addEventListener('load', app);

/***/ }),
/* 2 */
/***/ (function(module, exports) {

var SelectListView = function(countries){
  this.render(countries);
}

SelectListView.prototype = {
  render: function(countries){
    var select = document.querySelector("#countries-list");
    
    countries.forEach( function(country){
      var option = document.createElement("option");
      option.innerText = country.name;
      select.appendChild(option)
    });
  }
}

module.exports = SelectListView;

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map