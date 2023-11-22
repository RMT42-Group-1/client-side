import Leaderboard from './Leaderboard';
import MainRoom from './MainRoom';
import Room from './Room';

const Home = () => {
	return (
		<div className="w-full h-screen flex ">
			{/* <MainRoom /> */}
			<Room />
			<Leaderboard />
		</div>
	);
};

export default Home;
