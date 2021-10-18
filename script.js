var d4 = [1, 4, "d4"];
var d6 = [1, 6, "d6"];
var d8 = [1, 8, "d8"];
var d10 = [1, 10, "d10"];
var d12 = [1, 12, "d12"];
var d20 = [1, 20, "d20"];
var dp = [00, 10, "dp"];
var dice = [];

function randomNumber(min, max) {
  var random = Math.floor(Math.random() * max) + min;
  return random;
}

function AddDice(LOL) {
  dice.push(LOL);
}

function RemoveDice() {
  dice = [];
}

function rollDice() {
  var visualDice = [];
  $('.visual-dice').each(function() {
    visualDice.push($(this));
  });
  for (var i = 0; i < dice.length; i++) {
    var rollNumber = randomNumber(dice[i][0], dice[i][1]);
    var diceName = dice[i][2];
    for (var j = 0; j < visualDice.length; j++) {
      if (visualDice[j].hasClass(diceName)) {
        console.log('test');
        visualDice[j].text(rollNumber);
        visualDice.splice(j, 1);
        break;
      }
    }
  }
  RemoveDice();
}

function clearWaitingArea() {
  $('#waiting').empty();
}

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
