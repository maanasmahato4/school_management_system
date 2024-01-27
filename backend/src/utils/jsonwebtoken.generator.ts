import jwt, { JsonWebTokenError, JwtPayload } from 'jsonwebtoken';
import config from 'config';
import { TUser } from '../authentication/@types/index.ts';

const ACCESS_TOKEN_SECRET = config.get<string>('ACCESS_TOKEN_SECRET');
const REFRESH_TOKEN_SECRET = config.get<string>('REFRESH_TOKEN_SECRET');

export type TUserCreds = Omit<
	TUser,
	'username' | 'password' | 'profileId' | 'profile'
>;

export function generateAccessToken(user: TUserCreds): string {
	try {
		const generatedToken = jwt.sign(user, ACCESS_TOKEN_SECRET, {
			expiresIn: '1d',
			algorithm: 'HS256',
		});
		if (!generatedToken) {
			throw new Error('error while generating access token');
		}
		return generatedToken;
	} catch (error) {
		if (error instanceof JsonWebTokenError) {
			throw new Error(error.message);
		} else {
			throw new Error('error while generating access token');
		}
	}
}

export function generateRefreshToken(user: TUserCreds): string {
	try {
		const generatedToken = jwt.sign(user, REFRESH_TOKEN_SECRET, {
			expiresIn: '1d',
			algorithm: 'ES256',
		});
		if (!generatedToken) {
			throw new Error('error while generating refresh token');
		}
		return generatedToken;
	} catch (error) {
		if (error instanceof JsonWebTokenError) {
			throw new Error(error.message);
		} else {
			throw new Error('error while generating refresh token');
		}
	}
}

export async function verifyJWT(
	token: string,
): Promise<{ success: boolean; userCreds: TUserCreds | JwtPayload }> {
	return new Promise((resolve, reject) => {
		jwt.verify(
			token,
			ACCESS_TOKEN_SECRET,
			{ algorithms: ['HS256'], complete: true },
			(err: unknown, decoded: TUserCreds | JwtPayload | undefined) => {
				if (err) {
					reject(err);
				} else if (typeof decoded === 'string') {
					reject(new Error('Decoded token is a string, not an object'));
				} else if (decoded === undefined) {
					reject(new Error('Decoded token is undefined'));
				} else if ('id' in decoded && 'email' in decoded && 'role' in decoded) {
					resolve({ success: true, userCreds: decoded });
				} else {
					reject(new Error('Decoded token does not match expected format'));
				}
			},
		);
	});
}
