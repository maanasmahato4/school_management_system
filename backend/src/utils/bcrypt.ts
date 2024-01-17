import { hash, compare } from 'bcrypt';

export async function hashPassword(password: string): Promise<string> {
	try {
		const saltRounds = 10;
		const hashedPassword = await hash(password, saltRounds);
		return hashedPassword;
	} catch (error: unknown) {
		if (error instanceof Error) {
			throw new Error(`Error hashing password: ${error.message}`);
		} else {
			throw new Error('Unknown error hashing password');
		}
	}
}

export async function comparePasswords(
	password: string,
	hashedPassword: string,
): Promise<boolean> {
	try {
		const match = await compare(password, hashedPassword);
		return match;
	} catch (error) {
		if (error instanceof Error) {
			throw new Error(`Error hashing password: ${error.message}`);
		} else {
			throw new Error('Unknown error comparing passwords');
		}
	}
}
