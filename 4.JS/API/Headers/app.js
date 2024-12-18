const url = "https://icanhazdadjoke.com/";
//this will return an promise 
async function getJokes()
{
    try{
        const config ={headers:{Accept :"application/json"}};  // by adding this header we can make it into an application/json form    
        let res = await axios.get(url,config);
        console.log(res.data);   // the data is in the form of html even we don't use the config , but we want 'application/json'
    }catch(err){
        console.log("Error - ");
    }
}
// getJokes();