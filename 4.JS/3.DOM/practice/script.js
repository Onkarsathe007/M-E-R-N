//creating an input 
let ip = document.createElement('input')
ip.type = "text";
ip.placeholder = "Enter a text";


let btn = document.createElement('button');
btn.setAttribute("id","btn1");
btn.textContent = "Click me";
btn.classList.add("btn");

let body = document.querySelector('body');
body.append(ip);
body.append(btn);