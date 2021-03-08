const allNewsUL = document.getElementById("allNewsUL")
const searchTopicTextBox = document.getElementById("searchTopicTextBox")
const btnSearchSource = document.getElementById("btnSearchSource")
const btnSearchTopic = document.getElementById("btnSearchTopic")

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
    event.preventDefault()
    const searchSourceTextBox = document.getElementById("searchSourceTextBox")
    const searchSource = searchSourceTextBox.value
    fetch(`http://api.mediastack.com/v1/news?access_key=7d6eba9ff9a6bfe61a590229bf6b92a2&languages=en&sources=${searchSource}`)
    .then(response => {
        return response.json()
    }).then(result => {
        displayNews(result)        
    })
  })

// Search by topic
btnSearchTopic.addEventListener("click", function() {
    event.preventDefault()
    const searchTopicTextBox = document.getElementById("searchTopicTextBox")
    const searchTopic = searchTopicTextBox.value
    fetch(`http://api.mediastack.com/v1/news?access_key=7d6eba9ff9a6bfe61a590229bf6b92a2&languages=en&keywords=${searchTopic}`)
    .then(response => {
        return response.json()
    }).then(result => {
        displayNews(result)        
    })
  }) 
    

