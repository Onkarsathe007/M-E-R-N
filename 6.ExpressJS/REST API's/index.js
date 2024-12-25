const express = require("express");
const app = express();
let port = 8080;


app.use(express.urlencoded({extended:true}));

app.listen(port,(req,res)=>{
    console.log("Listening to port ",port);
});

let path = require("path");
app.set("view engine","ejs")
app.set("views",path.join(__dirname,"views"))

app.use(express.static( path.join(__dirname,"public")));   // for the global access of the views

let posts = [{
            username :  "trupti",
            content : "I love coding"
    },
    {
        username :  "suhas",
            content : "I love Traveling"
    },
    {
        username :  "onkar",
        content : "I love chalanges"
    }];

    app.get("/posts",(req,res)=>{   // to display the posts 
        res.render("index.ejs", { posts: posts });
    });

    app.get("/posts/new",(req,res)=>{
        res.render("new.ejs");   // to create new post
    });

    app.post("/posts",(req,res)=>{
        console.log(req.body);
        let {username , content} = req.body;
        posts.push({username,content});
        res.redirect("/posts");   //by default redirect to post by the get request.
    });
