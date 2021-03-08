let nutritionFactsUL = document.getElementById("nutritionFacts")

let displayNutritionFactsBtn = document.getElementById("displayNutritionFactsBtn")

displayNutritionFactsBtn.addEventListener("click" , function(){
    displayFacts(nutritionFacts)
})



function displayFacts (nutritionFacts){
    
    for(let index= 0; index < nutritionFacts.length; index++) {
    let nutrition = nutritionFacts[index]

    const nutritionItems = `
                        <li id="nutrition-Items>
                           ${nutrition.one}
                           ${nutrition.two}
                           ${nutrition.three}
                           ${nutrition.four}
                           ${nutrition.five}
                           ${nutrition.six}
                           ${nutrition.seven}
                           ${nutrition.eight}
                           ${nutrition.nine}
                           ${nutrition.ten}
                           ${nutrition.eleven}
                        </li>
          
    
    `
                nutritionFactsUL.innerHTML = nutritionItems

    }
}

displayFacts(nutritionFacts)