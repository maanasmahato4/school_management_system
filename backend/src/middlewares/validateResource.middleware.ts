import { Request, Response, NextFunction } from 'express';
import { AnyZodObject } from 'zod';

const validateResource =
	(schema: AnyZodObject) =>
	(req: Request, res: Response, next: NextFunction): void | Response => {
		try {
			schema.parse({
				body: req.body,
				query: req.query,
				params: req.params,
			});
			next();
		} catch (error: unknown) {
			if (error instanceof Error) {
				return res.status(400).json(error);
			} else {
				return res
					.status(400)
					.json({ error: 'error while validating resource from the request' });
			}
		}
	};

export default validateResource;
