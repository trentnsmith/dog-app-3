"use strict";


function getDogImage(textInput) {
    fetch(`https://dog.ceo/api/breed/${textInput}/images/random`)
    .then(response => response.json())
    .then(responseJson => displayResults(responseJson))
    .catch(error => alert("I cannot find that breed. Try again."));

}

function displayResults(responseJson) {
    console.log(responseJson);
    
    $('.results').replaceWith(
        `<img src="${responseJson.message}" class="results-img">`
    )

    $('.results').removeClass('hidden');
}

function watchForm() {
    $('form').submit(event => {
        event.preventDefault();
        let userInput = $("#numDogs").val();
        getDogImage(userInput);
    });
}

$(function() {
    console.log('App loaded! Waiting for submit!');
    watchForm();
});