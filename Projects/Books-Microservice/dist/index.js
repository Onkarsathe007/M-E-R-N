import express from "express";
import dotenv from "dotenv";
import pg from "pg";
import UserRouter from "./routes/books.route.js";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "./generated/prisma/client.js";
dotenv.config({ quiet: true });
const connectionString = `${process.env.DATABASE_URL}`;
const pool = new pg.Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });
export { prisma };
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", UserRouter);
app.listen(process.env.PORT, () => {
    console.log("Listening on port: " + process.env.PORT);
});
//# sourceMappingURL=index.js.map