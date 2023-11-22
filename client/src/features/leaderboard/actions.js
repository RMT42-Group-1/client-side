import api from '../../api';

export const fetchLeaderboardApi = async () => {
	const { data } = await api.get('/scores', {
		headers: {
			Authorization: `Bearer ${localStorage.getItem('access_token')}`,
		},
	});
	return data;
};
