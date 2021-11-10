// var cityFormEl = document.querySelector("#city-form");
// var cityInputEl = document.querySelector("#cityname");
// var todayWeatherEl = document.querySelector("#weather");
// var fiveDayEl = document.querySelector("#weather-icons");
// var searchedCities = document.querySelector("#searched-cities");


// var formSubmitHandler = function(event) {
//     event.preventDefault();

//     var cityname = cityInputEl.value.trim();

//     if (cityname) {
//         getCityWeather(cityname);
  
//     }
// }

function getWeatherForecast(city) {
    var website = "http://api.openweathermap.org";
    var APIKey = "712d985d18bace0530a352f906aeff07";
    var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=" + APIKey;
    let showResults = fetch(queryURL);


    fetch(queryURL)
        .then(function (response) {
            if (response.ok) {
            response.json();
        }})
        .then(showResults)

}

// get 5 day weather forecast for cards
// function getCityWeather(result) {
    
// }


// create new cards for 5-day forecast according to acceptance criteria
// var card = document.createElement("div")
// 

// var date = document.createElement("div")
// date.textContent = 

// var weatherConditions = document.createElement("img")


// var temp = document.createElement("div")
// temp.textContent =

// var wind = document.createElement("div")
// wind.textContent = 

// var humidity = document.createElement("div")
// humidity.textContent
