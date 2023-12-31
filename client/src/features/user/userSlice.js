import { createSlice } from '@reduxjs/toolkit';
import { loginApi } from './actions';

const initialState = {
	profile: {
		id: 1,
		email: 'jack@gmail.com',
		imageUrl: 'https://i.imgur.com/4gaSugI.jpg',
		username: 'Jack',
	},
	// profile: {
	// 	id: '',
	// 	username: '',
	// 	email: '',
	// 	photoUrl: '',
	// },
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUser: (state, action) => {
			state.profile = action.payload;
		},
	},
});

export const { setUser } = userSlice.actions;

export const login = (userData) => {
	return async (dispatch) => {
		const data = await loginApi(userData);
		console.log("Received User Data", data)
		localStorage.setItem('access_token', data.access_token);
		console.log(data.profile);
		dispatch(setUser(data.profile));
	};
};
export default userSlice.reducer;
