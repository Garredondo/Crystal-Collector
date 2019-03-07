$(document).ready(function(){
//set my global variables

var compScore = (Math.floor(Math.random() * (120 - 19 + 1)) + 19);
var userScore = "";
var wins = 0;
var losses = 0;
var crystalOneValue = "";
var crystalTwoValue = "";
var crystalThreeValue = "";
var crystalFourValue = "";

//display compScore
$("#comp-score").text(compScore);

//Function so that on-click a random number (1-12) is generated if the value is 0, if it has a value greater than 0 then don't run the randomizer and just add the value to the userScore.
$("#crystal-one").on("click", function(){
    if (crystalOneValue === "") {
        crystalOneValue = (Math.floor(Math.random() * (12 - 1 + 1)) + 1);
        console.log(crystalOneValue);
        userScore = parseInt(userScore + crystalOneValue);
        console.log("first click " + userScore);
        $("#user-score").text(userScore);
    } else {
        userScore = parseInt(userScore + crystalOneValue);
        console.log("second click " + userScore);
        $("#user-score").text(userScore);
    }
});

$("#crystal-two").on("click", function(){
    if (crystalTwoValue === "") {
        crystalTwoValue = (Math.floor(Math.random() * (12 - 1 + 1)) + 1);
        console.log(crystalTwoValue);
        userScore = parseInt(userScore + crystalTwoValue);
        console.log("first click " + userScore);
        $("#user-score").text(userScore);
    } else {
        userScore = parseInt(userScore + crystalTwoValue);
        console.log("second click " + userScore);
        $("#user-score").text(userScore);
    }
});

$("#crystal-three").on("click", function(){
    if (crystalThreeValue === "") {
        crystalThreeValue = (Math.floor(Math.random() * (12 - 1 + 1)) + 1);
        console.log(crystalThreeValue);
        userScore = parseInt(userScore + crystalThreeValue);
        console.log("first click " + userScore);
        $("#user-score").text(userScore);
    } else {
        userScore = parseInt(userScore + crystalThreeValue);
        console.log("second click " + userScore);
        $("#user-score").text(userScore);
    }
});

$("#crystal-four").on("click", function(){
    if (crystalFourValue === "") {
        crystalFourValue = (Math.floor(Math.random() * (12 - 1 + 1)) + 1);
        console.log(crystalFourValue);
        userScore = parseInt(userScore + crystalFourValue);
        console.log("first click " + userScore);
        $("#user-score").text(userScore);
    } else {
        userScore = parseInt(userScore + crystalFourValue);
        console.log("second click " + userScore);
        $("#user-score").text(userScore);
    }
});




//set a function so that on-click a random number (1-12) is generated
    //remember to store the new number for the duration of the game
    //add the number to the userScore
//each time the user clicks on the object, add the new value to the userScore
//if the userScore is === randomNumber user wins
    //add to Wins
    //reset game
//else the userScore is > randomNumber user losses
    //add to losses
    //reset game

});


