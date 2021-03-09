const allNewsUL = document.getElementById("allNewsUL")
const btnSearchSource = document.getElementById("btnSearchSource")
const btnSearchKeyword = document.getElementById("btnSearchKeyword")
const btnSearchCategory = document.getElementById("btnSearchCategory")

// Display basic news on page load
function getNews() {
fetch('http://api.mediastack.com/v1/news?access_key=7d6eba9ff9a6bfe61a590229bf6b92a2&languages=en&countries=us,au,gb,in,nz,ie')
    .then(response => {
        return response.json()      
    }).then(result => {
        displayNews(result)
    }).catch(error => {
        console.log(error);
    });
}   

getNews()


function displayNews(stories) {
    allNewsUL.innerHTML = ""
    for (let index = 0; index < stories.data.length; index++) {
        let story = stories.data[index]
        let storyItem = `
                        <li>
                            <b><a href = "${story.url}" class="news-link">${story.title}</a></b><br>
                            <b>Source: <a href = "${story.url}" class="news-link">${nullCheck(story.source)}</a></b><br>
                            <i>${equalityCheck(story.title, story.description)}</i>
                         </li>
                        <br><br>
                        `
        allNewsUL.insertAdjacentHTML('beforeend', storyItem)      
        }
    searchSourceTextBox.value = ""
    searchKeywordTextBox.value = ""

}


// If entry in JSON is null for a certain field (say, "Author: null"), data is removed from display)
function nullCheck (label) {
    if (label == null) {
        return label = ""
    }
    else {
        return label
    }
}


// If description just reiterates the title exactly, the description is not shown.
function equalityCheck(title, description) {
    strTitle = String(title)
    strDescription = String(description)
    if (strTitle == strDescription) {
        return description = ""
    }
    else {
        string = "Description: " + strDescription
        return string
    }
}


// Search by sources
btnSearchSource.addEventListener("click", function() {
    const searchSourceTextBox = document.getElementById("searchSourceTextBox")
    const searchSource = searchSourceTextBox.value
    fetch(`http://api.mediastack.com/v1/news?access_key=7d6eba9ff9a6bfe61a590229bf6b92a2&languages=en&sources=${searchSource}`)
    .then(response => {
        return response.json()
    }).then(result => {
        displayNews(result)        
    })
  })


// Search by keyword
btnSearchKeyword.addEventListener("click", function() {
    const searchKeywordTextBox = document.getElementById("searchKeywordTextBox")
    const searchKeyword = searchKeywordTextBox.value
    fetch(`http://api.mediastack.com/v1/news?access_key=7d6eba9ff9a6bfe61a590229bf6b92a2&languages=en&keywords=${searchKeyword}`)
    .then(response => {
        return response.json()
    }).then(result => {
        displayNews(result)        
    })
  }) 
    


// Search by category/topic
const dropdownSelectCategory = document.getElementById("dropdownSelectCategory")

// Searches when dropdown option is selected
dropdownSelectCategory.addEventListener("change", function () {
  let chosenCategory = dropdownSelectCategory.options[dropdownSelectCategory.selectedIndex]
  let passCategoryToFetch = chosenCategory.value
  fetch(`http://api.mediastack.com/v1/news?access_key=7d6eba9ff9a6bfe61a590229bf6b92a2&languages=en&categories=${passCategoryToFetch}`)
  .then(response => {
      return response.json()
  }).then(result => {
      displayNews(result)        
  })
}) 

// Can go back to previously-chosen dropdown option with just the button click
btnSearchCategory.addEventListener("click", function() {
    let chosenCategory = dropdownSelectCategory.options[dropdownSelectCategory.selectedIndex]
    let passCategoryToFetch = chosenCategory.value
    fetch(`http://api.mediastack.com/v1/news?access_key=7d6eba9ff9a6bfe61a590229bf6b92a2&languages=en&categories=${passCategoryToFetch}`)
    .then(response => {
        return response.json()
    }).then(result => {
        displayNews(result)        
    })
  }) 