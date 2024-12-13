// Display an interactive list of properties of the 'document' object
console.dir(document);  // This will print the entire document object

// Access the 8th element in the document.all collection (usually an <h1>) and print its innerHTML
console.log(document.all[8].innerHTML);   // This will print the content of the 8th element (likely an <h1>)

// Modify the innerHTML of the 8th element (usually an <h1>) to "Peter Parker"
document.all[8].innerHTML = "Peter Parker";  // This will change the text of the <h1> to "Peter Parker"

// document.all is an HTMLCollection containing all elements in the document
// In this case, the 8th element is likely an <h1> heading

// ---------------------------------------------------

// Using getElementById to get the first element with the ID "mainImg"
let imgObject = document.getElementById("mainImg");

// Display the imgObject using console.log (this will print the img element)
console.log(imgObject);

// Display all properties of the imgObject using console.dir
console.dir(imgObject);

// Print the 'src' attribute (image source URL) of the img element
console.log(imgObject.src);

// Print the 'id' attribute of the img element
console.log(imgObject.id);

// ---------------------------------------------------

// Using getElementsByClassName to get the first element with the class "box"
let boxObj = document.getElementsByClassName("box")[0];  // Getting the first element with class "box"

// Display the properties of boxObj using console.dir
console.dir(boxObj);

// ---------------------------------------------------

// Using getElementsByTagName to get all <p> elements in the document
let pTags = document.getElementsByTagName("p");  // Get all <p> elements

// Display the first <p> element's properties
console.dir(pTags[0]);

// Change the innerHTML of the first <p> element to "abc"
pTags[0].innerHTML = "abc";  // This will change the content of the first <p> tag to "abc"

// ---------------------------------------------------

// Using getElementsByTagName to get all <span> elements in the document
let spanTags = document.getElementsByTagName("span");  // Get all <span> elements

// Display the spanTags collection (It will be empty if no <span> elements exist)
console.dir(spanTags);  // This will print an empty collection if there are no <span> elements

// ---------------------------------------------------

// Using querySelector to get the first element with the ID 'description'
console.dir(document.querySelector('#description'));

// Using querySelector to get the first <a> element inside a <div>
let divAnchor = document.querySelector("div a");
console.dir(divAnchor);

//---------------------------------------------------

//innerHTML  -- takes the whole HTML mark up
//innerText  -- get the text from the borwer screen 
//innerContent  --get the txt from code file 

//---------------------------------------------------
//getters ans setters in the javascript :
    let img = document.querySelector('img');
    console.log(img.getAttribute('id'));    //for getting the attribute

    img.setAttribute('id','bid');



//**manipulating the style 

    //style properties are always written in camelCase.
    //background-color -> backgroundColor(camelCase)

    //let's change the color of the heading 
    let heading = document.querySelector("h1");
    heading.style.color = 'orange';
    heading.style.backgroundColor = "yellow";

    //change the color of all the links to the yellow 
    let anchors = document.querySelectorAll(".box a");
    for(let i = 0 ;i <=anchors.length; i++ )
    {
        anchors[i].style.color="yellow";
    }

//to add the class to the particular element we use 'add()' method 

    heading.classList.add("classname");
    heading.classList.remove("classname");

//Finding the parent element of any elemen 

    let headfour = document.querySelector("h4");
    console.log(headfour.parentElement);

//Finding the childerns of elements 

    let box = document.querySelector('.box');
    console.log(headfour.childElementCount);

//finding the sibling of the elements :
    //previousElementSibling, nextElementSibling 
    let heads = pic.previousElementSibling;
    heads.style.color = "green";

// **adding the element 
   
    new para =   document.createElement('p');;
    para.innerHTML = "I am a dico dancer";
    //once element is created we need to insert it on the document
    //for that we use following functions :
    bd = document.querySelector('body');
    bd.appendChild(para);
    let bx = document.querySelector(".box");
    bx.appendChild(para);
