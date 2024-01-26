import { Router } from 'express';
import {
	RegisterUser,
	SignIn,
	SignOut,
	UpdateUserProfile,
	DeleteUser,
} from '../authentication/auth.controller.js';
import validateResource from '../middlewares/validateResource.middleware.js';
import {
	deleteUserSchemaObject,
	signInSchemaObject,
	signUpSchemaObject,
} from '../schema/user.schema.js';
import validateJWT from '../middlewares/validateJWT.js';
import verifyRole from '../middlewares/verifyRole.js';
import { Role } from '../enums/roles.enum.js';

const router = Router();

// authentication
router
	.post('/auth/register', validateResource(signUpSchemaObject), RegisterUser)
	.post('/auth/signin', validateResource(signInSchemaObject), SignIn)
	.post('/auth/logout', validateJWT, SignOut)
	.patch('/auth/user/:id', validateJWT, UpdateUserProfile)
	.delete(
		'/auth/user/:id',
		validateJWT,
		verifyRole([Role.ADMIN]),
		validateResource(deleteUserSchemaObject),
		DeleteUser,
	);

export default router;
