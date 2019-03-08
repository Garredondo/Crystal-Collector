$(document).ready(function () {
    //set my global variables ====================
    var compScore = (Math.floor(Math.random() * (120 - 19 + 1)) + 19);
    var wins = 0;
    var losses = 0;
    var crystalOneValue = "";
    var crystalTwoValue = "";
    var crystalThreeValue = "";
    var crystalFourValue = "";
    var userScore = "";
    var gameComplete = false;

    //display compScore============================
    // function randomComputerNumber(){
    //     randomComputerNumber = (Math.floor(Math.random() * (120 - 19 + 1)) + 19);
    //     $("#comp-score").text(randomComputerNumber());
    // };

    $("#comp-score").text(compScore);

    $("#reset-button").click(function () {
        reset();
    });

    // $("#comp-score").text(compScore);
    //============================


    //Function so that on-click a random number (1-12) is generated if the value is 0, if it has a value greater than 0 then don't run the randomizer and just add the value to the userScore.
    $("#crystal-one").on("click", function () {
        if (gameComplete === false) {
            if (crystalOneValue === "") {
                crystalOneValue = (Math.floor(Math.random() * (12 - 1 + 1)) + 1);
                console.log(crystalOneValue);
                userScore = parseInt(userScore + crystalOneValue);
                console.log("first click " + userScore);
                $("#user-score").text(userScore);
                scoreCompare();
            } else {
                userScore = parseInt(userScore + crystalOneValue);
                console.log("second click " + userScore);
                $("#user-score").text(userScore);
                scoreCompare();
            }
        }
    });

    $("#crystal-two").on("click", function () {
        if (gameComplete === false) {
            if (crystalTwoValue === "") {
                crystalTwoValue = (Math.floor(Math.random() * (12 - 1 + 1)) + 1);
                console.log(crystalTwoValue);
                userScore = parseInt(userScore + crystalTwoValue);
                console.log("first click " + userScore);
                $("#user-score").text(userScore);
                scoreCompare();
            } else {
                userScore = parseInt(userScore + crystalTwoValue);
                console.log("second click " + userScore);
                $("#user-score").text(userScore);
                scoreCompare();
            }
        }
    });

    $("#crystal-three").on("click", function () {
        if (gameComplete === false) {
            if (crystalThreeValue === "") {
                crystalThreeValue = (Math.floor(Math.random() * (12 - 1 + 1)) + 1);
                console.log(crystalThreeValue);
                userScore = parseInt(userScore + crystalThreeValue);
                console.log("first click " + userScore);
                $("#user-score").text(userScore);
                scoreCompare();
            } else {
                userScore = parseInt(userScore + crystalThreeValue);
                console.log("second click " + userScore);
                $("#user-score").text(userScore);
                scoreCompare();
            }
        }
    });

    $("#crystal-four").on("click", function () {
        if (gameComplete === false) {
            if (crystalFourValue === "") {
                crystalFourValue = (Math.floor(Math.random() * (12 - 1 + 1)) + 1);
                console.log(crystalFourValue);
                userScore = parseInt(userScore + crystalFourValue);
                console.log("first click " + userScore);
                $("#user-score").text(userScore);
                scoreCompare();
            } else {
                userScore = parseInt(userScore + crystalFourValue);
                console.log("second click " + userScore);
                $("#user-score").text(userScore);
                scoreCompare();
            }
        }
    });

    function scoreCompare() {

        if (userScore > compScore) {
            gameComplete = true;
            $("#result-message").text("Sorry you lose");
            losses++;
            $("#losses").text(losses);
        } else if (userScore === compScore) {
            gameComplete = true;
            $("#result-message").text("You WIN!");
            wins++;
            $("#wins").text(wins);
        }
    };

    function reset() {
        crystalOneValue = "";
        crystalTwoValue = "";
        crystalThreeValue = "";
        crystalFourValue = "";
        userScore = "";
        $("#user-score").text("");
        compScore = (Math.floor(Math.random() * (120 - 19 + 1)) + 19);
        $("#comp-score").text(compScore);
        $("#result-message").text("");
        gameComplete = false;
    };




});


