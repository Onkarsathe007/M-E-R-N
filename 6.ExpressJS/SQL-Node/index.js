let express =  require("express");
const mysql = require("mysql2");
let app = express();
let port = 8080;
const methodOverride = require('method-override');
app.use(methodOverride('_method')); // Looks for _method in the query string or body
const { v4: uuidv4 } = require('uuid');
app.use(express.urlencoded({extended:true}));   //for handelling the PATCH request.

app.set("view engine","ejs")

let path = require("path");
const { da } = require("@faker-js/faker");
const { error } = require("console");
app.set("views",path.join(__dirname,"/views"));

app.use(express.static(path.join(__dirname,"public")));

app.listen(port,(req,res)=>{
  console.log("listening on port ",port);
});

//creating an connection object
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123',
  database: 'my_app',
});

// fot home route
app.get("/",(req,res)=>{
let query = `SELECT COUNT(*) FROM USER`;
try{
    connection.query(query, (err, result) => {
    if (err) throw err;
    let count = result[0]["COUNT(*)"];    //result will return an array 
    res.render("index.ejs",{count:count});
  }); 
}catch(err){
    console.log(err);
    res.send("Some error in DB");
}
});

app.get("/users",(req,res)=>{
  let query = `SELECT * FROM USER`;
  try{
      connection.query(query, (err, result) => {
      if (err) throw err;
      let data = result;
      res.render("users.ejs",{data:data});
    }); 
  }catch(err){
      console.log(err);
      res.send("Some error in DB");
  }
  });


  app.get("/users/:id/edit",(req,res)=>{
      let { id } = req.params;
      let query = "SELECT * FROM USER WHERE ID = ?";
      try{
        connection.query(query, [id], (err, result) => {
        if (err) throw err;
        let user = result;
        res.render("edit.ejs",{user:user});
        // res.send(user);
      }); 
    }catch(err){
        console.log(err);
        res.send("Some error in DB");
    }
  })

  // update (DB)route
  app.patch("/users/:id", (req, res) => {

     let { id } = req.params;
     let {password : formPass,username : newUsername} = req.body;

     console.log(formPass,newUsername);
     let query = "SELECT * FROM USER WHERE ID = ?";
     try{
       connection.query(query, [id], (err, result) => {
       if(err)throw err;
       let user = result;
       if(formPass != user[0].password){
        res.send("Wrong passwor")
       }else{
        let query2 = "UPDATE USER SET username = ? WHERE id = ?";
        connection.query(query2 ,[newUsername, id],(err,result)=>{
        if(err) {throw err};
        res.redirect("/users");
        // res.send("Updated!");
        });
       }
      //  res.render("edit.ejs",{user:user}); 
     }); 
   }catch(e){
       console.log(e);
       res.send("Some error in DB");
   }
  });
  
  //to insert the data !
  app.get("/users/add",(req,res)=>{
    res.render("add.ejs");
  });

  app.patch("/user/add",(req,res)=>{
    let data = req.body;
    console.log(data);
    let id = uuidv4();
    let all_data = [id,data.username,data.email,data.password];
    console.log(all_data);
    let query = "INSERT INTO user(id,username,email,password) VALUES(?,?,?,?)";
    try {
      connection.query(query,all_data,(err,result)=>{
        if (err) throw err;
        res.redirect("/users");
      });
    } catch (error) {
        res.send("Error Occured - ",error);
    }
  });

  //To delete the record 
  app.get("/users/:id/delete",(req,res)=>{
  let { id } = req.params;
  let query = "DELETE FROM USER WHERE ID = ?";
      try{
        connection.query(query, [id], (err, result) => {
        if (err) throw err;
        // let user = result;
        res.redirect("/users");
        // res.send(result);
      }); 
    }catch(err){
        console.log(err);
        res.send("Some error in DB");
    }
});