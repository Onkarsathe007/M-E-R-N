let ip=document.querySelector("input");
let para = document.querySelector("p");

ip.addEventListener("input",fetchData);

function fetchData()
{
    para.innerHTML = ip.value;
}
