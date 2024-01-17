import { Router } from 'express';
import {
	RegisterUser,
	SignIn,
	SignOut,
	UpdateUserProfile,
	DeleteUser,
} from '../authentication/auth.controller';
import validateResource from '../middlewares/validateResource.middleware';
import {
	deleteUserSchemaObject,
	signInSchemaObject,
	signUpSchemaObject,
} from '../schema/user.schema';
import validateJWT from '../middlewares/validateJWT';
import verifyRole from '../middlewares/verifyRole';
import { Role } from '../enums/roles.enum';

const router = Router();

// authentication
router
	.post('/auth/register', validateResource(signUpSchemaObject), RegisterUser)
	.post('/auth/signin', validateResource(signInSchemaObject), SignIn)
	.post('/auth/logout', validateJWT, SignOut)
	.patch('/auth/user/:id', validateJWT, UpdateUserProfile)
	.delete('/auth/user/:id', validateJWT, verifyRole([Role.ADMIN]), validateResource(deleteUserSchemaObject), DeleteUser);

export default router;
