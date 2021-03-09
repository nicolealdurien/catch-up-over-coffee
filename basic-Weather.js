// OpenWeatherMap:
// Site: https://openweathermap.org/api
// API key: e9b850f32e29330be12e3698eeed5a05
// ZIP code API call (works for USA as a default if country is not specified):

// api.openweathermap.org/data/2.5/weather?zip={zip code},{country code}&appid={API key}

let zipcodeCityWeatherBtn = document.getElementById("zipcodeCityWeatherBtn")
let displayWeather = document.getElementById("displayWeather")
let getWeatherTextBox = document.getElementById("getWeatherTextBox")

zipcodeCityWeatherBtn.addEventListener("click", function() {
    
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
        
        let cityWeatherItems = `<h2 id="weatherDisplayOnPage">  
                                         
                                        <i> City: <i>
                                         ${weatherInCity.name}    
                                        <br>
                                        Low: ${weatherInCity.main.temp_min}
                                        <br>
                                        High: ${weatherInCity.main.temp_max}
                                        <br>
                                        Current: ${weatherInCity.main.temp}
                                        <br>
                                        Humidity: ${weatherInCity.main.humidity}
                                        <br>
                                        Currently Feels likes: ${weatherInCity.main.feels_like} 

                                </h2>
                        
        
        `

        displayWeather.innerHTML = cityWeatherItems
       

    }

