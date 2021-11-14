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