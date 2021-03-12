# Catch Up Over Coffee

* **Live link:**
https://catch-up-over-coffee.surge.sh

* **Purpose of the app:** <br/><br/>
 This app was created to be a one-stop website for a busy individual to start their day. A user can catch up on news, see active stock market prices, check out local weather, and view their horoscope while enjoying a great cup of coffee. They are able to view daily affirmations, suggested yoga exercises, nutrition tips, and nutrition quiz questions. The app encourages a seamless transition, allowing the user to quickly and easily catch up on any new developments that occurred while they were sleeping, thus helping them to have a prepared and productive day!
<br/>
<br/>
* **Description:** <br/><br/>
    Home page: Displays daily affirmation and directory for all subpages including fitness, nutrition, news, horoscopes, weather, and stocks.

    News: Consumes [https://mediastack.com/documentation/](MediaStack API).<br/>
    User is presented with general news stories on initial page loa; each story includes title, URL, news source, and story description.<br/>
    Additional news search options/filtering include:<br/>
    Search by category (e.g. business news)<br/>
    Search by keyword (e.g. "covid")<br/>
    Search by news source (e.g., CNN)<br/>

    Weather: The app utilizes the OpenWeatherMap API to present the user with current local weather based on geolocation. Weather search options by ZIP code or by city/state are offered for those who do not have location services enabled. The weather page also links to the National Weather Service radar map. The information that is displayed includes the current temperature, the day's low temperature, the expected high temperature, the current humidity, and the current "feels like" temperature after accounting for heat index/wind chill.

    Stocks: The app utilizes the Finnhub API to present the user with several pre-set stock quotes from well-known companies and also allow them to search for custom stock quotes. The quotes shown are always the most up-to-date value from the active market. If a user does not know their stock symbol, the page includes functionality to let them search by company name and get the stock symbol. Once a custom quote is displayed, the display includes a button to show further details about the company, including the company's logo, industry category and website. 

    Horoscopes: The app utilizes the Aztro API to present the horoscopes with users. Their is a drop menu to choose your sign and for which day you want to get your horoscope details. A dispaly of each character that depicts the signs is shown on the page. The information that is displayed includes: discription of your day , mood , lucky color , lucky time and lucky number. 

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
HTML, Javascript, CSS

* **Tools used:**
APIs, VScode (editor), Surge (deployment website)

* **Challenges/Solutions:**
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
Fitness API: https://github.com/rebeccaestes/yoga_api
Horoscope API: https://aztro.sameerkumar.website
News API: https://mediastack.com/
Stock API: https://finnhub.io/
Weather API: https://openweathermap.org/api

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


* **Developers:**
[Nicole Aldurien](https://github.com/nicolealdurien), [Summer Johnson](https://github.com/SJ-CODES), [Neil Shah](https://github.com/neilshah101), [Mike Warren](https://github.com/mikewarren02)

<br>
<br>


![](https://user-images.githubusercontent.com/71364408/110894177-66374b00-82c5-11eb-90ec-28a81e72a089.png)

![](https://user-images.githubusercontent.com/71364408/110894165-60da0080-82c5-11eb-86a5-f0cd5357d133.png)

![](https://user-images.githubusercontent.com/71364408/110894168-633c5a80-82c5-11eb-8002-75c4fa0996f2.png)

![](https://user-images.githubusercontent.com/71364408/110894171-65061e00-82c5-11eb-8859-b99c150e625f.png)


