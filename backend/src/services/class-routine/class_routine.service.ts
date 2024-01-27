import { PrismaClient } from '@prisma/client';
import { TDayRoutine, TDayRoutineWithId } from './@types/index.ts';

const client = new PrismaClient();

export async function getDayRoutine(id: string) {
	try {
		const dayRoutine = await client.dayRoutine.findFirst({
			where: { id },
		});
		return dayRoutine;
	} catch (error: unknown) {
		if (error instanceof Error) {
			throw error;
		} else {
			throw new Error(`error getting a day routine with id: ${id} `);
		}
	}
}

export async function getDayRoutines(id: string) {
	try {
		const dayRoutines = await client.dayRoutine.findMany({
			where: { weekRoutineId: id },
		});
		return dayRoutines;
	} catch (error: unknown) {
		if (error instanceof Error) {
			throw error;
		} else {
			throw new Error(`error getting day routines with weekRoutine id: ${id} `);
		}
	}
}

export async function addDayRoutine(dayRoutine: TDayRoutine) {
	try {
		const addDayRoutine = await client.dayRoutine.create({ data: dayRoutine });
		if (!addDayRoutine) {
			throw new Error('routine could not be created');
		}
		return addDayRoutine;
	} catch (error: unknown) {
		if (error instanceof Error) {
			throw error;
		} else {
			throw new Error('error adding class day routine');
		}
	}
}

export async function updateDayRoutine(dayRoutine: TDayRoutineWithId) {
	try {
		const updatedDayRoutine = await client.dayRoutine.update({
			where: { id: dayRoutine.id },
			data: dayRoutine,
		});
		if (!updatedDayRoutine) {
			throw new Error(`error updating dayRoutine of id:${dayRoutine.id}`);
		}
		return updatedDayRoutine;
	} catch (error: unknown) {
		if (error instanceof Error) {
			throw error;
		} else {
			throw new Error(
				`error uodating a routine with dayRoutine id: ${dayRoutine.id} `,
			);
		}
	}
}
export async function deleteDayRoutine(id: string) {
	try {
		const dayRoutine = await client.dayRoutine.findUnique({ where: { id } });
		if (!dayRoutine) {
			throw new Error(`DayRoutine with id:${id} does not exist`);
		}
		const deletedDayRoutine = await client.dayRoutine.delete({ where: { id } });
		if (!deletedDayRoutine) {
			throw new Error(`DayRoutine with id:${id} was not deleted`);
		}
		return true;
	} catch (error: unknown) {
		if (error instanceof Error) {
			throw error;
		} else {
			throw new Error(`error deleting day routine with dayRoutine id: ${id} `);
		}
	}
}

export async function deleteWeekRoutine(id: string) {
	try {
		const weekRoutine = await client.weekRoutine.findUnique({ where: { id } });
		if (!weekRoutine) {
			throw new Error(`DayRoutine with id:${id} does not exist`);
		}
		const deletedWeekRoutine = await client.weekRoutine.delete({ where: { id } });
		if (!deletedWeekRoutine) {
			throw new Error(`WeekRoutine with id:${id} was not deleted`);
		}
		return true;
	} catch (error: unknown) {
		if (error instanceof Error) {
			throw error;
		} else {
			throw new Error(`error deleting day routines with weekRoutine id: ${id} `);
		}
	}
}
