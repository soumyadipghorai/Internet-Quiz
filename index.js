// console.log(randomNumber);
// document.getElementById("question").innerHTML = "Random question loaded from quiz.json" ;
var randomNumber = Math.floor(Math.random()*10);
var ans;

fetch("quiz.json")
    .then(response => response.json())
    .then(data => {
        //console.log(data[randomNumber].question);
        document.getElementById("question").innerHTML = data[randomNumber].question;
        
        //console.log(data[randomNumber].answer);
        ans = data[randomNumber].answer;
    })


function showAnswer(){
    var val = document.getElementById("insert").value;
    if (val == ans) {
        // alert("Right Answer");
        if (alert("Right Answer")){}
        else{
            window.location.reload();
        }
    }   
    else{
        // alert("Wrong Answer");
        if (alert("Wrong Answer")){}
        else{
            window.location.reload();
        }
    }
}

var timeCount = 0;
var downloadTimer = setInterval(function(){
    if(timeCount >= 30){
        clearInterval(downloadTimer);
        //alert(ans);
        if (alert(ans)){}
        else{
            window.location.reload();
        }
    }
    document.getElementById("time").innerHTML = 30 - timeCount;
    timeCount += 1;
}, 1000);