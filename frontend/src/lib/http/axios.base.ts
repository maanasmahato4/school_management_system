import axios from 'axios';

const BASE_URL = 'http://localhost:3000/api/v1';

export const publicHttpRequest = axios.create({
	baseURL: BASE_URL,
});

export const privateHttpRequest = axios.create({
	baseURL: BASE_URL
});
