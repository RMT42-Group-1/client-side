import api from '../../api';

export const registerApi = async (data) => {
	await api.post('/register', data);
	return;
};

export const loginApi = async (data) => {
	const response = await api.post('/login', data);
	console.log(response.data)
	return response.data;
};
