var question1 = document.querySelector(".question1")
var question2 = document.querySelector(".question2")
var question3 = document.querySelector(".question3")
var question4 = document.querySelector(".question4")
var question5 = document.querySelector(".question5") 
var start= document.getElementById("start")
var start_btn= document.getElementById("start_btn")
var question_btn= document.getElementById ("q_btn4","q_btn2","q_btn3","q_btn1")

var score =  " "
var time = 35;
var questionscore = 20

// start timer and create timer
start_btn.addEventListener("click",timer)

 function timer(){
     var timeremaining = " "
     var timeinterval= setInterval(function(){ 
        time--;
        start.textContent= time + " time remaining"
        if( time === 0){
        clearInterval(timeinterval)}
        time += timeremaining}, 1000); }
     
     
// need to create functions(event) for the question with else stastements
question_btn.addEventListener("click", firstquestion)

function firstquestion(){   
    var correct = question1
    console.log(question1)
  // en el quiz en la primera pregunta si haces click en el ultimo choice, funciona pero se pone wrong en ves de correct como deveria ser. nose si el IF statement esta malo  
    if ( correct === true){
        questionscore +20;
        question1.textContent= "correct"}
    else( correct !== false)
    {
        questionscore -20;
        question1.textContent= "wrong"
    }
    return correct
    questionscore+= score
    
    
}


// need to create final score and save to "localStorage"