// Global Variables//
var searchBar = $("#search")
var form = $("form")
var searchHistory = $("#searchHistory")
var displayCurrent = $("#displayCurrent")
var fiveDay = $("#fiveDayHeader")
var cardOne = $("#cardOne")
var cardTwo = $("#cardTwo")
var cardThree = $("#cardThree")
var cardFour = $("#cardFour")
var cardFive = $("#cardFive")
var apiKey = "f448b616b40e952f739353b6dc35dd99"

// Current Weather Display//
$("form").submit(function(event){
  event.preventDefault()
  // Resetting text in divs//
  displayCurrent.text("")
  cardOne.text("")
  cardTwo.text("")
  cardThree.text("")
  cardFour.text("")
  cardFive.text("")
  // Changing display to block//
  displayCurrent.css("display", "block")
  fiveDay.css("display", "block")
  cardOne.css("display", "block")
  cardTwo.css("display", "block")
  cardThree.css("display", "block")
  cardFour.css("display", "block")
  cardFive.css("display", "block")
  var city = $("input").val()
  currentWeatherUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&Appid=" + apiKey + "&units=imperial";
  function getApi(){
    fetch(currentWeatherUrl)
    .then(function(response){
      return response.json()
    })
    .then(function(data){
      // Adding date to current weather data//
      var date = moment().format("MMM Do, YYYY")
      cityDisplay = displayCurrent.append("<h1>" + data.name +":" + " "+ date + "<h1>")
      // Adding icon from open weather to 'current' div//
      icon = displayCurrent.append(`<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}.png">`);
      // Adding current Temp from open weather to 'current' div//
      currentTemp = displayCurrent.append("<p>" + "Current Temp: " + data.main.temp + "°F" + "</p>");
      // Adding current Wind from open weather to 'current' div//
      currentWind = displayCurrent.append("<p>" + "Wind: " + data.wind.speed + " MPH"+ "</p>");
      // Adding current humidity from open weather to 'current' div//
      currentHumidity = displayCurrent.append("<p>" + "Humidity: " + data.main.humidity + "%"+ "</p>");
      // Retrieving lat and lon for UV Index data from open weather//
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
        day1 = cardOne.append("<p>" + moment().add(1, "d").format("MMM Do, YYYY") + "<p>")
        cardOne.append(`<img src="https://openweathermap.org/img/wn/${data.list[1].weather[0].icon}.png">`)
        day1Temp = cardOne.append("<p>" + "Temp: " + data.list[1].main.temp + "°F" + "<p>")
        day1Wind = cardOne.append("<p>" + "Wind: " + data.list[1].wind.speed + " MPH" + "<p>")
        day1Humidity = cardOne.append("<p>"+ "Humidity: " + data.list[1].main.humidity + "%" + "<p>")

        // Day 2//
        day2 = cardTwo.append("<p>" + moment().add(2, "d").format("MMM Do, YYYY") + "<p>")
        cardTwo.append(`<img src="https://openweathermap.org/img/wn/${data.list[2].weather[0].icon}.png">`)
        day2Temp = cardTwo.append("<p>" + "Temp: " + data.list[2].main.temp + "°F" + "<p>")
        day2Wind = cardTwo.append("<p>" + "Wind: " + data.list[2].wind.speed + " MPH" + "<p>")
        day2Humidity = cardTwo.append("<p>"+ "Humidity: " + data.list[2].main.humidity + "%" + "<p>")

        // Day 3 //
        day3 = cardThree.append("<p>" + moment().add(3, "d").format("MMM Do, YYYY") + "<p>")
        cardThree.append(`<img src="https://openweathermap.org/img/wn/${data.list[3].weather[0].icon}.png">`)
        day3Temp = cardThree.append("<p>" + "Temp: " + data.list[3].main.temp + "°F" + "<p>")
        day3Wind = cardThree.append("<p>" + "Wind: " + data.list[3].wind.speed + " MPH" + "<p>")
        day3Humidity = cardThree.append("<p>"+ "Humidity: " + data.list[3].main.humidity + "%" + "<p>")

        // Day 4 //
        day4 = cardFour.append("<p>" + moment().add(4, "d").format("MMM Do, YYYY") + "<p>")
        cardFour.append(`<img src="https://openweathermap.org/img/wn/${data.list[4].weather[0].icon}.png">`)
        day4Temp = cardFour.append("<p>" + "Temp: " + data.list[4].main.temp + "°F" + "<p>")
        day4Wind = cardFour.append("<p>" + "Wind: " + data.list[4].wind.speed + " MPH" + "<p>")
        day4Humidity = cardFour.append("<p>"+ "Humidity: " + data.list[4].main.humidity + "%" + "<p>")

        // Day 5 // 
        day5 = cardFive.append("<p>" + moment().add(5, "d").format("MMM Do, YYYY") + "<p>")
        cardFive.append(`<img src="https://openweathermap.org/img/wn/${data.list[5].weather[0].icon}.png">`)
        day5Temp = cardFive.append("<p>" + "Temp: " + data.list[5].main.temp + "°F" + "<p>")
        day5Wind = cardFive.append("<p>" + "Wind: " + data.list[5].wind.speed + " MPH" + "<p>")
        day5Humidity = cardFive.append("<p>"+ "Humidity: " + data.list[5].main.humidity + "%" + "<p>")
      })
    })
  }
  getApi()
})




// Help: Local Storage List//

//   var cityName = $(".list-group").addClass("list-group-item");

//   cityName.append("<li>" + city + "</li>");
// } then if they click the button is runs the same function//






