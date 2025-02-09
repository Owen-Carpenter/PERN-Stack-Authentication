import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pool from "./database/pool.js";
import authRoutes from "./routes/auth.js"
import registerRoutes from "./routes/register.js"

dotenv.config();
const PORT = process.env.PORT;

const app = express();
app.use(express.json());
app.use(cors());

app.use('/auth', authRoutes);
app.use('/register', registerRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})