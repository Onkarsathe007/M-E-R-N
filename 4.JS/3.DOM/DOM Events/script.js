let btns= document.querySelector("button");
//#EventListener : 
btns.addEventListener("click",sayHello);
btns.addEventListener("mouseover",changeColor);
btns.addEventListener("dblclick",printMsg);
function sayHello()
{
    console.log("Hello !");
}
function changeColor()
{
    this.style.backgroundColor = "red";
}
function printMsg()
{
    alert("You double clicked ");
}
