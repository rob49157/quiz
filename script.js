var question1 = document.querySelector(".question1")
var question2 = document.querySelector(".question2")
var question3 = document.querySelector(".question3")
var question4 = document.querySelector(".question4")
var question5 = document.querySelector(".question5") 
var start= document.getElementById("start")
var start_btn= document.getElementById("start_btn")


var gradeVar =  []
var time = 35;
var questionscore = 20


var finalgrade = "final grade: " + gradeVar

// start timer and create timer
start_btn.addEventListener("click", timer)
console.log(timer)

function timer() {
    var timeremaining = " "
    var timeinterval = setInterval(function () {
        time--;
        start.textContent = time + " time remaining"
        if (time === 0) {
            alert( "times up!")
            clearInterval(timeinterval)
        }
        time += timeremaining
    }, 1000);
   
}
// question1
function firstquestion(clicked) {

    var correct = clicked
    if (correct === "all above") {
        questionscore = 20;
        question1.textContent = "correct!" + questionscore
        gradeVar.push(questionscore)
        calculateGrade()
        question2.style.display = "block";
        
    }
    else {
        question1.textContent = "wrong!"
        question2.style.display = "block";
        
      
    }
    console.log(gradeVar)
}
// question2
function secondQuestion(clicked) {
    var correct = clicked
    console.log(correct)
    if (correct === "console.log") {
        questionscore = 20;
        question2.textContent = "correct!" + questionscore
        gradeVar.push(questionscore)
        calculateGrade()
        question3.style.display = "block";}
       
    else{
        question2.textContent = "wrong!"
        question3.style.display = "block";
        
        
    }
    console.log(gradeVar)
}
//question3
function thirdQuestion(clicked) {
    var correct = clicked
    console.log(correct)
    if (correct === "interger") {
        questionscore = 20;
        question3.textContent = "correct!" + questionscore
        gradeVar.push(questionscore)
        
        calculateGrade()
        question4.style.display = "block";
        
    }
    else {
        question3.textContent = "wrong!"
        question4.style.display = "block";
        
       
    }
    console.log(gradeVar)
}
//question4
function fourthQuestion(clicked) {
    var correct = clicked
    console.log(correct)
    if (correct === "for") {
        questionscore = 20;
        question4.textContent = "correct!" + questionscore
        gradeVar.push(questionscore)
        calculateGrade()
        
    }
    else {
        
        question4.textContent = "wrong!"
        
        return false
    }
    console.log(gradeVar)
}
//question5
function fifthQuestion(clicked) {
    var correct = clicked
    console.log(correct)
    if (correct === "goes to the next else statement") {
        questionscore = 20;
        question5.textContent = "correct!" + questionscore
        gradeVar.push(questionscore)
        calculateGrade()
       
    }
    else {
        question5.textContent = "wrong!"
        
        return false
    }
    console.log(gradeVar)
}


var sum = 0;
function calculateGrade() {
    console.log(gradeVar)
    
    for (let i = 0; i < gradeVar.length; i++) {
        sum += gradeVar[i]
    }
    
    console.log(sum)
    document.getElementById("final_score").innerHTML = "Final Score: " + sum

}

function getscore(fname,lname){
    var getter= fname.value + " " + lname.value
    localStorage.setItem(getter,sum)}