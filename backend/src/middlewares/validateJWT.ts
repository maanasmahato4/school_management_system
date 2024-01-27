import { Request, Response, NextFunction } from 'express';
import { verifyJWT } from '../utils/jsonwebtoken.generator.ts';
import logger from '../shared/logger.ts';
import { JwtPayload } from 'jsonwebtoken';

export interface RequestWithUserCreds extends Request {
	user?: { id: string; email: string; role: string } | JwtPayload;
	role?: string;
}

export default async function validateJWT(
	req: RequestWithUserCreds,
	res: Response,
	next: NextFunction,
) {
	try {
		let authorization = req.headers.authorization || req.headers.Authorization;
		if (!authorization) {
			return res.sendStatus(403);
		}
		if (Array.isArray(authorization)) {
			authorization = authorization[0];
		}
		const access_token = authorization.split(' ')[1];
		const verificationResult = await verifyJWT(access_token);
		if (!verificationResult.success) {
			return res.sendStatus(403);
		}
		req.user = verificationResult.userCreds;
		req.role = verificationResult.userCreds.role;
		next();
	} catch (error) {
		logger.error(error);
		return res.status(500).json({ success: false, error });
	}
}
