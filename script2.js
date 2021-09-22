var finalscore= document.getElementById("finalScore")


for (var key in localStorage) {

    finalscore.innerHTML+= key + ' ' + localStorage.getItem(key).split() + "<br/>"
    
    } 

    // document.getElementById("finalScore").innerHTML= key