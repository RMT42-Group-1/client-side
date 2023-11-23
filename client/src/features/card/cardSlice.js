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
			const { index, front } = action.payload;
			state.list = [
				...state.list.slice(0, index),
				{ ...state.list[index], front },
				...state.list.slice(index + 1),
			];
			// console.log('slice', state.list);
		},
		setBackCards: (state, action) => {
			// const { firstCard, secondCard } = action.payload;
			const { index1, index2 } = action.payload;
			// console.log(firstCard, secondCard);
			// const index1 = state.list.findIndex((data) => data.name === firstCard);
			// const index2 = state.list.findIndex((data) => data.name === secondCard);
			console.log(index1, index2);
			const firstArr = [
				...state.list.slice(0, index1),
				{ ...state.list[index1], front: false },
				...state.list.slice(index1 + 1),
			];
			const secondArr = [
				...firstArr.slice(0, index2),
				{ ...firstArr[index2], front: false },
				...firstArr.slice(index2 + 1),
			];
			state.list = secondArr;
		},
	},
});

export const { setCards, setFront, setBackCards } = cardSlice.actions;
export default cardSlice.reducer;
