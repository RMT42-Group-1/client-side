import { configureStore } from '@reduxjs/toolkit';
import leaderboardReducer from './features/leaderboard/leaderboardSlice';
import userSlice from './features/user/userSlice';
import cardSlice from './features/card/cardSlice';
import gameSlice from './features/game/gameSlice';

export const store = configureStore({
	reducer: {
		leaderboard: leaderboardReducer,
		user: userSlice,
		card: cardSlice,
		game: gameSlice,
	},
});
