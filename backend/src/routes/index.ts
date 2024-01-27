import { Router } from 'express';

import {
	RegisterUser,
	SignIn,
	SignOut,
	UpdateUserProfile,
	DeleteUser,
} from '../authentication/auth.controller.ts';

import {
	DayRoutines,
	AddDayRoutine,
	UpdateDayRoutine,
	DeleteDayRoutine,
	DeleteWeekRoutine,
} from '../panels/teacher/teacher-panel.controller.ts';

import validateResource from '../middlewares/validateResource.middleware.ts';

import {
	deleteUserSchemaObject,
	signInSchemaObject,
	signUpSchemaObject,
} from '../schema/user.schema.ts';

import {
	dayRoutineSchemaObject,
	updateDayRoutineSchemaObject,
	getDayRoutinesSchemaObject,
	deleteWeekRoutineSchemaObject,
	deleteDayRoutineSchemaObject,
} from '../schema/routine.schema.ts';

import validateJWT from '../middlewares/validateJWT.ts';
import verifyRole from '../middlewares/verifyRole.ts';
import { Role } from '../enums/roles.enum.ts';

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

// class routine
router
	.get(
		'/class-routine',
		validateResource(getDayRoutinesSchemaObject),
		DayRoutines,
	)
	.post(
		'/class-routine',
		validateResource(dayRoutineSchemaObject),
		AddDayRoutine,
	)
	.put(
		'/class-routine/:id',
		validateResource(updateDayRoutineSchemaObject),
		UpdateDayRoutine,
	)
	.delete(
		'/class-routine/day/:id',
		validateResource(deleteDayRoutineSchemaObject),
		DeleteDayRoutine,
	)
	.delete(
		'/class-routine/week',
		validateResource(deleteWeekRoutineSchemaObject),
		DeleteWeekRoutine,
	);


export default router;
