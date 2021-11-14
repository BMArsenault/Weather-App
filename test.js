          //______________Day 1
        // console.log(data.list[0].dt_txt);
        // console.log(data.list[0].weather);
        // console.log(data.list[0].main.temp);
        // console.log(data.list[0].main.humidity);
        // console.log(data.list[0].wind.speed);
        //   //_______________Day 2
        // console.log(data.list[8].dt_txt);
        // console.log(data.list[8].weather);
        // console.log(data.list[8].main.temp);
        // console.log(data.list[8].main.humidity);
        // console.log(data.list[8].wind.speed);
        //   //_______________Day 3
        // console.log(data.list[16].dt_txt);
        // console.log(data.list[16].weather);
        // console.log(data.list[16].main.temp);
        // console.log(data.list[16].main.humidity);
        // console.log(data.list[16].wind.speed);
        //   //_______________Day 4
        // console.log(data.list[24].dt_txt);
        // console.log(data.list[24].weather);
        // console.log(data.list[24].main.temp);
        // console.log(data.list[24].main.humidity);
        // console.log(data.list[24].wind.speed);
        //   //_______________Day 5
        // console.log(data.list[32].dt_txt);
        // console.log(data.list[32].weather);
        // console.log(data.list[32].main.temp);
        // console.log(data.list[32].main.humidity);
        // console.log(data.list[32].wind.speed);
          // var latitude2= data.city.coord.lat;
          // var longitude2 = data.city.coord.lon;
//         });
// };

// get the input first
// search("Phoenix");

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



// Get date at top of screen
// const today = moment().format("LL");
// $("#currentDay").append("Today is: " + today);

//event listener
// document.getElementById("button-addon2").addEventListener("click", search);