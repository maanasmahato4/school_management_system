import { object, string } from 'zod';

export const dayRoutineSchemaObject = object({
	body: object({
		weekRoutineId: string({
			required_error: 'week routine id is required',
		}),
		day: string({
			required_error: 'day is required',
		}),
		subject1: string({
			required_error: 'subject 1 is requried',
		}),
		subject2: string({
			required_error: 'subject 2 is required',
		}),
		subject3: string({
			required_error: 'subject is required',
		}),
	}),
});

export const updateDayRoutineSchemaObject = dayRoutineSchemaObject.extend({
	body: object({
		id: string({
			required_error: 'id of the dayRoutine is required',
		}),
	}),
});

export const getDayRoutinesSchemaObject = object({
	params: object({
		id: string({
			required_error: 'class week routine id is required',
		}),
	}),
});

export const deleteWeekRoutineSchemaObject = getDayRoutinesSchemaObject;

export const deleteDayRoutineSchemaObject = object({
	params: object({
		id: string({
			required_error: 'class day routine id is required',
		}),
	}),
});
