let ip = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let li = document.querySelectorAll("li");

btn.addEventListener("click",printData);
function printData()
{
    let newli = document.createElement("li");
    let delBtn = document.createElement("button");
    newli.textContent = ip.value;

    delBtn.innerText = "delete";
    delBtn.style.backgroundColor = "grey";
    newli.append(delBtn);
    ul.append(newli);
    delBtn.addEventListener("click",function(){
        this.parentElement.remove();
    });
}