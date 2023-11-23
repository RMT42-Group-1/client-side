import { createContext } from 'react';
import { io } from 'socket.io-client';
import PropTypes from 'prop-types';

export const SocketContext = createContext();

export const SocketContextProvider = ({ children }) => {
	return (
		<SocketContext.Provider value={{ socket: io('http://localhost:3000') }}>
			{children}
		</SocketContext.Provider>
	);
};

SocketContextProvider.propTypes = {
	children: PropTypes.any,
};
