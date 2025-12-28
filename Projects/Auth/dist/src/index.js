import express from "express";
import { configDotenv } from "dotenv";
import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../prisma/.src/generated/prisma/client.js";
import jwt from "jsonwebtoken";
import session from "express-session";
import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
configDotenv({ quiet: true });
const app = express();
app.use(express.json());
app.use(session({
    secret: process.env.SESSION_SECRET || "keyboard cat",
    resave: false,
    saveUninitialized: true,
}));
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback",
}, async (accessToken, refreshToken, profile, done) => {
    // find or create user here
    return done(null, profile);
}));
passport.serializeUser((user, done) => {
    done(null, user);
});
passport.deserializeUser((user, done) => {
    done(null, user);
});
app.use(passport.initialize());
app.use(passport.session());
const connectionString = `${process.env.DATABASE_URL}`;
const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });
export { prisma };
const PORT = Number(process.env.PORT);
const ACCESS_TOKEN = process.env.ACCESS_TOKEN;
const REFRESH_TOKEN = process.env.REFRESH_TOKEN;
//Google OAuth
app.get("/google", passport.authenticate("google", { scope: ["profile", "email"] }));
app.get("/google/callback", passport.authenticate("google", { failureRedirect: "/login" }), (req, res) => {
    const token = jwt.sign({ user: req.user }, process.env.ACCESS_TOKEN || "", {
        expiresIn: "1h",
    });
    res.cookie("jwtToken", token);
    res.redirect("http://localhost:3000");
});
app.get("/logout", (req, res, next) => {
    req.logout(function (err) {
        if (err)
            return next(err);
        res.redirect("/");
    });
});
//---------------------------
app.post("/signup", async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await prisma.main.create({
            data: {
                username: username,
                password: password,
            },
        });
        console.log("User created:", user);
        res.json({ res: "stored", user });
    }
    catch (error) {
        console.error("Error creating user:", error);
        res.status(500).json({ error: "Failed to create user", details: error });
    }
});
app.post("/login", async (req, res) => {
    const { username, password } = req.body;
    console.log("request reviced ");
    try {
        const user = await prisma.main.findUnique({ where: { username } });
        if (!user) {
            res.status(404).json({ messaae: "user does not exits " });
        }
        if (password == user.password) {
            const access_token = generateAccessToken(user);
            const refresh_token = generateRefreshToken(user);
            await prisma.main.update({
                where: { id: user.id },
                data: { refreshToken: refresh_token },
            });
            console.log("Access Token:" + access_token);
            console.log("Refresh Token:" + refresh_token);
            console.log("yah correct password");
        }
        else {
            console.log("Incorrect password");
        }
    }
    catch (error) {
        console.log(error);
    }
});
app.get("/users", authenticate, async (req, res) => {
    try {
        const users = await prisma.main.findMany();
        console.log("Users fetched:", users);
        res.json({ users });
    }
    catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).json({ error: "Failed to fetch users", details: error });
    }
});
app.post("/refresh", async (req, res) => {
    const { refreshToken } = req.body;
    if (!refreshToken) {
        return res.status(401).json({ message: "Refresh token required" });
    }
    try {
        // verify refresh token
        const decoded = jwt.verify(refreshToken, REFRESH_TOKEN);
        const user = await prisma.main.findUnique({
            where: { username: decoded.username },
        });
        if (!user || user.refreshToken !== refreshToken) {
            return res.status(403).json({ message: "Invalid refresh token" });
        }
        const payload = { id: user.id, username: user.username };
        const newAccessToken = generateAccessToken(payload);
        res.json({ accessToken: newAccessToken });
    }
    catch (error) {
        res.status(403).json({ message: "Refresh token expired or invalid" });
    }
});
//functions
function generateAccessToken(user) {
    return jwt.sign(user, ACCESS_TOKEN, { expiresIn: "15m" });
}
function generateRefreshToken(user) {
    return jwt.sign(user, REFRESH_TOKEN, { expiresIn: "12h" });
}
function authenticate(req, res, next) {
    const AuthHeader = req.headers["authorization"];
    if (!AuthHeader) {
        return res.status(401).json({ message: "Authorization header missing" });
    }
    const token = AuthHeader.split(" ")[1];
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
// ---------------
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});
//# sourceMappingURL=index.js.map