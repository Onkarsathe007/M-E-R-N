// let validResponse = '{"message": "https://images.dog.ceo/breeds/whippet/n02091134_11765.jpg","status": "success"}';
// let jsonObject = JSON.parse(validResponse);
// console.log(jsonObject);
// console.log(jsonObject.message);  //priting the imge link

//parse - change from one data format to another data format 
let url = 'https://catfact.ninja/fact';
 //'fetch' will returns promise
 fetch(url) // Make a request to the given URL
 .then((res) => {       // Once the request is successful, the response (res) is available here
     console.log(res); // Print the whole response to the console
     return res.json(); // Convert the response into JSON format
 })
 .then((data) => { // Once the JSON is ready, it will be available here as 'data'
     console.log(data.fact); // Print the 'fact' property from the data object to the console
 })
 .catch((error) => { // If something goes wrong in any step, handle the error here
     console.log("error : ", error); // Print the error message to the console
 });
