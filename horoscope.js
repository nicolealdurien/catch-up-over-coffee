// https://aztro.sameerkumar.website?sign=leo&day=today
// params your sign the which day: today,yesterday or tomorrow


let horoscopeChose = document.getElementById("Horoscopes")
let dayChose = document.getElementById("day")

let horoscopebtn = document.getElementById("Horoscopebtn")

let showHoroscope = document.getElementById("showHoroscope")

horoscopebtn.addEventListener("click" , function() {
    let horoscopePicked = horoscopeChose.value
    let dayPicked = dayChose.value
    let horoscopeURL = `https://aztro.sameerkumar.website?sign=${horoscopePicked}&day=${dayPicked}`
    fetch(horoscopeURL, {
            method: "POST"
        }).then(response => response.json())
        .then(horoscopeAPI => {
            console.log(horoscopeAPI)
            displayHoroscope(horoscopeAPI, horoscopePicked)
        })
   

}) 




function displayHoroscope(horoscopeAPI, sign) {
    
    let horoscopeItems = `<h3 id=horoscopeForToday>
                           <u><b>Your Horoscope For ${horoscopeAPI.current_date}<b></u>
                          <br>
                          <i>${horoscopeAPI.description}</i>
                          <br><br>
                          Mood:  ${horoscopeAPI.mood}
                          <br>
                          Lucky Color:  ${horoscopeAPI.color}
                          <br>
                          Lucky Number: ${horoscopeAPI.lucky_number}
                          <br>
                          Lucky Time:   ${horoscopeAPI.lucky_time}
                          </h3>
    
    `

    showHoroscope.innerHTML = horoscopeItems
}