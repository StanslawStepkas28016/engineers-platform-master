// Services
// Contain business logic for each domain area (e.g., userService handles user registration, authentication, etc.).
// Services call repositories for data operations.
// A service might also call external services like Cloudinary (though you can keep that in a separate “provider” or
// “utils” file if it’s used by multiple services).
import {AuthRepository} from "../repositories/authRepository";
import {isValidPhoneNumber} from "libphonenumber-js";
import Validators from "../utils/validators";

export class AuthService {
    private authRepository: AuthRepository;

    constructor(authRepository: AuthRepository) {
        this.authRepository = authRepository;
    }

    async register(username: string, email: string, phoneNumber: string,
                   firstName: string, lastName: string, password: string) {
        // Check fields for nulls
        if (!username || !email || !phoneNumber || !firstName || !lastName || !password) {
            throw new Error("All fields are required!");
        }

        // Check if a user with specified username already exists
        const userByUsername = await this.authRepository.findUserByUsername(username);

        if (userByUsername) {
            throw new Error("User with the specified username already exists!");
        }

        // Validate email
        if(!Validators.isValidEmail(email)) {
            throw new Error("Specified email is invalid!");
        }

        // Validate phoneNumber
        if (!isValidPhoneNumber(phoneNumber)) {
            throw new Error("Your phone number is invalid!");
        }

        // Check if the phoneNumber is already taken
        const number = await this.authRepository.findPhoneNumber(phoneNumber);

        if (number) {
            throw new Error("Specified phone number is already associated with an existing User!");
        }

        // Call mail service to send the email

        // Store data in database

        // Return newly created user without register confirmation flag

        // return an actual object
        return {};
    }


}