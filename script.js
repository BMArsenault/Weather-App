var cityFormEl = document.querySelector("#city-form");
var cityInputEl = document.querySelector("#cityname");
var todayWeatherEl = document.querySelector("#weather");
var fiveDayEl = document.querySelector("#weather-icons");
var searchedCities = document.querySelector("#searched-cities");

function getWeather(city)


// var apiKey = "712d985d18bace0530a352f906aeff07";
var queryURL = 'https://api.openweathermap.org/data/2.5/weather?q=${cityInputEl}&APPID=712d985d18bace0530a352f906aeff07';


var cityName = document.querySelector("button");


function search(cityName, latitude, longitude) {
  console.log("here");

  // var urlFiveDay = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

  // fetch(urlFiveDay)
  //   .then((res) => res.json())
  //   .then(function (data) {
  //     console.log(data);
  //     // var latitude = data.coord.lat;
  //     // var longitude = data.coord.lon;
  //   });

  var urlLocation = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;
  fetch(urlLocation)
    .then((res) => res.json())
    .then(function (data) {
      console.log(data.coord);
      var latitude = data.coord.latitude;
      var longitude = data.coord.lon;
      // var uvIndex = data.current.uvi;



//  function to display 5 day forecast
var displayFiveDay = function (data) {
  for (let index = 0; index < 5; index++) {
  // create new cards for 5-day forecast according to acceptance criteria
      var cardEl = document.createElement("div")
      card.classList.add("container", "cards");

      var dateEl = document.createElement("div")
      date.textContent = ;

      var iconEl = document.createElement("img")
      add weather condition image;

      var tempEl = document.createElement("div")
      tempEl.textContent = "Temp: " + (Math.round(day.main.temp)) + " °F";

      var windEl = document.createElement("div")
      windEl.textContent = (Math.round(day.wind.speed)) + " mph";
  
      var humidityEl = document.createElement("div")
      humidityEl.textContent = "Humidity: " + day.main.humidity + "%";
      
  }
};


// cityFormEl.addEventListener("submit", formSubmitHandler);



// save search to localStorage
// var search =
// function saveSearch() {
//     localStorage.setItem("search", JSON.stringify(search))
// }

// $(".saveBtn").on("click", function () {
//     // Get nearby values of the description in JQuery
//     var text = $(this).siblings(".description").val();
//     var time = $(this).parent().attr("id");
//     // Set the value of the specified local storage item
//     localStorage.setItem(time, text);
//     })


    //     searchedCities.innerHTML = "";
    
    //     for (var i = 0; i < searches.length; i++) {
    //         var search = searches[i];
    //         // get a list of searched cities
    //         var div = document.createElement("div");
    //         // create buttons for already searched city
    //         var button = document.createElement("button");
    
    //         button.textContent = search;
    //         button.classList.add("btn")
    //         button.onclick = handleClick
    //         div.setAttribute("data", i);
    //         div. appendChild(button);
    //         searchedCities.appendChild(div);
    //     }
    // };
    // }


// save search and append to page