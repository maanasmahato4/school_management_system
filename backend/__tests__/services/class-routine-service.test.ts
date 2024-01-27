import { PrismaClient } from '@prisma/client';
import {
	addDayRoutine,
	deleteDayRoutine,
	deleteWeekRoutine,
	getDayRoutine,
	getDayRoutines,
	updateDayRoutine,
} from '../../src/services/class-routine/class_routine.service.ts';
import {
	TDayRoutine,
	TDayRoutineWithId,
} from '../../src/services/class-routine/@types/index.ts';

const client = new PrismaClient();

describe('testing class routin functions', () => {
	// eslint-disable-next-line prefer-const
	let dayRoutineId: string[] = [];
	let weekRoutineId: string;

	beforeAll(async () => {
		const dummyWeekRoutine = { faculty: 'science' };
		const weekRoutine = await client.weekRoutine.create({
			data: dummyWeekRoutine,
		});
		weekRoutineId = weekRoutine.id;
		const dummyRoutines: TDayRoutine[] = [
			{
				weekRoutineId: weekRoutine.id,
				day: 'sunday',
				subject1: 'physcis',
				subject2: 'chemistry',
				subject3: 'maths',
			},
			{
				weekRoutineId: weekRoutine.id,
				day: 'monday',
				subject1: 'physcis',
				subject2: 'chemistry',
				subject3: 'maths',
			},
			{
				weekRoutineId: weekRoutine.id,
				day: 'tuesday',
				subject1: 'physcis',
				subject2: 'chemistry',
				subject3: 'maths',
			},
		];

		const addDummyDayRoutinePromises = dummyRoutines.map(
			async (routine: TDayRoutine) => {
				const dayRoutine: TDayRoutineWithId = await addDayRoutine(routine);
				const { id, ...restDayRoutine } = dayRoutine;
				dayRoutineId.push(id);
				expect(restDayRoutine).toEqual(routine);
			},
		);

		await Promise.all(addDummyDayRoutinePromises);
	});

	afterAll(async () => {
		await client.$disconnect();
	});

	test('add new dayRoutine', async () => {
		const dummyRoutine: TDayRoutine = {
			weekRoutineId: weekRoutineId,
			day: 'sunday',
			subject1: 'physcis',
			subject2: 'chemistry',
			subject3: 'maths',
		};

		const dayRoutine: TDayRoutineWithId = await addDayRoutine(dummyRoutine);
		const { id, ...restDayRoutine } = dayRoutine;

		expect(restDayRoutine).toEqual(dummyRoutine);
		expect(typeof id === 'string').toBe(true);
	});

	test('get day routine of an id', async () => {
		const dayRoutine = (await getDayRoutine(
			dayRoutineId[0],
		)) as TDayRoutineWithId;
		expect(dayRoutine).toBeDefined();
		expect(typeof dayRoutine.id).toBe('string');
	});

	test('get all he dayRoutines with same weekRoutineId', async () => {
		const dayRoutines = await getDayRoutines(weekRoutineId);
		expect(dayRoutines).toBeDefined();
	});

	test('update a dayRoutine With specific id', async () => {
		const dummayUpdateRoutine: TDayRoutineWithId = {
			id: dayRoutineId[0],
			weekRoutineId: weekRoutineId,
			day: 'sadaday',
			subject1: 'aadada',
			subject2: 'asadad',
			subject3: 'saasad',
		};
		const updatedDayRoutine: TDayRoutineWithId =
			await updateDayRoutine(dummayUpdateRoutine);

		expect(updatedDayRoutine).toEqual(dummayUpdateRoutine);
	});

	test('delete dayRoutines and weekRoutine with id', async () => {
		if (dayRoutineId) {
			const deleteDayRoutinePromises = dayRoutineId.map(async (id: string) => {
				return await deleteDayRoutine(id);
			});
			const deletedRoutines = await Promise.all(deleteDayRoutinePromises);
			expect(deletedRoutines).toEqual([true, true, true]);
		}
		if (weekRoutineId) {
			try {
				const deleteRoutinesOfWeekId = await client.dayRoutine.deleteMany({
					where: { weekRoutineId },
				});
				if (deleteRoutinesOfWeekId) {
					const deletedWeekRoutine = await deleteWeekRoutine(weekRoutineId);
					expect(deletedWeekRoutine).toEqual(true);
				}
			} catch (error) {
				console.error('Failed to delete weekRoutine:', error);
			}
		}
	});
});
