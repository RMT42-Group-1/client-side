import { createBrowserRouter, redirect } from 'react-router-dom';
import Register from '../pages/Register';
import Login from '../pages/Login';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import Game from '../pages/Game';

const router = createBrowserRouter([
	{
		path: '/',
		element: <MainLayout />,
		loader: () => {
			return localStorage.getItem('access_token') ? null : redirect('/login');
		},
		children: [
			{
				path: '',
				element: <Home />,
			},
		],
	},
	{
		path: '/game',
		element: <Game />,
		loader: () => {
			return localStorage.getItem('access_token') ? null : redirect('/login');
		},
	},
	{
		path: '/register',
		element: <Register />,
	},
	{
		path: '/login',
		element: <Login />,
	},
]);

export default router;
