function getSomething() {
    const request = new XMLHttpRequest()

    request.onreadystatechange = function () {
        if (this.readyState === 4) {
            if (this.status >= 200 && this.status < 300) {
                console.log(request.status);
                console.log(request.statusText);
                console.log(request.responseText);
            } else {
                console.error(`[ERROR] server respose: ${this.statusText}`);
            }
        }
    }

    request.open('GET', "https://coronavirus-19-api.herokuapp.com/countries/israel")

    request.send()



    // Properties
    // onreadystatechanges
    // readystate  ==> 0-created 1-opened
    // 2-4-sent

    // Methods
    // open()
    // send()
    // 
}




function getDollar(url, cb) {
    const xhr = new XMLHttpRequest()
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status >= 200 && xhr.status < 300) {
                cb(JSON.parse(xhr.responseText))
            } else {
                console.error(`[ERROR] server respose: ${this.statusText}`);
            }
        }
    }
    xhr.open('GET', url)
    xhr.send()
}

// getDollar('https://coronavirus-19-api.herokuapp.com/countries/israel', function (res) {
//     console.log('Created func getDollar ------------------------------------');
//     const arr = []
//     for (const fact in res) {
//             console.log( `${fact} : ${res[fact]}`);
//     }
// })
// $.get('https://coronavirus-19-api.herokuapp.com/countries/israel', function (res) {
//     console.log('$.get --------------------------------');
//     const arr = []
//     for (const fact in res) {
//             console.log( `${fact} : ${res[fact]}`);
//     }
// })

// fetch('https://coronavirus-19-api.herokuapp.com/countries/israel')

function myFetch(url) {
    return new Promise((resolve, reject) => {
        let req = new XMLHttpRequest();
        req.onreadystatechange = () => {
            if (req.readyState === 4) {
                if (req.status >= 200 && req.status < 300) {
                    resolve(JSON.parse(req.responseText))
                } else {
                    reject(`[ERROR] server response: [${req.readyState}] ${req.statusText} `)
                }
            }
        }
        req.open('GET', url)
        req.send()
    })
}

// myFetch('https://coronavirus-19-api.herokuapp.com/countries/israel')
//     .then((response) => console.log(response))
//     .catch((response) => console.error(response))

let allCountries = []
let covidData = async () => {
    try {
        let data = await fetch('https://coronavirus-19-api.herokuapp.com/countries')
        let res = await data.json()
        let arr = []
        for (let i = 0; i < res.length; i++) {
            arr.push(res[i]['country']);
        }
        allCountries = arr
    } catch (err) {
        console.error(err);
    }
}
console.log(covidData())