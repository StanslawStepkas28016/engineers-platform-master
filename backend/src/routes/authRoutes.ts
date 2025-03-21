// Router is like a restaurant menu you pick from it,
// then you call the waiter (controller)
import express from "express";
import {AuthRepository} from "../repositories/authRepository";
import {AuthService} from "../services/authService";
import {AuthController} from "../controllers/authController";
import {AppDataSource} from "../config/data-source";
import "express-async-errors";

const router = express.Router();

const authRepository = new AuthRepository(AppDataSource);
const authService = new AuthService(authRepository);
const authController = new AuthController(authService);

router.post('/register', authController.register);

export default router;
