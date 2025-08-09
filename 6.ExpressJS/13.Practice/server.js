const express = require("express");
const app = express();
const mongoose = require("mongoose");

const port = 8090;
app.get("/", (req, res) => {
    console.log(req.originalUrl);
});

app.listen(port, () => {
    console.log("Listening on port " + port);
});
