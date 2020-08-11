// function getSmt() {
//     const request = new XMLHttpRequest()
//     request.onreadystatechange = function () {
//         if (this.readyState === 4) {
//             console.log(this.readyState)
//             console.log(request.status)
//             console.log(request.statusText)
//             console.log(request.responseText)
//         }
//     }
//     request.open('GET', 'https://coronavirus-19-api.herokuapp.com/countries/israel')
//     request.send()
// }

function get(url, callback) {
    const request = new XMLHttpRequest()
    request.open("GET", url)
    request.send()
    request.onreadystatechange = function () {
        if (request.readyState === 4) {
            callback(JSON.parse(request.responseText))
        }
        else {
            console.log('ERROR')
        }
    }
}
// get('https://coronavirus-19-api.herokuapp.com/countries/israel', function (res) {
//     console.log(res)
//     document.body.innerHTML = `
//         <h1>Country : ${res.country}</h1>
//         <h1>Cases : ${res.cases}</h1>
//         <h1>Deaths : ${res.deaths}</h1>
//     `
// })

// fetch('https://coronavirus-19-api.herokuapp.com/countries/israel')
//     .then(response => response.json())
//     .then(data => {
//         console.log(data)
//         document.body.innerHTML = `
//             <h1>Country : ${data.country}</h1>
//            <h1>Cases : ${data.cases}</h1>
//              <h1>Deaths : ${data.deaths}</h1>
//         `}
//     );

function myFetch(url) {
    let prom = new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()
        xhr.open('GET', url)
        xhr.send()
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText))
                }
                else {
                    reject('oops smt went wrong ', xhr.statusText)
                }
            }
        }
    })
    return prom
}

// let p = myFetch('https://coronavirus-19-api.herokuapp.com/countries/israel')
// p.then(res => {
//     document.body.innerHTML = `
//     <h1>Country : ${res.country}</h1>
//    <h1>Cases : ${res.cases}</h1>
//      <h1>Deaths : ${res.deaths}</h1>`
// })
//     .catch(rej => console.log(rej))



let getSomeData = async () => {
    try {
        let data = await fetch('https://coronavirus-19-api.herokuapp.com/countries/israel')
        let res = await data.json()
        document.body.innerHTML = `
            <h1>Country : ${res.country}</h1>
            <h1>Cases : ${res.cases}</h1>
            <h1>Deaths : ${res.deaths}</h1>`
    } catch (error) {
        console.log(error + ' Something Went Wrong...')
    }
}

getSomeData()

