const allNewsUL = document.getElementById("allNewsUL")
const btnSearchSource = document.getElementById("btnSearchSource")
const btnSearchKeyword = document.getElementById("btnSearchKeyword")
const btnSearchCategory = document.getElementById("btnSearchCategory")

// Retrieve basic news object on page load and passes it to de-duplicator.
function getNews() {
fetch('http://api.mediastack.com/v1/news?access_key=f29a2265301f2134afcc67c2b548beca&countries=us,gb,in,au,ie,nz&language=en')
    .then(response => {
        return response.json()      
    }).then(result => {
        removeDupes(result)
    }).catch(error => {
        console.log(error);
    });
}   

getNews()


// Removes duplicate stories from response object, then passes to display function
function removeDupes(stories) {
    let deDupedTitles = []
    let deDupedStories = []
    for (let index = 0; index < stories.data.length; index++) {
        let story = stories.data[index]
        if (deDupedTitles.includes(story.title)) {
            continue
        }
        else {
            deDupedTitles.push(story.title)
            deDupedStories.push(story)
        }
    displayNews(deDupedStories)
    }
}

// Displays news when called by other functions.
function displayNews(stories) {
    allNewsUL.innerHTML = ""
    for (let index = 0; index < stories.length; index++) {
        let story = stories[index]
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


// If entry in JSON is null for a certain field (say, "Author: null"), this prevents the data from being displayed.
function nullCheck (label) {
    if (label == null) {
        return label = ""
    }
    else {
        return label
    }
}


// If description just reiterates the title exactly, this prevents the description from being displayed.
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
    fetch(`http://api.mediastack.com/v1/news?access_key=f29a2265301f2134afcc67c2b548beca&countries=us,gb,au,ie,nz&language=en&sources=${searchSource}`)
    .then(response => {
        return response.json()
    }).then(result => {
        removeDupes(result)        
    })
  })


// Search by keyword
btnSearchKeyword.addEventListener("click", function() {
    const searchKeywordTextBox = document.getElementById("searchKeywordTextBox")
    const searchKeyword = searchKeywordTextBox.value
    fetch(`http://api.mediastack.com/v1/news?access_key=f29a2265301f2134afcc67c2b548beca&countries=us,gb,au,ie,nz&language=en&keywords=${searchKeyword}`)
    .then(response => {
        return response.json()
    }).then(result => {
        removeDupes(result)     
    })
  }) 
    


// Search by category/topic
const dropdownSelectCategory = document.getElementById("dropdownSelectCategory")

// Searches when dropdown option is selected
dropdownSelectCategory.addEventListener("change", function () {
  let chosenCategory = dropdownSelectCategory.options[dropdownSelectCategory.selectedIndex]
  let passCategoryToFetch = chosenCategory.value
  fetch(`http://api.mediastack.com/v1/news?access_key=f29a2265301f2134afcc67c2b548beca&countries=us,gb,au,ie,nz&language=en&categories=${passCategoryToFetch}`)
  .then(response => {
      return response.json()
  }).then(result => {
      removeDupes(result)         
  })
}) 


// Can go back to previously-chosen dropdown option with just the button click
btnSearchCategory.addEventListener("click", function() {
    let chosenCategory = dropdownSelectCategory.options[dropdownSelectCategory.selectedIndex]
    let passCategoryToFetch = chosenCategory.value
    fetch(`http://api.mediastack.com/v1/news?access_key=f29a2265301f2134afcc67c2b548beca&countries=us,gb,au,ie,nz&language=en&categories=${passCategoryToFetch}`)
    .then(response => {
        return response.json()
    }).then(result => {
        removeDupes(result)        
    })
  }) 

