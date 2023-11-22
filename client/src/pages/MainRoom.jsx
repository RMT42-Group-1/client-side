import { useState } from 'react';

const MainRoom = () => {
	const [roomCreate, setRoomCreate] = useState('');
	const [roomJoin, setRoomJoin] = useState('');

	return (
		<div className="main w-1/2 flex flex-col justify-center items-center bg-indigo-400">
			<div className="create-room w-1/2 h-full flex flex-col justify-center items-center">
				{/* main room */}
				<div className="w-full flex flex-col justify-center items-center gap-4 border rounded-2xl p-6 bg-slate-100/90 backdrop-blur-sm hover:shadow-xl hover:shadow-indigo-600 shadow-md shadow-indigo-800">
					<div className="text-4xl font-bold text-indigo-800 mb-4">Room</div>
					<form className="w-full flex gap-2">
						<input
							className="w-2/3 py-2 px-3 rounded-xl text-slate-100 bg-indigo-400 placeholder-indigo-200 shadow-inner shadow-indigo-800"
							type="text"
							placeholder="jack"
							value={roomCreate}
							onChange={(e) => setRoomCreate(e.target.value)}
						/>
						<input
							type="submit"
							value="Create"
							className="py-2 px-4 w-1/3 bg-indigo-600 rounded-xl text-slate-100 cursor-pointer font-bold hover:shadow-xl hover:shadow-indigo-600 hover:scale-105 active:scale-90"
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
							type="submit"
							value="Join"
							className="py-2 px-4 w-1/3 bg-indigo-600 rounded-xl text-slate-100 cursor-pointer font-bold hover:shadow-xl hover:shadow-indigo-600 hover:scale-105 active:scale-90"
						/>
					</form>
				</div>
			</div>
		</div>
	);
};

export default MainRoom;
