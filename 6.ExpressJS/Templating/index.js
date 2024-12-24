const exp = require("constants");
const express =  require("express");
const app = express();
let port = 8080;



app.set("view engine","ejs");

app.listen(port,()=>{
    console.log("Port Listening :",port);
});


const path = require("path");  // Import the 'path' module
// Correctly set the views directory without the extra space
app.set("views", path.join(__dirname, "./views"));

app.use(express.static(path.join(__dirname,"public")));


app.get("/",(req,res)=>{
    res.render("home.ejs");  //how this res know where is home.ejs
                            // here the render will be search for home.ejs inside the by default inside the Views folder 
});

// But if we go out of the this folder and trying to run the index.js then 
// there it will try to find out the 'Views' folder inside outside that folder 
//  so we use follwing line :


app.get("/insta/:user",(req,res)=>{
    const followers = ["adama","suahas","priti","mayur","abhi"];
    const instaData = require("./data.json");
    let { user } = req.params;
    let data =  instaData[user];
    console.log(data)
    if(data){
        res.render("instagram.ejs",{data});
    }
    else{
        res.render("error.ejs")
    }
    // user variable is fixed
  

});

app.get("/rollDice",(req,res)=>{
    let diceValue = Math.floor(Math.random()*6)+1;
    res.render("rollDice.ejs",{diceValue})
});


