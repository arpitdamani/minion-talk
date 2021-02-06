var btnTranslate = document.querySelector(".box");
var outputDiv = document.querySelector("#output");


var serverURL = "https://api.funtranslations.com/translate/minion.json";

function getTranslationURL(text) {
    return serverURL + "?" + "text=" + text
}

function clickHandler() {
    var txt_input = document.querySelector("#txt_input").value;

    fetch(getTranslationURL(txt_input))
        .then(response => response.json())
        .then(json => outputDiv.innerHTML = json.contents.translated)
        .catch((error) => {
            console.log("Error occurred", error);
            alert("Something is wrong with the Server. Try again after some time :)")
        })
    }

    btnTranslate.addEventListener("click", clickHandler);