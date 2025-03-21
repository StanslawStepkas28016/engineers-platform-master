import express from "express";
import cors from "cors";
import "dotenv/config";
import {AppDataSource} from "./config/data-source";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/authRoutes";
import {errorMiddleware} from "./middlewares/errorMiddleware";

const app = express();

// Use JSON
app.use(express.json());

// Use cookieParser
app.use(cookieParser());

// Use cors
app.use(
    cors({
        origin: process.env.ORIGIN,
        credentials: true,
    })
);

// Routes
app.use("/api/auth", authRoutes);

// Middlewares
app.use(errorMiddleware);

// Initialize the data source
AppDataSource.initialize()
    .then(async () => {
        await AppDataSource.runMigrations();
    })
    .catch((err) => {
        console.error(err);
    });

// Start the server
app.listen(
    process.env.SERVER_PORT || 3000, async () => {
        console.log(`Server started on port ${process.env.SERVER_PORT || 3000}`);
    }
);