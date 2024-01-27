import { Response, NextFunction } from 'express';
import { RequestWithUserCreds } from './validateJWT.ts';

export default function verifyRole(allowedRoles: string[]) {
	return (
		req: RequestWithUserCreds,
		res: Response,
		next: NextFunction,
	) => {
		const userRole = req.role || 'user';
		const matched = allowedRoles.includes(userRole);
		if (!matched) {
			return res.sendStatus(403);
		}
		next();
	};
}
