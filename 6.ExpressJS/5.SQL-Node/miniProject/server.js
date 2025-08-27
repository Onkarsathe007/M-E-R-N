const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
app.set("views", path.join(__dirname, "views/"));
app.use(express.static("public"));
const accessMiddlewares = require("./middlewares/index.js");

accessMiddlewares(app);

app.listen(port, (req, res) => {
  console.log("listening on PORT " + port);
});
