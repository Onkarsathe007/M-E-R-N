const express = require("express");
const app = express();
const port = 8080
app.get("/", (req, res) => {
    res.send("root");
});
app.listen(port, (req, res) => {
    console.log("listening on port 1" + port);
});
