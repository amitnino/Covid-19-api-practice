$(() => {
    $.get("https://coronavirus-19-api.herokuapp.com/countries", res => {
        let arr = []
        for (let i = 1; i < res.length; i++) {
            $('select').append(`
            <option>${res[i]['country']}</option>
            `)
        }
    })
})