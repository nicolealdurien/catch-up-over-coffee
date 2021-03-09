



let affirmationsDisplay = document.getElementById("affirmationsDisplay")


function displayAffirmations() {
    for(let index= 0; index < affirmationsList.length; index++) {
        let affirmations = affirmationsList[index]
        console.log(affirmations.affirmation)
        let affirmationsItem= `
                              <h2 id="affirmationsItems">
                             <i> ${affirmations.affirmation} <i>
                              </h2>
        
        
        `
        affirmationsDisplayUL.insertAdjacentHTML("beforeend", affirmationsItem)
    }


}

displayAffirmations()