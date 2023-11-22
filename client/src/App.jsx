import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './router';

import { useContext, useEffect } from 'react';
import socketContext from "./context/socket.jsx"

function App() {
	const socket = useContext(socketContext)

	useEffect(() => {
		console.log("SERVER CONNECTED", socket)
	}, [])

	useEffect(() => {
		if(socket) {
			socket.on("SOCKETUS", (payload) => {
				console.log(payload)
			})

			return () => {
				socket.disconnect()
			}
		}
	}, [socket])

	return <RouterProvider router={router} />;
}

export default App;
