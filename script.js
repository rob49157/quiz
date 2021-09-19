var question1 = document.querySelectorAll(".question1")
var question2 = document.querySelectorAll(".question2")
var question3 = document.querySelectorAll(".question3")
var question4 = document.querySelectorAll(".question4")
var question5 = document.querySelectorAll(".question5") 
var start= document.getElementById("start")
var start_btn= document.getElementById("start_btn")

var score =  " "
var time = 35;
var questionscore = 20

// start timer and create timer
start_btn.addEventListener("click",timer)
console.log('hgd')

 function timer(){
     var timeremaining = " "
     console.log('hjjhg')
     var timeinterval= setInterval(function(){ 
        time--;
        start.textContent= time + " time remaining"
        if( time === 0){
        clearInterval(timeinterval)}
        time += timeremaining}, 1000); }
     
     
    
   

 



// need to create functions(event) for the question with else stastements

// need to create timer

// need to create final score and save to "localStorage"