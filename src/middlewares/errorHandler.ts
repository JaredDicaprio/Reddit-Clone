import { Request, Response } from 'express';
import { ErrorResponse } from '../utils/ErrorResponse';

const errorHandler = ( err: ErrorResponse, _: Request, res: Response ) =>
{
    let error = { ...err };
    error.message = err.message;

    return res.status( error.statusCode || 500 ).json( {
        success: false,
        error: error.message || 'Server Error',
    } );
};

export default errorHandler;
