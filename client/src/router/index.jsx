import { createBrowserRouter } from 'react-router-dom';
import Register from '../pages/Register';
import Login from '../pages/Login';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import Game from '../pages/Game';

const router = createBrowserRouter([
	{
		path: '/',
		element: <MainLayout />,
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
