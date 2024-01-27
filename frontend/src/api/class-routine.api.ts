import { privateHttpRequest } from '../lib/http/axios.base';

export async function classRoutines() {
	try {
		const response = await privateHttpRequest.get('/class-routines');
		if (response.status !== 200) {
			console.error('error fetching class routine', response.data);
		}
		return response.data;
	} catch (error) {
		console.error(error);
	}
}
