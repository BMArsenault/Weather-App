
// var website = "https://api.openweathermap.org";
//     ;
  

var apiKey = "712d985d18bace0530a352f906aeff07";
var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&APPID=712d985d18bace0530a352f906aeff07"
var url = "https://api.openweathermap.org/data/2.5/onecall?q=New%20York&appid=128c8c746b69ffc06f48c91a2851d72f";

var cityName = "Los Angeles";

//query selections
var searchBtn = document.querySelector("button-addon2");
// function testBtn() {
//     console.log('here');
// }
// function selectCity() {
//     var
// }

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
      var latitude = data.coord.lat;
      var longitude = data.coord.lon;
      // var uvIndex = data.current.uvi;
//______________________________Weather for today 
      var urlWeather = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

      fetch(urlWeather)
        .then((res) => res.json())
        .then(function (data) {
          console.log(data.current.temp);
          console.log(data.current.wind_speed);
          console.log(data.current.humidity);
          console.log(data.current.uvi);
        });
      var urlFiveDay = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}`;
      fetch(urlFiveDay)
        .then((res) => res.json())
        .then(function (data) {
          //______________Day 1
          console.log(data.list[0].dt_txt);
          console.log(data.list[0].weather);
          console.log(data.list[0].main.temp);
          console.log(data.list[0].main.humidity);
          console.log(data.list[0].wind.speed);
          //_______________Day 2
          console.log(data.list[8].dt_txt);
          console.log(data.list[8].weather);
          console.log(data.list[8].main.temp);
          console.log(data.list[8].main.humidity);
          console.log(data.list[8].wind.speed);
          //_______________Day 3
          console.log(data.list[16].dt_txt);
          console.log(data.list[16].weather);
          console.log(data.list[16].main.temp);
          console.log(data.list[16].main.humidity);
          console.log(data.list[16].wind.speed);
          //_______________Day 4
          console.log(data.list[24].dt_txt);
          console.log(data.list[24].weather);
          console.log(data.list[24].main.temp);
          console.log(data.list[24].main.humidity);
          console.log(data.list[24].wind.speed);
          //_______________Day 5
          console.log(data.list[32].dt_txt);
          console.log(data.list[32].weather);
          console.log(data.list[32].main.temp);
          console.log(data.list[32].main.humidity);
          console.log(data.list[32].wind.speed);
          // var latitude2= data.city.coord.lat;
          // var longitude2 = data.city.coord.lon;
        });
    });
}

// get the input first
search("New York");

// Get date at top of screen
const today = moment().format("LL");
$("#currentDay").append("Today is: " + today);

//event listener
document.getElementById("button-addon2").addEventListener("click", search);



// past attempts before study group

// var cityFormEl = document.querySelector("#city-form");
// var cityInputEl = document.querySelector("#cityname");
// var todayWeatherEl = document.querySelector("#weather");
// var fiveDayEl = document.querySelector("#weather-icons");
// var searchedCities = document.querySelector("#searched-cities");

// var cityName = "Phoenix"

// function getWeatherForecast(city) {

//     fetch(queryURL)
//         .then(function (response) {
//             if (response.ok) {
//             response.json();
//         }})
//         .then(funtion (data) {
//         console.log(data),
//     }
// }};


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

// var formSubmitHandler = function(event) {
//     event.preventDefault();

//     var cityname = cityInputEl.value.trim();

//     if (cityname) {
//         getCityWeather(cityname);
  
//     }
// }

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

// save search and append to page
// function saveSearchResults() {
//     searchedCities.innerHTML = "";

//     for (var i = 0; i <searches.length; i++) {
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