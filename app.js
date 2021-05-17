var txtInput = document.querySelector("#txt-input");
var btnTranslate = document.querySelector("#btn-translate");
var outputDiv = document.querySelector("#txt-output");
var serverURL = "https://api.funtranslations.com/translate/yoda.json";

btnTranslate.addEventListener("click",clickHandler);

function getTranslatedURL(value) {
    return serverURL + "?text=" + value;
}

function clickHandler(){
    var textValue = txtInput.value;
    outputDiv.innerText = "Translation in Progress..."
    fetch(getTranslatedURL(textValue))
    .then(response => response.json())
    .then(json => {
        outputDiv.innerText = json.contents.translated;
    })
    .catch(errorHandler);
}

function errorHandler(error){
    console.log("error occured",error);
    alert("Sorry, something went wrong. Please try again later!");
}