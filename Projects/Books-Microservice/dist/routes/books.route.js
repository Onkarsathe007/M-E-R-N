import Express from "express";
import { prisma } from "../index.js";
const Router = Express.Router();
Router.get("/books", async (_req, res) => {
    try {
        const book = await prisma.book.findMany();
        res.json({ book });
        console.log({ book });
    }
    catch (e) {
        res.json({ error: e });
    }
});
Router.post("/books", async (req, res) => {
    const { title, author, year, is_available } = req.body;
    try {
        const book = await prisma.book.create({
            data: {
                title: title,
                author: author,
                year: year,
                is_available: is_available,
            },
        });
        console.log("book created successfully");
        return res.status(201).json({
            message: "Book created successfully",
            book,
        });
    }
    catch (error) {
        console.error("Error creating book:", error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
});
Router.get("/books/:id", async (req, res) => {
    const id = Number(req.params.id);
    try {
        const book = await prisma.book.findUnique({ where: { id: id } });
        if (!book) {
            return res.status(404).json({ error: `Book with id ${id} Not exits` });
        }
        return res.status(200).json({
            message: "Book retrieved successfully",
            book,
        });
    }
    catch (error) {
        console.log("error while fetching Book");
        return res.status(500).json({ error: "Intenal Server Error" });
    }
});
Router.patch("/books/:id", async (req, res) => {
    const id = Number(req.params.id);
    const { is_available } = req.body;
    if (isNaN(id)) {
        return res.status(400).json({ error: "Invalid ID format" });
    }
    try {
        const data = await prisma.book.update({
            where: { id: id },
            data: {
                is_available: is_available ?? false,
            },
        });
        return res.status(200).json({
            message: "Book updated successfully",
            data,
        });
    }
    catch (error) {
        if (error.code === "P2025") {
            return res.status(404).json({ error: `Book with id ${id} not found` });
        }
        console.error("Update Error:", error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
});
Router.delete("/books/:id", async (req, res) => {
    const id = Number(req.params.id);
    if (isNaN(id)) {
        return res.status(400).json({ error: "Invalid ID format" });
    }
    try {
        const deleted = await prisma.book.delete({
            where: { id },
        });
        return res.status(200).json({
            message: "Record deleted successfully!",
            data: deleted,
        });
    }
    catch (e) {
        if (e.code === "P2025") {
            return res.status(404).json({ error: "Book not found" });
        }
        console.error("Delete Error:", e);
        return res.status(500).json({ error: "Internal Server error" });
    }
});
export default Router;
//# sourceMappingURL=books.route.js.map