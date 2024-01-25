import { PrismaClient } from '@prisma/client';
import { addDayRoutine, getDayRoutine } from '../class_routine.service';
import { TDayRoutine, TDayRoutineWithId } from '../@types';

const client = new PrismaClient();

describe('testing class routin functions', () => {
	let dayRoutineId: string;
	let weekRoutineId: string;
	afterAll(async () => {
		if (dayRoutineId) {
			await client.dayRoutine.delete({ where: { id: dayRoutineId } });
		}
		if (weekRoutineId) {
			await client.dayRoutine
				.deleteMany({ where: { weekRoutineId } })
				.then(async () => {
					await client.weekRoutine.delete({ where: { id: weekRoutineId } });
				});
		}
		await client.$disconnect();
	});

	test('add new dayRoutine', async () => {
		const dummyWeekRoutine = { faculty: 'science' };
		const weekRoutine = await client.weekRoutine.create({
			data: dummyWeekRoutine,
		});
		weekRoutineId = weekRoutine.id;
		const dummyData: TDayRoutine = {
			weekRoutineId: weekRoutine.id,
			day: 'sunday',
			subject1: 'physcis',
			subject2: 'chemistry',
			subject3: 'maths',
		};
		const dayRoutine: TDayRoutineWithId = await addDayRoutine(dummyData);
		const { id, ...restDayRoutine } = dayRoutine;
		dayRoutineId = id;
		expect(restDayRoutine).toEqual(dummyData);
	});

	test('get day routine of an id', async () => {
		const dayRoutine = await getDayRoutine(dayRoutineId);
		expect(dayRoutine).toBeDefined();
	});
});
