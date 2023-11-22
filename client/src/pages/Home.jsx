import { useState } from 'react';
import Leaderboard from './Leaderboard';
import MainRoom from './MainRoom';
import Room from './Room';

const Home = () => {
	const [roomPage, setRoomPage] = useState('mainRoom');

	return (
		<div className="w-full h-screen flex ">
			{roomPage === 'mainRoom' ? (
				<MainRoom setRoomPage={setRoomPage} />
			) : (
				<Room />
			)}
			<Leaderboard />
		</div>
	);
};

export default Home;
