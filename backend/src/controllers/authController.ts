// Handle incoming HTTP requests and responses.
// Delegate the actual work to services.
// Remain as “thin” as possible—no heavy logic here.

// Controller is like a waiter you tell him what you want,
// and he tells the service what he will need

import {AuthService} from "../services/authService";
import express, {NextFunction} from "express";
import "express-async-errors";

export class AuthController {
    private authService: AuthService;

    constructor(authService: AuthService) {
        this.authService = authService;
    }

    register = async (req: express.Request, res: express.Response, next: NextFunction): Promise<void> => {
        const {username, email, phoneNumber, firstName, lastName, password} = req.body;

        const newUser = await this.authService.register(username, email, phoneNumber, firstName, lastName, password);

        res.status(200).json({message: "User successfully created", newUser: newUser})
    }
}

