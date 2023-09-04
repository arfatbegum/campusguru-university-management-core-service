import { IGenericErrorMessage } from '../interfaces/error';

const handleCastError = (error: any) => {
  const errors: IGenericErrorMessage[] = [
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

export default handleCastError;
