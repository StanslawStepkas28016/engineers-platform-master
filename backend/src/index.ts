import express from "express";
import "dotenv/config";
import testRoutes from "./routes/userRoutes";
import {AppDataSource} from "./config/data-source";

const app = express();

app.use("/api/users", testRoutes);

AppDataSource.initialize()
    .then(async () => {
        await AppDataSource.runMigrations();
        app.listen(
            process.env.SERVER_PORT || 3000, async () => {
                console.log(`Server started on port ${process.env.SERVER_PORT || 3000}`);
            }
        );
    })
    .catch((err) => {
        console.error(err);
    });