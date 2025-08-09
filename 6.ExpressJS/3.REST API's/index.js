const express = require("express");
const app = express();
let port = 8080;
const methodOverride = require("method-override")

app.use(methodOverride("_method"));

const { v4: uuidv4 } = require('uuid');

 // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'

app.use(express.urlencoded({extended:true}));

app.listen(port,(req,res)=>{
    console.log("Listening to port ",port);
});

let path = require("path");
app.set("view engine","ejs")
app.set("views",path.join(__dirname,"views"))

app.use(express.static( path.join(__dirname,"public")));   // for the global access of the views

let posts = [{
            id : uuidv4(),
            username :  "trupti",
            content : "I love coding"
    },
    {
            id : uuidv4(),
            username :  "suhas",
            content : "I love Traveling"
    },
    {
            id :uuidv4(),
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
        posts.push({id : uuidv4(),username,content});
        res.redirect("/posts");   //by default redirect to post by the get request.
    });

    app.get("/posts/id/:id",(req,res)=>{
        let {id} = req.params;

        let post = posts.find(post => post.id === id);
        console.log(post);
        res.render("show.ejs",{post})
        // res.send("Req working ");
    });

app.patch("/posts/id/:id", (req, res) => {
    const { id } = req.params; // Extract the post ID
    const newContent = req.body.Content; // Extract new content from the request body

    // Find the post with the matching ID
    const post = posts.find(post => post.id === id);

    post.content = newContent; // Update the post content
    console.log(`Post updated: ${post.content}`);

    // Redirect or send a success response
    res.redirect(`/posts/id/${id}`);
});

    
    app.get("/posts/id/:id/edit",(req,res)=>{
        const { id } = req.params;
        const post = posts.find(post => post.id === id);
        res.render("edit.ejs",{post:post})
    })

    app.delete("/posts/id/:id",(req,res)=>{
        let {id} = req.params;
        posts = posts.filter(post => post.id !== posts.id);

        res.redirect("/posts/");
    });

    