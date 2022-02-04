const api_key = "oQaelp1z1ZlI0I1KWUQuxhBs9E3RoC1d";
var input = document.querySelector("input").value;


document.querySelector(".js-go").addEventListener('click', function () {

    var input = document.querySelector("input").value;
    AJAXdisplay(input);
})

document.querySelector(".js-userinput").addEventListener('keyup', function (e) {

    if (e.which == 13) {
        var input = document.querySelector("input").value;
        AJAXdisplay(input);
    }

})



// AJAX Request

function AJAXdisplay(input) {

    var url = "http://api.giphy.com/v1/gifs/search?q=" + input + "&api_key=" + api_key;
    var GiphyAJAXCall = new XMLHttpRequest();
    GiphyAJAXCall.open('GET', url);
    GiphyAJAXCall.send();
    GiphyAJAXCall.addEventListener('load', function (e) {
        var data = e.target.response;
        displayGIFs(data);
    })
}
function displayGIFs(string) {

    var display = document.querySelector(".js-container");
    display.innerHTML = "";
    var response = JSON.parse(string)
    response.data.forEach(element => {
        var src = element.images.fixed_height.url;

        display.innerHTML += "<img src=\"" + src + "\" class=\"container-image\"> ";
    });
}