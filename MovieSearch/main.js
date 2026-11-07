const apikey = "2e4f1986"
const baseURL = "https://www.omdbapi.com/"
const searchByTitle = "Titanic"
const url = `${baseURL}?s=${searchByTitle}&apikey=${apikey}`

console.log(url)
var results = [];

$.get({
    url: url,
    success: function(data, textStatus, jqXHR){
        if (textStatus == "success") {
            results = data["Search"]
            $("#status").html(data["totalResults"] + " results for " + searchByTitle)
            for (let i = 0; i < results.length; i++) {
                $("#brief-view > table > tbody").append(
                    "<tr>" +
                        "<td><img src='" + results[i].Poster + "' alt='Poster'></td>" +
                        "<td>" + results[i].Title + "</td>" +
                        "<td>" + results[i].Year + "</td>" +
                    "</tr>"
                );
                const url2 = `${baseURL}?i=${results[i].imdbID}&apikey=${apikey}`;
                $.get({
                    url: url2,
                    success: function(data2) {
                        cdetaiil.push(data2) 
                        count++
                        if (count = results.length) {
                        $("#detailed-view > table > tbody").append(
                        "‹a class='btn btn-primary' data-toggle='collapse'"+
                        "href-'#collapseExample' role='button'>"+
                        "Link wih href"+
                        "</a>")
                    }
                });
            }
        } 
    }
});