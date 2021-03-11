



let affirmationsDisplay = document.getElementById("affirmationsDisplayUL")


function displayAffirmations() {
    
        let affirmations = affirmationsList[Math.floor(Math.random() * affirmationsList.length)]
        
        let affirmationsItem= `
                                <h2 id="affirmationsItems">
                                <b>-Affirmation-</b>
                                <br>
                                <i>${affirmations.affirmation}</i> 
                                </h2>
                                `
        affirmationsDisplay.innerHTML = affirmationsItem
}

displayAffirmations()

function refreshAffirmationsDisplay() {
    let intervalid = window.setInterval(function() {
        displayAffirmations()
    }, 120000)
}

refreshAffirmationsDisplay()