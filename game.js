var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var first = true;
var i;
var test = true;
var checkIndex = 0;

function nextSequence() {

  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  $("#" + randomChosenColour).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
  level = level + 1;
  $("h1").text("Level " + level);

};

$(document).keypress(function() {

  if (first) {
    nextSequence();
  }
  first = false;

});

$(".btn").click(function() {

  userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  animatePress(userChosenColour);
  playSound(userChosenColour);
  checkAnswer(userClickedPattern.length -1);

});

function playSound(colour) {

  var audio1 = new Audio("sounds/" + colour + ".mp3");
  audio1.play();
}

function animatePress(currentColour) {

  $("#" + currentColour).addClass("pressed");

  setTimeout(function() {
    $("#" + currentColour).removeClass("pressed");
  }, 100);
}

function checkAnswer(index) {

  if (gamePattern[index] === userClickedPattern[index]) {


  }
  else{

    playSound("wrong");
    $("body").addClass("game-over");
    $("h1").text("Game Over, Press Any Key to Restart");
    setTimeout(function() {
      $("body").removeClass("game-over");
    }, 200);
    startOver();
  }

  if( gamePattern.length === index + 1 ){
    setTimeout(function() {
      userClickedPattern = [];
      nextSequence();
    }, 1000);
  }
}

function startOver(){
  level = 0;
  gamePattern = [];
  userClickedPattern = [];
  first = true;
}
