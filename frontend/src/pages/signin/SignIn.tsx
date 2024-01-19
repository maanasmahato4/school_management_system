import { Alert, Button, Container, TextInput } from '@mantine/core';
import React, { FormEvent, useState } from 'react';
import { IconInfoCircle } from '@tabler/icons-react';
import ValidateFields from '../../helpers/validateForms/ValidateUserForm';
import { TSignInUser } from './@types';

const SignIn: React.FC = () => {
	const [formErrors, setFormErrors] = useState<Record<string, string>>({
		email: '',
		password: '',
		confirmPassword: '',
	});
	const [signInUserCreds, setSignInUserCreds] = useState<TSignInUser>({
		email: '',
		password: '',
		confirmPassword: '',
	});
	function handleChange(e: FormEvent<HTMLInputElement>) {
		const target = e.target as HTMLInputElement;
		setSignInUserCreds({ ...signInUserCreds, [target.name]: target.value });
	}
	function handleSubmit(e: FormEvent) {
		e.preventDefault();
		const errors = ValidateFields(signInUserCreds);
		setFormErrors(errors);
		if (Object.keys(errors).length === 0) {
			console.log(signInUserCreds);
			setSignInUserCreds({
				email: '',
				password: '',
				confirmPassword: '',
			});
		}
	}
	return (
		<Container>
			<form onSubmit={handleSubmit}>
				<TextInput
					label="Email"
					name="email"
					type="email"
					placeholder="johndoe@gmail.com"
					value={signInUserCreds.email}
					onChange={handleChange}
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
					type="confirmPassword"
					value={signInUserCreds.password}
					onChange={handleChange}
					required
				/>
				{formErrors.password && (
					<Alert variant="filled" color="red" icon={<IconInfoCircle />}>
						{formErrors.password}
					</Alert>
				)}
				<TextInput
					label="Confirm Password"
					name="confirmPassword"
					type="password"
					value={signInUserCreds.confirmPassword}
					onChange={handleChange}
					required
				/>
				{formErrors.confirmPassword && (
					<Alert variant="filled" color="red" icon={<IconInfoCircle />}>
						{formErrors.confirmPassword}
					</Alert>
				)}
				<Button type="submit" style={{ marginBlock: '0.7rem' }}>
					Submit
				</Button>
			</form>
		</Container>
	);
};

export default SignIn;
