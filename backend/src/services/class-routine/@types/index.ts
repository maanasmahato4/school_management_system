export type TDayRoutine = {
	weekRoutineId: string;
	day: string;
	subject1: string;
	subject2: string;
	subject3: string;
};

export type TDayRoutineWithId = TDayRoutine & {
	id: string;
};

export type TWeekRoutine = {
	id: string;
	dayRoutines: TDayRoutineWithId[];
};
