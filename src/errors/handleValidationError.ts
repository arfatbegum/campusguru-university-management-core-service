/* eslint-disable @typescript-eslint/no-explicit-any */
import { IGenericErrorResponse } from '../interfaces/common';
import { IGenericErrorMessage } from '../interfaces/error';


const handleValidationError = async (
  query: Promise<any>
): Promise<IGenericErrorResponse> => {
  try {
    const result = await query;
    // If the query succeeds, return the result
    return result;
  } catch (error) {
    // Handle Prisma validation errors here
    if (error instanceof Error && error.message.includes('Validation error')) {
      const validationErrors: IGenericErrorMessage[] = [
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
    } else {
      // Handle other errors here
      throw error;
    }
  }
};

export default handleValidationError;
