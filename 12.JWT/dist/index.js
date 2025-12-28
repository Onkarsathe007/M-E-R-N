import express from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;
const ACCESS_TOKEN = process.env.ACCESS_TOKEN;
if (!ACCESS_TOKEN) {
    throw new Error("ACCESS_TOKEN not defined");
}
const REFRESH_TOKEN = process.env.REFRESH_TOKEN;
if (!REFRESH_TOKEN) {
    throw new Error("ACCESS_TOKEN not defined");
}
app.use(express.json());
const posts = [
    { Username: "Onkar sathe", title: "main thing is this" },
    { Username: "priti sathe", title: "I eat pizza" },
    { Username: "Shubham", title: "I am body builder" },
];
app.post("/login", (req, res) => {
    const Username = req.body.username;
    const user = {
        name: Username,
    };
    const accessToken = generateAccessToken(user);
    const refreshToken = jwt.sign(user, REFRESH_TOKEN);
    res.json({ accessToken });
});
app.get("/posts", authenticate, (req, res) => {
    const user = req.user;
    res.json(posts.filter((post) => post.Username === user.name));
});
function authenticate(req, res, next) {
    const authHeader = req.headers["authorization"];
    if (!authHeader) {
        return res.status(401).json({ message: "Authorization header missing" });
    }
    const token = authHeader.split(" ")[1];
    if (!token) {
        return res.status(401).json({ message: "Token missing" });
    }
    try {
        const decoded = jwt.verify(token, ACCESS_TOKEN);
        req.user = decoded;
        next();
    }
    catch (err) {
        return res.status(403).json({ message: "Invalid or expired token" });
    }
}
function generateAccessToken(user) {
    return jwt.sign(user, ACCESS_TOKEN, { expiresIn: "2m" });
}
app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
});
//# sourceMappingURL=index.js.map