import express from "express";
import dotenv from "dotenv";
dotenv.config();
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const app = express();
app.use(express.json());

app.use((req, res) => {
  console.log("Middleware called");
});

app.post("/student", async (req, res) => {
  try {
    const { PRN, Roll, name, div, department } = req.body;

    const student = await prisma.user.create({
      data: {
        PRN,
        Roll,
        name,
        div,
        department,
      },
    });

    return res.status(201).json({
      success: true,
      message: "Student added successfully",
      data: student,
    });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to create student",
      error: error.message,
    });
  }
});

app.get("/", (req, res) => {
  res.json({ name: "onkar sthe here" });
});

app.listen(process.env.PORT, () => {
  console.log("✅ Listening on port " + process.env.PORT);
});
