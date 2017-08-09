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