import { createSlice } from '@reduxjs/toolkit';
import { loginApi } from './actions';

const initialState = {
	profile: {
		id: '',
		username: '',
		email: '',
		photoUrl: '',
	},
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
		localStorage.setItem('access_token', data.access_token);
		console.log(data);
		dispatch(setUser(data.profile));
	};
};
export default userSlice.reducer;
