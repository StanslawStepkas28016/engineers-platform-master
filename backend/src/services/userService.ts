// Services
// Contain business logic for each domain area (e.g., userService handles user registration, authentication, etc.).
// Services call repositories for data operations.
// A service might also call external services like Cloudinary (though you can keep that in a separate “provider” or
// “utils” file if it’s used by multiple services).