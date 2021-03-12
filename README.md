# Catch Up Over Coffee
* **Purpose of the app:** 
 This app was created to be a one-stop website for a busy individual to start their day. A user can catch up on news, see active stock market prices, check out      local weather, and view their horoscope while enjoying a great cup of coffee. They are able to view daily affirmations, suggested yoga exercises, nutrition tips, and nutrition quiz questions. The app encourages a seemless transition into what information was updated while sleeping and helps the user have a prepared and productive day!

* **Description:** 

Home page: Displays daily affirmation and all pages including fitness, nutrition , news, horoscopes, weather, and stocks.

News: The app utilizes the MediaStack API to present the user with general news headlines and allow them to search for news stories by category (e.g. business news), keyword (e.g. "covid"), or news source (e.g., CNN).Displays current news events happening world-wide and keeps the user updated with most recent events. The information that is displayed includes: title , description and source.

Weather: The app utilizes the OpenWeatherMap API to present the user with current local weather based on geolocation. Weather search options by ZIP code or by city/state are offered for those who do not have location services enabled. The weather page also links to the National Weather Service radar map. The information that is displayed includes todays: temperature , low temperature , high temperature , chill/heat index and humidity.

Stocks: The app utilizes a Stock API that shows the stock name , symbol and current price. The price always shows the most up to date value from the active market.At the top of the page is a default heading that shows the top stocks and their active price. If a user does not know their stock symbol they can input what company they want to search and recieve the stock symbol. They is also a option to get further detail of the stock if more than just the price is needed.The extended description feature provides the industry and website for further research.

Horoscopes: The app utilizes a Aztro API to present the horoscopes with users. Their is a drop menu to choose your sign and for which day you want to get your horoscope details. A dispaly of each character that depicts the signs is shown on the page. The information that is displayed includes: discription of your day , mood , lucky color , lucky time and lucky number. 

Affirmations: The app utilizes a created dictionary to present the affirmations on the home screen. A interval timer is used to show a new affirmation every 12 seconds to the user.

Fitness: The app utilizes Rebecca Estes yoga API found on github with supplemented descriptions added to it. The fitness page demostrates the name and sankrit name of the yoga poses. The image and descritption which explains how to achive the pose is displayed. Their is a button incoprorated that allows you to click and get another pose thus iterating through the API. A fitness fact is displayed at random above pose title and a time interval is set to show a new one every 12 seconds.

Nutrition: The app utilizes a created dictionary to present the nutiriton fact with a photo of the relevant fact topic. Their is a 'Test your Knowledge'section that is a mini quiz for user to take on a topic. They can take a few seconds to come up with an answer then click get answer to see how correct they were. The answer includes a detailed explanation of why it is correct to further enhance the users knowledge.

* **Features:**
Geolocation tracking
Stock quote displaying market in real time
Daily affirmations more than 20 examples
Yoga pose excercises more than 30 examples
Horoscope readings updated daily 
Weather tracking using zipcode or city name in real time 
Nutrition facts and quizes that provide nutrition education
Provides updates on current news events happening internaitonally

* **Languages Used:**
HTML, Javascript , CSS

* **Tools used:**
APIs, bootstrap, VScode (editor), surge (deployment website)

* **Challanges/Solutions:**
Being able to use News API and geotracking location without security conflicts. 
---Solution: Copied direct paths and used links for accurate navigating between webpages.

Accessing API keys that gives limited access on how many hits the website can have.
---Solution: Memebers created their own API keys to use incase of limitation reached for day.

Not finding a suitable API key for 2 of our areas.
---Solution: Created our own array and populated with informaiton to use in webpage.

Being able to make site mobile friendly and features of application viewable on all devices.

---solution: adjusted padding to display evenly,saved images locally so they can be seen on mobile devices 
and used media query to make mobile friendly.

* **API Reference:**
Horoscope API: https://aztro.sameerkumar.website?sign=leo&day=today
Weather API: https://openweathermap.org/api
Fitness API: https://github.com/rebeccaestes/yoga_api
Stock API: https://finnhub.io/
News API:https://mediastack.com/

* **Installation:**
Used VS code as code editor can downlaod here: https://code.visualstudio.com/
Download and create an account to start editing.

Reference Bootstrap info here: https://github.com/twbs/bootstrap

Used surge to deploy website: https://surge.sh/
First, ensure you have a recent version of Node.js download here: https://nodejs.org/en/
Used recommended for most users option.

Then, install Surge using npm by running the following command: npm install --global surge. 
You may need to preface this command with sudo.
Then, run surge from within any directory folder, to publish that directory onto the web.

* **Live link:**
https://catch-up-over-coffee.surge.sh

* **Developers:**
Nicole Aldurien, Summer Johnson,  Neil Shah, Mike Warren


![](https://github.com/nicolealdurien/catch-up-over-coffee/blob/main/images/screenshot.png?raw=true)

![](https://user-images.githubusercontent.com/71364408/110894150-5a4b8900-82c5-11eb-9e82-f0fdd932bab6.png)

![](https://user-images.githubusercontent.com/71364408/110894165-60da0080-82c5-11eb-86a5-f0cd5357d133.png)

![](https://user-images.githubusercontent.com/71364408/110894168-633c5a80-82c5-11eb-8002-75c4fa0996f2.png)

![](https://user-images.githubusercontent.com/71364408/110894171-65061e00-82c5-11eb-8859-b99c150e625f.png)

![](https://user-images.githubusercontent.com/71364408/110894177-66374b00-82c5-11eb-90ec-28a81e72a089.png)

