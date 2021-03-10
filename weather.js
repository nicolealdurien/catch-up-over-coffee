// OpenWeatherMap:
// Site: https://openweathermap.org/api
// API key: e9b850f32e29330be12e3698eeed5a05
// ZIP code API call (works for USA as a default if country is not specified):

// api.openweathermap.org/data/2.5/weather?zip={zip code},{country code}&appid={API key}

let zipTextBox = document.getElementById("zipTextBox")
let btnZipWeather = document.getElementById("btnZipWeather")
let displayWeatherUL = document.getElementById("displayWeatherUL")
let cityTextBox = document.getElementById("cityTextBox")
let stateDropdown = document.getElementById("stateDropdown")
let btnCityStateWeather = document.getElementById("btnCityStateWeather")


// Get current weather by ZIP code
btnZipWeather.addEventListener("click", function() {

    let zipCode = zipTextBox.value
    fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&appid=e9b850f32e29330be12e3698eeed5a05&units=imperial`)
        .then((response) => {
            return response.json()
        }).then((result) => {
            displayCurrentWeather(result)
        })
})


//Get current weather by city/state selection
btnCityStateWeather.addEventListener("click", function() {
    let city = cityTextBox.value
    let chosenState = stateDropdown.options[stateDropdown.selectedIndex]
    let state = chosenState.value
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${state}&appid=e9b850f32e29330be12e3698eeed5a05`)
        .then((response) => {
            return response.json()
        }).then((result) => {
            displayCurrentWeather(result)
        })
})


// Display current weather after retrieval
function displayCurrentWeather(weatherInCity) {
    let zipCode = zipTextBox.value
    let cityWeatherItem = `
                            <h2>Today's Weather in  ${weatherInCity.name}:</h2>
                            Current Temp - ${weatherInCity.main.temp} &#176;F
                            <br><br>
                            Feels Like (After Wind Chill/Heat Index) - ${weatherInCity.main.feels_like} &#176;F<br><br>
                            Humidity - ${weatherInCity.main.humidity}%<br><br>
                            Today's Low - ${weatherInCity.main.temp_min} &#176;F<br><br>
                            Today's High - ${weatherInCity.main.temp_max} &#176F                            `
    displayWeatherUL.innerHTML = cityWeatherItem
    zipTextBox.value = ""
    cityTextBox.value = ""
    stateDropdown.value = ""
}


//Display current wether using Geolocation

function geoFindMe() {


    function success(position) {
        const lat = position.coords.latitude;
        const long = position.coords.longitude;
        console.log(lat)
        console.log(long)

        fetch(`https://api.openweathermap.org/data/2.5/find?lat=${lat}&lon=${long}&cnt=1&units=imperial&appid=829ea0216deb875e615d6f69f6226188`)
            .then((response) => {
                return response.json()
            })
            .then((weather) => {
                weather = weather.list[0]
                weathercurrentdiv = `
                <h2>Today's Weather in  ${weather.name}:</h2>
                            Current Temp - ${weather.main.temp} &#176;F
                            <br><br>
                            Feels Like (After Wind Chill/Heat Index) - ${weather.main.feels_like} &#176;F<br><br>
                            Humidity - ${weather.main.humidity}%<br><br>
                            Today's Low - ${weather.main.temp_min} &#176;F<br><br>
                            Today's High - ${weather.main.temp_max} &#176F
                `
                displayWeatherUL.innerHTML = weathercurrentdiv


            })

    }

    function error() {
        console.log('location is not available')
    }

    if (!navigator.geolocation) {
        console.log('location is not supported by your browser')
    } else {
        navigator.geolocation.getCurrentPosition(success, error);
    }

}



geoFindMe()