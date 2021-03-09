// OpenWeatherMap:
// Site: https://openweathermap.org/api
// API key: e9b850f32e29330be12e3698eeed5a05
// ZIP code API call (works for USA as a default if country is not specified):

// api.openweathermap.org/data/2.5/weather?zip={zip code},{country code}&appid={API key}

let btnGetWeather = document.getElementById("btnGetWeather")
let displayWeatherUL = document.getElementById("displayWeatherUL")
let getWeatherTextBox = document.getElementById("getWeatherTextBox")

btnGetWeather.addEventListener("click", function() {
    
    let zipcodeEntered = getWeatherTextBox.value
    fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zipcodeEntered}&appid=e9b850f32e29330be12e3698eeed5a05&units=imperial`)
            .then((response) => {
                return response.json()
            }).then((weatherInCity) => {
                  console.log(weatherInCity)
                  displayCityWeather(weatherInCity)
            })
    })

    function displayCityWeather(weatherInCity) {
        let zipcodeEntered = getWeatherTextBox.value

        let cityWeatherItem = `
                                <h2>Today's Weather in  ${weatherInCity.name}:</h2>
                                Current Temp - ${weatherInCity.main.temp} &#176;F
                                <br><br>
                                Feels Like (After Wind Chill/Heat Index) - ${weatherInCity.main.feels_like} &#176;F<br><br>
                                Humidity: ${weatherInCity.main.humidity}%<br><br>
                                Today's Low - ${weatherInCity.main.temp_min} &#176;F<br><br>
                                Today's High - ${weatherInCity.main.temp_max} &#176F                            `
        displayWeatherUL.innerHTML = cityWeatherItem
        getWeatherTextBox.value = ""


    }

