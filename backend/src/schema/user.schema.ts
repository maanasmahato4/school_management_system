import { object, string } from 'zod';

export const signUpSchemaObject = object({
	body: object({
		username: string({
			required_error: 'username is required',
		}).min(6, 'username must be at least 6 characters'),
		email: string({
			required_error: 'email is required',
		}).email('not a valid email'),
		password: string({
			required_error: 'password is required',
		}).min(8, 'password must be atleast 8 characters'),
		confirmPassword: string({
			required_error: 'confirm password is required',
		}).min(8, 'password must be  atleast 8 characters long'),
		role: string({
			required_error: 'role is required',
		}),
	}).refine(data => data.password === data.confirmPassword, {
		message: 'passwords do not match',
		path: ['confirmPassword'],
	}),
});

export const signInSchemaObject = object({
	body: object({
		email: string({
			required_error: 'email is required',
		}).email('not a valid email'),
		password: string({
			required_error: 'password is required',
		}).min(8, 'password must be atleast 8 characters long'),
		confirmPassword: string({
			required_error: 'confirmPassword is required',
		}).min(8, 'confirmPassword must be atleast 8 characters long'),
	}).refine(data => data.password === data.confirmPassword, {
		message: 'password do not match',
		path: ['confirmPassword'],
	}),
});

export const deleteUserSchemaObject = object({
	params: object({
		id: string({
			required_error: 'user id is required',
		}),
	}),
});