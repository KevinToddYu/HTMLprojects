const apikey = "2e4f1986"
const baseURL = "https://www.omdbapi.com/"
const searchByTitle = "Avengers"
const url = `${baseURL}?s=${searchByTitle}&apikey=${apikey}`

console.log(url)

var results = [];

$.get({
    url: url,
    success: function(data, textStatus, jqXHR){
        if (textStatus == "success") {
            results = data["Search"]
            $("#status").html(data["totalResults"] + " results for " + searchByTitle)
        }
    }
});
