
    let btnObject = document.querySelector("button");
    btnObject.addEventListener("click",changeColor);

    function changeColor()
    {

        let divObj = document.querySelector("div");
        let head3 = document.querySelector("h3");

        let red = Math.floor(Math.random()*255);
        let green = Math.floor(Math.random()*255);
        let blue = Math.floor(Math.random()*255);

        divObj.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
        head3.innerHTML = `${red},${green},${blue}`;

    }

