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
btn.addEventListener("click",async ()=>{
    let fact = await getFacts();
    para.textContent = fact;
    console.log(fact);
});
async function getFacts(){
    try {
        let res = await axios.get(url);  //axios.get(url) returns a Promise
                                        // This Promise represents the asynchronous operation of making an HTTP GET request to the specified URL.
//      res will store 'Axios Response Object'
//      which looks like : 
/*
        {
           data: { ... }, // The response data (JSON, text, etc.)
           status: 200,   // HTTP status code
           statusText: "OK", // HTTP status text
           headers: { ... }, // Response headers
           config: { ... },  // Axios request configuration
           request: { ... }  // The request object (platform-specific)
        }
*/        
//In the JSON data there is fact 'key' 
        return res.data.fact;       
    } catch (e) {
        console.log("ERROR - ",e);
        return "No fact found !";
    }
}