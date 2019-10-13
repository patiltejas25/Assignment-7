/*eslint-env browser*/

//STEP 1
function writeMessage(){
    window.alert("I have been clicked");
}


//STEP 2
var button2 = document.getElementById("button2");
button2.onclick = function(){
    window.alert("I have been clicked");
};


//STEP 3
var button3 = document.getElementById("button3");
button3.addEventListener("click",writeMessage);


//STEP 4
var button4 = document.getElementById("button4");
button4.addEventListener("click",function(){
    window.alert("I have been clicked");
});


//STEP 5
window.addEventListener("load", function(){
    var button5 = document.getElementById("button5");
    button5.addEventListener("click",function(){
        window.alert("I have been clicked");
    });
});
