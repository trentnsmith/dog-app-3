"use strict";


function userInput() {
  let dogBreed = $("#numDogs").val();
  return dogBreed;
}


function getDogImage() {
  fetch("https://dog.ceo/api/breed/" + userInput() + "/images/random")
    .then(response => response.json())
    .then(responseJson => displayResults(responseJson))
    .catch(error => alert("I cannot find that breed. Try again."));
}

function displayResults(responseJson) {
  console.log(responseJson);
  if (responseJson.status !== "success") {
    alert("I cannot find that breed. Try again.");
  } else if (responseJson.status === "success") {
    $(".results").replaceWith(
      `<img src="${responseJson.message}" class="results">`
    );
    $(".results").removeClass("hidden");
  }
}
function watchForm() {
    $("form").submit(event => {
      event.preventDefault();
      getDogImage();
    });
  }
  
$(function() {
    console.log("App loaded! Waiting for submit!");
    watchForm();
  });
  