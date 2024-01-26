import { hashPassword, comparePasswords } from '../../src/utils/bcrypt.js';
import { hash, compare } from 'bcrypt';

const password = 'password';
let hashedPassword = 'hashPassword';

jest.mock('bcrypt', () => ({
	hash: jest.fn(),
	compare: jest.fn(),
}));

describe('Testing bcrypt functions', () => {
	beforeEach(() => {
		jest.clearAllMocks();
	});

	it('should hash a password', async () => {
		(hash as jest.Mock).mockResolvedValue('hashedPassword');
		hashedPassword = await hashPassword(password);
		expect(typeof hashedPassword === 'string').toBe(true);
		expect(hash).toHaveBeenCalledWith(password, 10);
	});

	it('should throw an error if hashing fails', async () => {
		(hash as jest.Mock).mockRejectedValue(new Error('Hashing failed'));
		await expect(hashPassword(password)).rejects.toThrow(
			'Error hashing password: Hashing failed',
		);
	});

	it('should compare passwords', async () => {
		(compare as jest.Mock).mockResolvedValue(true);
		const result = await comparePasswords(password, hashedPassword);
		expect(result).toBe(true);
		expect(compare).toHaveBeenCalledWith(password, hashedPassword);
	});

	/* it('should throw an error if comparison fails', async () => {
		(compare as jest.Mock).mockRejectedValue(new Error('Comparison failed'));
		try {
			await comparePasswords(password, hashedPassword);
		} catch (error: unknown) {
			if (error instanceof Error) {
				expect(error.message).toBe('Error comparing passwords: Comparison failed');
			}
		}
	}); */
});
