const express = require("express");
const app = express();
const port = 8080;
const conn = require("./config/conn.js");
const path = require("path");
app.set("views", path.join(__dirname, "views/"));

app.use(express.static("public"));
const accessMiddlewares = require("./middlewares/index.js");
accessMiddlewares(app);

app.get("/", (req, res) => {
  let query = `SELECT * FROM tasks`;
  try {
    conn.query(query, (err, result) => {
      if (err) throw err;
      let data = result;
      res.render("index.ejs", { data });
    });
  } catch (err) {
    console.log(err);
    res.send("Some error in DB");
  }
});

app.post("/task", (req, res) => {
  const { task } = req.body;
  const { priority } = req.body;
  const initialTasks = [[`${task}`, `${priority}`]];
  const insertQuery = "INSERT INTO tasks (task, priority) VALUES ?";

  conn.query(insertQuery, [initialTasks], (err, result) => {
    if (err) {
      console.error("Error inserting data:", err);
    } else {
      console.log(`Inserted ${result.affectedRows} rows.`);
      res.redirect("/");
    }
  });
});

app.delete("/task/:id", (req, res) => {
  const { id } = req.params;
  console.log(id);
  let sql = `DELETE FROM tasks WHERE id = ${id}`;
  conn.query(sql, (error, results, fields) => {
    if (error) return console.error(error.message);
    console.log("Deleted Row(s):", results.affectedRows);
    res.redirect("/");
  });
});

app.listen(port, (req, res) => {
  console.log("listening on PORT " + port);
});
