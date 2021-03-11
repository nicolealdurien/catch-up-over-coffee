let stocks = []
let stocksymboltextbox = document.getElementById("stocksymboltextbox");
let btnsubmit = document.getElementById("btnsubmit");
let companynametextbox = document.getElementById("companynametextbox");
let searchbtn = document.getElementById("searchbtn");
let displaycompanydetail = document.getElementById("displaycompanydetail")

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
               <div class="quotesbox"> Company Name: ${json.result[0].description}</div>
               <div class="quotesbox"> Stock Ticker Symbol: ${json.result[0].symbol} </div>
               </div>
               `
            symboldisplay.innerHTML = symboldiv
        })
    companynametextbox.value = ""
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
                stockquotesdiv = `<br><br>
                    <div id="stockquotesdiv">
                      <div class="bannerquotesboxcompanysymbol"> ${stock} </div>
                      <div id="companyDetailsLink">
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="#quotesbox" onclick="showcompanysdetails('${stock}')" class="companyDetailsButton">Get More Details About Company</a><br>
                      </div>
                      <div class="quotesbox">
                      Current Price:   ${json.c}<br><br>
                      Today's High:  ${json.h}<br><br>
                      Today's Low: ${json.l}<br><br>
                      Today's Open Price: ${json.o}<br><br>
                      Previous Close Price: ${json.pc}<br>                
                      </div>
                    </div><br>
                    `
                stocksdisplay.insertAdjacentHTML('beforeend', stockquotesdiv)
            })
    }
    stocksymboltextbox.value = ""
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
                    stockquotesdiv = `<br><br>
                    <div id="stockquotesdiv">
                      <div class="bannerquotesboxcompanysymbol"> ${stock} </div>
                      <div id="companyDetailsLink">
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="#quotesbox" onclick="showcompanysdetails('${stock}')" class="companyDetailsButton">Get More Details About Company</a><br>
                      </div>
                      <div class="quotesbox">
                      Current Price:   ${json.c}<br><br>
                      Today's High:  ${json.h}<br><br>
                      Today's Low: ${json.l}<br><br>
                      Today's Open Price: ${json.o}<br><br>
                      Previous Close Price: ${json.pc}<br>                
                      </div>
                    </div><br>
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
            let companydetaildiv = `<br>
                <div>
                <h1><u>Company Details</u></h1>
                <img id="companyimg" src="${json.logo}">
                </div><br>
                <div class="quotesbox">
                Company Name: ${json.name}<br><br>
                Industry: ${json.finnhubIndustry}<br><br>
                Website: <a href="${json.weburl}" class="stocks-link" target="blank" id="company-link">${json.weburl}</a><br>
                </div><br>
                `
        displaycompanydetail.innerHTML = companydetaildiv;
        })

}