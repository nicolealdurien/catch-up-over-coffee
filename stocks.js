let stocks = []
let stocksymboltextbox = document.getElementById("stocksymboltextbox");
let btnsubmit = document.getElementById("btnsubmit");
let companynametextbox = document.getElementById("companynametextbox");
let searchbtn = document.getElementById("searchbtn");
let displaycomapnydetail = document.getElementById("displaycomapnydetail")

// showing  fixed no. companies quotes in  scrooling right to left

//FOR APPLE INC
fetch(`https://finnhub.io/api/v1/quote?symbol=AAPL&token=c135c0n48v6rj20a8qpg`)
    .then((response) => {
        return response.json()
    }).then((json) => {
        stockquotesdiv = `
                    <div>
                    <div>APPLE INC : ${json.c}</div>
                    </div>
                    `
        applestockdisplay.insertAdjacentHTML('beforeend', stockquotesdiv)
    })

let intervalId = window.setInterval(function() {
    fetch(`https://finnhub.io/api/v1/quote?symbol=AAPL&token=c135c0n48v6rj20a8qpg`)
        .then((response) => {
            return response.json()
        }).then((json) => {
            stockquotesdiv = `
                        <div>
                        <div> APPLE INC : ${json.c}</div>
                       </div>
                       `
            applestockdisplay.innerHTML = stockquotesdiv
        })
}, 60000)




// FOR FACEBOOK INC
fetch(`https://finnhub.io/api/v1/quote?symbol=FB&token=c135c0n48v6rj20a8qpg`)
    .then((response) => {
        return response.json()
    }).then((json) => {
        stockquotesdiv = `
                    <div>
                    <div>FACEBOOK INC : ${json.c}</div>
                    </div>
                    `
        fbstockdisplay.insertAdjacentHTML('beforeend', stockquotesdiv)
    })

let intervalId1 = window.setInterval(function() {
    fetch(`https://finnhub.io/api/v1/quote?symbol=FB&token=c135c0n48v6rj20a8qpg`)
        .then((response) => {
            return response.json()
        }).then((json) => {
            stockquotesdiv = `
                        <div>
                        <div> FACEBOOK INC : ${json.c}</div>
                       </div>
                       `
            fbstockdisplay.innerHTML = stockquotesdiv
        })
}, 6000)


// FOR ALPHABET INC
fetch(`https://finnhub.io/api/v1/quote?symbol=GOOGL&token=c135c0n48v6rj20a8qpg`)
    .then((response) => {
        return response.json()
    }).then((json) => {
        stockquotesdiv = `
                    <div>
                    <div> ALPHABET INC : ${json.c}</div>
                    </div>
                    `
        googlestockdisplay.insertAdjacentHTML('beforeend', stockquotesdiv)
    })

let intervalId2 = window.setInterval(function() {
    fetch(`https://finnhub.io/api/v1/quote?symbol=GOOGL&token=c135c0n48v6rj20a8qpg`)
        .then((response) => {
            return response.json()
        }).then((json) => {
            stockquotesdiv = `
                        <div>
                        <div> ALPHABET INC : ${json.c}</div>
                       </div>
                       `
            googlestockdisplay.innerHTML = stockquotesdiv
        })
}, 6000)


// FOR MICROSOFT INC
fetch(`https://finnhub.io/api/v1/quote?symbol=MSFT&token=c135c0n48v6rj20a8qpg`)
    .then((response) => {
        return response.json()
    }).then((json) => {
        stockquotesdiv = `
                    <div>
                    <div> MICROSOFT INC : ${json.c}</div>
                    </div>
                    `
        microsoftstockdisplay.insertAdjacentHTML('beforeend', stockquotesdiv)
    })

let intervalId3 = window.setInterval(function() {
    fetch(`https://finnhub.io/api/v1/quote?symbol=MSFT&token=c135c0n48v6rj20a8qpg`)
        .then((response) => {
            return response.json()
        }).then((json) => {
            stockquotesdiv = `
                        <div>
                        <div> MICROSOFT INC : ${json.c}</div>
                       </div>
                       `
            microsoftstockdisplay.innerHTML = stockquotesdiv
        })
}, 6000)



// FOR AMAZON.COM INC
fetch(`https://finnhub.io/api/v1/quote?symbol=MSFT&token=c135c0n48v6rj20a8qpg`)
    .then((response) => {
        return response.json()
    }).then((json) => {
        stockquotesdiv = `
                    <div>
                    <div> AMAZON.COM INC : ${json.c}</div>
                    </div>
                    `
        amazonstockdisplay.insertAdjacentHTML('beforeend', stockquotesdiv)
    })

