$(document).ready(function () {

    //The computer generates a randcom number to begin.
    randomNumber = Math.floor(Math.random() * 101 + 19);
    console.log(randomNumber);

    // updates the DOM with the randomly generated number
    $("#rand").text(randomNumber);

    //Each jewel has a random value
    var red = Math.floor(Math.random() * 11 + 1);
    console.log("red" + red);
    var yellow = Math.floor(Math.random() * 11 + 1);
    console.log("yellow" + yellow);
    var emerald = Math.floor(Math.random() * 11 + 1);
    console.log("emerald" + emerald);
    var pink = Math.floor(Math.random() * 11 + 1);
    console.log("pink" + pink);

    //more variables
    var score = 0;
    var wins = 0;
    var losses = 0;

    //resets the game
    function reset() {
        randomNumber = Math.floor(Math.random() * 101 + 19);
        console.log(randomNumber);
        $("#rand").text(randomNumber);
        red = Math.floor(Math.random() * 11 + 1);
        yellow = Math.floor(Math.random() * 11 + 1);
        emerald = Math.floor(Math.random() * 11 + 1);
        pink = Math.floor(Math.random() * 11 + 1);
        score = 0;
        $("#scoreboard").text(score);
    }

    //records wins and losses 
    function win() {
        wins++;
        $("#wins").text(wins);
        reset();
    }

    function loss() {
        losses++;
        $("#loss").text(losses);
        reset();
    }

    //sets each button to add a value to the scoreboard and record win/loss
    $("#red").on("click", function () {
        score = score + red;
        console.log("New score" + score);
        $("#scoreboard").text(score);

        if (score === randomNumber) {
            win();
        }
        else if (score > randomNumber) {
            loss();
        }
    });

    $("#yellow").on("click", function () {
        score = score + yellow;
        console.log("New score" + score);
        $("#scoreboard").text(score);

        if (score === randomNumber) {
            win();
        }
        else if (score > randomNumber) {
            loss();
        }
    });

    $("#emerald").on("click", function () {
        score = score + emerald;
        console.log("New score" + score);
        $("#scoreboard").text(score);

        if (score === randomNumber) {
            win();
        }
        else if (score > randomNumber) {
            loss();
        }
    });

    $("#pink").on("click", function () {
        score = score + pink;
        console.log("New score" + score);
        $("#scoreboard").text(score);

        if (score === randomNumber) {
            win();
        }
        else if (score > randomNumber) {
            loss();
        }
    });

})

