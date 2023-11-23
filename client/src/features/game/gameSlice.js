import { createSlice } from '@reduxjs/toolkit';
import usersJson from './users.json';

const initialState = {
	users: [...usersJson],
	// firstCard: {
	// 	idx: '',
	// 	name: '',
	// },
	// secondCard: {
	// 	idx: '',
	// 	name: '',
	// },
};

export const gameSlice = createSlice({
	name: 'game',
	initialState,
	reducers: {
		setPoint: (state, action) => {
			const { id } = action.payload;
			// console.log('id user', id);
			// console.log('trigererrrrrrr');
			const index = state.users.findIndex((data) => data.id === id);
			// console.log(index);
			state.users = [
				...state.users.slice(0, index),
				{ ...state.users[index], point: state.users[index].point + 1 },
				...state.users.slice(index + 1),
			];
			console.log('slice users', state.users);
		},
		setUsers: (state, action) => {
			state.users = action.payload;
		},
		// setFirstCard: (state, action) => {
		// 	console.log(action.payload, 'setFirstCard');
		// 	state.firstCard = action.payload;
		// },
		// setSecondCard: (state, action) => {
		// 	state.secondCard = action.payload;
		// },
		// setNullCard: (state) => {
		// 	state.firstCard = {
		// 		idx: '',
		// 		name: '',
		// 	};
		// 	state.secondCard = {
		// 		idx: '',
		// 		name: '',
		// 	};
		// },
	},
});

export const { setPoint, setUsers, setFirstCard, setSecondCard, setNullCard } =
	gameSlice.actions;
export default gameSlice.reducer;
