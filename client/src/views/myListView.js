var MyListView = function(myCountries){
  this.render(myCountries);
  
  console.log(myCountries[0])
}


MyListView.prototype = {

  render: function(myCountries){
    var ul = document.querySelector("#my-list");
    
    myCountries.forEach( function(myCountry){
      var li = document.createElement("li");
      li.innerText = myCountry.name;
      ul.appendChild(li);
    });
  }
}

module.exports = MyListView;