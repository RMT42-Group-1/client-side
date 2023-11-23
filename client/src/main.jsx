import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { store } from './store.js';
import { Provider } from 'react-redux';
import { SocketContextProvider } from './context/socket.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
	<SocketContextProvider>
		<React.StrictMode>
			<Provider store={store}>
				<App />
			</Provider>
		</React.StrictMode>
	</SocketContextProvider>
);
