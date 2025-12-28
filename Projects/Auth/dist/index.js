import express from "express";
import { configDotenv } from "dotenv";
const app = express();
const PORT = Number(process.env.PORT);
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});
//# sourceMappingURL=index.js.map