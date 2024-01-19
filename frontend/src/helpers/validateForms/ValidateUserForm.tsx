import { TUser } from '../../pages/signup/@types';
import { TSignInUser } from '../../pages/signin/@types';

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

function ValidateFields(
	userCreds: TUser | TSignInUser,
): Record<string, string> {
	const errors: Record<string, string> = {};
	if ('username' in userCreds) {
		if ((userCreds as TUser).username.length < 6) {
			errors.username = 'username must be atleast 6 characters long';
		}
	}

	if (!EMAIL_REGEX.test(userCreds.email)) {
		errors.email = 'not a valid email';
	}

	if (userCreds.password.length < 8) {
		errors.password = 'password must be at least 8 characters long';
	}

	if (userCreds.password !== userCreds.confirmPassword) {
		errors.confirmPassword = 'passwords do not match';
	}

	return errors;
}

export default ValidateFields;
