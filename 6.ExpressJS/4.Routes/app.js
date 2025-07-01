const express = require('express');
const app = express();
let port = 3000;
app.listen(port,()=>{
    console.log("Starting port :",port)
});

    // app.use((req,res)=>{
    //     console.log("Request sent !");
    //     let htmlCode = "<h1>Hello this is Onkar Sathe</h1>"
    //     res.send(htmlCode);
    // }); 
    //app.use() acts as a middleware and will handle all incoming requests unless it explicitly calls next() so we need to comment out this code


    app.get("/app",(req,res)=>{
        res.send("this is app ");
    });

    app.get("/search/:username/",(req,res)=>{
        let { username } = req.params;
        console.log(req.params);
        res.send(`your name is ${username}`);
    });

    app.get("/find",(req,res)=>{
        let {username, age} = req.query;
        if(username){
            res.send(`Your name is ${username} and You are ${age} years old.`);
        }
    })