let intervalId4 = window.setInterval(function() {
    fetch(`https://finnhub.io/api/v1/quote?symbol=MSFT&token=c135c0n48v6rj20a8qpg`)
        .then((response) => {
            return response.json()
        }).then((json) => {
            stockquotesdiv = `
                        <div>
                        <div> AMAZON.COM INC : ${json.c}</div>
                       </div>
                       `
            amazonstockdisplay.innerHTML = stockquotesdiv
        })
}, 6000)


// FOR TESLA INC
fetch(`https://finnhub.io/api/v1/quote?symbol=TSLA&token=c135c0n48v6rj20a8qpg`)
    .then((response) => {
        return response.json()
    }).then((json) => {
        stockquotesdiv = `
                    <div>
                    <div> TESLA INC : ${json.c}</div>
                    </div>
                    `
        teslastockdisplay.insertAdjacentHTML('beforeend', stockquotesdiv)
    })

let intervalId5 = window.setInterval(function() {
    fetch(`https://finnhub.io/api/v1/quote?symbol=TSLA&token=c135c0n48v6rj20a8qpg`)
        .then((response) => {
            return response.json()
        }).then((json) => {
            stockquotesdiv = `
                        <div>
                        <div> TESLA INC : ${json.c}</div>
                       </div>
                       `
            teslastockdisplay.innerHTML = stockquotesdiv
        })
}, 6000)




// GET THE SYMBOL FOR THE COMPANY ENTERED BY THE USER

searchbtn.addEventListener("click", function() {
    searchsymbol()

})


function searchsymbol() {
    let companyname = companynametextbox.value;
    fetch(`https://finnhub.io/api/v1/search?q=${companyname}&token=c135c0n48v6rj20a8qpg`)
        .then((response) => {
            return response.json()
        }).then((json) => {
            symboldiv = `
                <div>
               <div class="quotesbox"> Name of company : ${json.result[0].description}</div>
               <div class="quotesbox"> symbol of company: ${json.result[0].symbol} </div>
               </div>
               `
            symboldisplay.innerHTML = symboldiv
        })

}

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
        fetch(`https://finnhub.io/api/v1/quote?symbol=${stock}&token=c135c0n48v6rj20a8qpg`)
            .then((response) => {
                return response.json()
            }).then((json) => {
                stockquotesdiv = `
                    <div id="stockquotesdiv">
                    <div class="bannerquotesboxcompanysymbol"> ${stock}</div>
                    <div class="quotesbox"> CURRENT PRICE:   ${json.c}</div>
                    <div class="quotesbox"> HIGH OF THE DAY:  ${json.h}</div>
                    <div class="quotesbox"> LOW OF THE DAY: ${json.l}</div>
                    <div class="quotesbox">OPEN PRICE FOR TODAY: ${json.o}</div>
                    <div class="quotesbox"> PREVIOUS CLOSE PRICE: ${json.pc}</div>
                    <button onclick="showcompanysdetails('${stock}')">Get More Details</button>
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

            fetch(`https://finnhub.io/api/v1/quote?symbol=${stock}&token=c135c0n48v6rj20a8qpg`)
                .then((response) => {
                    return response.json()
                }).then((json) => {
                    stockquotesdiv = `
                        <div id="stockquotesdiv">
                        <div class="bannerquotesboxcompanysymbol"> ${stock}</div>
                        <div class="quotesbox"> CURRENT PRICE:   ${json.c}</div>
                        <div class="quotesbox"> HIGH OF THE DAY:  ${json.h}</div>
                        <div class="quotesbox"> LOW OF THE DAY: ${json.l}</div>
                        <div class="quotesbox">OPEN PRICE FOR TODAY: ${json.o}</div>
                        <div class="quotesbox"> PREVIOUS CLOSE PRICE: ${json.pc}</div>
                        <button onclick="showcompanysdetails('${stock}')">Get More Details</button>
                       </div>
                       `
                    stocksdisplay.insertAdjacentHTML('beforeend', stockquotesdiv)
                })
        }
    }, 60000)
}


function showcompanysdetails(companysymbol) {
    fetch(`https://finnhub.io/api/v1/stock/profile2?symbol=${companysymbol}&token=c135c0n48v6rj20a8qpg`)
        .then((response) => {
            return response.json()
        }).then((json) => {
            let companydetaildiv = `
                <div>
                <img  id="companyimg" src="${json.logo}">
                </div>
                <div class="quotesbox">
                company name: ${json.name}
                </div>
                <div class="quotesbox">
                industry: ${json.finnhubIndustry}
                </div>
                <div class="quotesbox">
                website: <a href="${json.weburl}" target="blank">${json.weburl}</a>
                </div>
                
                `
            displaycomapnydetail.innerHTML = companydetaildiv;
        })

}