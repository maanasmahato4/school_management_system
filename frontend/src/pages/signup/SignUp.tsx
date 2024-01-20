import { useState } from 'react';
import { Button, Container, TextInput, Alert } from '@mantine/core';
import { TUser } from './@types';
import ValidateFields from '../../helpers/validateForms/ValidateUserForm';
import { IconInfoCircle } from '@tabler/icons-react';

const SignUp = () => {
	const [formErrors, setFormErrors] = useState<Record<string, string | null>>({
		username: null,
		email: null,
		password: null,
		confirmPassword: null,
		role: null,
	});
	const [userSignUpCreds, setUserSignUpCreds] = useState<TUser>({
		username: '',
		email: '',
		password: '',
		confirmPassword: '',
		role: 'user',
	});

	function handleSignUpFormChange(e: React.FormEvent<HTMLInputElement>) {
		const target = e.target as HTMLInputElement;
		setUserSignUpCreds({ ...userSignUpCreds, [target.name]: target.value });
	}

	function handleFormSubmit(e: React.FormEvent) {
		e.preventDefault();
		const errors: Record<string, string> = ValidateFields(userSignUpCreds);
		setFormErrors(errors);
		if (Object.keys(errors).length === 0) {
			console.log(userSignUpCreds);
			setUserSignUpCreds({
				username: '',
				email: '',
				password: '',
				confirmPassword: '',
				role: 'user',
			});
		}
	}
	return (
		<Container>
			<form onSubmit={handleFormSubmit}>
				<TextInput
					label="Username"
					name="username"
					type="text"
					placeholder="johndoe"
					value={userSignUpCreds.username}
					onChange={handleSignUpFormChange}
					required
				/>
				{formErrors.username && (
					<Alert variant="filled" color="red">
						{formErrors.username}
					</Alert>
				)}
				<TextInput
					label="Email"
					name="email"
					placeholder="johndoe@gmail.com"
					value={userSignUpCreds.email}
					onChange={handleSignUpFormChange}
					required
				/>
				{formErrors.email && (
					<Alert variant="filled" color="red" icon={<IconInfoCircle />}>
						{formErrors.email}
					</Alert>
				)}
				<TextInput
					label="Password"
					name="password"
					type="password"
					value={userSignUpCreds.password}
					onChange={handleSignUpFormChange}
					required
				/>
				{formErrors.password && (
					<Alert variant="filled" color="red">
						{formErrors.password}
					</Alert>
				)}
				<TextInput
					label="Confirm Password"
					name="confirmPassword"
					type="password"
					value={userSignUpCreds.confirmPassword}
					onChange={handleSignUpFormChange}
					required
				/>
				{formErrors.confirmPassword && (
					<Alert variant="filled" color="red">
						{formErrors.confirmPassword}
					</Alert>
				)}
				<Button style={{ marginBlock: '0.7rem' }} type="submit">
					Sign Up
				</Button>
			</form>
		</Container>
	);
};

export default SignUp;
