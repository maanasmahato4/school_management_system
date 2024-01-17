export type TUser = {
	id: string;
	username: string;
	email: string;
	password: string;
	role: string;
	profileId: string | null;
	profile?: TProfile;
};

export type TProfile = {
	id: string;
	userId: string | null;
	user?: TUser;
	dob: string | null;
	age: number | null;
	class: string | null;
	section: string | null;
	faculty: string | null;
	subject: string | null;
};

export type TSignUp = Omit<TUser, 'id' | 'profileId' | 'profile'>;

export type TSignIn = Omit<
	TUser,
	'id' | 'username' | 'role' | 'profileId' | 'profile'
>;
