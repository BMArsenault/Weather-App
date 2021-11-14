var cityFormEl = document.querySelector("#city-form");
var cityInputEl = document.querySelector("#cityname");
var todayWeatherEl = document.querySelector("#weather");
var weather = document.querySelector("#weather-icons");
var searchedCity = document.querySelector("#searched-city");

var search = [];

var apiKey = "712d985d18bace0530a352f906aeff07";
var queryURL = 'https://api.openweathermap.org/data/2.5/weather?q=${cityInputEl}&APPID=712d985d18bace0530a352f906aeff07';

// Saves submitted cities to local storage


cityFormEl.addEventListener("submit", function (event) {
  event.preventDefault();
  var searchText = cityInputEl.value.trim();
  cityInputEl.value = ""

  if (searchText === "") {
    return;
  }
})



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

  // taken from group get together.  Figure out $ to make it cleaner later.
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


// var urlWeather = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=imperial&appid=${apiKey}`;

//   fetch(urlWeather)
//     .then((res) => res.json())
//     .then(function (data) {
//     console.log(data.current.temp);
//     console.log(data.current.wind_speed);
//     console.log(data.current.humidity);
//     console.log(data.current.uvi);
//     });
// })

// var urlFiveDay = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=imperial&appid=${apiKey}`;
//   fetch(urlFiveDay)
//     .then(function (response) {
//       if (response.ok) {
//         response.json()
//         .then(function (data){
//           console.log(data);
//           displayFiveDay(data);
//         })
//       }
//     })
//   };    

// var cityName = document.querySelector("button");

// Get date at top of screen
// const today = moment().format("LL");
// $("#currentDay").append("Today is: " + today);

//event listener
// document.getElementById("button-addon2").addEventListener("click", search);


  // var urlFiveDay = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

  // fetch(urlFiveDay)
  //   .then((res) => res.json())
  //   .then(function (data) {
  //     console.log(data);
  //     // var latitude = data.coord.lat;
  //     // var longitude = data.coord.lon;
  //   });

  // function getWeather(city)

//   function search(cityName, latitude, longitude) {
//     console.log("here");
  
  
//     var urlLocation = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;
//     fetch(urlLocation)
//       .then((res) => res.json())
//       .then(function (data) {
//         console.log(data.coord);
//         var latitude = data.coord.latitude;
//         var longitude = data.coord.lon;
//         // var uvIndex = data.current.uvi;
  


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

// cityFormEl.addEventListener("submit", formSubmitHandler);

