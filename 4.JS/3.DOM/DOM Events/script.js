let btns= document.querySelector("button");
let para= document.querySelector("p");
let head3= document.querySelector("h3");
//#EventListener : 
para.addEventListener("click",changeColor);
head3.addEventListener("click",changeColor);
//'e' is nothing but the event object.
btns.addEventListener("click",function(e){
    console.log(e);
});

//function to be invoked.
function changeColor()
{
    //this meanse object that called 'changeColorfunction' this value refers to that function.
    this.style.backgroundColor = "red";
    console.dir(this.innerText);
}

//let's try some keyboard event's :

let ip = document.querySelector("input");
ip.addEventListener("keyup",giveAlert);
//keyup 
//keydown 
//keypress
function giveAlert(e)
{
    //console.log(e);  // this give an info about the event 
    console.log(e.key); //This will specifically give the 'key' that we've pressed      
    console.log(e.code;)
    console.log("key released !");   
}
