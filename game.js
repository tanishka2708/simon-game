

var btncolor=["red","blue","green","yellow"];
var gamepattern=[];

var user=[];

var started=false;
var level= 0;
$(document).keypress(function(){
  if(!started){
    $("#level-title").text("level " + level);
    nextsequence();
    started=true;
  }
});

$(".btn").click(function() {
  var userchosencolor=$(this).attr("id");
  user.push(userchosencolor);
  playsound(userchosencolor);
  animate(userchosencolor);
  checkans(user.length-1);
});

function checkans(currentlevel){
  if(gamepattern[currentlevel]===user[currentlevel]){
    if(user.length===gamepattern.length){
      setTimeout(function(){
        nextsequence();
      },1000);
    }
  }
    else{
      playsound("wrong");
      $("body").addClass("game-over");
      $("#level-title").text("Game over,press any key to start over");

      setTimeout(function (){
        $("body").removeClass("game-over");
      },200);
      startover();
    }
  }




function nextsequence(){
  user=[];
  level++;
  $("#level-title").text("level " + level);
  var random=Math.floor(Math.random()*4);

  var randomchosencolor=btncolor[random];

  gamepattern.push(randomchosencolor);

  $("#"+randomchosencolor).fadeIn(100).fadeOut(100).fadeIn(100);
  playsound(randomchosencolor);

}


function playsound(name){
  var audio=new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animate(color){
  $("#" + color).addClass("pressed");

  setTimeout(function () {
    $("#" + color).removeClass("pressed");
  }, 100);
}

function startover(){
  level=0;
  gamepattern=[];
  started=false;
}
