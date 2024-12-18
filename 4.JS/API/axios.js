//we have alredy a fetch method why axios?
//------------------------------------------------------------------------------
//1. fetch(url) // Make a request to the given URL
//2. .then((res) => {       // Once the request is successful, the response (res) is available here
//3.     console.log(res); // Print the whole response to the console
//4.    return res.json(); // Convert the response into JSON format
//5. });
//6. .then((data) => {           // Once the JSON is ready, it will be available here as 'data'
//7.     console.log(data.fact); // Print the 'fact' property from the data object to the console
//8. })
//------------------------------------------------------------------------------
// fetch response will in redableStream 
// line No 3 will print the :
// body: ReadableStream then convert into the json file 
// using axios we can directly get the data

// axios is responsible for sending the http request direcly.

let url ="https://catfact.ninja/fact";
let para = document.querySelector("p");
let btn = document.querySelector("button");
btn.addEventListener("click",getFacts);
async function getFacts(){
    try {
        let res = await axios.get(url);
        para.textContent = res.data.fact;
        console.log(res.data.fact);

    } catch (e) {
        console.log("ERROR - ",e);
    }
}