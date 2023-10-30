"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const handleCastError = (error) => {
    const errors = [
        {
            path: error.path || 'unknown',
            message: error.message || 'Unknown error',
        },
    ];
    const statusCode = 400; // Set an appropriate status code
    return {
        statusCode,
        message: 'Prisma Error',
        errorMessages: errors,
    };
};
exports.default = handleCastError;
