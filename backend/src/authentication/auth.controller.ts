import { Request, Response } from 'express';
import { createUser, signin, updateUser, deleteUser } from './auth.service';
import logger from '../shared/logger';

export async function RegisterUser(req: Request, res: Response) {
	try {
		const token = await createUser(req.body);
		res.cookie('jwt', token, {
			httpOnly: true,
			maxAge: 24 * 60 * 60 * 1000,
			secure: false,
			sameSite: 'lax',
			path: '/api',
		});
		return res.status(200).json({ success: true, access_token: token });
	} catch (error) {
		logger.error('RegisterUser Error', error);
		return res.status(500).json({ success: false, error });
	}
}

export async function SignIn(req: Request, res: Response) {
	try {
		const token = await signin(req.body);
		res.cookie('jwt', token, {
			httpOnly: true,
			maxAge: 24 * 60 * 60 * 1000,
			secure: false,
			sameSite: 'lax',
			path: '/api',
		});
		return res.status(200).json({ success: true, access_token: token });
	} catch (error) {
		logger.error('SignIn error', error);
		return res.status(500).json({ success: false, error });
	}
}

export async function SignOut(req: Request, res: Response) {
	try {
		const cookies = req.cookies;
		if (!cookies) {
			return res.status(404).json({ success: false, error: 'no cookie found' });
		}
		res.clearCookie('jwt', {
			httpOnly: true,
			path: '/api',
		});
		return res.status(200).json({ success: true, message: 'user signed out' });
	} catch (error) {
		logger.error('Signout error', error);
		return res.status(500).json({ success: false, error });
	}
}

export async function UpdateUserProfile(req: Request, res: Response) {
	try {
		const updatedUser = await updateUser(req.body);
		return res.status(200).json({ success: true, user: updatedUser });
	} catch (error) {
		logger.error('update user profile error', error);
		return res.status(500).json({ success: false, error });
	}
}

export async function DeleteUser(req: Request, res: Response) {
	try {
		const { id } = req.params;
		const deletedUser = await deleteUser(id);
		return res.status(200).json({ success: true, message: deletedUser });
	} catch (error) {
		logger.error('error while deleting user', error);
		return res.status(500).json({ success: false, error });
	}
}
