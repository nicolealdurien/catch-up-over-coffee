let stocks = []
let stocksymboltextbox = document.getElementById("stocksymboltextbox");
let btnsubmit = document.getElementById("btnsubmit");

// GET THE QUOTES FROM API FOR ENTERED SYMBOL


btnsubmit.addEventListener("click", function() {
    showstockquotes();
    refreshstockquotes()
})



function showstockquotes() {
    stocksymboltextbox.value = stocksymboltextbox.value.toUpperCase();
    let symbol = stocksymboltextbox.value
    stocks.push(symbol)

    stocksdisplay.innerHTML = ""
    for (let i = 0; i < stocks.length; i++) {
        let stock = stocks[i]
        console.log(stock)
        fetch(`https://finnhub.io/api/v1/quote?symbol=${stock}&token=c135c0n48v6rj20a8qpg`)
            .then((response) => {
                return response.json()
            }).then((json) => {
                console.log(json)
                stockquotesdiv = `
                    <div>
                    <div> ${stock}</div>
                    <div> CURRENT PRICE:   ${json.c}</div>
                    <div> HIGH OF THE DAY:  ${json.h}</div>
                    <div> LOW OF THE DAY: ${json.l}</div>
                    <div>OPEN PRICE FOR TODAY: ${json.o}</div>
                    <div> PREVIOUS CLOSE PRICE: ${json.pc}</div>
                    </div>
                    `
                stocksdisplay.insertAdjacentHTML('beforeend', stockquotesdiv)
            })
    }
}



function refreshstockquotes() {
    let intervalId = window.setInterval(function() {
        for (let i = 0; i < stocks.length; i++) {
            stocksdisplay.innerHTML = ""
            let stock = stocks[i]
            console.log(stock)

            fetch(`https://finnhub.io/api/v1/quote?symbol=${stock}&token=c135c0n48v6rj20a8qpg`)
                .then((response) => {
                    return response.json()
                }).then((json) => {
                    stockquotesdiv = `
                        <div>
                        <div> ${stock}</div>
                        <div> CURRENT PRICE:   ${json.c}</div>
                        <div> HIGH OF THE DAY:  ${json.h}</div>
                        <div> LOW OF THE DAY: ${json.l}</div>
                        <div>OPEN PRICE FOR TODAY: ${json.o}</div>
                        <div> PREVIOUS CLOSE PRICE: ${json.pc}</div>
                       </div>
                       `
                    stocksdisplay.insertAdjacentHTML('beforeend', stockquotesdiv)
                })
        }
    }, 20000)
}