import { NextFunction, Request, Response } from "express";

export const errorMiddleware = (err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error('Error caught by error middleware:', err.message);

    // Custom errors
    if (err.name === 'ArgumentError') {
        res.status(400).json({
            statusCode: 400,
            message: 'Error caused by incorrect arguments.',
            exceptionMessage: err.message,
        });
        return;
    }

    // Default error
    res.status(500).json({
        statusCode: 500,
        message: 'Internal Server Error from custom middleware.',
        exceptionMessage: err.message,
    });
};