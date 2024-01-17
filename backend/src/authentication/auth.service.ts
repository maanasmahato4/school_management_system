import { PrismaClient } from '@prisma/client';
import { TUser, TProfile, TSignUp, TSignIn } from './@types';
import { comparePasswords, hashPassword } from '../utils/bcrypt';
import { generateAccessToken } from '../utils/jsonwebtoken.generator';

const client = new PrismaClient();

export async function findByEmail(email: string): Promise<TUser | null> {
	try {
		const emailExist = await client.user.findUnique({
			where: {
				email: email,
			},
		});
		return emailExist;
	} catch (error: unknown) {
		if (error instanceof Error) {
			throw new Error(error.toString());
		} else {
			throw new Error('somethng went wrong at findByEmail');
		}
	}
}

export async function createUser(user: TSignUp): Promise<string> {
	try {
		const userExists = await findByEmail(user.email);
		if (userExists) {
			throw new Error('user already exists');
		}
		const newProfile: TProfile = await client.profile.create({
			data: {},
		});

		if (!newProfile) {
			throw new Error('user profile could not be created');
		}

		const newUser: TUser = await client.user.create({
			data: {
				username: user.username,
				email: user.email,
				password: await hashPassword(user.password),
				role: user.role,
				profileId: newProfile.id,
			},
		});

		if (!newUser) {
			throw new Error('new user could not be created');
		}

		const { id, email, role } = newUser;
		const access_token = generateAccessToken({ id, email, role });
		if (!access_token) {
			throw new Error('Access token could not be generated');
		}
		return access_token;
	} catch (error: unknown) {
		if (error instanceof Error) {
			throw new Error(error.toString());
		} else {
			throw new Error('Something went wrong at createUser');
		}
	}
}

export async function signin(user: TSignIn): Promise<string> {
	try {
		const userExist = await findByEmail(user.email);
		if (!userExist) {
			throw new Error('user does not exist');
		}
		const passwordMatched = await comparePasswords(
			user.password,
			userExist.password,
		);
		if (!passwordMatched) {
			throw new Error('passwords do not match');
		}

		const { id, email, role } = userExist;
		const access_token = generateAccessToken({ id, email, role });
		return access_token;
	} catch (error) {
		if (error instanceof Error) {
			throw new Error(error.toString());
		} else {
			throw new Error('something went wrong at signin');
		}
	}
}

export async function updateUser(user: Partial<TUser>) {
	try {
		const { id, profileId, profile, ...otherUpdates } = user;
		if (!profileId) {
			throw new Error('profileId is missing');
		}
		const updatedUser = client.user.update({
			where: { id: id },
			data: {
				...otherUpdates,
				profile: {
					update: profile,
				},
			},
			include: {
				profile: true,
			},
		});

		if (!updatedUser) {
			throw new Error('user profile not updated');
		}
		return updatedUser;
	} catch (error) {
		if (error instanceof Error) {
			throw new Error(error.toString());
		} else {
			throw new Error('something went wrong at updateUser');
		}
	}
}

export async function deleteUser(id: string): Promise<string> {
	try {
		const deletedUser = await client.user.delete({
			where: {
				id: id,
			},
		});
		const deletedProfile = await client.profile.delete({
			where: {
				userId: id,
			},
		});
		if (!deletedUser || !deletedProfile) {
			throw new Error('error while deleting user');
		}

		return `user with id: ${id} deleted`;
	} catch (error) {
		if (error instanceof Error) {
			throw new Error(error.toString());
		} else {
			throw new Error('something went wrong at deleteUser');
		}
	}
}
