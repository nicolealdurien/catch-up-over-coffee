// AIzaSyARESLjP6R9-EUqmePMbkmqPd-3oJn1Ypo

const startAddressTextBox = document.getElementById("startAddressTextBox")
const endAddressTextBox = document.getElementById("endAddressTextBox")
const btnGetDirections = document.getElementById("btnGetDirections")

btnGetDirections.addEventListener("click", function() {
    let start = startAddressTextBox.value
    let end = endAddressTextBox.value
    let map = `<iframe>
                width="250"
                height="250"
                frameborder="0" style="border:0"
                src="https://www.google.com/maps?saddr=${start}&daddr="${end}&ie=UTF8&t=h&z=7&layer=t">
                </iframe>
                `
    mapDisplay.innerHTML = map
