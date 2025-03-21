import "reflect-metadata"
import {DataSource} from "typeorm"
import dotenv from "dotenv";

dotenv.config()

export const AppDataSource = new DataSource({
    type: "mssql",
    port: Number(process.env.DB_PORT),
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    synchronize: false, // true only for development - overrides tables, must be false for production
    logging: false,
    options: {encrypt: false},
    entities: [__dirname + "../../entities/*.ts"],
    migrations: [__dirname + "../../migrations/*.ts"],
    subscribers: [],
})