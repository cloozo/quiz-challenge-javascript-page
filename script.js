var yourScore = 0;
totalScore =100;
var choiceOne = document.querySelectorAll(".choice-text");



// start button for quiz
function startQuiz(){
   $("#start").hide();
   $("#question1").show();
   startTimer();
}
$("#start").click(startQuiz);

// question 1 hides , question 2 shows 
function answerQuestion1() {
    if ($(this).attr("data-number") =="correct!"){
        alert($(this).attr("data-number"))
        yourScore += 20;
        console.log(yourScore);
    }

    $("#question1").hide();
    $("#question2").show();
    if ($(this).attr("data-number") !="correct!"){
        alert($(this).attr("data-number"))
        console.log(yourScore);
        substractTime()
      /*  yourScore -= 20; */
    }

}
 $("#question1 .choice-text").click(answerQuestion1);

// question 2 hides , question 3 shows 
function answerQuestion2() {
    if ($(this).attr("data-number") =="correct!"){
        alert($(this).attr("data-number"))
        yourScore += 20;
        console.log(yourScore);
    }

    $("#question2").hide();
    $("#question3").show();

    if ($(this).attr("data-number") !="correct!"){
        alert($(this).attr("data-number"))
        console.log(yourScore);
        substractTime()
       /* yourScore += 20; */
 
    }

}
$("#question2 .choice-text").click(answerQuestion2);

// question 3 hides , question 4 shows 
function answerQuestion3() {
    if ($(this).attr("data-number") =="correct!"){
        alert($(this).attr("data-number"))
        yourScore += 20;
        console.log(yourScore);
    }
    
    $("#question3").hide();
    $("#question4").show();

    if ($(this).attr("data-number") !="correct!"){
        alert($(this).attr("data-number"))
        console.log(yourScore);
        substractTime()
 /*        yourScore -= 20; */
    }
}
$("#question3 .choice-text").click(answerQuestion3);

// question 4 hides , question 5 shows 
function answerQuestion4() {
    if ($(this).attr("data-number") =="correct!"){
        alert($(this).attr("data-number"))
        yourScore += 20;
        console.log(yourScore);
    }

    $("#question4").hide();
    $("#question5").show();

    if ($(this).attr("data-number") !="correct!"){
        alert($(this).attr("data-number"))
        console.log(yourScore);
        substractTime()
  /*       yourScore -= 20; */
    }
}
$("#question4 .choice-text").click(answerQuestion4);

// question 5 hides , enter initial 
function answerQuestion5() {
    if ($(this).attr("data-number") =="correct!"){
        alert($(this).attr("data-number"))
        yourScore += 20;
        console.log(yourScore);
    }


    $("#question5").hide();
    $("#enter-initial").show();

    if ($(this).attr("data-number") !="correct!"){
        alert($(this).attr("data-number"))
        console.log(yourScore);
        substractTime()
       /*  yourScore -= 20; */
    }
    finish(); 
}
$("#question5 .choice-text").click(answerQuestion5);

// where timer is initialize and function  startTimer starts
console.log(yourScore);
var timer;
var timeLeft=0;
// function  startTimer starts
function  startTimer() {
    timeLeft = 60;
    timer=setInterval(function(){
    timeLeft--;
    if(timeLeft ===0){
        finish();  
    }
   
    document.getElementById("timer").innerText=timeLeft;
    },1000)
}
// function finish
function finish(){
    clearInterval(timer);
    alert(`The Quiz is Over! You score ${yourScore} out of 100`);
}
//substract time
function  substractTime() {
   timeLeft-=5;
}



/* // End of Quiz
var initial = document.getElementById("initial_letter").value;
$("#final-button").click(EndOfQuiz);

function EndOfQuiz() {
    alert(`${initial}, Your final score is: ${yourScore}/100`);
    localStorage.setItem(initial, yourScore);
} */


// setting up the global variabls
var buttonEl = document.getElementById("button");
var nameInputEl = document.getElementById("name");
var scoreInputEl = document.getElementById("score");

var scores = [];

buttonEl.addEventListener("click", saveScore);

//
function saveScore(){
    $("#enter-initial").hide();
    $("#highest-score").show();

   
// creating an array
var newScore = {
name: nameInputEl.value,
score: scoreInputEl.value
};

scores.push(newScore);

localStorage.setItem("highscores", JSON.stringify(scores));

// empty both value
scoreInputEl.value = "";
nameInputEl.value = "";

console.log("success!");// 
//
console.log(newScore);// 

}

//

