var SelectListView = require('./views/selectListView');

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

var app = function(){

  var url = "https://restcountries.eu/rest/v2/all";
  makeRequest(url, requestComplete);
  
}


window.addEventListener('load', app);