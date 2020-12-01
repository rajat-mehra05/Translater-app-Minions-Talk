var translateButton = document.querySelector("#btn-translate");

// reading input
var translateInput = document.querySelector("#text-input");

// show output
var translateOutput = document.querySelector("#output");

var url = "https://api.funtranslations.com/translate/minion.json";

function buttonClickHandler(event) {
    console.log("button clicked");
    var input = translateInput.value;
    var finalURL = constructURL(input);
    console.log(finalURL);
    fetch(finalURL)
        .then(response => response.json())
        .then(json => {
            translateOutput.innerText = json.contents.translated;
        })
        .catch(() => alert("some error occured"));
};

translateButton.addEventListener("click", buttonClickHandler);

function constructURL(inputText) {
    var encodedURI = encodeURI(inputText);
    return `${url}?text=${encodedURI}`;
}