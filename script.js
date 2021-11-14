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
  var city = document.createElement("div")
  city.classList.add("city");

  var icon = document.createElement("img")
  icon.setAttribute("src", "http://openweathermap.org/img/wn/" + day.weather[0].icon + "@2x.png");

  var temp = document.createElement("div")
  temp.textContent = "Temp: " + (Math.round(day.main.temp)) + " °F";

  var wind = document.createElement("div")
  wind.textContent = (Math.round(day.wind.speed)) + " mph";

  var humidity = document.createElement("div")
  humidity.textContent = "Humidity: " + day.main.humidity + "%";

  var index = document.createElement("div")
  index.textContent = "UV Index: " + data.current.uvi;
  if(data.current.uvi < 2){
    $("#uvi-current").addClass("low"); $("#uvi-current").removeClass("medium"); $("#uvi-current").removeClass("high"); 
  } else if (data.current.uvi > 5){
    $("#uvi-current").removeClass("low"); $("#uvi-current").removeClass("medium"); $("#uvi-current").addClass("high"); 
  } else {
    $("#uvi-current").removeClass("low"); $("#uvi-current").addClass("medium"); $("#uvi-current").removeClass("high"); 
  };

  searchedCity.appendChild(city)
  searchedCity.appendChild(icon)
  searchedCity.appendChild(temp)
  searchedCity.appendChild(wind)
  searchedCity.appendChild(humidity)
  searchedCity.appendChild(index)


};


//  function to display 5 day forecast
var displayFiveDay = function(day) {
  weather.innerHTML = ""
  for (let index = 0; index < 5; index++) {

  }
}


function displayFiveDay(data) {
  // create new cards for 5-day forecast according to acceptance criteria
  var card = document.createElement("div")
  card.classList.add("container", "cards");

  var date = document.createElement("div")
  date.textContent = new Date(day.dt_txt).toLocaleDateString();

  var icon = document.createElement("img")
  icon.setAttribute("src", "http://openweathermap.org/img/wn/" + day.weather[0].icon + "@2x.png");

  var teml = document.createElement("div")
  temp.textContent = "Temp: " + (Math.round(day.main.temp)) + " °F";

  var wind = document.createElement("div")
  wind.textContent = (Math.round(day.wind.speed)) + " mph";

  var humidity = document.createElement("div")
  humidity.textContent = "Humidity: " + day.main.humidity + "%";

  weather.appendChild(card)
  card.appendChild(date)
  card.appendChild(icon)
  card.appendChild(temp)
  card.appendChild(wind)
  card.appendChild(humidity)

};
