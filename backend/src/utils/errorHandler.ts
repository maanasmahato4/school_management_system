import { ErrorRequestHandler, Request, Response } from 'express';
import logger from '../shared/logger';

export async function errorHandler(
	err: ErrorRequestHandler,
	req: Request,
	res: Response,
) {
	logger.error(err);
	return res.status(200).json({ success: false, error: err });
}
