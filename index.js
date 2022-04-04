


var buttonColors = ["red" , "blue" , "green" , "yellow"]; 

var gamePattern = [];
var userClickedPattern = [];

var started = false;

var level = 0; 

$(document).keypress(function(){
    if(!started){
        $("#level-title").text("Level" + level);
        nextSequence();
        started = true;
    }
});

$(".btn").click(function(){
    var userChosenColour = $(this).attr("id");

    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);

    checkAnswer(userClickedPattern.length - 1);
}); 

function nextSequence(){
    userClickedPattern = [];

    level++;
    $("#level-title").text("Level" + level);

    var randomNumber = Math.floor(Math.random()* 4 ) ;
    var randomChosenColour =  buttonColors[randomNumber];
    gamePattern.push(randomChosenColour); 

   $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
   playSound(randomChosenColour);
}

function checkAnswer(currentLevel) {
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]){
        console.log("success");

        if(userClickedPattern.length === gamePattern.length){
            setTimeout(function(){
                nextSequence();
            } , 1000 );
            }
        }
     else {
        console.log("wrong");
    }

}

function playSound(name){
var audio = new Audio ("Sounds/" + name + ".mp3");
audio.play();
} 


function animatePress(currentColour){
    $("#" + currentColour).addClass("pressed");

    setTimeout(function(){
        $("#" + currentColour).removeClass("pressed");
    } , 100);
    } 
