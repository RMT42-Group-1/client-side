import { useContext, useState } from 'react';
import PropTypes from 'prop-types';

import { SocketContext } from '../context/socket.jsx';

const MainRoom = ({ setRoomPage }) => {
	const [roomCreate, setRoomCreate] = useState('');
	const [roomJoin, setRoomJoin] = useState('');

	//added
	const { socket } = useContext(SocketContext);

	const handleJoinRoom = (e) => {
		e.preventDefault()
		console.log("HANDLING JOIN ROOM")
		socket.emit('JoinRoom', roomCreate);

		socket.on("joinConfirm", (payload) => {
			console.log(payload.message)
		})

		socket.on("RoomGreetings", (payload) => {
			console.log(payload.message)
		})

		setRoomPage('waitingRoom')
	};

	return (
		<div className="main w-1/2 flex flex-col justify-center items-center bg-indigo-400">
			<div className="create-room w-1/2 h-full flex flex-col justify-center items-center">
				{/* main room */}
				<div className="w-full flex flex-col justify-center items-center gap-4 border rounded-2xl p-6 bg-slate-100/90 backdrop-blur-sm hover:shadow-xl hover:shadow-indigo-600 shadow-md shadow-indigo-800">
					<div className="text-4xl font-bold text-indigo-800 mb-4">Room</div>
					<form className="w-full flex gap-2" onSubmit={handleJoinRoom}>
						<input
							className="w-2/3 py-2 px-3 rounded-xl text-slate-100 bg-indigo-400 placeholder-indigo-200 shadow-inner shadow-indigo-800"
							type="text"
							placeholder="jack"
							value={roomCreate}
							onChange={(e) => setRoomCreate(e.target.value)}
						/>
						<input
							// onClick={() => setRoomPage('waitingRoom')}
							type="submit"
							value="Create"
							className="py-2 px-4 w-1/3 bg-indigo-600 rounded-xl text-slate-100 cursor-pointer font-bold hover:shadow-xl hover:shadow-indigo-600 hover:scale-105 active:scale-90 transition-all"
						/>
					</form>
					<form className="w-full flex gap-2">
						<input
							className="w-2/3 py-2 px-3 rounded-xl text-slate-100 bg-indigo-400 placeholder-indigo-200 shadow-inner shadow-indigo-800"
							type="text"
							placeholder="sparrow"
							value={roomJoin}
							onChange={(e) => setRoomJoin(e.target.value)}
						/>
						<input
							onClick={() => setRoomPage('waitingRoom')}
							type="submit"
							value="Join"
							className="py-2 px-4 w-1/3 bg-indigo-600 rounded-xl text-slate-100 cursor-pointer font-bold hover:shadow-xl hover:shadow-indigo-600 hover:scale-105 active:scale-90 transition-all"
						/>
					</form>
				</div>
			</div>
		</div>
	);
};

export default MainRoom;

MainRoom.propTypes = {
	setRoomPage: PropTypes.func,
};
