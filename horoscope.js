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
            displayHoroscope(horoscopeAPI)
        })
   

}) 




function displayHoroscope(horoscopeAPI) {
    
    let horoscopeItems = `<h3 id=horoscopeForToday>
                           <b>Your Horoscope for Today:<b> 
                           <br>  
                          Date:  ${horoscopeAPI.current_date} 
                          <br>
                          Note to self: ${horoscopeAPI.description} 
                          <br>
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