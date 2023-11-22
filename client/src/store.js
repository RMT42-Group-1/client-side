import { configureStore } from '@reduxjs/toolkit';
import leaderboardReducer from './features/leaderboard/leaderboardSlice';
import userSlice from './features/user/userSlice';

export const store = configureStore({
	reducer: {
		leaderboard: leaderboardReducer,
		user: userSlice,
	},
});
