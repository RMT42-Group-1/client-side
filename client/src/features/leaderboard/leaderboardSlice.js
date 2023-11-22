import { createSlice } from '@reduxjs/toolkit';
import api from '../../api';

const initialState = {
	list: [],
};

export const leaderboardSlice = createSlice({
	name: 'leaderboard',
	initialState,
	reducers: {
		setLeaderboard: (state, action) => {
			state.list = action.payload;
		},
	},
});

export const { setLeaderboard } = leaderboardSlice.actions;

export const fetchLeaderboard = () => {
	return async (dispatch) => {
		const { data } = await api.get('/scores');
		dispatch(setLeaderboard(data));
	};
};
export default leaderboardSlice.reducer;
