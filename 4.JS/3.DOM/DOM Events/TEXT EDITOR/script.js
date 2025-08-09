let ip=document.querySelector("input");
let para = document.querySelector("p");

ip.addEventListener("input",fetchData);
ip.addEventListener("mouseout",mouseOut);
ip.addEventListener("keypress",function(e){
    console.log(e.key);
    console.log(e.keyCode);
});
para.addEventListener("scroll",function(){
    console.log("scroll Invoked !");
})
function fetchData()
{
    para.innerHTML = ip.value;
}
function mouseOut()
{
    alert("focus on you goal!")
}

