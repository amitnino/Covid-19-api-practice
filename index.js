$(() => {
    $.get("https://coronavirus-19-api.herokuapp.com/countries", res => {
        for (let i = 1; i < res.length; i++) {
            $('#countries-select').append(`
            <option value='${res[i]['country']}'>${res[i]['country']}</option>
            `)
            $('#countries-select').val('Israel')
        }
    })
    printCountry('global','world')
    printCountry('local','israel')
    $('#countries-select').change(e => {
        printCountry('local', e.target.value)
    })
    function printCountry(div, country) {
        $.get(`https://coronavirus-19-api.herokuapp.com/countries/${country}`, res => {
            $(`#${div} > .country`).text(`${res.country}`)
            $(`#${div} > .total-cases`).text(`Total Cases: ${res.cases}`)
            $(`#${div} > .active`).text(`Active Cases: ${res.active}`)
            $(`#${div} > .cases-from-today`).text(`Cases From Today: ${res.todayCases}`)
            $(`#${div} > .total-deaths`).text(`Total Deaths: ${res.deaths}`)
            $(`#${div} > .deaths-today`).text(`Deaths From Today: ${res.todayDeaths}`)
        })
    }
})
