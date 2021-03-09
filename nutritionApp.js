let nutritionFactsUL = document.getElementById("nutritionFactsUL")


// Display nutrition facts on page load.
function displayNutrition() {
for (let index= 0; index < nutritionFacts.length; index++) {
        let nutrition = nutritionFacts[index]
        const nutritionItem = `
                                <li id="nutritionItems">
                                <img src="${nutrition.image}" class="nutritionImg" width="200px" height="200px" /><br><br>
                                <b>Fact:</b>  <i>${nutrition.fact}</i><br><br>
                                </li>
                                `
    nutritionFactsUL.insertAdjacentHTML('beforeend', nutritionItem)
    }
}

displayNutrition()
