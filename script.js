var cityFormEl = document.querySelector("#city-form");
var cityInputEl = document.querySelector("#cityname");
var todayWeatherEl = document.querySelector("#weather");
var weather = document.querySelector("#weather-icons");
var searchedCity = document.querySelector("#searched-city");


var apiKey = "712d985d18bace0530a352f906aeff07";
var queryURL = 'https://api.openweathermap.org/data/2.5/weather?q=${cityInputEl}&APPID=712d985d18bace0530a352f906aeff07';


// create a function to search for today's weather

function displayTodayWeather(data) {
  // create card for today's weather
  var cityEl = document.createElement("div")
  city.classList.add("city");

  var iconEl = document.createElement("img")
  iconEl.setAttribute("src", "http://openweathermap.org/img/wn/" + day.weather[0].icon + "@2x.png");

  var tempEl = document.createElement("div")
  tempEl.textContent = "Temp: " + (Math.round(day.main.temp)) + " °F";

  var windEl = document.createElement("div")
  windEl.textContent = (Math.round(day.wind.speed)) + " mph";

  var humidityEl = document.createElement("div")
  humidityEl.textContent = "Humidity: " + day.main.humidity + "%";

  var indexEl = document.createElement("div")
  indexEl.textContent = "UV Index: " + data.current.uvi;
  if(data.current.uvi < 2){
    $("#uvi-current").addClass("low"); $("#uvi-current").removeClass("medium"); $("#uvi-current").removeClass("high"); 
  } else if (data.current.uvi > 5){
    $("#uvi-current").removeClass("low"); $("#uvi-current").removeClass("medium"); $("#uvi-current").addClass("high"); 
  } else {
    $("#uvi-current").removeClass("low"); $("#uvi-current").addClass("medium"); $("#uvi-current").removeClass("high"); 
  };

  searchedCity.appendChild(cityEl)
  searchedCity.appendChild(iconEl)
  searchedCity.appendChild(tempEl)
  searchedCity.appendChild(windEl)
  searchedCity.appendChild(humidityEl)
  searchedCity.appendChild(indexEl)


};


//  function to display 5 day forecast
var displayFiveDay = function(day) {
  weather.innerHTML = ""
  for (let index = 0; index < 5; index++) {




function displayFiveDay(data) {
  // create new cards for 5-day forecast according to acceptance criteria
  var card = document.createElement("div")
  card.classList.add("container", "cards");

  var dateEl = document.createElement("div")
  date.textContent = new Date(day.dt_txt).toLocaleDateString();

  var iconEl = document.createElement("img")
  iconEl.setAttribute("src", "http://openweathermap.org/img/wn/" + day.weather[0].icon + "@2x.png");

  var tempEl = document.createElement("div")
  tempEl.textContent = "Temp: " + (Math.round(day.main.temp)) + " °F";

  var windEl = document.createElement("div")
  windEl.textContent = (Math.round(day.wind.speed)) + " mph";

  var humidityEl = document.createElement("div")
  humidityEl.textContent = "Humidity: " + day.main.humidity + "%";

  weather.appendChild(card)
  card.appendChild(dateEl)
  card.appendChild(iconEl)
  card.appendChild(tempEl)
  card.appendChild(windEl)
  card.appendChild(humidityEl)

};


// cityFormEl.addEventListener("submit", formSubmitHandler);

