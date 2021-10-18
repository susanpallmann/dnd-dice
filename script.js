// Variables to store min and max values of dice rolls, as well as their names
var d4 = [1, 4, "d4"];
var d6 = [1, 6, "d6"];
var d8 = [1, 8, "d8"];
var d10 = [1, 10, "d10"];
var d12 = [1, 12, "d12"];
var d20 = [1, 20, "d20"];
var dp = [00, 10, "dp"];

// Stores dice we are going to be rolling
var dice = [];


// Function to return a random number from min and max values
function randomNumber(min, max) {
    var random = Math.floor(Math.random() * max) + min;
    return random;
}

// Given an object representing a die (called LOL), adds die to our dice array
function AddDice(LOL) {
    dice.push(LOL);
}

// Removes all dice from our dice array (no need to remove individually)
function RemoveDice() {
    dice = [];
}

// Rolls the dice currently in the dice array
function rollDice() {

    // Creates an array to store the visual representation of our dice
    var visualDice = [];

    // For each die item visible in the waiting area
    $('.visual-dice').each(function() {

    // Add this die to the array
    visualDice.push($(this));
    });

    // For each dice stored in the dice array (note: not the visual dice array)
    for (var i = 0; i < dice.length; i++) {

        // Get random number appropriate to that die type's min and max values
        var rollNumber = randomNumber(dice[i][0], dice[i][1]);

        // Gets the name of the die so we can match it to a DOM element
        var diceName = dice[i][2];

        // For each visual die in our array
        for (var j = 0; j < visualDice.length; j++) {

            // If the class matches the die we are currently iterated on from the dice array
            if (visualDice[j].hasClass(diceName)) {

                // Set the text to roll number (we'll replace this with cooler functionality later)
                visualDice[j].text(rollNumber);

                // Remove from the visual dice array, we don't want to update this one again
                visualDice.splice(j, 1);

                // Stop looping through visual dice when we found a match for our current dice die
                break;
            }
        }
    }

    // Clears dice array when we have iterated through all of the dice
    RemoveDice();

    // TODO: We'll want to move dice from waiting to rolling
    // TODO: We'll need to remove them visually after rolling
}

// Empties waiting area
function clearWaitingArea() {
    $('#waiting').empty();
}

// Displays dice in the waiting area, LMAO in this case represents the dice array
function displayDice(LMAO) {
  
  
    clearWaitingArea();
    for (var i = 0; i < LMAO.length; i++) {
        $('#waiting').append('<span class="visual-dice ' + LMAO[i][2] + '">' + LMAO[i][2] + '</span>');
    }
}

$('document').ready(function () {
    $('#clear').click(function(event) {
        clearWaitingArea();
        RemoveDice();
    });

    $('#roll').click(function(event) {
        rollDice();
    });

    // Buttons handling because unfortunately we need to pass a direct variable into AddDice
    // (Objects and classes felt a little advanced for his first program)
    $('#buttons').on('click', '.button', function() {
        if ($(this).is("#d4")) {
            AddDice(d4);
        } else if ($(this).is("#d6")) {
            AddDice(d6);
        } else if ($(this).is("#d8")) {
            AddDice(d8);
        } else if ($(this).is("#d10")) {
            AddDice(d10);
        } else if ($(this).is("#d12")) {
            AddDice(d12);
        } else if ($(this).is("#d20")) {
            AddDice(d20);
        } else if ($(this).is("#dp")) {
            AddDice(dp);
        }
        displayDice(dice);
    });
});
