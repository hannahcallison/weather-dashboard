var searchBar = $("#search")
var form = $("form")
var searchHistory = $("#searchHistory")
var displayCurrent = $("#displayCurrent")
var fiveDay = $("#fiveDay")
var apiKey = "f448b616b40e952f739353b6dc35dd99"

// Current Weather Display//
$("form").submit(function(event){
  event.preventDefault()
  displayCurrent.text("")
  fiveDay.text("")
  var city = $("input").val()
  currentWeatherUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&Appid=" + apiKey + "&units=imperial";
  function getApi(){
    fetch(currentWeatherUrl)
    .then(function(response){
      return response.json()
    })
    .then(function(data){
      var date = moment().format("MMM Do, YYYY")
      cityDisplay = displayCurrent.append("<h1>" + data.name +":" + " "+ date + "<h1>")
      icon = displayCurrent.append(`<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}.png">`);
      currentTemp = displayCurrent.append("<p>" + "Current Temp: " + data.main.temp + "°F" + "</p>");
      currentWind = displayCurrent.append("<p>" + "Wind: " + data.wind.speed + " MPH"+ "</p>");
      currentHumidity = displayCurrent.append("<p>" + "Humidity: " + data.main.humidity + "%"+ "</p>");
      var lat = data.coord.lat
      var lon = data.coord.lon
      var UVIndexUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&appid=" + apiKey + "&units=imperial";
      fetch(UVIndexUrl)
      .then(function(response){
        return response.json()
      })
      .then(function(data){
        currentUV = displayCurrent.append("<p>" + "UV Index: " + data.current.uvi + "<p>")
      })

      // Five Day//
      var fiveDayUrl = "https://api.openweathermap.org/data/2.5/forecast?lat="+ lat + "&lon=" + lon + "&appid=" + apiKey + "&units=imperial"
      fetch(fiveDayUrl)
      .then(function(response){
        return response.json()
      })
      .then(function(data){
        console.log(data)

        // Day 1//
        day1 = fiveDay.append("<p>" + data.list[1].dt_text + "<p>")
        day1Temp = fiveDay.append("<p>" + "Temp: " + data.list[1].main.temp + "°F" + "<p>")
        day1Wind = fiveDay.append("<p>" + "Wind: " + data.list[1].wind.speed + " MPH" + "<p>")
        day1Humidity = fiveDay.append("<p>"+ "Humidity: " + data.list[1].main.humidity + "%" + "<p>")

        // Day 2//
        day2 = fiveDay.append("<p>" + data.list[2].dt_text + "<p>")
        day2Temp = fiveDay.append("<p>" + "Temp: " + data.list[2].main.temp + "°F" + "<p>")
        day2Wind = fiveDay.append("<p>" + "Wind: " + data.list[2].wind.speed + " MPH" + "<p>")
        day2Humidity = fiveDay.append("<p>"+ "Humidity: " + data.list[2].main.humidity + "%" + "<p>")

        // Day 3 //
        day3 = fiveDay.append("<p>" + data.list[3].dt_text + "<p>")
        day3Temp = fiveDay.append("<p>" + "Temp: " + data.list[3].main.temp + "°F" + "<p>")
        day3Wind = fiveDay.append("<p>" + "Wind: " + data.list[3].wind.speed + " MPH" + "<p>")
        day3Humidity = fiveDay.append("<p>"+ "Humidity: " + data.list[3].main.humidity + "%" + "<p>")

        // Day 4 //
        day4 = fiveDay.append("<p>" + data.list[4].dt_text + "<p>")
        day4Temp = fiveDay.append("<p>" + "Temp: " + data.list[4].main.temp + "°F" + "<p>")
        day4Wind = fiveDay.append("<p>" + "Wind: " + data.list[4].wind.speed + " MPH" + "<p>")
        day4Humidity = fiveDay.append("<p>"+ "Humidity: " + data.list[4].main.humidity + "%" + "<p>")

        // Day 5 // 
        day5 = fiveDay.append("<p>" + data.list[5].dt_text + "<p>")
        day5Temp = fiveDay.append("<p>" + "Temp: " + data.list[5].main.temp + "°F" + "<p>")
        day5Wind = fiveDay.append("<p>" + "Wind: " + data.list[5].wind.speed + " MPH" + "<p>")
        day5Humidity = fiveDay.append("<p>"+ "Humidity: " + data.list[5].main.humidity + "%" + "<p>")
      })
    })
  }
  getApi()
})




// Five Day//



// // Forloop for persisting the data onto HMTL page
// for (var i = 0; i < localStorage.length; i++) {

//   var city = localStorage.getItem(i);
//   // console.log(localStorage.getItem("City"));
//   var cityName = $(".list-group").addClass("list-group-item");

//   cityName.append("<li>" + city + "</li>");
// }






