var cityFormEl = document.querySelector("#city-form");
var cityInputEl = document.querySelector("#cityname");
var todayWeatherEl = document.querySelector("#weather");
var fiveDayEl = document.querySelector("#weather-icons");
var searchedCities = document.querySelector("#searched-cities");


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

// save search to localStorage

function saveSearch() {
    localStorage.setItem("search", JSON.stringify(search))
}

// save search and append to page
function saveSearchResults() {
    searchedCities.innerHTML = "";

    for (var i = 0; i <searches.length; i++) {
        var search = searches[i];
        // get a list of searched cities
        var div = document.createElement("div");
        // create buttons for already searched city
        var button = document.createElement("button");

        button.textContent = search;
        button.classList.add("btn")
        button.onclick = handleClick
        div.setAttribute("data", i);
        div. appendChild(button);
        searchedCities.appendChild(div);
    }
}
// get 5 day weather forecast for cards
// function getCityWeather(result) {
    
// }


// create new cards for 5-day forecast according to acceptance criteria

// var card = document.createElement("div")
// 

// var date = document.createElement("div")
// date.textContent = create date calc.

// var icon = document.createElement("img")
// add weather condition image

// var temp = document.createElement("div")
// temp.textContent = "Temp: " + temp calc + " °F"

// var wind = document.createElement("div")
// wind.textContent = "Wind: " + wind calc + " MPH"

// var humidity = document.createElement("div")
// humidity.textContent = "Humidity: " + humid. calc + " %"

// Append these to future-forecast

