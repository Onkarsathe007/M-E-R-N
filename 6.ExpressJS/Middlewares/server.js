const express = require("express");
const ExpressError = require("./Error");
const app = express();
const port = "8080";

app.use("/admin", (req, res, next) => {
    const { token } = req.query;
    if (token == "pass1") {
        next();
    } else {
        throw new ExpressError(403, "access to admin is forbidden");
    }

});

app.get("/admin", (req, res) => {
    res.send("This is admin page");
});

app.listen(port, () => {
    console.log("Listining : " + port);
});
