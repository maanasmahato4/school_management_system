import { Request, Response } from 'express';
import {
	getDayRoutines,
	addDayRoutine,
	updateDayRoutine,
	deleteDayRoutine,
	deleteWeekRoutine,
} from '../../services/class-routine/class_routine.service.ts';

export async function DayRoutines(
	req: Request,
	res: Response,
): Promise<Response> {
	try {
		const { id } = req.params;
		const routines = await getDayRoutines(id);
		return res.status(200).json({ success: true, dayRoutines: routines });
	} catch (error) {
		return res.status(500).json(error);
	}
}

export async function AddDayRoutine(
	req: Request,
	res: Response,
): Promise<Response> {
	try {
		const dayRoutine = req.body;
		const addedRoutine = await addDayRoutine(dayRoutine);
		return res.status(200).json({ success: true, dayRoutine: addedRoutine });
	} catch (error) {
		return res.status(500).json(error);
	}
}

export async function UpdateDayRoutine(
	req: Request,
	res: Response,
): Promise<Response> {
	try {
		const dayRoutineToUpdate = req.body;
		const updatedRoutine = await updateDayRoutine(dayRoutineToUpdate);
		return res.status(200).json({ success: true, dayRoutine: updatedRoutine });
	} catch (error) {
		return res.status(500).json(error);
	}
}

export async function DeleteDayRoutine(
	req: Request,
	res: Response,
): Promise<Response> {
	try {
		const { id } = req.params;
		const deleted = await deleteDayRoutine(id);
		return res.status(200).json({ success: deleted });
	} catch (error) {
		return res.status(500).json(error);
	}
}

export async function DeleteWeekRoutine(
	req: Request,
	res: Response,
): Promise<Response> {
	try {
		const { id } = req.params;
		const deleted = await deleteWeekRoutine(id);
		return res.status(200).json({ success: deleted });
	} catch (error) {
		return res.status(500).json(error);
	}
}
