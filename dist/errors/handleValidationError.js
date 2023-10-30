"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const handleValidationError = (query) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield query;
        // If the query succeeds, return the result
        return result;
    }
    catch (error) {
        // Handle Prisma validation errors here
        if (error instanceof Error && error.message.includes('Validation error')) {
            const validationErrors = [
                {
                    path: 'Validation Error',
                    message: error.message,
                },
            ];
            const statusCode = 400;
            return {
                statusCode,
                message: 'Validation Error',
                errorMessages: validationErrors,
            };
        }
        else {
            // Handle other errors here
            throw error;
        }
    }
});
exports.default = handleValidationError;
