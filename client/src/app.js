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