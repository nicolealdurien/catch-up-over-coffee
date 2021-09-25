const affirmationsDisplay = document.getElementById("affirmationsDisplayUL")

const displayAffirmation = () => {    
    const affirmations = affirmationsList[Math.floor(Math.random() * affirmationsList.length)]
    
    const affirmationsItem = `
                            <h2 id="affirmationsItems">
                            <strong>-Affirmation-</strong><br />
                            <em>${affirmations.affirmation}</em> 
                            </h2>
                            `
    affirmationsDisplay.innerHTML = affirmationsItem
}

displayAffirmation()

const refreshAffirmationDisplay = () => {
    window.setInterval(function() { displayAffirmation() }, 12000)
}

refreshAffirmationDisplay()