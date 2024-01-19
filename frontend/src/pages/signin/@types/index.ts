import { TUser } from '../../signup/@types';

export type TSignInUser = Omit<TUser, 'username'>;
