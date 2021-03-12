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
    let cityWeatherItem = `
                            <h3><u>Today's Weather in  ${weatherInCity.name}</u></h3>
                            Current Temp:&nbsp;&nbsp;${weatherInCity.main.temp} &#176;F
                            <br>
                            Feels Like (After Wind Chill/Heat Index):&nbsp;&nbsp;${weatherInCity.main.feels_like} &#176;F<br>
                            Humidity:&nbsp;&nbsp;${weatherInCity.main.humidity}%<br>
                            Today's Low:&nbsp;&nbsp;${weatherInCity.main.temp_min} &#176;F<br>
                            Today's High:&nbsp;&nbsp;${weatherInCity.main.temp_max} &#176F                            `
    displayWeatherUL.innerHTML = cityWeatherItem
    zipTextBox.value = ""
    cityTextBox.value = ""
    stateDropdown.value = ""
}


//Display current weather using geolocation

function geoFindMe() {

    function success(position) {
        const lat = position.coords.latitude;
        const long = position.coords.longitude;

        fetch(`https://api.openweathermap.org/data/2.5/find?lat=${lat}&lon=${long}&cnt=1&units=imperial&appid=829ea0216deb875e615d6f69f6226188`)
            .then((response) => {
                console.log(response)
                return response.json()
            })
            .then((weather) => {
                console.log(weather)
                weather = weather.list[0]
                displayCurrentWeather(weather)
            })
    }

    function error() {
        console.log('Location is not available.')
    }

    if (!navigator.geolocation) {
        console.log('Location is not supported by your browser.')
    } else {
        navigator.geolocation.getCurrentPosition(success, error);
    }

}

geoFindMe()
