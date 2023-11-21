import { createBrowserRouter } from 'react-router-dom';
import Register from '../pages/Register';
import Login from '../pages/Login';

const router = createBrowserRouter([
	{
		path: '/',
		element: <div>Home</div>,
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
