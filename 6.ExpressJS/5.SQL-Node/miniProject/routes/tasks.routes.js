const express = require("express");
const router = express.Router();

const conn = require("../config/conn.js");
router.get("/", (req, res) => {
  req.session.task = "onkar";
  console.log(req.session.task);
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

router.post("/task", (req, res) => {
  const { task } = req.body;
  const { priority } = req.body;
  const initialTasks = [[`${task}`, `${priority}`]];
  const insertQuery = "INSERT INTO tasks (task, priority) VALUES ?";

  res.cookie("key", "value");

  conn.query(insertQuery, [initialTasks], (err, result) => {
    if (err) {
      console.error("Error inserting data:", err);
    } else {
      console.log(`Inserted ${result.affectedRows} rows.`);
      res.redirect("/");
    }
  });
});

router.delete("/task/:id", (req, res) => {
  const { id } = req.params;
  console.log(id);
  let sql = `DELETE FROM tasks WHERE id = ${id}`;
  conn.query(sql, (error, results, fields) => {
    if (error) return console.error(error.message);
    console.log("Deleted Row(s):", results.affectedRows);
    res.redirect("/");
  });
});

module.exports = router;
