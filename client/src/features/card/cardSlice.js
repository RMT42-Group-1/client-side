import { createSlice } from '@reduxjs/toolkit';
// import { fetchLeaderboardApi } from './actions';
import cardsJson from './cards.json';

const initialState = {
	list: [...cardsJson, ...cardsJson],
};

export const cardSlice = createSlice({
	name: 'card',
	initialState,
	reducers: {
		setCards: (state, action) => {
			state.list = action.payload;
		},
		setFront: (state, action) => {
			// const newArr = [...state.list];
			// newArr[action.payload.index].front = action.payload.front;
			// state.list = newArr;
			// console.log(state.list, newArr, 'slice');

			// state.list[action.payload.index].front = action.front;

			const { index, front } = action.payload;
			state.list = [
				...state.list.slice(0, index),
				{ ...state.list[index], front },
				...state.list.slice(index + 1),
			];
			console.log('slice', state.list);
		},
	},
});

export const { setCards, setFront } = cardSlice.actions;
export default cardSlice.reducer;
