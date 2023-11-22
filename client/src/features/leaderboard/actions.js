import api from '../../api';

export const fetchLeaderboardApi = async () => {
	const { data } = await api.get('/scores', {
		headers: {
			Authorization: localStorage.getItem('access_token'),
		},
	});
	return data;
};
