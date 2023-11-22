import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './router';

import { useContext, useEffect } from 'react';
import { SocketContext } from './context/socket.jsx';

function App() {
	const { socket } = useContext(SocketContext);

	useEffect(() => {
		console.log('SERVER CONNECTED', socket);
	}, []);

	useEffect(() => {
		if (socket) {
			socket.on('SOCKETUS', (payload) => {
				console.log(payload);
			});
		}
	}, [socket]);

	return <RouterProvider router={router} />;
}

export default App;
